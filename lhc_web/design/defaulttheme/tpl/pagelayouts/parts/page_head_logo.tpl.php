<a ng-non-bindable rel="noreferrer" class="back-logo" href="<?php if (isset($Result['theme']) !== false && $Result['theme']->widget_copyright_url != '') : ?><?php echo htmlspecialchars($Result['theme']->widget_copyright_url) ?><?php else : ?><?php echo erLhcoreClassModelChatConfig::fetch('customer_site_url')->current_value?><?php endif;?>" target="_blank" title="<?php if (isset($Result['theme'])) : ?><?php echo htmlspecialchars($Result['theme']->name_company)?><?php else : ?><?php echo htmlspecialchars(erLhcoreClassModelChatConfig::fetch('customer_company_name')->current_value)?><?php endif;?>"></a>