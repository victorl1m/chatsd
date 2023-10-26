<?php if (erLhcoreClassUser::instance()->hasAccessTo('lhmsoauth','use_admin_configure')) : ?>
<li class="nav-item"><a class="nav-link" href="<?php echo erLhcoreClassDesign::baseurl('msoauth/index')?>"><i class="material-icons">login</i><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/msauth','MS Auth');?></a></li>
<?php endif; ?>