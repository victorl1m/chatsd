<?php
$currentUser = erLhcoreClassUser::instance();
$UserData = $currentUser->getUserData(true);
?>

<div id="sidebar-wrapper" class="sidebar-class" ng-cloak translate="no">
    <div class="navbar-light sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse">
            <ul class="nav position-relative" id="side-menu">
                <li class="nav-item">
                    <a class="nav-link sidemenu-center" href="<?php echo erLhcoreClassDesign::baseurl('/') ?>" onclick="$('#tabs a[href=\'#dashboard\']').tab('show')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path class="accent-svg" d="M13.45 2.533a2.25 2.25 0 00-2.9 0L3.8 8.228a2.25 2.25 0 00-.8 1.72v9.305c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 001.75-1.75V15.25c0-.68.542-1.232 1.217-1.25h2.566a1.25 1.25 0 011.217 1.25v4.003c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 001.75-1.75V9.947a2.25 2.25 0 00-.8-1.72l-6.75-5.694z"/>
                        </svg>
                        <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout', 'Dashboard') ?>
                    </a>
                </li>
                <?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/sidemenu/chat/chat.tpl.php')); ?>

                <?php if ($currentUser->hasAccessTo('lhabstract', 'use')): ?>
                <?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/sidemenu/settings/settings.tpl.php')); ?>
                <?php endif; ?>


                <?php if ($currentUser->hasAccessTo('lhabstract', 'use')): ?>
                    <?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/top_menu_modules_container.tpl.php.tpl.php')); ?>
                <?php endif; ?>
                
                <?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/sidemenu/menu_item_multiinclude.tpl.php')); ?>
            </ul>
        </div>
    </div>
    <div class="profile-action">
        <div class="profile-container">
            <?php
            $soundData = erLhcoreClassModelChatConfig::fetch('sync_sound_settings')->data;
            $soundMessageEnabled = erLhcoreClassModelUserSetting::getSetting('chat_message', (int) ($soundData['new_message_sound_admin_enabled']));
            $soundNewChatEnabled = erLhcoreClassModelUserSetting::getSetting('new_chat_sound', (int) ($soundData['new_chat_sound_enabled']));
            $canChangeOnlineStatus = false;
            $currentUser = erLhcoreClassUser::instance();
            if ($currentUser->hasAccessTo('lhuser', 'changeonlinestatus')) {
                $canChangeOnlineStatus = true;
                if (!isset($UserData)) {
                    $UserData = $currentUser->getUserData(true);
                }
            }
            $canChangeVisibilityMode = false;
            if ($currentUser->hasAccessTo('lhuser', 'changevisibility')) {
                $canChangeVisibilityMode = true;
                if (!isset($UserData)) {
                    $UserData = $currentUser->getUserData(true);
                }
            }
            $canChangeAlwaysOnline = false;
            if ($currentUser->hasAccessTo('lhuser', 'changealwaysonline')) {
                $canChangeAlwaysOnline = true;
                if (!isset($UserData)) {
                    $UserData = $currentUser->getUserData(true);
                }
            }
            ?>
            <!-- online status if has perm -->
            <?php if ($currentUser->hasAccessTo('lhchat', 'use') && $currentUser->hasAccessTo('lhuser', 'changeonlinestatus')): ?>
                <a href="#" class="nav-link">
                    <i style="color: var(--accent-color) !important; margin-bottom: 0.5rem;" id="online-offline-user" class="material-icons2 ng-cloak" ng-click="lhc.changeOnline()" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/user_settings', 'Change my status to online/offline'); ?>">
                        {{lhc.hideOnline == true ? 'flash_off' : 'flash_on'}}
                    </i>
                </a>
            <?php endif; ?>
            <!-- left and right side actions container -->
            <div class="profile-actions">
                <a href="#" class="nav-link" style="color: var(--accent-color) !important;" onclick="lhinst.disableNewChatSoundAdmin($(this));event.stopPropagation()" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/user_settings','Enable/Disable sound about new pending chats'); ?>">
                    <i class="material-icons"><?php $soundNewChatEnabled == 0 ? print 'volume_off' : print 'volume_up'?></i>
                </a>
                <!-- profile img -->
                <!-- make a dropdown when click img -->
                <a href="#" class="nav-link" onclick="profileDropdown()">
                    <img class="profile-img" src="<?php echo $UserData->photo_path ?>" alt="" width="64" />
                </a>
                <!-- dropdown -->
                <ul class="profile-dropdown">
    <li class="dropdown-profile-item">
        <a class="dropdown-profile-btn" href="#" ng-click="lhc.toggleWidget('track_open_chats')" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Last 10 your active chats will be always visible')?>">
            <i class="material-icons" ng-class="{'chat-active': lhc.toggleWidgetData['track_open_chats'] === true, 'chat-closed': lhc.toggleWidgetData['track_open_chats'] !== true}">done</i>
            <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Keep my active chats'); ?>
        </a>
    </li>
    <li class="dropdown-profile-item">
        <a class="dropdown-profile-btn" href="#" ng-click="lhc.toggleWidget('group_offline_chats')" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Hide nicknames for offline chats')?>">
            <i class="material-icons" id="group-chats-status" ng-class="{'chat-active': lhc.toggleWidgetData['group_offline_chats'] === true, 'chat-closed': lhc.toggleWidgetData['group_offline_chats'] !== true}">done</i>
            <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Hide nicknames for offline chats'); ?>
        </a>
    </li>
    <li class="dropdown-profile-item">
        <a class="dropdown-profile-btn csfr-required" href="<?php echo erLhcoreClassDesign::baseurl('front/settings')?>/(action)/reset">
            <i class="material-icons">search_off</i>
            <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Redefinir filtros'); ?>
        </a>
    </li>
    <?php if ($currentUser->hasAccessTo('lhfront','switch_dashboard')) : ?>
    <li class="dropdown-profile-item">
        <a class="dropdown-profile-btn csfr-required" href="<?php echo erLhcoreClassDesign::baseurl('front/switchdashboard')?>">
            <i class="material-icons">home</i>
            <?php if ((int)erLhcoreClassModelUserSetting::getSetting('new_dashboard',1) == 1) : ?>
                <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Interface legada'); ?>
            <?php else : ?>
                <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Interface simplificada'); ?>
            <?php endif; ?>
        </a>
    </li>
    <?php endif; ?>
    <?php if ((int)erLhcoreClassModelUserSetting::getSetting('new_dashboard',1) == 1) : ?>
    <li class="dropdown-profile-item">
        <a class="dropdown-profile-btn csfr-required" id="chats-order-mode" data-mode="<?php if ((int)erLhcoreClassModelUserSetting::getSetting('static_order', 0) == 1) : ?>static<?php else : ?>dynamic<?php endif; ?>" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Click to switch to static/dynamic')?>" href="<?php echo erLhcoreClassDesign::baseurl('front/switchdashboard')?>/(action)/static_order">
            <i class="material-icons">sort</i>
            <?php if ((int)erLhcoreClassModelUserSetting::getSetting('static_order', 0) == 1) : ?>
                <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Ordem de atendimentos estática'); ?>
            <?php else : ?>
                <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Ordem de atendimentos dinâmica'); ?>
            <?php endif; ?>
        </a>
    </li>
    <?php endif; ?>
    <?php if ((int)erLhcoreClassModelUserSetting::getSetting('new_dashboard',1) == 1) : ?>
    <li class="dropdown-profile-item">
        <a class="dropdown-profile-btn csfr-required" ng-click="<?php if ((int)erLhcoreClassModelUserSetting::getSetting('column_chats', 0) == 1) : ?>lhc.removeLocalSetting('lhc_rch')<?php else : ?>lhc.storeLocalSetting('lhc_rch',1)<?php endif;?>" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Click to switch modes')?>" href="<?php echo erLhcoreClassDesign::baseurl('front/switchdashboard')?>/(action)/column_chats">
            <?php if ((int)erLhcoreClassModelUserSetting::getSetting('column_chats', 0) == 1) : ?>
                <i class="material-icons">view_column</i>
                <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Visão de atendimentos múltiplos'); ?>
            <?php else : ?>
                <i class="material-icons">view_sidebar</i>
                <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Visão de atendimento único'); ?>
            <?php endif; ?>
        </a>
    </li>
    <?php endif; ?>
    <?php if ((int)erLhcoreClassModelUserSetting::getSetting('new_dashboard',1) == 1) : ?>
    <li class="dropdown-profile-item">
        <a class="dropdown-profile-btn csfr-required" href="<?php echo erLhcoreClassDesign::baseurl('front/switchdashboard')?>/(action)/tabs">
            <i class="material-icons">chat</i>
            <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Mostrar/ocultar abas de atendimento'); ?>
        </a>
    </li>
    <li class="dropdown-profile-item">
        <a class="dropdown-profile-btn csfr-required" href="<?php echo erLhcoreClassDesign::baseurl('front/switchdashboard')?>/(action)/left_list">
            <i class="material-icons">widgets</i>
            <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'Listagens na coluna esquerda'); ?>
        </a>
    </li>
    <?php endif; ?>
    <li class="dropdown-profile-item">
        <a class="dropdown-profile-btn csfr-required" href="<?php echo erLhcoreClassDesign::baseurl('front/switchdashboard')?>/(action)/mode">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path class="accent-svg" d="M12.75 2.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM17 12a5 5 0 11-10 0 5 5 0 0110 0zm-1.5 0A3.5 3.5 0 0012 8.5v7a3.5 3.5 0 003.5-3.5zm6.5 0a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0122 12zm-9.25 7.75a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM5 12a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 12zm.28-7.78a.75.75 0 10-1.06 1.06l1.5 1.5a.75.75 0 001.06-1.06l-1.5-1.5zM4.22 19.78a.75.75 0 001.06 0l1.5-1.5a.75.75 0 00-1.06-1.06l-1.5 1.5a.75.75 0 000 1.06zm14.5-15.56a.75.75 0 111.06 1.06l-1.5 1.5a.75.75 0 11-1.06-1.06l1.5-1.5zm1.06 15.56a.75.75 0 01-1.06 0l-1.5-1.5a.75.75 0 011.06-1.06l1.5 1.5a.75.75 0 010 1.06z"/>
            </svg>
            Alterar tema escuro/claro
        </a>
    </li>
</ul>
                <div class="blur-bg"></div>
                <div class="stats-modal">
                        <button class="close-btn" onclick="statsModal()" class="stats-close-btn">
                        <i class="material-icons stats-close">close</i>
                    </button>
                    <h1 class="stats-title">Suas estatísticas</h1>
                    <ul class="stats-list">
                        <li class="stats-item">
                            <span class="stats-item-value">0</span>
                            <span class="stats-item-title">Atendimentos realizados</span>
                        </li>
                        <li class="stats-item">
                            <span class="stats-item-value">1</span>
                            <span class="stats-item-title">Atendimentos negativos</span>
                        </li>
                        <li class="stats-item">
                            <span class="stats-item-value">13</span>
                            <span class="stats-item-title">Atendimentos positivos</span>
                        </li>
                    </ul>
                </div>

                <script>

                    function profileDropdown() {
                        document.querySelector('.profile-dropdown').classList.toggle('active');
                    }

                    function statsModal() {
                        document.querySelector('.stats-modal').classList.toggle('active');
                        document.querySelector('.blur-bg').classList.toggle('active');

                        document.querySelector('.blur-bg').addEventListener('click', function() {
                            document.querySelector('.stats-modal').classList.remove('active');
                            document.querySelector('.blur-bg').classList.remove('active');
                        })
                    }


                </script>

                <!-- logout -->
                <a class="csfr-required accent-text" href="<?php echo erLhcoreClassDesign::baseurl('user/logout') ?>" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout', 'Logout'); ?>">
                    <i class="material-icons">exit_to_app</i>
                </a>
            </div>
            <!-- auto_uppercase -->
            <a title="Maiúscula ao digitar mensagem" href="<?php echo erLhcoreClassDesign::baseurl('user/setsetting') ?>/auto_uppercase/<?php echo erLhcoreClassModelUserSetting::getSetting('auto_uppercase', 1) == 0 ? 1 : 0 ?>" class="csfr-required nav-link">
                <span class="material-icons2" style="color: var(--accent-color) !important;">
                    <?php erLhcoreClassModelUserSetting::getSetting('auto_uppercase', 1) ? print 'match_case' : print 'remove_done' ?>
                </span>
            </a>
            <h1 class="profile-username">
                <?php echo erLhcoreClassDesign::shrt($UserData->name, 8, '...', 30, ENT_QUOTES) ?>
            </h1>
        </div>
    </div>
    <?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/sidemenu/after_sidemnu_multiinclude.tpl.php')); ?>
</div>