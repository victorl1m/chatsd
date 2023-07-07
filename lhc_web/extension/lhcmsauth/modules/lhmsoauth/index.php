<?php
$tpl = erLhcoreClassTemplate::getInstance('lhmsoauth/index.tpl.php');

$Result['content'] = $tpl->fetch();

$Result['path'] = array(
    array(
        'url' => erLhcoreClassDesign::baseurl('msoauth/index'),
        'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('module/msauth', 'MS Auth')
    )
);

?>