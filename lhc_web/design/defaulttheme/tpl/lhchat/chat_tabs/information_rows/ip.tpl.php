<?php if (isset($orderInformation['ip']['enabled']) && $orderInformation['ip']['enabled'] == true) : ?>
<div class="col-6 pb-1" title="IP" id="ipAddr">
    <?php echo htmlspecialchars($chat->ip)?>
</div>
<?php endif; ?>