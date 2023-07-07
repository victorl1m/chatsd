<h1><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/msauth','MS Auth');?></h1>

<ul>
    <li><a href="<?php echo erLhcoreClassDesign::baseurl('msoauth/options')?>"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/msauth','Options');?></a></li>
</ul>

<p><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/msauth','Callback URL in MS Project has to be set to this:');?></p>
<input type="text" class="form-control form-control-sm" value="<?php echo erLhcoreClassXMP::getBaseHost() . $_SERVER['HTTP_HOST']?><?php echo erLhcoreClassDesign::baseurl('msoauth/oauth') ?>">
