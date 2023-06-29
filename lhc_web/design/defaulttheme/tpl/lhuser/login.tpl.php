<h1 class="login-title">Callink | Atendimento via chat</h1>

<h1 class="login-subtitle"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('user/login','Entre com suas credenciais ');?></h1>
<?php if (isset($errors)) : ?>
		<?php include(erLhcoreClassDesign::designtpl('lhkernel/validation_error.tpl.php'));?>
<?php endif; ?>

<?php if (isset($logout_reason)) : ?>
	<?php include(erLhcoreClassDesign::designtpl('lhuser/logout_reason.tpl.php'));?>
<?php endif;?>

<?php if (isset($session_ended)) : ?>
    <?php $errors = array(erTranslationClassLhTranslation::getInstance()->getTranslation('user/login','Your session has ended. Please login!')); ?>
    <?php include(erLhcoreClassDesign::designtpl('lhkernel/validation_error.tpl.php'));?>
<?php endif;?>

<form id="form-start-chat" method="post" action="<?php echo erLhcoreClassDesign::baseurl('user/login')?>">

<?php if (isset($crossdomain) && $crossdomain == true) : ?>
    <input type="hidden" name="cookie" value="crossdomain" />
<?php endif; ?>

<div class="form-floating">
    <input id="username" style="margin-bottom: 0.5rem;" placeholder="E=mail" class="form-control" type="text" name="Username" value="" />
    <label for="username"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('user/login','Usuário');?><a class="anchor-required">*</a></label>
</div>

<div class="form-floating">
    <input id="password" style="margin-bottom: 1rem;" placeholder="Senha" type="password" class="form-control" name="Password" value="" />
    <label for="password"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('user/login','Senha');?><a class="anchor-required">*</a></label>
</div>

<div class="login-actions">
    <label class="login-label"><input class="input-checkbox me-1" type="checkbox" name="rememberMe" value="1"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('user/login','Lembrar');?></label>
    <a class="forgot-pw" href="<?php echo erLhcoreClassDesign::baseurl('user/forgotpassword')?>"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('user/login','Esqueceu sua senha?')?></a>
</div>

<?php include(erLhcoreClassDesign::designtpl('lhuser/oauth_login_multiinclude_tab.tpl.php'));?>

<?php include(erLhcoreClassDesign::designtpl('lhkernel/csfr_token.tpl.php'));?>

    <div class="btn-group btn-group-sm" role="group" aria-label="Login">
        <input type="submit" class="btn-login" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('user/login','Entrar');?>" name="Login" />
    </div>





<input type="hidden" name="redirect" value="<?php echo htmlspecialchars($redirect_url);?>" />

<?php include(erLhcoreClassDesign::designtpl('lhkernel/recaptcha.tpl.php'));?>

</form>
