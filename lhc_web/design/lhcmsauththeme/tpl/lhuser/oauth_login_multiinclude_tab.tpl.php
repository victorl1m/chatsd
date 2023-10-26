<?php if (!isset($_GET['oauth_ms']) && !isset($_POST['oauth_ms'])) : ?>
<hr>
    <a href="<?php echo erLhcoreClassDesign::baseurl('msoauth/login')?>"><img src="<?php echo erLhcoreClassDesign::design('images/msoauth/ms-symbollockup_signin_light.png');?>"></a>
<hr>
<?php else : ?>
<p><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/msauth','Please login to complete process');?>.</p>
<input ng-non-bindable type="hidden" name="oauth_ms" value="<?php echo isset($_POST['oauth_ms']) ? $_POST['oauth_ms'] : (isset($_GET['oauth_ms']) ? $_GET['oauth_ms'] : '')?>">
<?php endif; ?>