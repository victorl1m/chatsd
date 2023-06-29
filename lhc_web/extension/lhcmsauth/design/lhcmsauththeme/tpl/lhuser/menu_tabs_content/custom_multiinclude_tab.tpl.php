<div role="tabpanel" class="tab-pane" id="msoauth">
    <?php if (erLhcoreClassUser::instance()->hasAccessTo('lhmsoauth','use_admin')) : ?>
        <?php foreach (erLhcoreClassModelMSAuth::getList(array('filter' => array('completed' => 1, 'user_id' => erLhcoreClassUser::instance()->getUserID()))) as $loggedAccount) : ?>
        <a class="btn btn-sm btn-danger mb-1 me-1" ng-non-bindable href="<?php echo  erLhcoreClassDesign::baseurl('msoauth/remove')?>/<?php echo $loggedAccount->id?>"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/msauth','Logout');?> - <?php echo htmlspecialchars($loggedAccount->display_name . ' '. $loggedAccount->name . ' ' . $loggedAccount->surname . '[' . $loggedAccount->email . ']')?></a>
        <?php endforeach; ?>
    <?php endif; ?>
    <br/>
    <a href="<?php echo erLhcoreClassDesign::baseurl('msoauth/login')?>"><img src="<?php echo erLhcoreClassDesign::design('images/msoauth/ms-symbollockup_signin_light.png');?>"></a>
</div>
