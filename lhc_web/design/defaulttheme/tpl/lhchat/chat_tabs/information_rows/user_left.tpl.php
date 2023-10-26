<?php if (isset($orderInformation['user_left']['enabled']) && $orderInformation['user_left']['enabled'] == true && $chat->user_closed_ts > 0 && $chat->user_status == 1) : ?>
<div>
    <a title="Encerrou de forma inesperada" class="timer-info"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','Abandonou')?> -</a> <?php echo $chat->user_closed_ts_front?>
</div>
<?php endif;?>