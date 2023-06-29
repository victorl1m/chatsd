<?php if (erLhcoreClassChat::hasAccessToRead($chat)) : ?>
    <?php include(erLhcoreClassDesign::designtpl('lhchat/syncadmin.tpl.php'));?>
<?php else : ?>
    <div class="alert alert-light my-3 bg-light" role="alert">
        <span class="material-icons">lock</span><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/loadprevious','As mensagens do atendimento anterior estão ocultas. Você não tem permissão.')?> - <?php echo $chat->time_created_front?></span>
    </div>
<?php endif; ?>

<?php if ($initial == true) : ?>
    <div class="alert alert-info my-3" role="alert" style="padding:5px" id="scroll-to-chat-<?php echo $chat->id?>-<?php echo $message_start?>">
        <p class="mb-0 text-center">
            <?php if (isset($chat) && isset($chat_id_messages) && is_object($chat) && $chat_id_messages == $chat->id) : ?>
                <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/loadprevious','Continuação do atendimento')?></span>
            <?php else : ?>
                <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/loadprevious','Fim do atendimento anterior')?> - <?php echo $chat->time_created_front?></span>
            <?php endif; ?>
        </p>
    </div>
<?php elseif (isset($chat) && isset($chat_history) && is_object($chat) && is_object($chat_history) && $chat->id != $chat_history->id ) : ?>
    <?php if ($message_start == 0) : ?>
    <div class="alert alert-info my-3" role="alert" style="padding:5px" id="scroll-to-chat-<?php echo $chat->id?>-<?php echo $message_start?>">
        <p class="mb-0 text-center"><b>
                <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/loadprevious','Fim do atendimento anterior')?> - <?php echo $chat->time_created_front?></span>
            </b>
        </p>
    </div>
    <?php endif; ?>
<?php elseif (isset($chat) && is_object($chat) && $message_start == 0) : ?>
    <div class="alert alert-info my-3" role="alert" style="padding:5px" id="scroll-to-chat-<?php echo $chat->id?>-<?php echo $message_start?>">
        <p class="mb-0 text-center"><b>
                <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/loadprevious','Fim do atendimento anterior')?> - <?php echo $chat->time_created_front?>
            </b>
        </p>
    </div>
<?php endif; ?>