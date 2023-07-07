<?php

$tpl = erLhcoreClassTemplate::getInstance('lhmsoauth/options.tpl.php');

$tOptions = erLhcoreClassModelChatConfig::fetch('msauth_options');
$data = (array)$tOptions->data;

if ( isset($_POST['StoreOptions']) ) {

    $definition = array(
        'ms_tenant_id' => new ezcInputFormDefinitionElement(
            ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw'
        ),
        'ms_client_id' => new ezcInputFormDefinitionElement(
            ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw'
        ),
        'ms_secret' => new ezcInputFormDefinitionElement(
            ezcInputFormDefinitionElement::OPTIONAL, 'unsafe_raw'
        ),
        'ms_auto_login' => new ezcInputFormDefinitionElement(
            ezcInputFormDefinitionElement::OPTIONAL, 'boolean'
        )
    );

    $form = new ezcInputForm( INPUT_POST, $definition );
    $Errors = array();

    if ( $form->hasValidData( 'ms_tenant_id' ) ) {
        $data['ms_tenant_id'] = $form->ms_tenant_id;
    } else {
        $data['ms_tenant_id'] = '';
    }

    if ( $form->hasValidData( 'ms_client_id' )) {
        $data['ms_client_id'] = $form->ms_client_id;
    } else {
        $data['ms_client_id'] = '';
    }
    
    if ( $form->hasValidData( 'ms_auto_login' )) {
        $data['ms_auto_login'] = 1;
    } else {
        $data['ms_auto_login'] = 0;
    }

    if ( $form->hasValidData( 'ms_secret' )) {
        $data['ms_secret'] = $form->ms_secret;
    } else {
        $data['ms_secret'] = '';
    }

    $tOptions->explain = '';
    $tOptions->type = 0;
    $tOptions->hidden = 1;
    $tOptions->identifier = 'msauth_options';
    $tOptions->value = serialize($data);
    $tOptions->saveThis();

    $tpl->set('updated','done');
}

$tpl->set('ms_options',$data);

$Result['content'] = $tpl->fetch();

$Result['path'] = array(
    array(
        'url' => erLhcoreClassDesign::baseurl('msoauth/index'),
        'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('module/msauth', 'MS Auth')
    ),
    array(
        'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('module/msauth', 'Options')
    )
);

?>