<?php

$Module = array( "name" => "MS Auth",
         'variable_params' => true );

$ViewList = array();

$ViewList['oauth'] = array(
    'params' => array(),
    'uparams' => array()
);

$ViewList['index'] = array(
    'params' => array(),
    'uparams' => array(),
    'functions' => array('use_admin_configure'),
);

$ViewList['options'] = array(
    'params' => array(),
    'uparams' => array(),
    'functions' => array('use_admin_configure'),
);

$ViewList['login'] = array(
    'params' => array('id'),
    'uparams' => array()
);

$ViewList['remove'] = array(
    'params' => array('id'),
    'uparams' => array(),
    'functions' => array('use_admin'),
);

$FunctionList['use_admin'] = array('explain' => 'Allow operator to use Google Login');
$FunctionList['use_admin_configure'] = array('explain' => 'Allow operator to configure Google Auth');