<?php

/**
 * @Project NUKEVIET 3.4
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2012 VINADES.,JSC. All rights reserved
 * @Createdate Sun, 08 Apr 2012 00:00:00 GMT GMT
 */

if(!defined('NV_MAINFILE'))die('Stop!!!');define('NV_AUTHORS_GLOBALTABLE',$db_config['prefix'].'_authors');define('NV_USERS_GLOBALTABLE',$db_config['prefix'].'_users');define('NV_CONFIG_GLOBALTABLE',$db_config['prefix'].'_config');define('NV_GROUPS_GLOBALTABLE',$db_config['prefix'].'_groups');define('NV_LANGUAGE_GLOBALTABLE',$db_config['prefix'].'_language');define('NV_SESSIONS_GLOBALTABLE',$db_config['prefix'].'_sessions');define('NV_CRONJOBS_GLOBALTABLE',$db_config['prefix'].'_cronjobs');$sql_create_table[]="CREATE TABLE `".NV_AUTHORS_GLOBALTABLE."` (\n  `admin_id` mediumint(8) unsigned NOT NULL,\n  `editor` varchar(100) NOT NULL,\n  `lev` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `files_level` varchar(255) NOT NULL,\n  `position` varchar(255) NOT NULL,\n  `addtime` int(11) NOT NULL DEFAULT '0',\n  `edittime` int(11) NOT NULL DEFAULT '0',\n  `is_suspend` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `susp_reason` mediumtext NOT NULL,\n  `check_num` varchar(40) NOT NULL,\n  `last_login` int(11) unsigned NOT NULL DEFAULT '0',\n  `last_ip` varchar(45) NOT NULL,\n  `last_agent` varchar(255) NOT NULL,\n  PRIMARY KEY (`admin_id`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".NV_AUTHORS_GLOBALTABLE."_config` (\n  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,\n  `keyname` varchar(32) DEFAULT NULL,\n  `mask` tinyint(4) NOT NULL DEFAULT '0',\n  `begintime` int(11) DEFAULT NULL,\n  `endtime` int(11) DEFAULT NULL,\n  `notice` varchar(255) NOT NULL,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `keyname` (`keyname`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".NV_USERS_GLOBALTABLE."_config` (\n  `config` varchar(100) NOT NULL,\n  `content` mediumtext NOT NULL,\n  `edit_time` int(11) unsigned NOT NULL DEFAULT '0',\n  PRIMARY KEY (`config`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".NV_USERS_GLOBALTABLE."_question` (\n  `qid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,\n  `title` varchar(255) NOT NULL DEFAULT '',\n  `lang` char(2) NOT NULL DEFAULT '',\n  `weight` mediumint(8) unsigned NOT NULL DEFAULT '0',\n  `add_time` int(11) unsigned NOT NULL DEFAULT '0',\n  `edit_time` int(11) unsigned NOT NULL DEFAULT '0',\n  PRIMARY KEY (`qid`),\n  UNIQUE KEY `title` (`title`,`lang`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".NV_USERS_GLOBALTABLE."` (\n  `userid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,\n  `username` varchar(100) NOT NULL DEFAULT '',\n  `md5username` char(32) NOT NULL DEFAULT '',\n  `password` varchar(50) NOT NULL DEFAULT '',\n  `email` varchar(100) NOT NULL DEFAULT '',\n  `full_name` varchar(255) NOT NULL DEFAULT '',\n  `gender` char(1) NOT NULL,\n  `photo` varchar(255) NOT NULL DEFAULT '',\n  `birthday` int(11) NOT NULL,\n  `sig` text,\n  `regdate` int(11) NOT NULL DEFAULT '0',\n  `website` varchar(255) NOT NULL DEFAULT '',\n  `location` varchar(255) NOT NULL,\n  `yim` varchar(100) NOT NULL DEFAULT '',\n  `telephone` varchar(100) NOT NULL DEFAULT '',\n  `fax` varchar(100) NOT NULL DEFAULT '',\n  `mobile` varchar(100) NOT NULL DEFAULT '',\n  `question` varchar(255) NOT NULL,\n  `answer` varchar(255) NOT NULL DEFAULT '',\n  `passlostkey` varchar(40) NOT NULL DEFAULT '',\n  `view_mail` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `remember` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `in_groups` varchar(255) NOT NULL DEFAULT '',\n  `active` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `checknum` varchar(40) NOT NULL DEFAULT '',\n  `last_login` int(11) unsigned NOT NULL DEFAULT '0',\n  `last_ip` varchar(45) NOT NULL DEFAULT '',\n  `last_agent` varchar(255) NOT NULL DEFAULT '',\n  `last_openid` varchar(255) NOT NULL DEFAULT '',\n  PRIMARY KEY (`userid`),\n  UNIQUE KEY `username` (`username`),\n  UNIQUE KEY `md5username` (`md5username`),\n  UNIQUE KEY `email` (`email`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".NV_USERS_GLOBALTABLE."_reg` (\n  `userid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,\n  `username` varchar(100) NOT NULL DEFAULT '',\n  `md5username` char(32) NOT NULL DEFAULT '',\n  `password` varchar(50) NOT NULL DEFAULT '',\n  `email` varchar(100) NOT NULL DEFAULT '',\n  `full_name` varchar(255) NOT NULL DEFAULT '',\n  `regdate` int(11) unsigned NOT NULL DEFAULT '0',\n  `question` varchar(255) NOT NULL,\n  `answer` varchar(255) NOT NULL DEFAULT '',\n  `checknum` varchar(50) NOT NULL DEFAULT '',\n  PRIMARY KEY (`userid`),\n  UNIQUE KEY `login` (`username`),\n  UNIQUE KEY `md5username` (`md5username`),\n  UNIQUE KEY `email` (`email`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".NV_USERS_GLOBALTABLE."_openid` (\n  `userid` mediumint(8) unsigned NOT NULL DEFAULT '0',\n  `openid` varchar(255) NOT NULL DEFAULT '',\n  `opid` varchar(50) NOT NULL DEFAULT '',\n  `email` varchar(100) NOT NULL DEFAULT '',\n  PRIMARY KEY (`opid`),\n  KEY `userid` (`userid`),\n  KEY `email` (`email`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".NV_CONFIG_GLOBALTABLE."` (\n  `lang` char(3) NOT NULL DEFAULT 'sys',\n  `module` varchar(25) NOT NULL DEFAULT 'global',\n  `config_name` varchar(30) NOT NULL DEFAULT '',\n  `config_value` mediumtext NOT NULL,\n  UNIQUE KEY `lang` (`lang`,`module`,`config_name`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".NV_CRONJOBS_GLOBALTABLE."` (\n  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,\n  `start_time` int(11) unsigned NOT NULL DEFAULT '0',\n  `interval` int(11) unsigned NOT NULL DEFAULT '0',\n  `run_file` varchar(255) NOT NULL,\n  `run_func` varchar(255) NOT NULL,\n  `params` varchar(255) NOT NULL,\n  `del` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `is_sys` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `act` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `last_time` int(11) unsigned NOT NULL DEFAULT '0',\n  `last_result` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  PRIMARY KEY (`id`),\n  KEY `is_sys` (`is_sys`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".NV_GROUPS_GLOBALTABLE."` (\n  `group_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,\n  `title` varchar(255) NOT NULL,\n  `content` mediumtext NOT NULL,\n  `add_time` int(11) NOT NULL,\n  `exp_time` int(11) NOT NULL,\n  `users` mediumtext NOT NULL,\n  `public` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `weight` int(11) unsigned NOT NULL DEFAULT '0',\n  `act` tinyint(1) unsigned NOT NULL,\n  PRIMARY KEY (`group_id`),\n  UNIQUE KEY `title` (`title`),\n  KEY `exp_time` (`exp_time`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".NV_LANGUAGE_GLOBALTABLE."` (\n  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,\n  `idfile` mediumint(8) unsigned NOT NULL DEFAULT '0',\n  `lang_key` varchar(50) NOT NULL,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `filelang` (`idfile`,`lang_key`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".NV_LANGUAGE_GLOBALTABLE."_file` (\n  `idfile` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,\n  `module` varchar(50) NOT NULL,\n  `admin_file` varchar(255) NOT NULL DEFAULT '0',  \n  `langtype` varchar(50) NOT NULL,\n  PRIMARY KEY (`idfile`),\n  UNIQUE KEY `module` (`module`,`admin_file`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".NV_SESSIONS_GLOBALTABLE."` (\n  `session_id` varchar(50) DEFAULT NULL,\n  `uid` mediumint(8) unsigned NOT NULL DEFAULT '0',\n  `full_name` varchar(100) NOT NULL,\n  `onl_time` int(11) unsigned NOT NULL DEFAULT '0',\n  UNIQUE KEY `session_id` (`session_id`),\n  KEY `onl_time` (`onl_time`)\n) ENGINE=MEMORY";$sql_create_table[]="CREATE TABLE `".$db_config['prefix']."_setup` (\n  `lang` char(2) NOT NULL,\n  `module` varchar(50) NOT NULL,\n  `tables` varchar(255) NOT NULL,\n  `version` varchar(100) NOT NULL,\n  `setup_time` int(11) unsigned NOT NULL DEFAULT '0',\n  UNIQUE KEY `lang` (`lang`,`module`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".$db_config['prefix']."_setup_language` (\n  `lang` char(2) NOT NULL,\n  `setup` tinyint(1) NOT NULL DEFAULT '0',\n  PRIMARY KEY (`lang`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".$db_config['prefix']."_setup_modules` (\n  `title` varchar(55) NOT NULL,\n  `is_sysmod` tinyint(1) NOT NULL DEFAULT '0',\n  `virtual` tinyint(1) NOT NULL DEFAULT '0',\n  `module_file` varchar(50) NOT NULL DEFAULT '',\n  `module_data` varchar(55) NOT NULL DEFAULT '',\n  `mod_version` varchar(50) NOT NULL,\n  `addtime` int(11) NOT NULL DEFAULT '0',\n  `author` text NOT NULL,\n  `note` varchar(255) NOT NULL DEFAULT '',\n  PRIMARY KEY (`title`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".$db_config['prefix']."_banners_click` (\n  `bid` mediumint(8) NOT NULL DEFAULT '0',\n  `click_time` int(11) unsigned NOT NULL DEFAULT '0',\n  `click_day` int(2) NOT NULL,\n  `click_ip` varchar(15) NOT NULL,\n  `click_country` varchar(10) NOT NULL,\n  `click_browse_key` varchar(100) NOT NULL,\n  `click_browse_name` varchar(100) NOT NULL,\n  `click_os_key` varchar(100) NOT NULL,\n  `click_os_name` varchar(100) NOT NULL,\n  `click_ref` varchar(255) NOT NULL,\n  KEY `bid` (`bid`),\n  KEY `click_day` (`click_day`),\n  KEY `click_ip` (`click_ip`),\n  KEY `click_country` (`click_country`),\n  KEY `click_browse_key` (`click_browse_key`),\n  KEY `click_os_key` (`click_os_key`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".$db_config['prefix']."_banners_clients` (\n`id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,\n  `login` varchar(60) NOT NULL,\n  `pass` varchar(50) NOT NULL,\n  `reg_time` int(11) unsigned NOT NULL DEFAULT '0',\n  `full_name` varchar(255) NOT NULL,\n  `email` varchar(100) NOT NULL,\n  `website` varchar(255) NOT NULL,\n  `location` varchar(255) NOT NULL,\n  `yim` varchar(100) NOT NULL,\n  `phone` varchar(100) NOT NULL,\n  `fax` varchar(100) NOT NULL,\n  `mobile` varchar(100) NOT NULL,\n  `act` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `check_num` varchar(40) NOT NULL,\n  `last_login` int(11) unsigned NOT NULL DEFAULT '0',\n  `last_ip` varchar(15) NOT NULL,\n  `last_agent` varchar(255) NOT NULL,\n  `uploadtype` varchar(255) NOT NULL,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `login` (`login`),\n  UNIQUE KEY `email` (`email`),\n  KEY `full_name` (`full_name`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".$db_config['prefix']."_banners_plans` (\n  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,\n  `blang` char(2) NOT NULL,\n  `title` varchar(255) NOT NULL,\n  `description` varchar(255) NOT NULL,\n  `form` varchar(100) NOT NULL,\n  `width` smallint(4) unsigned NOT NULL DEFAULT '0',\n  `height` smallint(4) unsigned NOT NULL DEFAULT '0',\n  `act` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  PRIMARY KEY (`id`),\n  KEY `title` (`title`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".$db_config['prefix']."_banners_rows` (\n  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,\n  `title` varchar(255) NOT NULL,\n  `pid` mediumint(8) unsigned NOT NULL DEFAULT '0',\n  `clid` mediumint(8) unsigned NOT NULL DEFAULT '0',\n  `file_name` varchar(255) NOT NULL,\n  `file_ext` varchar(100) NOT NULL,\n  `file_mime` varchar(100) NOT NULL,\n  `width` int(4) unsigned NOT NULL DEFAULT '0',\n  `height` int(4) unsigned NOT NULL DEFAULT '0',\n  `file_alt` varchar(255) NOT NULL,\n  `click_url` varchar(255) NOT NULL,\n  `file_name_tmp` varchar(255) NOT NULL,\n  `file_alt_tmp` varchar(255) NOT NULL,\n  `click_url_tmp` varchar(255) NOT NULL,\n  `add_time` int(11) unsigned NOT NULL DEFAULT '0',\n  `publ_time` int(11) unsigned NOT NULL DEFAULT '0',\n  `exp_time` int(11) unsigned NOT NULL DEFAULT '0',\n  `hits_total` mediumint(8) unsigned NOT NULL DEFAULT '0',\n  `act` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `weight` int(11) NOT NULL default '0',  \n  PRIMARY KEY (`id`),\n  KEY `pid` (`pid`),\n  KEY `clid` (`clid`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".$db_config['prefix']."_banip` (\n  `id` int(11) NOT NULL AUTO_INCREMENT,\n  `ip` varchar(32) DEFAULT NULL,\n  `mask` tinyint(4) NOT NULL DEFAULT '0',  \n  `area` tinyint(3) NOT NULL,\n  `begintime` int(11) DEFAULT NULL,\n  `endtime` int(11) DEFAULT NULL,\n  `notice` varchar(255) NOT NULL,\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `ip` (`ip`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".$db_config['prefix']."_logs` (\n\t`id` int(11) NOT NULL AUTO_INCREMENT,\n\t`lang` varchar(10) NOT NULL,\n\t`module_name` varchar(150) NOT NULL,\n\t`name_key` varchar(255) NOT NULL,\n\t`note_action` text NOT NULL,\n\t`link_acess` varchar(255) NOT NULL,\n\t`userid` int(11) NOT NULL,\n\t`log_time` int(11) NOT NULL,\n\tPRIMARY KEY (`id`)\n) ENGINE=MyISAM";$sql_create_table[]="CREATE TABLE `".$db_config['prefix']."_ipcountry` (\n\t  `ip_from` int(11) unsigned NOT NULL,\n\t  `ip_to` int(11) unsigned NOT NULL,\n\t  `country` char(2) NOT NULL,\n\t  `ip_file` smallint(5) unsigned NOT NULL,\n\t  `time` int(11) NOT NULL DEFAULT '0',\n\t  UNIQUE KEY `ip_from` (`ip_from`,`ip_to`),\n\t  KEY `ip_file` (`ip_file`),\n\t  KEY `country` (`country`),\n\t  KEY `time` (`time`)\n) ENGINE=MyISAM";$sql_create_table[]="INSERT INTO `".NV_USERS_GLOBALTABLE."_config` (`config`, `content`, `edit_time`) VALUES\n        ('registertype', '1', ".NV_CURRENTTIME."),\n        ('deny_email', 'yoursite.com|mysite.com|localhost|xxx', ".NV_CURRENTTIME."),\n        ('deny_name', 'anonimo|anonymous|god|linux|nobody|operator|root', ".NV_CURRENTTIME.")";$sql_create_table[]="INSERT INTO `".NV_CONFIG_GLOBALTABLE."` (`lang`, `module`, `config_name`, `config_value`) VALUES\n('sys', 'global', 'closed_site', '0'),\n('sys', 'global', 'site_keywords', 'NukeViet, portal, mysql, php'),\n('sys', 'global', 'site_phone', ''),\n('sys', 'global', 'site_lang', '".NV_LANG_DATA."'),\n('sys', 'global', 'admin_theme', 'admin_full'),\n('sys', 'global', 'date_pattern', 'l, d-m-Y'),\n('sys', 'global', 'time_pattern', 'H:i'),\n('sys', 'global', 'block_admin_ip', '0'),\n('sys', 'global', 'admfirewall', '0'),\n('sys', 'global', 'online_upd', '1'),\n('sys', 'global', 'statistic', '1'),\n('sys', 'global', 'dump_autobackup', '1'),\n('sys', 'global', 'dump_backup_ext', 'gz'),\n('sys', 'global', 'dump_backup_day', '30'),\n('sys', 'global', 'gfx_chk', '".$global_config['gfx_chk']."'),\n('sys', 'global', 'file_allowed_ext', 'adobe,archives,audio,documents,flash,images,real,video'),\n('sys', 'global', 'forbid_extensions', 'php'),\n('sys', 'global', 'forbid_mimes', ''),\n('sys', 'global', 'nv_max_size', '".min(nv_converttoBytes(ini_get('upload_max_filesize')),nv_converttoBytes(ini_get('post_max_size')))."'),\n('sys', 'global', 'upload_checking_mode', 'strong'),\n('sys', 'global', 'upload_logo', 'images/logo.png'),\n('sys', 'global', 'str_referer_blocker', '0'),\n('sys', 'global', 'getloadavg', '0'),\n('sys', 'global', 'mailer_mode', ''),\n('sys', 'global', 'smtp_host', 'smtp.gmail.com'),\n('sys', 'global', 'smtp_ssl', '1'),\n('sys', 'global', 'smtp_port', '465'),\n('sys', 'global', 'smtp_username', 'user@gmail.com'),\n('sys', 'global', 'smtp_password', 'userpass'),\n('sys', 'global', 'allowuserreg', '1'),\n('sys', 'global', 'allowuserlogin', '1'),\n('sys', 'global', 'allowloginchange', '0'),\n('sys', 'global', 'allowquestion', '1'),\n('sys', 'global', 'allowuserpublic', '0'),\n('sys', 'global', 'useactivate', '2'),\n('sys', 'global', 'allowmailchange', '1'),\n('sys', 'global', 'allow_sitelangs', '".NV_LANG_DATA."'),\n('sys', 'global', 'allow_adminlangs', '".implode(",",$languageslist)."'),\n('sys', 'global', 'read_type', '0'),\n('sys', 'global', 'is_url_rewrite', '".$global_config['is_url_rewrite']."'),\n('sys', 'global', 'rewrite_optional', '".$global_config['rewrite_optional']."'),\n('sys', 'global', 'rewrite_endurl', '".$global_config['rewrite_endurl']."'),\n('sys', 'global', 'rewrite_exturl', '".$global_config['rewrite_exturl']."'),\n('sys', 'global', 'autocheckupdate', '1'),\n('sys', 'global', 'autologomod', ''),\n('sys', 'global', 'autologosize1', '50'),\n('sys', 'global', 'autologosize2', '40'),\n('sys', 'global', 'autologosize3', '30'),\n('sys', 'global', 'autoupdatetime', '24'),\n('sys', 'global', 'gzip_method', '".$global_config['gzip_method']."'),\n('sys', 'global', 'is_user_forum', '0'),\n('sys', 'global', 'openid_mode', '1'),\n('sys', 'global', 'authors_detail_main', '0'),\n('sys', 'global', 'spadmin_add_admin', '1'),\n('sys', 'global', 'openid_servers', 'yahoo,google,myopenid'),\n('sys', 'global', 'optActive', '1'),\n('sys', 'global', 'googleAnalyticsID', ''),\n('sys', 'global', 'googleAnalyticsSetDomainName', '0'),\n('sys', 'global', 'searchEngineUniqueID', ''),\n('sys', 'global', 'captcha_type', '0'),\n('sys', 'global', 'revision', '".$global_config['revision']."'),\n('sys', 'global', 'version', '".$global_config['version']."')";$sql_create_table[]="INSERT INTO `".NV_CRONJOBS_GLOBALTABLE."` (`id`, `start_time`, `interval`, `run_file`, `run_func`, `params`, `del`, `is_sys`, `act`, `last_time`, `last_result`) VALUES\n(NULL, ".NV_CURRENTTIME.", 5, 'online_expired_del.php', 'cron_online_expired_del', '', 0, 1, 1, 0, 0),\n(NULL, ".NV_CURRENTTIME.", 1440, 'dump_autobackup.php', 'cron_dump_autobackup', '', 0, 1, 1, 0, 0),\n(NULL, ".NV_CURRENTTIME.", 60, 'temp_download_destroy.php', 'cron_auto_del_temp_download', '', 0, 1, 1, 0, 0),\n(NULL, ".NV_CURRENTTIME.", 30, 'ip_logs_destroy.php', 'cron_del_ip_logs', '', 0, 1, 1, 0, 0),\n(NULL, ".NV_CURRENTTIME.", 1440, 'error_log_destroy.php', 'cron_auto_del_error_log', '', 0, 1, 1, 0, 0),\n(NULL, ".NV_CURRENTTIME.", 360, 'error_log_sendmail.php', 'cron_auto_sendmail_error_log', '', 0, 1, 0, 0, 0),\n(NULL, ".NV_CURRENTTIME.", 60, 'ref_expired_del.php', 'cron_ref_expired_del', '', 0, 1, 1, 0, 0),\n(NULL, ".NV_CURRENTTIME.", 1440, 'siteDiagnostic_update.php', 'cron_siteDiagnostic_update', '', 0, 1, 1, 0, 0),\n(NULL, ".NV_CURRENTTIME.", 60, 'check_version.php', 'cron_auto_check_version', '', 0, 1, 1, 0, 0)";$sql_create_table[]="INSERT INTO `".$db_config['prefix']."_setup_modules` (`title`, `is_sysmod`, `virtual`, `module_file`, `module_data`, `mod_version`, `addtime`, `author`, `note`) VALUES\n('about', 0, 1, 'about', 'about', '3.0.01 1287532800', ".NV_CURRENTTIME.", 'VINADES (contact@vinades.vn)', ''),\n('banners', 1, 0, 'banners', 'banners', '3.0.01 1287532800', ".NV_CURRENTTIME.", 'VINADES (contact@vinades.vn)', ''),\n('contact', 0, 1, 'contact', 'contact', '3.0.01 1287532800', ".NV_CURRENTTIME.", 'VINADES (contact@vinades.vn)', ''),\n('news', 0, 1, 'news', 'news', '3.0.01 1287532800', ".NV_CURRENTTIME.", 'VINADES (contact@vinades.vn)', ''),\n('voting', 0, 0, 'voting', 'voting', '3.1.01 1287532800', ".NV_CURRENTTIME.", 'VINADES (contact@vinades.vn)', ''),\n('forum', 0, 0, 'forum', 'forum', '3.0.01 1287532800', ".NV_CURRENTTIME.", 'VINADES (contact@vinades.vn)', ''),\n('search', 1, 0, 'search', 'search', '3.0.01 1287532800', ".NV_CURRENTTIME.", 'VINADES (contact@vinades.vn)', ''),\n('users', 1, 0, 'users', 'users', '3.0.01 1287532800', ".NV_CURRENTTIME.", 'VINADES (contact@vinades.vn)', ''),\n('download', 0, 1, 'download', 'download', '3.0.01 1287532800', ".NV_CURRENTTIME.", 'VINADES (contact@vinades.vn)', ''),\n('weblinks', 0, 1, 'weblinks', 'weblinks', '3.0.01 1287532800', ".NV_CURRENTTIME.", 'VINADES (contact@vinades.vn)', ''),\n('statistics', 0, 0, 'statistics', 'statistics', '3.0.01 1287532800', ".NV_CURRENTTIME.", 'VINADES (contact@vinades.vn)', ''),\n('faq', 0, 1, 'faq', 'faq', '3.0.01 1287532800', ".NV_CURRENTTIME.", 'VINADES (contact@vinades.vn)', ''),\n('menu', 0, 1, 'menu', 'menu', '3.1.00 1273225635', ".NV_CURRENTTIME.", 'VINADES (contact@vinades.vn)', ''),\n('rss', 1, 0, 'rss', 'rss', '3.0.01 1287532800', ".NV_CURRENTTIME.", 'VINADES (contact@vinades.vn)', '')";$sql_create_table[]="INSERT INTO `".$db_config['prefix']."_banners_plans` VALUES\n(1, '', 'Quang cao giua trang', '', 'sequential', 510, 100, 1), \n(2, '', 'Quang cao trai', '', 'sequential', 190, 500, 1)";$sql_create_table[]="INSERT INTO `".$db_config['prefix']."_banners_rows` VALUES\n(1, 'Bo ngoai giao', 2, 0, 'bongoaigiao.jpg', 'jpg', 'image/jpeg', 160, 54, '', 'http://www.mofa.gov.vn', '', '', '', ".NV_CURRENTTIME.", ".NV_CURRENTTIME.", 0, 0, 1,1), \n(2, 'vinades', 2, 0, 'vinades.jpg', 'jpg', 'image/jpeg', 190, 454, '', 'http://vinades.vn', '', '', '', ".NV_CURRENTTIME.", ".NV_CURRENTTIME.", 0, 0, 1,2), \n(3, 'Quang cao giua trang', 1, 0, 'webnhanh_vn.gif', 'gif', 'image/gif', 510, 65, '', 'http://webnhanh.vn', '', '', '', ".NV_CURRENTTIME.", ".NV_CURRENTTIME.", 0, 0, 1,1)";

?>