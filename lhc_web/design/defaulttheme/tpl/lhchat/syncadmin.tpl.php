<?php include(erLhcoreClassDesign::designtpl('lhchat/lists/chat_nick_override_multiinclude.tpl.php'));?>
<?php if ($chat->status != erLhcoreClassModelChat::STATUS_CHATBOX_CHAT) :

    $lastOperatorChanged = false;
    $lastOperatorId = false;
    $lastOperatorNick = '';

    foreach ($messages as $msg) :
    
        if ($lastOperatorId !== false && ($lastOperatorId != $msg['user_id'] || $lastOperatorNick != $msg['name_support'])) {
            $lastOperatorChanged = true;
        } else {
            $lastOperatorChanged = false;
        }
        
        $lastOperatorId = $msg['user_id'];
        $lastOperatorNick = $msg['name_support'];

        $otherOperator = $msg['user_id'] == -2 || (isset($current_user_id) && $msg['user_id'] > 0 && $msg['user_id'] != $current_user_id);

        if ($msg['meta_msg'] != '') {
            $metaMessageData = json_decode($msg['meta_msg'], true); $messageId = $msg['id'];
        } else if (isset($metaMessageData)) {
            unset($metaMessageData);
        }
        
        // We skip render only if message is empty and it's not one of the supported admin meta messages
        if ($msg['msg'] == '' &&
            (!isset($metaMessageData['content']['text_conditional'])) &&
            (!isset($metaMessageData['content']['chat_operation'])) &&
            (!isset($metaMessageData['content']['extension'])) &&
            (!isset($metaMessageData['content']['html']['content'])) &&
            (!isset($metaMessageData['content']['button_message']))) {
            continue;
        }

if ($msg['user_id'] == -1) : ?>
<div class="message-row system-response" id="msg-<?php echo $msg['id']?>" title="<?php echo erLhcoreClassChat::formatDate($msg['time']);?>">
    <span class="usr-tit sys-tit"><i><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmin','System assistant')?></i><span class="msg-date text-white ps-2 fw-normal"><?php echo erLhcoreClassChat::formatDate($msg['time']);?></span></span>

        <?php if ($msg['msg'] != '') : ?>
            <div class="text-muted"><?php $msgBody = $msg['msg']; $paramsMessageRender = array('sender' => $msg['user_id'], 'html_as_text' => true); ?>
            <?php include(erLhcoreClassDesign::designtpl('lhchat/lists/msg_body.tpl.php'));?></div>
        <?php endif; ?>

        <?php if (isset($metaMessageData)) : ?>
            <?php include(erLhcoreClassDesign::designtpl('lhgenericbot/message/meta_render_admin.tpl.php'));?>
        <?php endif; ?>
</div>
<?php else : ?>
<div class="message-row<?php echo $msg['user_id'] == 0 ? ' response' : ' message-admin'.($lastOperatorChanged == true ? ' operator-changes' : '') ?><?php echo $otherOperator == true ? ' other-operator' : ''?><?php if (isset($metaMessageData['content']['whisper'])) : ?> whisper-msg<?php endif;?>" data-op-id="<?php echo $msg['user_id']?>" title="<?php echo erLhcoreClassChat::formatDate($msg['time']);?>" id="msg-<?php echo $msg['id']?>">
    <span class="usr-tit <?php echo $msg['user_id'] == 0 ? ' vis-tit' : ' op-tit'?>">
        <?php echo $msg['user_id'] == 0 ? '<i class="material-icons chat-operators mi-fs15 me-0 pb-1">'.($chat->device_type == 0 ? '&#xE30A;' : ($chat->device_type == 1 ? '&#xE32C;' : '&#xE32F;')).'</i> '.htmlspecialchars(isset($lhcNickAlias) ? $lhcNickAlias : $chat->nick) : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" > <path class="accent-svg" d="M17.755 14a2.249 2.249 0 012.248 2.248v.918a2.75 2.75 0 01-.512 1.6C17.945 20.928 15.42 22 12 22c-3.422 0-5.945-1.072-7.487-3.236a2.75 2.75 0 01-.51-1.596v-.92A2.249 2.249 0 016.253 14h11.502zM12 2.003a5 5 0 110 10 5 5 0 010-10z" ></path> </svg>'.htmlspecialchars($msg['name_support']) ?>
    </span>
    <!-- <?php if ($msg['user_id'] != 0) : ?><span class="msg-date msg-date-op"><?php echo erLhcoreClassChat::formatDate($msg['time']);?></span><br/><?php endif;?> -->
    <!-- <?php if ($msg['user_id'] == 0) : ?><span class="msg-date msg-date-vi"><?php echo erLhcoreClassChat::formatDate($msg['time']);?></span><br/><?php endif;?>: -->

        <?php $msgBody = $msg['msg']; $paramsMessageRender = array('sender' => $msg['user_id'], 'html_as_text' => true, 'see_sensitive_information' => (isset($see_sensitive_information) ? $see_sensitive_information : false));?>
        <?php include(erLhcoreClassDesign::designtpl('lhchat/lists/msg_body.tpl.php'));?>

        <?php if (isset($metaMessageData)) : ?>
            <?php include(erLhcoreClassDesign::designtpl('lhgenericbot/message/meta_render_admin.tpl.php'));?>
        <?php endif; ?>

    </div>
<?php endif;?>

	<?php endforeach; ?>
<?php else : ?>
	<?php foreach ($messages as $msg ) : ?>
<div class="message-row<?php echo $msg['user_id'] == 0 ? ' response' : ' message-admin'?>" id="msg-<?php echo $msg['id']?>" title="<?php echo erLhcoreClassChat::formatDate($msg['time']);?>">
	<div class="msg-date"><?php echo erLhcoreClassChat::formatDate($msg['time']);?></div>
	<span class="usr-tit<?php echo $msg['user_id'] == 0 ? ' vis-tit' : ' op-tit'?>"><?php echo $msg['user_id'] == 0 ? htmlspecialchars($msg['name_support']) : htmlspecialchars($chat->nick) ?></span>
    <?php $msgBody = $msg['msg']; $paramsMessageRender = array('sender' => $msg['user_id'], 'html_as_text' => true, 'see_sensitive_information' => (isset($see_sensitive_information) ? $see_sensitive_information : false)); ?>
    <?php include(erLhcoreClassDesign::designtpl('lhchat/lists/msg_body.tpl.php'));?>
</div>
<?php endforeach; ?>
<?php endif;?>