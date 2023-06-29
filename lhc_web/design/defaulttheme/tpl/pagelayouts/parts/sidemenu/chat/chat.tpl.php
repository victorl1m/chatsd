<?php if ($currentUser->hasAccessTo('lhchat','use')) : ?>

<?php $menuItems = array(); ?>
<?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/top_menu_chat_actions.tpl.php'));?>

<?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/top_menu_online_users.tpl.php'));?>
       
<?php if (!empty($menuItems)) : ?>
<li class="nav-item">
        <a href="#" class="nav-link sidemenu-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path class="accent-svg" d="M9.5 3a7.5 7.5 0 00-6.797 10.675 68.094 68.094 0 00-.681 3.142.996.996 0 001.153 1.17c.623-.11 1.978-.36 3.236-.65A7.5 7.5 0 109.5 3zm-.038 16a7.473 7.473 0 005.1 2c1.1 0 2.145-.237 3.088-.663 1.043.244 2.186.488 2.913.64a1.244 1.244 0 001.467-1.5c-.162-.703-.418-1.795-.671-2.803A7.503 7.503 0 0017.015 6.41a8.44 8.44 0 01.8 2.048 5.995 5.995 0 012.747 5.042c0 .992-.24 1.925-.665 2.747l-.13.253.07.276c.228.895.467 1.9.642 2.65-.774-.163-1.818-.39-2.74-.61l-.264-.062-.243.121c-.804.4-1.71.625-2.67.625a5.974 5.974 0 01-2.92-.756 8.517 8.517 0 01-2.18.256z"/></svg>
<?php include(erLhcoreClassDesign::designtpl('pagelayouts/parts/sidemenu/chat/chat_title.tpl.php'));?><i class="material-icons arrow">chevron_right</i></a>
        <ul class="nav nav-second-level">       
            <?php foreach ($menuItems as $menuItem) : ?>
                <li class="nav-item sidemenu-subtext"><a class="nav-link" href="<?php echo $menuItem['href']?>" <?php if (isset($menuItem['onclick'])) : ?>onclick="<?php echo $menuItem['onclick']?>"<?php endif;?>><?php if (isset($menuItem['iclass'])) : ?><i class="material-icons"><?php echo $menuItem['iclass']?></i><?php endif;?><?php echo $menuItem['text']?></a></li>
            <?php endforeach;?>
	   </ul>
</li>
<?php endif; ?>

<?php endif;?>