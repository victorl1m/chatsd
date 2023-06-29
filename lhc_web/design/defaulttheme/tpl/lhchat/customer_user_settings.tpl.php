<?php 

$soundData = erLhcoreClassModelChatConfig::fetch('sync_sound_settings')->data;
$soundMessageEnabled = erLhcoreClassModelUserSetting::getSetting('chat_message',(int)($soundData['new_message_sound_user_enabled']),-1); ?>

	<div class="d-flex flex-row startchat-width">
			<div class="btn-group dropup disable-select flex-user-settings">
				<i style="color: #c4da53 !important;" class="material-icons settings text-muted" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">settings</i>
				<!-- <?php include_once(erLhcoreClassDesign::designtpl('pagelayouts/parts/close_popup.tpl.php'));?> -->
				<div class="dropdown-menu shadow bg-white rounded">
					<div class="d-flex flex-row">
						 <?php include(erLhcoreClassDesign::designtpl('lhchat/customer_user_settings_multiinclude.tpl.php'));?>
						 <?php include(erLhcoreClassDesign::designtpl('lhchat/customer_user_settings/option_sound.tpl.php'));?>
						 <?php if (isset($chat)) : ?>
							 <?php include(erLhcoreClassDesign::designtpl('lhchat/customer_user_settings/notifications.tpl.php'));?>
							 <?php if ((int)erLhcoreClassModelChatConfig::fetch('disable_print')->current_value == 0) : ?>
								  <?php include(erLhcoreClassDesign::designtpl('lhchat/customer_user_settings/option_print.tpl.php'));?>
							 <?php endif;?>
							 <?php if ((int)erLhcoreClassModelChatConfig::fetch('disable_send')->current_value == 0) : ?>
								  <?php include(erLhcoreClassDesign::designtpl('lhchat/customer_user_settings/option_transcript.tpl.php'));?>
							 <?php endif;?>
							 <?php include(erLhcoreClassDesign::designtpl('lhchat/customer_user_settings/user_file_upload.tpl.php'));?>
							 <?php include(erLhcoreClassDesign::designtpl('lhchat/customer_user_settings/smile.tpl.php'));?>
							 <?php if ((int)erLhcoreClassModelChatConfig::fetch('hide_button_dropdown')->current_value == 0 && isset($chat_widget_mode) && $chat_widget_mode == true) : ?>
								  <?php include(erLhcoreClassDesign::designtpl('lhchat/customer_user_settings/option_close.tpl.php'));?>
							 <?php endif;?>
						 <?php endif; ?>
						 <?php include(erLhcoreClassDesign::designtpl('lhchat/customer_user_settings/option_last_multiinclude.tpl.php'));?>
					</div>
				</div>
			</div>

		<div class="w-100">
			<textarea class="startchat-textarea" rows="1" cols="120" aria-required="true" required name="ChatMessage"  aria-label="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchat','Digite sua mensagem aqui...'); ?>"  placeholder="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/chat','Digite sua mensagem aqui...'); ?>" id="CSChatMessage"></textarea>
		</div>
		<div class="disable-select">
			<?php include(erLhcoreClassDesign::designtpl('lhchat/part/above_text_area_user.tpl.php')); ?>
		</div>
  </div>


<?php

$chatUploadEnabled = false;

if (isset($chat)) {
    $chatVariables = $chat->chat_variables_array;
    if (isset($chatVariables['lhc_fu']) && $chatVariables['lhc_fu'] == 1) {
        $chatUploadEnabled = true;
    }
}

if ( (isset($chat) && isset($fileData['active_user_upload']) && $fileData['active_user_upload'] == true) || $chatUploadEnabled == true) : ?>
<script>
lhinst.addFileUserUpload({ft_msg:'<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('files/files','Not an accepted file type')?>',fs_msg:'<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('files/files','Filesize is too big')?>',hash:'<?php echo $chat->hash?>',chat_id:'<?php echo $chat->id?>',fs:<?php echo $fileData['fs_max']*1024?>,ft_us:/(\.|\/)(<?php echo $fileData['ft_us']?>)$/i});
</script>
<?php endif;?>