<h1 class="login-title">Lembrete de senha</h1>
<p style="color: #c4da53; text-align: center;" class="login-subtitle">Caso o e-mail esteja cadastrado, enviaremos um link para redefinição de senha. Ao clicar no link no e-mail, você poderá configurar uma nova senha.</p>


<script>
    function redirectToMain() {
        var currentUrl = window.location.href; // Get the current URL
        var modifiedUrl = currentUrl.replace("/user/forgotpassword", ""); // Remove "/user/forgotpassword" from the URL
        window.location.href = modifiedUrl; // Redirect to the modified URL
    }
</script>

<button onclick={redirectToMain()} class="btn-forgot">Voltar</button>