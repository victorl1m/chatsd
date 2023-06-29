<?php
function identificarOperacao($enderecoIP) {
    $intervalos = array(
        // PAGSEGURO
        'PagSeguro Televendas' => array('172.21.254.1', '172.21.255.254'),
        'PagSeguro Receptivo' => array('172.21.8.1', '172.21.9.254'),
        'PagSeguro Supervisão' => array('172.21.12.1', '172.21.12.126'),
        'PagSeguro Staff' => array('172.21.14.129', '172.21.14.158'),
        'PagSeguro Televendas' => array('172.21.10.1', '172.21.11.254'),
        'PagSeguro Wi-Fi' => array('172.21.15.225', '172.21.15.238'),

        // CIELO
        'Cielo Ativo' => array('172.27.60.1', '172.27.61.254'),
        'Cielo Receptivo' => array('172.27.60.1', '172.27.61.254'),
        'Cielo' => array('172.27.60.1', '172.27.61.254'),

        // MERCADO PAGO
        'Mercado Pago' => array('10.33.106.1', '10.33.107.254'),

        // STAFF CLK
        'Staff' => array('10.33.12.1', '10.33.13.254'),
        'Staff Wi-Fi' => array('10.33.16.1', '10.33.23.254'),
        'Staff Wi-Fi (Piso 5)' => array('10.33.24.1', '10.33.24.254'),

        // STAFF SUPERVISÃO
        'Staff Supervisão' => array('10.33.165.1', '10.33.165.254'),

        // CLARO / NET
        'Claro' => array('10.64.116.1', '10.64.117.254'),
        'Claro MPLAY' => array('10.64.158.1', '10.64.158.254'),
        'NET / Black VIP' => array('10.64.96.1', '10.64.99.254'),


        // BRD
        'Bradesco1' => array('10.36.4.1', '10.36.7.254'),
        'Bradesco2' => array('10.36.22.1', '10.36.23.254'),
        'Bradesco3' => array('10.36.8.1', '10.36.15.254'),
        'Bradesco4' => array('10.36.48.1', '10.36.51.254'),
        'Bradesco Wi-Fi' => array('10.36.26.1', '10.36.26.254'),

        // GRUPOS VPN
        'GSVPN' => array('172.24.1.1', '172.24.2.253'),
        'GSVPNCORE' => array('172.24.3.1', '172.21.15.238'),
        'NETWORK' => array('172.24.4.1', '172.24.4.30'),
        'GSVPNSDN2' => array('172.24.3.1', '172.24.3.100'),
    );

    $enderecoIPNumerico = ip2long($enderecoIP);
    foreach ($intervalos as $operacao => $intervalo) {
        $inicio = ip2long($intervalo[0]);
        $fim = ip2long($intervalo[1]);

        if ($enderecoIPNumerico >= $inicio && $enderecoIPNumerico <= $fim) {
            return $operacao;
        }

        if ($operacao == 'Bradesco1' || $operacao == 'Bradesco2' || $operacao == 'Bradesco3' || $operacao == 'Bradesco4') {
            if ($enderecoIPNumerico >= $inicio && $enderecoIPNumerico <= $fim) {
                return 'Bradesco';
            }
        }
    }

    return 'Externo';

}

?>

<div class="visitor-info">
    <h1 class="visitor-chat-id"><?php echo $chat->id?> - <a class="chat-status"><?php if ($chat->status == erLhcoreClassModelChat::STATUS_BOT_CHAT) : ?><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','automatizado')?>
                    <?php elseif ($chat->status == erLhcoreClassModelChat::STATUS_ACTIVE_CHAT) : ?><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','ativo')?>
                    <?php elseif ($chat->status == erLhcoreClassModelChat::STATUS_OPERATORS_CHAT) : ?><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','analistas')?>
                    <?php elseif ($chat->status == erLhcoreClassModelChat::STATUS_CLOSED_CHAT) : ?><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','encerrado')?>
                    <?php elseif ($chat->status == erLhcoreClassModelChat::STATUS_PENDING_CHAT) : ?><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','pendente')?>
                    <?php endif; ?></a></h1>
                    <?php
                                    $enderecoIP = $chat->ip;
                                    $operacao = identificarOperacao($enderecoIP);
                                    ?>
    <div class="positive-negative">
        <i style="cursor: default" class="material-icons<?php if ($chat->fbst == 1) : ?> up-voted<?php endif;?> up-vote-action" role="button" data-id="1" onclick="lhinst.voteAction($(this))" ><?php if (isset($react) && $react === true) : ?>&#xf109;<?php else : ?>thumb_up<?php endif; ?></i>
        <img class="visitor-img" title="<?php echo $operacao ?>" src="<?php echo erLhcoreClassDesign::design('images/operations/profiles');?>/<?php echo str_replace([' ', '/', '-'], '', str_replace('ã', 'a', $operacao)); ?>.png" width="128">
        <i style="cursor: default" class="material-icons<?php if ($chat->fbst == 2) : ?> down-voted<?php endif;?> down-vote-action" role="button" data-id="2" onclick="lhinst.voteAction($(this))"><?php if (isset($react) && $react === true) : ?>&#xf108;<?php else : ?>thumb_down<?php endif; ?></i>
    </div>
    <div class="visitor-data">
        <h1 class="visitor-name"><?php echo $chat->nick?></h1>
        <a class="visitor-email" href="mailto:<?php echo $chat->email?>"><?php echo $chat->email?></a>
        <div class="ipaddr">
        <h1 class="visitor-ipaddr"><?php echo $chat->ip?></h1>
        <button title="Copiar endereço IP" onclick="copyToClipboard('<?php echo $chat->ip?>')" class="copy-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path class="accent-svg" d="M5.503 4.627L5.5 6.75v10.504a3.25 3.25 0 003.25 3.25h8.616a2.251 2.251 0 01-2.122 1.5H8.75A4.75 4.75 0 014 17.254V6.75c0-.98.627-1.815 1.503-2.123zM17.75 2A2.25 2.25 0 0120 4.25v13a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-13A2.25 2.25 0 018.75 2h9zm0 1.5h-9a.75.75 0 00-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-13a.75.75 0 00-.75-.75z"/></svg>
        </button>
        </div>
    </div>
        

    <script>
    function copyToClipboard(text) {
        var tempInput = document.createElement("input");
        tempInput.value = text;
        document.body.appendChild(tempInput);

        tempInput.select();
        tempInput.setSelectionRange(0, 99999);
        document.execCommand("copy");

        document.body.removeChild(tempInput);
    }

    function openTel(tel) {
        window.open('tel:' + '00' + tel);
    }
    </script>


    
    <div class="action-line">
        <button onclick="openTel('<?php echo $chat->phone?>')" title="Realizar chamada via 3CX" class="chat-action">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path class="accent-svg" d="M17.715 15.952A2.205 2.205 0 0117.152 14h-10.9a2.249 2.249 0 00-2.248 2.25v.92c0 .571.178 1.129.51 1.595C6.056 20.928 8.58 22 12 22c.39 0 .767-.014 1.133-.041a2.252 2.252 0 01.353-2.16l.8-1.01a2.195 2.195 0 012.238-.77l.838.203c.52-.438.83-.975.948-1.645l-.595-.625zM12 2.004a5 5 0 110 10 5 5 0 010-10zm6.192 11.99l.476-1.204c.242-.615.92-.934 1.548-.729l.431.142c.724.237 1.326.806 1.35 1.568.1 3.111-2.476 7.583-5.213 9.055-.673.362-1.468.123-2.035-.391l-.337-.305a1.253 1.253 0 01-.142-1.706l.8-1.01c.29-.366.767-.53 1.22-.42l1.292.313c1.103-.73 1.694-1.756 1.774-3.079l-.917-.964a1.203 1.203 0 01-.247-1.27z"/></svg>
        </button>
        <button onclick="return lhc.revealModal({'title' : '<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','Modify chat')?>', 'iframe':true,'height':350,'mparams':{'backdrop':false},'url':WWW_DIR_JAVASCRIPT +'chat/modifychat/<?php echo $chat->id?>/(pos)/'+$('#chat-tab-li-<?php echo $chat->id?>').index()})" title="Alterar dados do atendimento" class="chat-action">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path class="accent-svg" d="M15.891 3.048a3.578 3.578 0 115.061 5.06l-.892.893L15 3.94l.891-.892zM13.94 5.001L3.94 15a3.106 3.106 0 00-.825 1.476L2.02 21.078a.75.75 0 00.904.903l4.601-1.096a3.106 3.106 0 001.477-.825l1.151-1.151a6.5 6.5 0 017.754-7.755L19 10.06l-5.061-5.06zm-.662 8.975a2 2 0 01-1.441 2.497l-.584.144a5.727 5.727 0 00.006 1.807l.54.13a2 2 0 011.45 2.51l-.187.632c.44.386.94.699 1.485.922l.493-.52a2 2 0 012.899.001l.499.525a5.277 5.277 0 001.482-.913l-.198-.686a2 2 0 011.442-2.496l.583-.144a5.73 5.73 0 00-.006-1.808l-.54-.13a2 2 0 01-1.449-2.51l.186-.63a5.282 5.282 0 00-1.484-.923l-.493.519a2 2 0 01-2.9 0l-.498-.525c-.544.22-1.044.53-1.483.912l.198.687zm3.222 5.025c-.8 0-1.45-.672-1.45-1.5 0-.829.65-1.5 1.45-1.5.8 0 1.45.671 1.45 1.5 0 .828-.65 1.5-1.45 1.5z"/></svg>
        </button>
        <button class="chat-action">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path class="accent-svg" d="M18 17.5v1.25A2.25 2.25 0 0115.75 21h-7.5A2.25 2.25 0 016 18.75v-1.251l-1.75.001A2.25 2.25 0 012 15.25V9.254a3.25 3.25 0 013.25-3.25l.749-.001L6 5.25A2.25 2.25 0 018.25 3h7.502a2.25 2.25 0 012.25 2.25v.753h.75a3.254 3.254 0 013.252 3.25l.003 5.997a2.249 2.249 0 01-2.248 2.25H18zm-2.25-4h-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75zm.002-9H8.25a.75.75 0 00-.75.75l-.001.753h9.003V5.25a.75.75 0 00-.75-.75z"/></svg>
        </button>
        <button onclick="lhinst.closeActiveChatDialog(<?php echo $chat->id?>,$('#tabs'),true)" title="Encerrar atendimento" class="chat-action">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 10 10"><g clipPath="url(#clip0_13547_17167)"><path class="accent-svg" d="M.366.366a1.25 1.25 0 011.768 0L5 3.232 7.866.366a1.25 1.25 0 111.768 1.768L8.2 3.567 6.768 5 8.2 6.433l1.433 1.433a1.25 1.25 0 01-1.768 1.768L5 6.768 2.134 9.634A1.25 1.25 0 11.366 7.866L3.232 5 1.8 3.567.366 2.134a1.25 1.25 0 010-1.768z"/></g><defs><clipPath id="clip0_13547_17167"><path fill="#fff" d="M0 0H10V10H0z"/></clipPath></defs></svg>
        </button>
    </div>    
</div>

<div class="additional-box">
    <div class="additional-title-container">
        <h1 class="additional-title">Informações adicionais</h1>
    </div>
        
    <ul class="additional-list">
    <?php foreach ($chat->additional_data_array as $keyItem => $addItem) : if (!is_string($addItem) || (is_string($addItem) && ($addItem != ''))) : ?>
                            <li class="additional-item"  <?php if (isset($addItem['identifier'])): ?> <?php endif;?>>
                                <?php if (isset($addItem['h']) && $addItem['h'] == true) : ?>&nbsp;<i class="material-icons" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','Hidden field')?>">visibility_off</i><?php endif;?>
                                <?php if (isset($addItem['secure']) && $addItem['secure'] == true) : ?>&nbsp;<i class="material-icons" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','Passed as encrypted variable')?>">enhanced_encryption</i><?php endif;?>
                                <?php if (isset($addItem['url']) && $addItem['url'] == true) : ?>&nbsp;<i class="material-icons" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','Identifier')?> - <?php echo htmlspecialchars($addItem['identifier'])?>">link</i><?php endif;?>
                                <?php if (isset($addItem['key'])) : ?>
                                    <?php echo htmlspecialchars($addItem['key'])?> - <?php echo htmlspecialchars($addItem['value'])?>
                                <?php else : ?>
                                    <?php echo htmlspecialchars($keyItem)?> - <?php echo json_encode($addItem); ?>
                                <?php endif; ?>
                            </li>
                        <?php endif; endforeach;?>
    </ul>
</div>

<div class="additional-box">
    <div class="additional-title-container">
        <h1 class="additional-title">Temporizadores</h1>
    </div>
    <?php include(erLhcoreClassDesign::designtpl('lhchat/chat_tabs/information_rows/information_order.tpl.php'));?>
<?php include(erLhcoreClassDesign::designtpl('lhchat/chat_tabs/information_rows/information_order_extension_multiinclude.tpl.php'));?>

<table class="table table-sm table-borderless">
<?php foreach ($orderInformation as $buttonData) : ?>
    <?php if ($buttonData['enabled'] == true) : ?>
         <?php if ($buttonData['item'] == 'chat_duration') : ?>
            <?php include(erLhcoreClassDesign::designtpl('lhchat/chat_tabs/information_rows/chat_duration.tpl.php'));?>
        <?php endif;?>
    <?php endif; ?>
<?php endforeach; ?>
</table>
</div>

<h1>
    <?php echo htmlspecialchars($chat->chat_owner)?>
</h1>

<div class="extra-action">
    <button onclick="lhc.revealModal({'url':WWW_DIR_JAVASCRIPT +'chat/transferchat/<?php echo $chat->id?>'})" class="transfer-chat">
        Transferir bate-papo
    </button>
</div>
