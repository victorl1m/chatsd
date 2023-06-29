<?php if (isset($orderInformation['chat_duration']['enabled']) && $orderInformation['chat_duration']['enabled'] == true) : ?>
    <div>
        <a title="Duração do atendimento" class="timer-info"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','Duração')?> - </a><span id="chat-duration-<?php echo $chat->id?>"><?php echo $chat->chat_duration_front?></span>
    </div>
<?php endif; ?>