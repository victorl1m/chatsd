<input type="button" class="btn btn-secondary btn-sm"  value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/chatnotexists','Resume chat');?>" onclick="document.location.replace('<?php echo erLhcoreClassDesign::baseurl('chat/reopen')?>/<?php echo $reopenData['id']?>/<?php echo $reopenData['hash']?>/(mode)/widget<?php if ( isset($append_mode) && $append_mode != '' ) : ?>/(embedmode)/embed<?php endif;?>')">