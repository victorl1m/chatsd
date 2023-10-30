<h1 class="attr-header">Configurações do EntraID</h1>

<form action="" method="post" ng-non-bindable>

    <?php include(erLhcoreClassDesign::designtpl('lhkernel/csfr_token.tpl.php'));?>

    <?php if (isset($updated) && $updated == 'done') : $msg = erTranslationClassLhTranslation::getInstance()->getTranslation('module/msauth','Settings updated'); ?>
        <?php include(erLhcoreClassDesign::designtpl('lhkernel/alert_success.tpl.php'));?>
    <?php endif; ?>

    <div class="form-floating mb-3 mt-3">
	    <input id="tenantid" name="ms_tenant_id" maxlength="100" autofocus="autofocus" class="startchat-input form-control form-control-sm" type="text" value="<?php (isset($ms_options['ms_tenant_id'])) ? print htmlspecialchars($ms_options['ms_tenant_id']) : print ''?>" required/>
	    <label for="tenantid" class="floating-label">Tenant ID<a class="anchor-required">*</a></label>
    </div>

    <div class="form-floating mb-3 mt-3">
	    <input id="clientid" name="ms_client_id" maxlength="100" autofocus="autofocus" class="startchat-input form-control form-control-sm" type="text" value="<?php (isset($ms_options['ms_client_id'])) ? print htmlspecialchars($ms_options['ms_client_id']) : print ''?>" required/>
	    <label for="clientid" class="floating-label">Client ID<a class="anchor-required">*</a></label>
    </div>

    <div class="form-floating mb-3 mt-3">
	    <input id="clientsecret" name="ms_secret" maxlength="100" autofocus="autofocus" class="startchat-input form-control form-control-sm" type="text" placeholder="Visualização indisponível" required/>
	    <label for="clientsecret" class="floating-label">Client Secret<a class="anchor-required">&nbsp;(writeOnly)</a></label>
    </div>

    <div class="form-group">
        <input class="form-check-input" type="checkbox" name="ms_auto_login" <?php (isset($ms_options['ms_auto_login']) && $ms_options['ms_auto_login'] == 1) ? print 'checked="checked"' : print ''?> value="on">
        <label class="form-check-label" for="flexCheckDefault">Autenticar automaticamente caso o primeiro acesso encontre o usuário correspondente <span class="anchor-required">(E-mail)</span></label>
    </div>

    <input type="submit" class="btn btn-secondary mt-3" name="StoreOptions" value="Salvar configurações" />

</form>
