<!DOCTYPE html>

<html lang="<?php echo erConfigClassLhConfig::getInstance()->getOverrideValue('site', 'content_language')?>" dir="<?php echo erConfigClassLhConfig::getInstance()->getOverrideValue('site', 'dir_language')?>">
<head>

<?php $Result['anonymous'] = true; ?>

<?php include_once(erLhcoreClassDesign::designtpl('pagelayouts/parts/page_head_user.tpl.php'));?>

<?php if (isset($Result['theme']) && $Result['theme']->custom_popup_css != '') : ?>
<style type="text/css">
<?php echo $Result['theme']->custom_popup_css?>
</style>
<?php endif;?>

</head>
<body>
<?php include_once(erLhcoreClassDesign::designtpl('pagelayouts/parts/userchat/before_userchat.tpl.php'));?>
<div class="img-bg">
<div class="background-blur">
	<div class="startchat-box modal-dialog modal-lg" id="user-popup-window">
		<div class="modal-content startchat-margin">

            <?php if (!isset($Result['hide_modal_header'])) : ?>
			<div class="modal-header">
            		  <!-- <?php include_once(erLhcoreClassDesign::designtpl('pagelayouts/parts/page_head_logo.tpl.php'));?> -->
                <div class="btn-group float-end" role="group" aria-label="...">
                    <?php if (!isset($Result['hide_close_window'])) : ?>

                        <?php if (isset($Result['chat']) && is_numeric($Result['chat']->id) && isset($Result['er']) && $Result['er'] == true) : ?>
                            <a class="btn btn-secondary btn-xs" onclick="lhinst.restoreWidget('<?php echo $Result['chat']->id,'_',$Result['chat']->hash?>');" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/chat','Switch to widget')?>"><i class="material-icons me-0">open_in_browser</i></a>
                        <?php endif;?>

                    <?php endif;?>

                    <?php if (isset($Result['show_switch_language'])) : ?>
                        <?php include_once(erLhcoreClassDesign::designtpl('pagelayouts/parts/switch_language.tpl.php'));?>
                    <?php endif; ?>
                </div>
			</div>
            <?php endif; ?>

			<div class="modal-body startchat-chatbox">
                <?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/userchat/before_content.tpl.php'));?>
                    <?php echo $Result['content'];?>
                <?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/userchat/after_content.tpl.php'));?>
            </div>
		</div>
	</div>
                    </div>
                    </div>

<script>
const nameInput = document.getElementById("name");

nameInput.addEventListener("input", function(event) {
  const inputValue = event.target.value;
  const sanitizedValue = inputValue.replace(/[^a-zA-Z\s]/gi, "");
  event.target.value = sanitizedValue;
});

const emailInput = document.getElementById("email");

emailInput.addEventListener("input", function(event) {
  const inputValue = event.target.value;
  const domain = inputValue.split("@")[1];
  const allowedDomains = ["callink.com.br", "ilinksolutions.com.br"];
  
  if (!allowedDomains.includes(domain)) {
    event.target.setCustomValidity("E-mail não autorizado");
  } else {
    event.target.setCustomValidity("");
  }
});

</script>


<?php include_once(erLhcoreClassDesign::designtpl('pagelayouts/parts/userchat/after_userchat.tpl.php'));?>
<?php

if (erConfigClassLhConfig::getInstance()->getSetting('site', 'debug_output') == true) {
    $debug = ezcDebug::getInstance();
    echo "<div><pre class='bg-light text-dark m-2 p-2 border'>" . json_encode(erLhcoreClassUser::$permissionsChecks, JSON_PRETTY_PRINT) . "</pre></div>";
    echo $debug->generateOutput();
}
?>

<?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/dynamic_height.tpl.php'));?>
</body>
</html>