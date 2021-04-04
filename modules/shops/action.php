<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_FILE_MODULES'))die('Stop!!!');$sql_drop_module=array();global $op,$db;$result=$db->sql_query("SHOW TABLE STATUS LIKE '".$db_config['prefix']."\_".$module_data."\_money\_%'");$num_table=intval($db->sql_numrows($result));$array_lang_module_setup=array();$set_lang_data="";if($num_table>0){while($item=$db->sql_fetch_assoc($result)){$array_lang_module_setup[]=str_replace($db_config['prefix']."_".$module_data."_money_","",$item['Name']);}if($lang!=$global_config['site_lang']and in_array($global_config['site_lang'],$array_lang_module_setup)){$set_lang_data=$global_config['site_lang'];}else{foreach($array_lang_module_setup as $lang_i){if($lang!=$lang_i){$set_lang_data=$lang_i;break;}}}}if(in_array($lang,$array_lang_module_setup)and $num_table>1){$sql_drop_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_rows`\n              DROP `".$lang."_title`,\n              DROP `".$lang."_alias`,\n              DROP `".$lang."_description`,\n              DROP `".$lang."_keywords`,\n              DROP `".$lang."_note`,\n              DROP `".$lang."_hometext`,\n              DROP `".$lang."_bodytext`,\n              DROP `".$lang."_address`";$sql_drop_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_catalogs`\n              DROP `".$lang."_title`,\n              DROP `".$lang."_alias`,\n              DROP `".$lang."_description`,\n              DROP `".$lang."_keywords`";$sql_drop_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_group`\n              DROP `".$lang."_title`,\n              DROP `".$lang."_alias`,\n              DROP `".$lang."_description`,\n              DROP `".$lang."_keywords`";$sql_drop_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_block_cat`\n              DROP `".$lang."_title`,\n              DROP `".$lang."_alias`,\n              DROP `".$lang."_description`,\n              DROP `".$lang."_keywords`";$sql_drop_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_sources`\n              DROP `".$lang."_title`";$sql_drop_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_units`\n              DROP `".$lang."_title`,\n              DROP `".$lang."_note`";}elseif($op!="setup"){$sql_drop_module[]="DROP TABLE IF EXISTS `".$db_config['prefix']."_".$module_data."_block`";$sql_drop_module[]="DROP TABLE IF EXISTS `".$db_config['prefix']."_".$module_data."_block_cat`";$sql_drop_module[]="DROP TABLE IF EXISTS `".$db_config['prefix']."_".$module_data."_catalogs`";$sql_drop_module[]="DROP TABLE IF EXISTS `".$db_config['prefix']."_".$module_data."_group`";$sql_drop_module[]="DROP TABLE IF EXISTS `".$db_config['prefix']."_".$module_data."_orders`";$sql_drop_module[]="DROP TABLE IF EXISTS `".$db_config['prefix']."_".$module_data."_payment`";$sql_drop_module[]="DROP TABLE IF EXISTS `".$db_config['prefix']."_".$module_data."_transaction`";$sql_drop_module[]="DROP TABLE IF EXISTS `".$db_config['prefix']."_".$module_data."_rows`";$sql_drop_module[]="DROP TABLE IF EXISTS `".$db_config['prefix']."_".$module_data."_sources`";$sql_drop_module[]="DROP TABLE IF EXISTS `".$db_config['prefix']."_".$module_data."_units`";$set_lang_data="";}$sql_drop_module[]="DROP TABLE IF EXISTS `".$db_config['prefix']."_".$module_data."_money_".$lang."`";$sql_drop_module[]="DROP TABLE IF EXISTS `".$db_config['prefix']."_".$module_data."_comments_".$lang."`";$sql_create_module=$sql_drop_module;$sql_create_module[]="CREATE TABLE IF NOT EXISTS `".$db_config['prefix']."_".$module_data."_catalogs` (\n  `catid` mediumint(8) unsigned NOT NULL auto_increment,\n  `parentid` mediumint(8) unsigned NOT NULL default '0',\n  `image` varchar(255) NOT NULL default '',\n  `thumbnail` varchar(255) NOT NULL default '',\n  `weight` smallint(4) unsigned NOT NULL default '0',\n  `order` mediumint(8) NOT NULL default '0',\n  `lev` smallint(4) NOT NULL default '0',\n  `viewcat` varchar(50) NOT NULL default 'viewcat_page_new',\n  `numsubcat` int(11) NOT NULL default '0',\n  `subcatid` varchar(255) NOT NULL default '',\n  `inhome` tinyint(1) unsigned NOT NULL default '0',\n  `numlinks` tinyint(2) unsigned NOT NULL default '3',\n  `admins` mediumtext NOT NULL,\n  `add_time` int(11) unsigned NOT NULL default '0',\n  `edit_time` int(11) unsigned NOT NULL default '0',\n  `del_cache_time` int(11) NOT NULL default '0',\n  `who_view` tinyint(2) unsigned NOT NULL default '0',\n  `groups_view` varchar(255) NOT NULL default '',\n  PRIMARY KEY (`catid`),\n  KEY `parentid` (`parentid`)\n) ENGINE=MyISAM";$sql_create_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_catalogs` ADD `".$lang."_title` VARCHAR( 255 ) NOT NULL DEFAULT ''";$sql_create_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_catalogs` ADD `".$lang."_alias` VARCHAR( 255 ) NOT NULL DEFAULT ''";$sql_create_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_catalogs` ADD `".$lang."_description` VARCHAR( 255 ) NOT NULL DEFAULT ''";$sql_create_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_catalogs` ADD `".$lang."_keywords` text NOT NULL";$sql_create_module[]="CREATE TABLE IF NOT EXISTS `".$db_config['prefix']."_".$module_data."_group` (\n  `groupid` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,\n  `parentid` mediumint(8) unsigned NOT NULL DEFAULT '0',\n  `image` varchar(255) NOT NULL DEFAULT '',\n  `thumbnail` varchar(255) NOT NULL DEFAULT '',\n  `weight` smallint(4) unsigned NOT NULL DEFAULT '0',\n  `order` mediumint(8) NOT NULL DEFAULT '0',\n  `lev` smallint(4) NOT NULL DEFAULT '0',\n  `viewgroup` varchar(50) NOT NULL DEFAULT 'viewcat_page_new',\n  `numsubgroup` int(11) NOT NULL DEFAULT '0',\n  `subgroupid` varchar(255) NOT NULL DEFAULT '',\n  `inhome` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `numlinks` tinyint(2) unsigned NOT NULL DEFAULT '3',\n  `admins` mediumtext NOT NULL,\n  `add_time` int(11) unsigned NOT NULL DEFAULT '0',\n  `edit_time` int(11) unsigned NOT NULL DEFAULT '0',\n  `del_cache_time` int(11) NOT NULL DEFAULT '0',\n  `who_view` tinyint(2) unsigned NOT NULL DEFAULT '0',\n  `groups_view` varchar(255) NOT NULL DEFAULT '',\n  PRIMARY KEY (`groupid`),\n  KEY `parentid` (`parentid`)\n) ENGINE=MyISAM ";$sql_create_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_group` ADD `".$lang."_title` VARCHAR( 255 ) NOT NULL DEFAULT ''";$sql_create_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_group` ADD `".$lang."_alias` VARCHAR( 255 ) NOT NULL DEFAULT ''";$sql_create_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_group` ADD `".$lang."_description` VARCHAR( 255 ) NOT NULL DEFAULT ''";$sql_create_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_group` ADD `".$lang."_keywords` text NOT NULL";$sql_create_module[]="CREATE TABLE IF NOT EXISTS `".$db_config['prefix']."_".$module_data."_rows` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `listcatid` int(11) NOT NULL DEFAULT '0',\n  `group_id` varchar(255) NOT NULL,\n  `com_id` mediumint(8) NOT NULL DEFAULT '0',\n  `shopcat_id` mediumint(8) NOT NULL DEFAULT '0',\n  `user_id` mediumint(8) NOT NULL DEFAULT '0',\n  `source_id` mediumint(8) NOT NULL DEFAULT '0',\n  `addtime` int(11) unsigned NOT NULL DEFAULT '0',\n  `edittime` int(11) unsigned NOT NULL DEFAULT '0',\n  `status` tinyint(4) NOT NULL DEFAULT '1',\n  `publtime` int(11) unsigned NOT NULL DEFAULT '0',\n  `exptime` int(11) unsigned NOT NULL DEFAULT '0',\n  `archive` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `product_code` varchar(32) NOT NULL DEFAULT '',  \n  `product_number` int(11) NOT NULL DEFAULT '0',\n  `product_price` double NOT NULL DEFAULT '0',\n  `product_discounts` int(11) NOT NULL DEFAULT '0',\n  `money_unit` char(3) NOT NULL,\n  `product_unit` int(11) NOT NULL,\n  `homeimgfile` varchar(255) NOT NULL DEFAULT '',\n  `homeimgthumb` varchar(255) NOT NULL DEFAULT '',\n  `homeimgalt` varchar(255) NOT NULL,\n  `imgposition` tinyint(1) NOT NULL DEFAULT '1',\n  `copyright` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `inhome` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `allowed_comm` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `allowed_rating` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `ratingdetail` varchar(255) NOT NULL DEFAULT '',\n  `allowed_send` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `allowed_print` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `allowed_save` tinyint(1) unsigned NOT NULL DEFAULT '0',\n  `hitstotal` mediumint(8) unsigned NOT NULL DEFAULT '0',\n  `hitscm` mediumint(8) unsigned NOT NULL DEFAULT '0',\n  `hitslm` mediumint(8) unsigned NOT NULL DEFAULT '0',\n  `showprice` tinyint(2) NOT NULL DEFAULT '0',\n  PRIMARY KEY  (`id`),\n  KEY `listcatid` (`listcatid`),\n  KEY `com_id` (`com_id`),\n  KEY `shopcat_id` (`shopcat_id`),\n  KEY `user_id` (`user_id`),\n  KEY `publtime` (`publtime`),\n  KEY `exptime` (`exptime`)\n) ENGINE=MyISAM";$sql_create_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_rows` ADD `".$lang."_title` VARCHAR( 255 ) NOT NULL DEFAULT '',\n\t\t\t\t\t\tADD `".$lang."_alias` VARCHAR( 255 ) NOT NULL DEFAULT '',\n\t\t\t\t\t\tADD `".$lang."_description` VARCHAR( 255 ) NOT NULL DEFAULT '',\n\t\t\t\t\t\tADD `".$lang."_keywords` text NOT NULL,\n\t\t\t\t\t\tADD `".$lang."_note` text NOT NULL,\n\t\t\t\t\t\tADD `".$lang."_hometext` text NOT NULL,\n\t\t\t\t\t\tADD `".$lang."_bodytext` mediumtext NOT NULL,\n\t\t\t\t\t\tADD `".$lang."_address` text NOT NULL";$sql_create_module[]="CREATE TABLE IF NOT EXISTS `".$db_config['prefix']."_".$module_data."_sources` (\n  `sourceid` mediumint(8) unsigned NOT NULL auto_increment,\n  `link` varchar(255) NOT NULL default '',\n  `logo` varchar(255) NOT NULL default '',\n  `weight` mediumint(8) unsigned NOT NULL default '0',\n  `add_time` int(11) unsigned NOT NULL,\n  `edit_time` int(11) unsigned NOT NULL,\n  PRIMARY KEY (`sourceid`)\n) ENGINE=MyISAM";$sql_create_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_sources` ADD `".$lang."_title` VARCHAR( 255 ) NOT NULL DEFAULT ''";$sql_create_module[]="CREATE TABLE IF NOT EXISTS `".$db_config['prefix']."_".$module_data."_block_cat` (\n  `bid` mediumint(8) unsigned NOT NULL auto_increment,\n  `adddefault` tinyint(4) NOT NULL default '0',\n  `image` varchar(255) NOT NULL,\n  `thumbnail` varchar(255) NOT NULL,\n  `weight` smallint(4) NOT NULL default '0',\n  `add_time` int(11) NOT NULL default '0',\n  `edit_time` int(11) NOT NULL default '0',\n  PRIMARY KEY (`bid`)\n) ENGINE=MyISAM";$sql_create_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_block_cat` ADD `".$lang."_title` VARCHAR( 255 ) NOT NULL DEFAULT '',\n\t\t\t\t\t\tADD `".$lang."_alias` VARCHAR( 255 ) NOT NULL DEFAULT '',\n\t\t\t\t\t\tADD `".$lang."_description` VARCHAR( 255 ) NOT NULL DEFAULT '',\n\t\t\t\t\t\tADD `".$lang."_keywords` text NOT NULL";$sql_create_module[]="CREATE TABLE IF NOT EXISTS `".$db_config['prefix']."_".$module_data."_block` (\n  `bid` int(11) unsigned NOT NULL,\n  `id` int(11) unsigned NOT NULL,\n  `weight` int(11) unsigned NOT NULL,\n  UNIQUE KEY `bid` (`bid`,`id`)\n) ENGINE=MyISAM";$sql_create_module[]="CREATE TABLE IF NOT EXISTS `".$db_config['prefix']."_".$module_data."_comments_".$lang."` (\n  `cid` mediumint(8) unsigned NOT NULL auto_increment,\n  `id` mediumint(8) unsigned NOT NULL default '0',\n  `post_time` int(11) unsigned NOT NULL default '0',\n  `post_name` varchar(100) NOT NULL,\n  `post_id` int(11) NOT NULL,\n  `post_email` varchar(100) NOT NULL,\n  `post_ip` varchar(15) NOT NULL,\n  `status` tinyint(1) unsigned NOT NULL default '0',\n  `photo` varchar(255) NOT NULL,\n  `title` varchar(255) NOT NULL,\n  `content` mediumtext NOT NULL,  \n  PRIMARY KEY (`cid`)\n) ENGINE=MyISAM";$sql_create_module[]="CREATE TABLE IF NOT EXISTS `".$db_config['prefix']."_".$module_data."_units` (\n  `id` int(11) NOT NULL auto_increment,\n  PRIMARY KEY (`id`)\n) ENGINE=MyISAM";$sql_create_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_units` ADD `".$lang."_title` VARCHAR( 255 ) NOT NULL DEFAULT '',\n    \t\t\t\t\tADD `".$lang."_note` text NOT NULL ";$sql_create_module[]="CREATE TABLE IF NOT EXISTS `".$db_config['prefix']."_".$module_data."_orders` (\n  `order_id` int(11) unsigned NOT NULL auto_increment,\n  `order_code` varchar(30) NOT NULL default '',  \n  `lang` char(2) NOT NULL default 'en',  \n  `order_name` varchar(255) NOT NULL,\n  `order_email` varchar(255) NOT NULL,\n  `order_address` text NOT NULL,\n  `order_phone` varchar(20) NOT NULL,\n  `order_note` text NOT NULL,\n  `listid` text NOT NULL,\n  `listnum` text NOT NULL,\n  `listprice` text NOT NULL,\n  `user_id` int(11) unsigned NOT NULL default '0',\n  `admin_id` int(11) unsigned NOT NULL default '0',\n  `shop_id` int(11) unsigned NOT NULL default '0',\n  `who_is` int(2) unsigned NOT NULL default '0',\n  `unit_total` char(3) NOT NULL,\n  `order_total` double unsigned NOT NULL default '0',\n  `order_time` int(11) unsigned NOT NULL default '0',\n  `postip` varchar(100) NOT NULL,\n  `view` tinyint(2) NOT NULL DEFAULT '0',\n  `transaction_status` tinyint(4) NOT NULL,\n  `transaction_id` int(11) NOT NULL default '0',\n  `transaction_count` int(11) NOT NULL,\n  PRIMARY KEY  (`order_id`),\n  UNIQUE KEY `order_code` (`order_code`),  \n  KEY `user_id` (`user_id`),\n  KEY `order_time` (`order_time`),\n  KEY `shop_id` (`shop_id`)\n) ENGINE=MyISAM";$sql_create_module[]="CREATE TABLE IF NOT EXISTS `".$db_config['prefix']."_".$module_data."_transaction` (\n  `transaction_id` int(11) NOT NULL AUTO_INCREMENT,\n  `transaction_time` int(11) NOT NULL DEFAULT '0',\n  `transaction_status` int(11) NOT NULL,\n  `order_id` int(11) NOT NULL DEFAULT '0',\n  `userid` int(11) NOT NULL DEFAULT '0',\n  `payment` varchar(22) NOT NULL DEFAULT '0',\n  `payment_id` varchar(22) NOT NULL DEFAULT '0',\n  `payment_time` int(11) NOT NULL DEFAULT '0',\n  `payment_amount` int(11) NOT NULL DEFAULT '0',\n  `payment_data` text NOT NULL,\n  PRIMARY KEY (`transaction_id`),\n  KEY `order_id` (`order_id`),\n  KEY `payment_id` (`payment_id`)  \n) ENGINE=MyISAM";$sql_create_module[]="CREATE TABLE IF NOT EXISTS `".$db_config['prefix']."_".$module_data."_money_".$lang."` (\n  `id` mediumint(11) NOT NULL,\n  `code` char(3) NOT NULL,\n  `currency` varchar(255) NOT NULL,\n  `exchange` double NOT NULL default '0',\n  PRIMARY KEY  (`id`),\n  UNIQUE KEY `code` (`code`)\n) ENGINE=MyISAM";$sql_create_module[]="CREATE TABLE IF NOT EXISTS `".$db_config['prefix']."_".$module_data."_payment` (\n  `payment` varchar(100) NOT NULL,\n  `paymentname` varchar(255) NOT NULL,\n  `domain` varchar(255) NOT NULL,\n  `active` tinyint(4) NOT NULL default '0',\n  `weight` int(11) NOT NULL default '0',\n  `config` text NOT NULL,\n  `images_button` varchar(255) NOT NULL,\n  PRIMARY KEY  (`payment`)\n) ENGINE=MyISAM";$data=array();$data['image_size']='100x100';$data['home_view']='view_home_all';$data['per_page']='20';$data['per_row']=4;$data['comment']=1;$data['comment_auto']=1;$data['who_comment']='all';$data['money_unit']='USD';$data['post_auto_member']=0;$data['auto_check_order']=1;$data['format_order_id']=strtoupper(substr($module_name,0,1)).'%06s';$data['active_showhomtext']=1;$data['active_order']=1;$data['active_price']=1;$data['active_order_number']=0;$data['active_payment']=1;foreach($data as $config_name=>$config_value){$sql_create_module[]="REPLACE INTO `".NV_CONFIG_GLOBALTABLE."` (`lang`, `module`, `config_name`, `config_value`) VALUES('".$lang."', ".$db->dbescape($module_name).", ".$db->dbescape($config_name).", ".$db->dbescape($config_value).")";}if(!empty($set_lang_data)){list($numrow)=$db->sql_fetchrow($db->sql_query("SELECT COUNT(*)  FROM `".$db_config['prefix']."_".$module_data."_catalogs`"));if($numrow){$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_catalogs` SET `".$lang."_title` = `".$global_config['site_lang']."_title`";$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_catalogs` SET `".$lang."_alias` = `".$set_lang_data."_alias`";$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_catalogs` SET `".$lang."_description` = `".$set_lang_data."_description`";$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_catalogs` SET `".$lang."_keywords` = `".$set_lang_data."_keywords`";}list($numrow)=$db->sql_fetchrow($db->sql_query("SELECT COUNT(*)  FROM `".$db_config['prefix']."_".$module_data."_rows`"));if($numrow){$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_rows` SET `".$lang."_title` = `".$set_lang_data."_title`";$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_rows` SET `".$lang."_alias` = `".$set_lang_data."_alias`";$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_rows` SET `".$lang."_description` = `".$set_lang_data."_description`";$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_rows` SET `".$lang."_keywords` = `".$set_lang_data."_keywords`";$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_rows` SET `".$lang."_hometext` = `".$set_lang_data."_hometext`";$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_rows` SET `".$lang."_bodytext` = `".$set_lang_data."_bodytext`";$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_rows` SET `".$lang."_address` = `".$set_lang_data."_address`";}list($numrow)=$db->sql_fetchrow($db->sql_query("SELECT COUNT(*)  FROM `".$db_config['prefix']."_".$module_data."_units`"));if($numrow){$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_units` SET `".$lang."_title` = `".$set_lang_data."_title`";$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_units` SET `".$lang."_note` = `".$set_lang_data."_note`";}list($numrow)=$db->sql_fetchrow($db->sql_query("SELECT COUNT(*)  FROM `".$db_config['prefix']."_".$module_data."_sources`"));if($numrow){$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_sources` SET `".$lang."_title` = `".$set_lang_data."_title`";}list($numrow)=$db->sql_fetchrow($db->sql_query("SELECT COUNT(*)  FROM `".$db_config['prefix']."_".$module_data."_block_cat`"));if($numrow){$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_block_cat` SET `".$lang."_title` = `".$set_lang_data."_title`";$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_block_cat` SET `".$lang."_alias` = `".$set_lang_data."_alias`";$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_block_cat` SET `".$lang."_description` = `".$set_lang_data."_description`";$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_block_cat` SET `".$lang."_keywords` = `".$set_lang_data."_keywords`";}list($numrow)=$db->sql_fetchrow($db->sql_query("SELECT COUNT(*)  FROM `".$db_config['prefix']."_".$module_data."_block_cat`"));if($numrow){$sql_create_module[]="INSERT INTO `".$db_config['prefix']."_".$module_data."_money_".$lang."` SELECT * FROM `".$db_config['prefix']."_".$module_data."_money_".$set_lang_data."`";}$sql_create_module[]="UPDATE `".$db_config['prefix']."_".$module_data."_money_".$lang."` SET `exchange` = '1'";}$sql_create_module[]="REPLACE INTO `".$db_config['prefix']."_".$module_data."_money_".$lang."` (`id`, `code`, `currency`, `exchange`) VALUES (840, 'USD', 'US Dollar', 1)";$sql_create_module[]="REPLACE INTO `".$db_config['prefix']."_".$module_data."_money_".$lang."` (`id`, `code`, `currency`, `exchange`) VALUES (704, 'VND', 'Vietnam Dong', 1)";$sql_create_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_catalogs` ADD UNIQUE (`".$lang."_alias`)";$sql_create_module[]="ALTER TABLE `".$db_config['prefix']."_".$module_data."_block_cat` ADD UNIQUE (`".$lang."_alias`)";

?>