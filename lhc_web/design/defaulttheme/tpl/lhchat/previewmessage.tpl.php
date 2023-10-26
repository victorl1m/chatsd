<?php if ($message_body === false) : ?>
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header pt-1 pb-1 ps-2 pe-2">
            <h4 class="modal-title" id="myModalLabel"><span class="material-icons">info_outline</span>&nbsp;Preview message</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
    <small>
<?php endif; ?>
            <div id="messagesBlockWrap">
                <div id="messagesBlock">
                    <div class="message-row message-admin operator-changes"><span class="usr-tit op-tit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="7" fill="none" viewBox="0 0 24 15"><path class="accent-svg" d="M23.256 10h.006-.01.005zm-.704-.52c.1.318.387.518.704.52.07 0 .148-.02.226-.04.39-.12.61-.55.48-.94C23.932 8.93 20.932 0 12 0S.067 8.93.037 9.02c-.13.39.09.81.48.94.4.13.82-.09.95-.48l.003-.005C1.603 9.085 4.207 1.5 12.01 1.5c7.842 0 10.432 7.65 10.542 7.98zM7 10a5 5 0 1110 0 5 5 0 01-10 0z"/></svg> Pré-visualização</span>
                        <?php $msgBody = $msg; ?>
                        <?php include(erLhcoreClassDesign::designtpl('lhchat/lists/msg_body.tpl.php'));?>
                    </div>
                </div>
            </div>

<?php if ($message_body === false) : ?>
</small>
<?php include(erLhcoreClassDesign::designtpl('lhkernel/modal_footer.tpl.php'));?>
<?php endif; ?>