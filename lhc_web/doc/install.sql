CREATE TABLE `lhc_ms_auth` (
   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
   `user_id` bigint(20) unsigned NOT NULL,
   `oauth_uid` varchar(50) NOT NULL,
   `name` varchar(200) NOT NULL,
   `email` varchar(200) NOT NULL,
   `surname` varchar(200) NOT NULL,
   `display_name` varchar(200) NOT NULL,
   `txtSessionKey` varchar(255) NOT NULL,
   `txtCodeVerifier` varchar(255) NOT NULL,
   `dtExpires` datetime NOT NULL,
   `txtRefreshToken` text NOT NULL,
   `txtToken` text NOT NULL,
   `txtIDToken` text NOT NULL,
   `completed` tinyint(1) unsigned NOT NULL,
   PRIMARY KEY (`id`),
   KEY `oauth_uid` (`oauth_uid`),
   KEY `user_id_completed` (`user_id`,`completed`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
