<?php

$msauth = erLhcoreClassModelMSAuth::fetch($Params['user_parameters']['id']);

if ($msauth->user_id == erLhcoreClassUser::instance()->getUserID()){
    $msauth->removeThis();
}

header('Location: ' . $_SERVER['HTTP_REFERER']);
exit;

?>