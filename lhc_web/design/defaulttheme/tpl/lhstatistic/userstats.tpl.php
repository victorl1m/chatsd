<?php
$modalHeaderClass = 'pt-1 pb-1 ps-2 pe-2 ';
$modalHeaderTitle = erTranslationClassLhTranslation::getInstance()->getTranslation('statistic/departmentstats','Statistic');
$modalBodyClass = 'p-1';
$modalSize = 'xl';
?>
<?php include(erLhcoreClassDesign::designtpl('lhkernel/modal_header.tpl.php'));?>
    <div class="modal-body" ng-non-bindable>
        <div class="p-2">

            <div class="pb-2">
                <a href="<?php echo erLhcoreClassDesign::baseurl('user/edit')?>/<?php echo $user->id?>" class="pe-2"><span class="material-icons">edit</span> <?php echo htmlspecialchars($user->name_official)?> [<?php echo $user->id?>]</a>
                <a href="<?php echo erLhcoreClassDesign::baseurl('chat/list')?>/(user_ids)/<?php echo $user->id?>/(chat_status_ids)/0/1" class="pe-2"><span title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('statistic/departmentstats','Operator active/pending chats');?>" class="material-icons">chat</span><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('statistic/departmentstats','Operator active/pending chats');?></a>
                <a href="<?php echo erLhcoreClassDesign::baseurl('statistic/onlinehours')?>/(user_id)/<?php echo $user->id?>" class="pe-2"><span title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('statistic/departmentstats','Online hours');?>" class="material-icons">schedule</span><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('statistic/departmentstats','Operator online hours');?></a>
                <a href="<?php echo erLhcoreClassDesign::baseurl('audit/loginhistory')?>/(user_id)/<?php echo $user->id?>" class="pe-2"><span title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('statistic/departmentstats','Login history');?>" class="material-icons">schedule</span><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('statistic/departmentstats','Login history');?></a>
            </div>
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="user-status" style="max-height: 550px;overflow-y: auto">
                    
                </div>
            </div>
        </div>
    </div>
<?php include(erLhcoreClassDesign::designtpl('lhkernel/modal_footer.tpl.php'));?>