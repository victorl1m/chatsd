    <?php if ($chat->pnd_time != $chat->time && $chat->pnd_time > 0) : ?>
        <div>
        <a title="Atendimento solicitado" class="timer-info"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','Solicitado')?> - </a> <?php echo $chat->pnd_time_front?>
        </div>
    <?php endif; ?>

    <?php if ($chat->cls_time > 0 && $chat->status == erLhcoreClassModelChat::STATUS_CLOSED_CHAT) : ?>
        <div>
            <a title="Atendimento encerrado" class="timer-info"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','Encerrado')?></a> - <?php echo $chat->cls_time_front?>
        </div>
    <?php endif; ?>