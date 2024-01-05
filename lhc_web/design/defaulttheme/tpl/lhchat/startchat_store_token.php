<?php
session_start();
$_SESSION['token'] = $_POST['access_token'];
echo "Token stored successfully";
?>