<?php include(erLhcoreClassDesign::designtpl('lhchat/chat_tabs/map_tab_pre.tpl.php'));?>	
<?php if ($information_tab_map_tab_enabled == true) : ?>
<div role="tabpanel" class="tab-pane<?php if ($chatTabsOrderDefault == 'map_tab_tab') print ' active';?>" id="map-tab-chat-<?php echo $chat->id?>">
        <?php if ($chat->lat != 0 && $chat->lon) : ?>
            <?php $geo_location_data = erLhcoreClassModelChatConfig::fetch('geo_location_data')->data; ?>
            <script>
                $('#map-tab-chat-link-<?php echo $chat->id?>').click(function () {
                    $('#chat-map-img-<?php echo $chat->id?>').attr('src',$('#chat-map-img-<?php echo $chat->id?>').attr('data-src'));
                });
            </script>
		<?php else : ?>
		    <p><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','Could not detect. Make sure that GEO detection is enabled.')?></p>
		<?php endif;?>
</div>
<?php endif;?>
