<h1>EntraID</h1>

<ul>
    <li><a href="<?php echo erLhcoreClassDesign::baseurl('msoauth/options')?>">Configurações</a></li>
</ul>

<div class="form-floating mb-3 mt-3">
	<input id="redirecturi" maxlength="100" autofocus="autofocus" class="startchat-input form-control form-control-sm" type="text" name="redirecturi" value="<?php echo erLhcoreClassXMP::getBaseHost() . $_SERVER['HTTP_HOST']?><?php echo erLhcoreClassDesign::baseurl('msoauth/oauth') ?>" />
	<label for="redirecturi" class="floating-label">Redirecionamento da aplicação EntraID <a class="anchor-required">(Redirect URI)</a></label>
</div>
