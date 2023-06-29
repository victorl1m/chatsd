<?php

$themeOffline = '';

if (is_numeric($theme)) {
    $themeObj = erLhAbstractModelWidgetTheme::fetch($theme);
    if ($themeObj instanceof erLhAbstractModelWidgetTheme) {
        $themeObj->translate();
        if (isset($themeObj->bot_configuration_array['chat_unavailable']) && $themeObj->bot_configuration_array['chat_unavailable'] != '') {
            $themeOffline = $themeObj->bot_configuration_array['chat_unavailable'];
        }
    }
} elseif (isset($theme) && $theme instanceof erLhAbstractModelWidgetTheme){
    $theme->translate();
    if (isset($theme->bot_configuration_array['chat_unavailable']) && $theme->bot_configuration_array['chat_unavailable'] != '') {
        $themeOffline = $theme->bot_configuration_array['chat_unavailable'];
    }
}

?>

<?php if ($themeOffline == '') : ?>
    <h1 class="big-unavailable">ATENDIMENTO INDISPONÍVEL</h1>
    <p class="unavailable-text">Tente novamente mais tarde.</p>
<?php else : ?>
    <?php echo erLhcoreClassBBCode::make_clickable(htmlspecialchars($themeOffline)); ?>
<?php endif;?>