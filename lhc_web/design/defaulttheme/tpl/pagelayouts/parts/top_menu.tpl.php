<?php $currentUser = erLhcoreClassUser::instance(); ?>

<nav class="navbar navbar-expand-lg border-bottom p-0 ps-1 top-menu-bar-lhc" translate="no">
    <!-- <?php include_once(erLhcoreClassDesign::designtpl('pagelayouts/parts/page_head_logo_back_office.tpl.php')); ?> -->

    <!-- <?php include_once(erLhcoreClassDesign::designtpl('pagelayouts/parts/page_head_side_control.tpl.php')); ?> -->

    <div ng-cloak class="version-updated float-start"
        ng-if="lhc.lhcPendingRefresh == true || lhc.lhcConnectivityProblem == true || lhc.inActive == true">
        <div ng-if="lhc.lhcPendingRefresh == true">
            <i class="material-icons">update</i>
            <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout', 'This window will be automatically refreshed in {{lhc.lhcVersionCounter}} seconds due to a version update.'); ?>
        </div>
        <div ng-if="lhc.lhcConnectivityProblem == true">
            <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout', 'You have weak internet connection or the server has problems. Try to refresh the page. Error code {{lhc.lhcConnectivityProblemExplain}}'); ?>
        </div>
        <div ng-if="lhc.inActive == true">
            <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout', 'You went offline because of inactivity. Please close other chat windows if you have any'); ?>
        </div>
    </div>

    <!-- <?php if (erLhcoreClassModelUserSetting::getSetting('hide_quick_notifications', 0) == 0): ?>
        <div ng-cloak class="text-muted float-start fs12 abbr-list d-none d-sm-block"
            ng-if="!(lhc.lhcPendingRefresh == true || lhc.lhcConnectivityProblem == true || lhc.inActive == true) && lhc.last_actions.length > 0">
            <span class="material-icons action-image" ng-click="lhc.last_actions_index = lhc.last_actions_index + 1"
                ng-if="lhc.last_actions_index < lhc.last_actions.length - 1">
                expand_more
            </span>
            <span ng-if="lhc.last_actions_index > 0" ng-click="lhc.last_actions_index = lhc.last_actions_index - 1"
                class="material-icons action-image">
                expand_less
            </span>
            <span class="material-icons" ng-if="lhc.last_actions_index > 0">
                hourglass_full
            </span>
            <span ng-if="lhc.last_actions[lhc.last_actions_index].type == 'user_wrote'"><b>{{lhc.last_actions[lhc.last_actions_index].nick}}</b>
                - <i>{{lhc.last_actions[lhc.last_actions_index].msg}}</i>
                <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout', 'in chat'); ?>
                - {{lhc.last_actions[lhc.last_actions_index].chat_id}}
            </span>
            <span ng-if="lhc.last_actions[lhc.last_actions_index].type != 'user_wrote' && lhc.last_actions[lhc.last_actions_index].type != 'mac' && lhc.last_actions[lhc.last_actions_index].type != 'mac_history'"><b>{{lhc.last_actions[lhc.last_actions_index].nick}}</b>
                - <i>{{lhc.last_actions[lhc.last_actions_index].msg}}</i> -
                {{lhc.last_actions[lhc.last_actions_index].chat_id}}</span>
            <span ng-if="lhc.last_actions[lhc.last_actions_index].type == 'mac'"><b>{{lhc.last_actions[lhc.last_actions_index].nick}}</b>
                -
                <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout', 'active chat was opened'); ?>
                - {{lhc.last_actions[lhc.last_actions_index].chat_id}}
            </span>
            <span ng-if="lhc.last_actions[lhc.last_actions_index].type == 'mac_history'"><b>{{lhc.last_actions[lhc.last_actions_index].nick}}</b>
                -
                <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout', 'previously loaded chat was opened'); ?>
                - {{lhc.last_actions[lhc.last_actions_index].chat_id}}
            </span>
        </div>
    <?php endif; ?> -->

    <button class="navbar-toggler btn border-0 btn-outline-secondary pb-2" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="material-icons me-0">menu</span>
    </button>

    <div class="collapse navbar-collapse topmenu-div" id="navbarNavDropdown">
        <ul ng-init="lhc.getToggleWidget('track_open_chats');lhc.getToggleWidget('group_offline_chats')" class="topmenu-search">

            <?php include_once(erLhcoreClassDesign::designtpl('pagelayouts/parts/top_menu_multiinclude.tpl.php')); ?>

            <div class="dropdown-item">
                <div class="input-group input-group-sm">
                    <input type="number" max="99999" class="global-search" ng-model="lhc.chat_to_open" ng-keyup="$event.keyCode == 13 ? lhc.startChatByID(lhc.chat_to_open) : ''" placeholder="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('front/default', 'ID do atendimento')?>" required>
                </div>
            </div>

            <?php include_once(erLhcoreClassDesign::designtpl('pagelayouts/parts/user_box.tpl.php')); ?>

        </ul>
        <!-- <div class="search-preview" id="preview"> -->
        </div>
    </div>
</nav>


<!-- phase 2 -->

<!-- <?php
// Establish the database connection
$servername = '127.0.0.1';
$username = 'livehelper';
$password = 'P@ssw0rd';
$database = 'livechatdb';

$connection = mysqli_connect($servername, $username, $password, $database);

// Check if the connection was successful
if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

// Assuming you have a database connection, you can execute the query
$query = "SELECT id, name FROM lh_users"; // Changed 'username' to 'name'

$result = mysqli_query($connection, $query);

// Store the users in an array for searching
$users = array();
while ($row = mysqli_fetch_assoc($result)) {
    $users[] = $row;
}
?>

</ul>
</div>
</nav>

<script>
    function globalSearch() {
        var input = document.querySelector('.global-search');
        var preview = document.querySelector('#preview');
        var searchValue = input.value.trim().toLowerCase();
        var matchingUsers = <?php echo json_encode($users); ?>;

        // order matching users
        matchingUsers.sort(function (a, b) {
            return a.name.toLowerCase().indexOf(searchValue) - b.name.toLowerCase().indexOf(searchValue); // Changed 'username' to 'name'
        });

        // clear preview if search value is empty
        if (!searchValue) {
            preview.innerHTML = '';
            return;
        }

        // Clear the preview section
        preview.innerHTML = '';

        // Filter the users based on the search value
        var filteredUsers = matchingUsers.filter(function (user) {
            return user.name.toLowerCase().includes(searchValue); // Changed 'username' to 'name'
        });

        // Display the matching users in the preview section
        filteredUsers.forEach(function (user) {
            var userDiv = document.createElement('div');
            userDiv.classList.add('user');
            userDiv.textContent = user.name; // Changed 'username' to 'name'
            preview.appendChild(userDiv);
        });
    }
</script> -->
