<?php if ($useFm || $useBo || $useChatbox || $useFaq || $useQuestionary || $hasExtensionModule) : ?>
     <li class="nav-item">
           <a href="#" class="nav-link sidemenu-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path class="accent-svg" d="M11 5.5a3.5 3.5 0 01-3 3.465V11.5h6.25a2.25 2.25 0 002.25-2.25v-.395A3.502 3.502 0 0117.5 2a3.5 3.5 0 01.5 6.965v.285A3.75 3.75 0 0114.25 13H8v2.035a3.5 3.5 0 11-1.5.11v-6.29A3.502 3.502 0 017.5 2 3.5 3.5 0 0111 5.5z"/></svg>
<?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/extra_modules_title.tpl.php'));?><i class="material-icons arrow md-18">chevron_right</i></a>
           <ul class="nav nav-second-level sidemenu-subtext">
                <?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/modules_menu/questionary.tpl.php'));?>
  			  
			    <?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/modules_menu/faq.tpl.php'));?>
			  
			    <?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/modules_menu/chatbox.tpl.php'));?>
			  	              
                <?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/modules_menu/form.tpl.php'));?>
              
                <?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/modules_menu/extension_module_multiinclude.tpl.php'));?>
          </ul>
    </li>
<?php endif; ?>