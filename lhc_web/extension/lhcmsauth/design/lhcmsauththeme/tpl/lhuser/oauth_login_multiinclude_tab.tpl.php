<?php if (!isset($_GET['oauth_ms']) && !isset($_POST['oauth_ms'])) : ?>
    <div class="msauth-div">

    <a href="<?php echo erLhcoreClassDesign::baseurl('msoauth/login')?>" class="msauth-box">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 2499.6 2500">
      <path fill="#f1511b" d="M1187.9 1187.9H0V0h1187.9z"></path>
      <path fill="#80cc28" d="M2499.6 1187.9h-1188V0h1187.9v1187.9z"></path>
      <path fill="#00adef" d="M1187.9 2500H0V1312.1h1187.9z"></path>
      <path fill="#fbbc09" d="M2499.6 2500h-1188V1312.1h1187.9V2500z"></path>
    </svg>
        <h1 class="msauth-text">Entrar com Microsoft</h1>
</a>
</div>
<?php else : ?>
<p><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/msauth','Please login to complete process');?>.</p>
<input ng-non-bindable type="hidden" name="oauth_ms" value="<?php echo isset($_POST['oauth_ms']) ? $_POST['oauth_ms'] : (isset($_GET['oauth_ms']) ? $_GET['oauth_ms'] : '')?>">
<?php endif; ?>