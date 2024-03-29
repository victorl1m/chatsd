<?php include(erLhcoreClassDesign::designtpl('lhchat/startchat_pre.tpl.php'));?>
<?php if ($chat_startchat_enabled == true) : ?>

<?php if ($disabled_department === true) : ?>

<h4><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Department is disabled');?></h4>

<?php elseif (isset($department_invalid) && $department_invalid === true) : ?>

<?php $errors[] = erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Please provide a department');?>
<?php include(erLhcoreClassDesign::designtpl('lhkernel/validation_error.tpl.php'));?>

<?php else : ?>

<?php include(erLhcoreClassDesign::designtpl('lhchat/getstatus/widget_geo_adjustment.tpl.php'));?>
<?php if ($exitTemplate == true) return; ?>

<?php if (isset($errors['blocked_user'])) : ?>
        <?php include(erLhcoreClassDesign::designtpl('lhkernel/blocked_user_startchat.tpl.php'));?>
<?php elseif (isset($errors)) : ?>
		<?php include(erLhcoreClassDesign::designtpl('lhkernel/validation_error.tpl.php'));?>
<?php endif; ?>

    <?php $isOnlineGeneral = erLhcoreClassChat::isOnline($department,false,array('ignore_user_status'=> (int)erLhcoreClassModelChatConfig::fetch('ignore_user_status')->current_value, 'online_timeout' => (int)erLhcoreClassModelChatConfig::fetch('sync_sound_settings')->data['online_timeout'])); ?>

<?php if ($leaveamessage == false || ($forceoffline === false && $isOnlineGeneral === true)) : ?>

<?php if ($isOnlineGeneral === false) : ?>
          <?php include(erLhcoreClassDesign::designtpl('lhchat/chat_not_available.tpl.php'));?>
<?php else : ?>

<?php
    $onlyBotOnline = erLhcoreClassChat::isOnlyBotOnline($department);
?>

<?php if (isset($theme) && $theme !== false && isset($theme->bot_configuration_array['custom_html']) && !empty($theme->bot_configuration_array['custom_html']) && $onlyBotOnline == false) : ?>
    <?php echo $theme->bot_configuration_array['custom_html']?>
<?php elseif (isset($theme) && $theme !== false && isset($theme->bot_configuration_array['custom_html_bot']) && !empty($theme->bot_configuration_array['custom_html_bot']) && $onlyBotOnline == true) : ?>
    <?php echo $theme->bot_configuration_array['custom_html_bot']?>
<?php elseif (isset($theme) && $theme !== false && isset($theme->bot_configuration_array['trigger_id']) && !empty($theme->bot_configuration_array['trigger_id']) && $theme->bot_configuration_array['trigger_id'] > 0) :  ?>
    <?php include(erLhcoreClassDesign::designtpl('lhchat/part/render_intro.tpl.php'));?>
<?php else  : ?>
			<img width="300px" style="user-select: none; pointer-events: none;" src="<?php echo erLhcoreClassDesign::design('/images/general')?>/atendimento.png">
<?php endif;?>

<form id="form-start-chat" method="post" action="<?php echo erLhcoreClassDesign::baseurl('chat/startchat')?><?php $department !== false ? print '/(department)/'.$department : ''?><?php $input_data->priority !== false ? print '/(priority)/'.$input_data->priority : ''?><?php $input_data->vid !== false ? print '/(vid)/'.htmlspecialchars($input_data->vid) : ''?><?php $input_data->hash_resume !== false ? print '/(hash_resume)/'.htmlspecialchars($input_data->hash_resume) : ''?><?php echo $append_mode_theme?>" onsubmit="return lhinst.addCaptcha('<?php echo time()?>',$(this))">

<?php $formResubmitId = 'form-start-chat'; ?>
<?php include(erLhcoreClassDesign::designtpl('lhchat/part/auto_resubmit.tpl.php'));?>

<input type="hidden" name="onlyBotOnline" value="<?php echo $onlyBotOnline == true ? 1 : 0?>">

<?php
// Initialize settings.ini.php from settings/
$cfgSite = erConfigClassLhConfig::getInstance();

// Initialization of variables
$clientID = $cfgSite->getSetting( 'site', 'msauth_client' );
$tenantID = $cfgSite->getSetting( 'site', 'msauth_tenant' );
$secret = $cfgSite->getSetting( 'site', 'msauth_secret' );
$redirectURI = $cfgSite->getSetting( 'site', 'msauth_redirect' );
$scope = $cfgSite->getSetting( 'site', 'msauth_scope' );
$login_url ="https://login.microsoftonline.com/".$tenantID."/oauth2/v2.0/authorize";

// Get current url and the endpoint to redirect
$currentUrl = $_SERVER['REQUEST_URI'];
$endpoint = "/startchat";

// Initialize user info with null values
$displayName = $mail = $mobilePhone = $userPrincipalName = $id = null;


// Reset session variables
unset($_SESSION['redirected_to_login']);
unset($_SESSION['token']);
unset($_SESSION['state']);

// Create action in http url to redirect to login page
if ($_GET['action'] == 'login'){
	$_SESSION['redirected_to_login'] = true;
   $params = array (
    'client_id' =>$clientID,
    'redirect_uri' =>$redirectURI,
    'response_type' =>'token',
    'response_mode' =>'form_post',
    'scope' =>$scope,
    'state' =>$_SESSION['state']);

   header ('Location: '.$login_url.'?'.http_build_query ($params));
}

// Check if user is logged in, if not, redirect
if (array_key_exists ('access_token', $_POST)){
   $_SESSION['token'] = $_POST['access_token'];
   $accessToken = $_SESSION['token'];

   $curl = curl_init ();
   curl_setopt ($curl, CURLOPT_HTTPHEADER, array ('Authorization: Bearer '.$accessToken, 'Content-type: application/json'));

   curl_setopt ($curl, CURLOPT_URL, "https://graph.microsoft.com/v1.0/me/");
   curl_setopt ($curl, CURLOPT_RETURNTRANSFER, 1);

   $response = json_decode (curl_exec ($curl), 1);

   // Dump errors
   if (array_key_exists ('error', $response)){  
      var_dump ($response['error']);    
      die();
    }
}

// Only redirect if is in /startchat endpoint
// Check the url of the user, to redirect one time only, when access token is not set (fix of too_many_redirects)
 if (strpos($currentUrl, $endpoint) === false) {
     if (empty($_SESSION['token']) && !isset($_SESSION['redirected_to_login'])) {
         $_SESSION['redirected_to_login'] = true;
         header('Location: '.$_SERVER['PHP_SELF'].'?action=login');
         exit;
     } else {
         unset($_SESSION['redirected_to_login']);
     }
 }

 // Get info from object response and separate in variables
foreach ($response as $info => $value) {
    switch ($info) {
        case 'displayName':
            $displayName = $value;
            break;
        case 'mail':
            $mail = $value;
            break;
        case 'mobilePhone':
            $mobilePhone = $value;
            break;
        case 'userPrincipalName':
            $userPrincipalName = $value;
            break;
        case 'id':
            $id = $value;
            break;
        default:
        break;
    }
}

// If the important info is null or empty redirect to login page to get updated info
 if (empty($displayName) && !isset($_SESSION['redirected_to_login'])) {
     $_SESSION['redirected_to_login'] = true;
     header('Location: '.$_SERVER['PHP_SELF'].'?action=login');
     exit;
 }
?>

<div class="d-none">
    <?php if (isset($start_data_fields['name_visible_in_popup']) && $start_data_fields['name_visible_in_popup'] == true) : ?>
        <?php if (isset($start_data_fields['name_hidden']) && $start_data_fields['name_hidden'] == true) : ?>
            <input type="hidden" name="Username" value="<?php echo htmlspecialchars($input_data->username);?>"/>
            <?php else : ?>
                <?php if (in_array('username', $input_data->hattr)) : ?>
                    <input class="form-control form-control-sm<?php if (isset($errors['nick'])) : ?> is-invalid<?php endif;?>" type="hidden" name="Username" value="<?php echo htmlspecialchars($input_data->username);?>" />
                        <?php elseif (!($onlyBotOnline == true && isset($start_data_fields['name_hidden_bot']) && $start_data_fields['name_hidden_bot'] == true)) : ?>
                            <div class="form-floating mb-3 mt-3">
                                <input id="name" maxlength="100" autofocus="autofocus" <?php if (isset($start_data_fields['name_require_option']) && $start_data_fields['name_require_option'] == 'required') : ?>aria-required="true" required<?php endif;?> aria-label="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Enter your name');?>" placeholder="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Enter your name');?>" class="startchat-input form-control form-control-sm<?php if (isset($errors['nick'])) : ?> is-invalid<?php endif;?>" type="text" name="Username" value="<?php echo $displayName?>" />
		    <label for="name" class="floating-label"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Nome');?><?php if (isset($start_data_fields['name_require_option']) && $start_data_fields['name_require_option'] == 'required') : ?><a class="anchor-required">*</a><?php endif;?></label>
		</div>
		<?php endif; ?>
	<?php endif; ?>
<?php endif; ?>

<?php if (isset($start_data_fields['email_visible_in_popup']) && $start_data_fields['email_visible_in_popup'] == true) : ?>
	<?php if (isset($start_data_fields['email_hidden']) && $start_data_fields['email_hidden'] == true) : ?>
	<input type="hidden" name="Email" value="<?php echo htmlspecialchars($input_data->email);?>" />
	<?php else : ?>
		<?php if (in_array('email', $input_data->hattr)) : ?>
			<input class="form-control" type="hidden" name="Email" value="<?php echo htmlspecialchars($input_data->email);?>" />
		<?php elseif (!($onlyBotOnline == true && isset($start_data_fields['email_hidden_bot']) && $start_data_fields['email_hidden_bot'] == true)) : ?>
		<div class="form-floating mb-3 mt-3">
			<input id="email" autofocus="autofocus" <?php if (isset($start_data_fields['email_require_option']) && $start_data_fields['email_require_option'] == 'required') : ?>aria-required="true" required<?php endif;?> aria-label="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Enter your email address')?>" placeholder="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Enter your email address')?>" class="form-control form-control-sm<?php if (isset($errors['email'])) : ?> is-invalid<?php endif;?>" type="text" name="Email" value="<?php echo htmlspecialchars($mail);?>" />
			<label for="email" class="floating-label"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','E-mail');?><?php if (isset($start_data_fields['email_require_option']) && $start_data_fields['email_require_option'] == 'required') : ?><a class="anchor-required">*</a><?php endif;?></label>
		</div>
		<?php endif; ?>
	<?php endif; ?>
<?php endif; ?>
</div>

<?php if (isset($start_data_fields['phone_visible_in_popup']) && $start_data_fields['phone_visible_in_popup'] == true) : ?>

<?php if (isset($start_data_fields['phone_hidden']) && $start_data_fields['phone_hidden'] == true) : ?>
<input type="hidden" name="Phone" value="<?php echo htmlspecialchars($input_data->phone);?>" />
<?php else : ?>
		<?php if (in_array('phone', $input_data->hattr)) : ?>
			<input class="form-control" type="hidden" name="Phone" value="<?php echo htmlspecialchars($input_data->phone);?>" />
		<?php elseif (!($onlyBotOnline == true && isset($start_data_fields['phone_hidden_bot']) && $start_data_fields['phone_hidden_bot'] == true)) : ?>
		<div class="form-floating mb-3 mt-3">
			<input id="phone" autofocus="autofocus" <?php if (isset($start_data_fields['phone_require_option']) && $start_data_fields['phone_require_option'] == 'required') : ?>aria-required="true" required<?php endif;?> aria-label="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Enter your phone')?>" placeholder="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Enter your phone')?>" class="form-control<?php if (isset($errors['phone'])) : ?> is-invalid<?php endif;?>" type="text" name="Phone" value="<?php echo $mobilePhone;?>" />
			<label for="phone" class="floating-label"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Telefone');?><?php if (isset($start_data_fields['phone_require_option']) && $start_data_fields['phone_require_option'] == 'required') : ?><a class="anchor-required">*</a><?php endif;?></label>
		</div>
		<?php endif; ?>
<?php endif; ?>

<?php endif; ?>

<?php $adminCustomFieldsMode = 'on';?>
<?php include(erLhcoreClassDesign::designtpl('lhchat/part/admin_form_variables.tpl.php'));?>

<?php if (isset($start_data_fields['message_visible_in_popup']) && $start_data_fields['message_visible_in_popup'] == true) : ?>
	<?php if (isset($start_data_fields['message_hidden']) && $start_data_fields['message_hidden'] == true) : ?>
	<textarea class="hide" placeholder="<?php if (isset($theme) && $theme !== false && isset($theme->bot_configuration_array['placeholder_message']) && !empty($theme->bot_configuration_array['placeholder_message'])) : ?><?php echo htmlspecialchars($theme->bot_configuration_array['placeholder_message']); else : ?><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Enter your message');?><?php endif;?>" name="Question"><?php echo htmlspecialchars($input_data->question);?></textarea>
	<?php elseif (!($onlyBotOnline == true && isset($start_data_fields['message_hidden_bot']) && $start_data_fields['message_hidden_bot'] == true)) : ?>
	<div class="form-group">
	   <label class="col-form-label"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Your question');?><?php if (isset($start_data_fields['message_require_option']) && $start_data_fields['message_require_option'] == 'required') : ?><a class="anchor-required">*</a><?php endif;?></label>
	   <textarea autofocus="autofocus" <?php if (isset($start_data_fields['message_require_option']) && $start_data_fields['message_require_option'] == 'required') : ?>aria-required="true" required<?php endif;?> aria-label="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Enter your message');?>" class="form-control form-control-sm<?php if (isset($errors['question'])) : ?> is-invalid<?php endif;?>" placeholder="<?php if (isset($theme) && $theme !== false && isset($theme->bot_configuration_array['placeholder_message']) && !empty($theme->bot_configuration_array['placeholder_message'])) : ?><?php echo htmlspecialchars($theme->bot_configuration_array['placeholder_message']); else : ?><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Type your message here and hit enter to send...');?><?php endif;?>" name="Question"><?php echo htmlspecialchars($input_data->question);?></textarea>
	</div>
	<?php endif; ?>
<?php endif; ?>

<?php include(erLhcoreClassDesign::designtpl('lhchat/part/user_variables.tpl.php'));?>

<?php include(erLhcoreClassDesign::designtpl('lhchat/part/user_timezone.tpl.php'));?>

<?php if ($department === false) : ?>
<?php include_once(erLhcoreClassDesign::designtpl('lhchat/part/department.tpl.php'));?>
<?php endif;?>

<?php include(erLhcoreClassDesign::designtpl('lhchat/part/product.tpl.php'));?>

<?php $tosVariable = 'tos_visible_in_popup';$tosCheckedVariable = 'tos_checked_online';?>
<?php include_once(erLhcoreClassDesign::designtpl('lhchat/part/accept_tos.tpl.php'));?>

<div class="btn-group" role="group" aria-label="...">
        <?php $startChatText = erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Solicitar atendimento');?>
        <?php if (isset($theme) && $theme !== false && isset($theme->bot_configuration_array['custom_start_button']) && !empty($theme->bot_configuration_array['custom_start_button']) && $onlyBotOnline == false) {
            $startChatText = htmlspecialchars($theme->bot_configuration_array['custom_start_button']);
        } elseif (isset($theme) && $theme !== false && isset($theme->bot_configuration_array['custom_start_button_bot']) && !empty($theme->bot_configuration_array['custom_start_button_bot']) && $onlyBotOnline == true) {
            $startChatText = htmlspecialchars($theme->bot_configuration_array['custom_start_button_bot']);
        } ?>

        <input type="submit" class="btn-startchat" value="<?php echo $startChatText;?>" name="StartChatAction" />

  <?php include(erLhcoreClassDesign::designtpl('lhchat/startchat_button_multiinclude.tpl.php'));?>
  <?php if ( erLhcoreClassModelChatConfig::fetch('reopen_chat_enabled')->current_value == 1 && ($reopenData = erLhcoreClassChat::canReopenDirectly(array('reopen_closed' => erLhcoreClassModelChatConfig::fetch('allow_reopen_closed')->current_value))) !== false ) : ?>
  <input type="button" class="btn btn-secondary btn-sm resumechat"  value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/chatnotexists','Resume chat');?>" onclick="document.location.replace('<?php echo erLhcoreClassDesign::baseurl('chat/reopen')?>/<?php echo $reopenData['id']?>/<?php echo $reopenData['hash']?><?php if ( isset($modeAppend) && $modeAppend != '' ) : ?>/(embedmode)/embed<?php endif;?>')">
  <?php endif; ?>
</div>


<input type="hidden" value="<?php echo htmlspecialchars($referer);?>" name="URLRefer"/>
<input type="hidden" value="<?php echo htmlspecialchars($referer_site);?>" name="r" />
<input type="hidden" value="<?php echo htmlspecialchars($input_data->operator);?>" name="operator" />
<input type="hidden" value="1" name="StartChat"/>

<?php include_once(erLhcoreClassDesign::designtpl('lhchat/part/switch_to_offline.tpl.php'));?>

</form>
<?php endif; ?>

<?php else : ?>
	<h4>
	<?php if (isset($theme) && $theme !== false && $theme->noonline_operators_offline) : ?>
        <?php echo htmlspecialchars($theme->noonline_operators_offline)?>
    <?php else : ?>
	   <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','There are no online operators at the moment, please leave your message')?>
	<?php endif;?>
	</h4>
	<?php include(erLhcoreClassDesign::designtpl('lhchat/offline_form_startchat.tpl.php'));?>
	
<?php endif;?>

<?php endif;?>

<?php endif;?>
