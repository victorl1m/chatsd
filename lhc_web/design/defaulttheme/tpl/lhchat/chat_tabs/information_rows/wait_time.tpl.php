<?php if (isset($orderInformation['wait_time']['enabled']) && $orderInformation['wait_time']['enabled'] == true && $chat->wait_time > 0) : ?>
<div>
    <a title="Aguardou analista" class="timer-info"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','Waited')?> - </a><?php echo $chat->wait_time_front?>
</div>
<?php endif; ?>