<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_MOD_RSS'))die('Stop!!!');$rssarray=array();$sql="SELECT `id` AS `catid`, `parentid`, `title`, `alias` FROM `".NV_PREFIXLANG."_".$mod_name."_categories` ORDER BY `weight` ASC";$list=nv_db_cache($sql,'',$mod_name);foreach($list as $value){$value['link']=NV_BASE_SITEURL."index.php?".NV_LANG_VARIABLE."=".NV_LANG_DATA."&amp;".NV_NAME_VARIABLE."=".$mod_name."&amp;".NV_OP_VARIABLE."=rss/".$value['alias'];$rssarray[]=$value;}

?>