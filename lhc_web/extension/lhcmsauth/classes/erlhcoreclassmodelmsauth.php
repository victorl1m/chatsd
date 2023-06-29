<?php

class erLhcoreClassModelMSAuth
{
	use erLhcoreClassDBTrait;

	public static $dbTable = 'lhc_ms_auth';

	public static $dbTableId = 'id';

	public static $dbSessionHandler = 'erLhcoreClassExtensionLhcmsauth::getSession';

	public static $dbSortOrder = 'DESC';

    public function getState()
    {
        return array(
            'id' => $this->id,
            'oauth_uid' => $this->oauth_uid,
            'name' => $this->name,
            'surname' => $this->surname,
            'display_name' => $this->display_name,
            'email' => $this->email,
            'user_id' => $this->user_id,
            'txtSessionKey' => $this->txtSessionKey,
            'txtCodeVerifier' => $this->txtCodeVerifier,
            'dtExpires' => $this->dtExpires,
            'txtRefreshToken' => $this->txtRefreshToken,
            'txtToken' => $this->txtToken,
            'txtIDToken' => $this->txtIDToken,
            'completed' => $this->completed,
        );
    }

    public function __toString()
    {
        return $this->oauth_uid;
    }

    public function __get($var)
    {
        switch ($var) {
                
            case 'callback_url':
                $this->callback_url = '';
                return $this->callback_url;
                break;

            default:
                ;
                break;
        }
    }

    public $id = null;
    public $oauth_uid = '';
    public $user_id = 0;
    public $name = '';
    public $surname = '';
    public $display_name = '';
    public $txtSessionKey = '';
    public $txtCodeVerifier = '';
    public $dtExpires = '';
    public $txtRefreshToken = '';
    public $txtToken = '';
    public $txtIDToken = '';
    public $completed = 0;

    public $email = '';
}

?>
