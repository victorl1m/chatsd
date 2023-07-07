Microsoft Account Login support

## Install instructions

1. Clone github repository
2. Put cloned folder in extension/ directory
3. Activate extension in settings/settings.ini.php file
```
'extensions' => 
    array (          
        'lhcmsauth'
    ),
```
5. Clean cache. Just click clean cache in Live Helper Chat back office.
6. Execute doc/install.sql on database manager or just run
    ```
    php cron.php -s site_admin -e lhcmsauth -c cron/update_structure
    ```
9. Enter settings in module configuration from left menu Modules -> MS Auth
10. That's it.

You now can login using MS