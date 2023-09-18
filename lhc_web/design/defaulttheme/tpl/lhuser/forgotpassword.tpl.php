<h1 class="login-title">Esqueci minha senha</h1>

<?php if (isset($errors)) : ?>
		<?php include(erLhcoreClassDesign::designtpl('lhkernel/validation_error.tpl.php'));?>
<?php endif; ?>

<form style="width: 100%;" method="post" action="<?php echo erLhcoreClassDesign::baseurl('user/forgotpassword')?>">

<div class="form-floating mb-3 mt-3">
    <input id="email" type="text" autofocus="autofocus" class="startchat-input form-control form-control-sm" name="Email" aria-required="true" aria-label="Informe seu e-mail" />
    <label for="email" class="floating-label">E-mail</label>
</div>

<?php include(erLhcoreClassDesign::designtpl('lhkernel/csfr_token.tpl.php'));?>

<?php include(erLhcoreClassDesign::designtpl('lhkernel/recaptcha.tpl.php'));?>

<input type="submit" class="btn-forgot" value="Lembrete de senha" name="Forgotpassword" />

</form>
