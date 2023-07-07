<?php

class erLhcoreClassExtensionLhcmsauth {

    public function __construct() {

    }

    public function run() {
        $this->registerAutoload ();

        $dispatcher = erLhcoreClassChatEventDispatcher::getInstance();

        $dispatcher->listen('instance.extensions_structure', array(
            $this,
            'checkStructure'
        ));

        $dispatcher->listen('instance.registered.created', array(
            $this,
            'instanceCreated'
        ));

        $dispatcher->listen('user.login_after_success_authenticate', array(
            $this,
            'loginSuccess'
        ));

        $dispatcher->listen('user.deleted', array(
            $this,
            'userDelete'
        ));

    }

    public function userDelete($params)
    {
        // Delete user
        $q = ezcDbInstance::get()->createDeleteQuery();
        $q->deleteFrom( 'lhc_ms_auth' )->where( $q->expr->eq( 'user_id', $q->bindValue($params['userData']->id) ) );
        $stmt = $q->prepare();
        $stmt->execute();
    }

    public function loginSuccess($params)
    {
        if (isset($_POST['oauth_ms']) && is_numeric($_POST['oauth_ms'])) {
            $msauth = erLhcoreClassModelMSAuth::fetch($_POST['oauth_ms']);
            if ($msauth instanceof erLhcoreClassModelMSAuth && $msauth->user_id == 0){
                $msauth->user_id = $params['current_user']->getUserID();
                $msauth->saveThis();
            }
        }
    }

    /**
     * Checks automated hosting structure
     *
     * This part is executed once in manager is run this cronjob.
     * php cron.php -s site_admin -e instance -c cron/extensions_update
     *
     * */
    public function checkStructure()
    {
        erLhcoreClassUpdate::doTablesUpdate(json_decode(file_get_contents('extension/lhcmsauth/doc/structure.json'), true));
    }

    /**
     * Used only in automated hosting enviroment
     */
    public function instanceCreated($params)
    {
        try {
            // Just do table updates
            erLhcoreClassUpdate::doTablesUpdate(json_decode(file_get_contents('extension/lhcmsauth/doc/structure.json'), true));
        } catch (Exception $e) {
            erLhcoreClassLog::write(print_r($e, true));
        }
    }

    public function registerAutoload() {
        spl_autoload_register ( array (
            $this,
            'autoload'
        ), true, false );
    }

    public function autoload($className) {
        $classesArray = array (
            'erLhcoreClassModelMSAuth'         => 'extension/lhcmsauth/classes/erlhcoreclassmodelmsauth.php',
        );

        if (key_exists ( $className, $classesArray )) {
            include_once $classesArray [$className];
        }
    }

    public static function getSession() {
        if (! isset ( self::$persistentSession )) {
            self::$persistentSession = new ezcPersistentSession ( ezcDbInstance::get (), new ezcPersistentCodeManager ( './extension/lhcmsauth/pos' ) );
        }
        return self::$persistentSession;
    }

    public function __get($var) {
        switch ($var) {
            case 'settings' :
                $this->settings = [];
                return $this->settings;
                break;

            default :
                break;
        }
    }

    private static $persistentSession;
}


