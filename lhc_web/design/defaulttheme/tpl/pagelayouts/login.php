<!DOCTYPE html>

<html lang="<?php echo erConfigClassLhConfig::getInstance()->getOverrideValue('site','content_language')?>" dir="<?php echo erConfigClassLhConfig::getInstance()->getOverrideValue('site','dir_language')?>">
<head>
<?php include_once(erLhcoreClassDesign::designtpl('pagelayouts/parts/page_head.tpl.php'));?>
</head>
<body>

<div class="login-box" tabindex="-1" role="dialog">
<div class="login-dialog">
	<div class="login-content">
		<div class="login-header">
			<a class="img-anchor" href="<?php echo erLhcoreClassDesign::baseurl()?>" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','Home')?>"><img src="<?php echo erLhcoreClassDesign::design('images/general/logo.png');?>" class="login-brand" alt="<?php echo erConfigClassLhConfig::getInstance()->getSetting( 'site', 'title' )?>" title="<?php echo erConfigClassLhConfig::getInstance()->getSetting( 'site', 'title' )?>"></a>
		</div>
		<div class="login-body">
                <?php echo $Result['content'];?>
        </div>
	</div>
</div>
</div>


<div class="container-fluid">
<?php include_once(erLhcoreClassDesign::designtpl('pagelayouts/parts/page_footer.tpl.php'));?>
</div>

<?php if (erConfigClassLhConfig::getInstance()->getSetting( 'site', 'debug_output' ) == true) {
    $debug = ezcDebug::getInstance();
    echo "<div><pre class='bg-light text-dark m-2 p-2 border'>" . json_encode(erLhcoreClassUser::$permissionsChecks, JSON_PRETTY_PRINT) . "</pre></div>";
    echo $debug->generateOutput();
} ?>
</body>
</html>