<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_MOD_RSS'))die('Stop!!!');$rssarray=array();global $db_config;$result2=$db->sql_query("SELECT catid, parentid, ".NV_LANG_DATA."_title, ".NV_LANG_DATA."_alias FROM ".$db_config['prefix']."_".$mod_data."_catalogs ORDER BY `weight`,`order`");while(list($catid,$parentid,$title,$alias)=$db->sql_fetchrow($result2)){$rssarray[$catid]=array('catid'=>$catid,'parentid'=>$parentid,'title'=>$title,'link'=>NV_BASE_SITEURL."index.php?".NV_LANG_VARIABLE."=".NV_LANG_DATA."&amp;".NV_NAME_VARIABLE."=".$mod_name."&amp;".NV_OP_VARIABLE."=rss/".$alias);}

?>