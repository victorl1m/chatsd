<?php

namespace LiveHelperChatExtension\lhcmsauth\providers\MSOAuth;

/* auth.php Azure AD oAuth Class
 *
 * Katy Nicholson, last updated 17/11/2021
 *
 * https://github.com/CoasterKaty
 * https://katytech.blog/
 * https://twitter.com/coaster_katy
 *
 */

class modAuth
{
    var $modDB;
    var $Token;
    var $userData;
    var $userName;
    var $oAuthVerifier;
    var $oAuthChallenge;
    var $oAuthChallengeMethod;
    var $userRoles;
    var $isLoggedIn;
    var $oAuth;
    var $settings = null;

    function __construct()
    {
        $this->scope = 'openid%20offline_access%20profile%20user.read';
        $gSettings = \erLhcoreClassModelChatConfig::fetch('msauth_options');
        $this->settings = (array)$gSettings->data;
        $this->oAuth = new \LiveHelperChatExtension\lhcmsauth\providers\MSOAuth\modOAuth();
    }

    public function loginAction()
    {
        $this->oAuthChallenge();

        // Generate a session key and store in cookie, then populate database
        $sessionKey = $this->uuid();
        $_SESSION['sessionkey'] = $sessionKey;

        if (\erLhcoreClassUser::instance()->isLogged()) {
            $sessionData = \erLhcoreClassModelMSAuth::findOne(['filter' => ['user_id' => \erLhcoreClassUser::instance()->getUserID()]]);
        }

        if (!($sessionData instanceof \erLhcoreClassModelMSAuth)){
            $sessionData = \erLhcoreClassModelMSAuth::findOne(['filter' => ['txtSessionKey' => $sessionKey]]);
        }

        if (!($sessionData instanceof \erLhcoreClassModelMSAuth)) {
            $sessionData = new \erLhcoreClassModelMSAuth();
        }

        $sessionData->txtSessionKey = $sessionKey;
        $sessionData->txtCodeVerifier = $this->oAuthVerifier;
        $sessionData->dtExpires = date('Y-m-d H:i:s', strtotime('+5 minutes'));
        $sessionData->saveThis();

        if (\erLhcoreClassUser::instance()->isLogged()) {
            $sessionData->user_id = \erLhcoreClassUser::instance()->getUserID();
            $sessionData->updateThis(['update' => ['user_id']]);
        }

        // Redirect to Azure AD login page
        $oAuthURL = 'https://login.microsoftonline.com/' . $this->settings['ms_tenant_id'] . '/oauth2/v2.0/' . 'authorize?response_type=code&client_id=' . $this->settings['ms_client_id'] . '&redirect_uri=' . urlencode(\erLhcoreClassXMP::getBaseHost() . $_SERVER['HTTP_HOST'] . \erLhcoreClassDesign::baseurl('msoauth/oauth') ) . '&scope=' .  $this->scope . '&code_challenge=' . $this->oAuthChallenge . '&code_challenge_method=' . $this->oAuthChallengeMethod;
        header('Location: ' . $oAuthURL);
        exit;
    }

    function uuid()
    {
        //uuid function is not my code, but unsure who the original author is. KN
        //uuid version 4
        return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            // 32 bits for "time_low"
            mt_rand(0, 0xffff), mt_rand(0, 0xffff),
            // 16 bits for "time_mid"
            mt_rand(0, 0xffff),
            // 16 bits for "time_hi_and_version",
            // four most significant bits holds version number 4
            mt_rand(0, 0x0fff) | 0x4000,
            // 16 bits, 8 bits for "clk_seq_hi_res",
            // 8 bits for "clk_seq_low",
            // two most significant bits holds zero and one for variant DCE1.1
            mt_rand(0, 0x3fff) | 0x8000,
            // 48 bits for "node"
            mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
        );
    }

    function oAuthChallenge()
    {
        // Function to generate code verifier and code challenge for oAuth login. See RFC7636 for details. 
        $verifier = $this->oAuthVerifier;
        if (!$this->oAuthVerifier) {
            $chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-._~';
            $charLen = strlen($chars) - 1;
            $verifier = '';
            for ($i = 0; $i < 128; $i++) {
                $verifier .= $chars[mt_rand(0, $charLen)];
            }
            $this->oAuthVerifier = $verifier;
        }
        // Challenge = Base64 Url Encode ( SHA256 ( Verifier ) )
        // Pack (H) to convert 64 char hash into 32 byte hex
        // As there is no B64UrlEncode we use strtr to swap +/ for -_ and then strip off the =
        $this->oAuthChallenge = str_replace('=', '', strtr(base64_encode(pack('H*', hash('sha256', $verifier))), '+/', '-_'));
        $this->oAuthChallengeMethod = 'S256';
    }
}

?>
