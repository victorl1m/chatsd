<?php

/* oauth.php Azure AD oAuth web callback script
 *
 * Katy Nicholson, last updated 17/11/2021
 *
 * https://github.com/CoasterKaty
 * https://katytech.blog/
 * https://twitter.com/coaster_katy
 *
 */

$oAuth = new \LiveHelperChatExtension\lhcmsauth\providers\MSOAuth\modOAuth();

if (isset($_GET['error'])) {
    echo $oAuth->errorMessage($_GET['error_description']);
    exit;
}

$tOptions = erLhcoreClassModelChatConfig::fetch('msauth_options');
$data = (array)$tOptions->data;

$sessionData = erLhcoreClassModelMSAuth::findOne(['filter' => ['txtSessionKey' => $_SESSION['sessionkey']]]);

if ($sessionData) {
    // Request token from Azure AD
    $oauthRequest = $oAuth->generateRequest('grant_type=authorization_code&client_id=' . $data['ms_client_id'] . '&redirect_uri=' . urlencode(erLhcoreClassXMP::getBaseHost() . $_SERVER['HTTP_HOST'] . erLhcoreClassDesign::baseurl('msoauth/oauth') ) . '&code=' . $_GET['code'] . '&code_verifier=' . $sessionData->txtCodeVerifier);

    $response = $oAuth->postRequest('token', $oauthRequest);

    // Decode response from Azure AD. Extract JWT data from supplied access_token and id_token and update database.
    if (!$response) {
        echo $oAuth->errorMessage('Unknown error acquiring token');
        exit;
    }

    $reply = json_decode($response);

    if (isset($reply->error)) {
        echo $oAuth->errorMessage($reply->error_description);
        exit;
    }

    $idToken = base64_decode(explode('.', $reply->id_token)[1]);
    $sessionData->txtToken = $reply->access_token;
    $sessionData->txtRefreshToken = $reply->refresh_token;
    $sessionData->txtIDToken = $idToken;
    $sessionData->dtExpires = date('Y-m-d H:i:s', strtotime('+' . $reply->expires_in . ' seconds'));
    $sessionData->updateThis(['update' => ['txtToken','txtRefreshToken','txtIDToken','txtRedir','dtExpires']]);

    // Fetch user information
    $Graph = new \LiveHelperChatExtension\lhcmsauth\providers\MSOAuth\modGraph($sessionData->txtToken);

    // $photo = $Graph->getPhoto();
    $profile = $Graph->getProfile();

    $presentSession = erLhcoreClassModelMSAuth::findOne(['filtergt' => ['user_id' => 0], 'filter' => ['completed' => 1,'oauth_uid' => (string)$profile->id]]);

    if ($presentSession instanceof erLhcoreClassModelMSAuth) {
        $sessionData->removeThis();
        $sessionData->id = $presentSession->id; // Switch ID and remove old record
        $sessionData->user_id = $presentSession->user_id;
    }

    $mailPotential =  (string)$profile->mail != '' ? (string)$profile->mail :  (string)$profile->userPrincipalName;

    // Auto login enabled for first time users
    if (!erLhcoreClassUser::instance()->isLogged() && $sessionData->user_id == 0 && isset($data['ms_auto_login']) && $data['ms_auto_login'] == 1 && $mailPotential != '') {
        $userExisting = erLhcoreClassModelUser::findOne(['filter' => ['email' => $mailPotential]]);
        if ($userExisting instanceof erLhcoreClassModelUser) {
            $sessionData->user_id = $userExisting->id;
        }
    }

    $sessionData->oauth_uid = (string)$profile->id;
    $sessionData->display_name = (string)$profile->displayName;
    $sessionData->surname = (string)$profile->surname;
    $sessionData->email = $mailPotential;
    $sessionData->completed = 1;
    $sessionData->saveThis();

    // User is disabled. Remove authenticated record.
    if ($sessionData->user_id > 0 && erLhcoreClassModelUser::getCount(['filter' => ['id' => $sessionData->user_id, 'disabled' => 1]]) > 0) {
        $sessionData->removeThis();
        erLhcoreClassModule::redirect('user/login');
        exit;
    }

    if ($sessionData->user_id == 0) {
        if (erLhcoreClassUser::instance()->isLogged()) {
            $sessionData->user_id = erLhcoreClassUser::instance()->getUserID();
            $sessionData->saveThis();
            erLhcoreClassModule::redirect('user/account','#!#msoauth');
            exit;
        } else {
            erLhcoreClassModule::redirect('user/login', '?oauth_ms=' . $sessionData->id);
            exit;
        }
    } elseif (erLhcoreClassUser::instance()->isLogged()) {
        erLhcoreClassModule::redirect('/');
        exit;
    } else {
        // Login user instantly as during password change he verified his logins
        erLhcoreClassUser::instance()->setLoggedUser($sessionData->user_id);
        erLhcoreClassModule::redirect('/');
        exit;
    }

} else {
    erLhcoreClassModule::redirect('user/account','#!#msoauth');
    exit;
}

exit;
?>