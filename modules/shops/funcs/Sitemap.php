<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_MOD_SHOPS')){die('Stop!!!');}$url=array();$cacheFile=NV_ROOTDIR."/".NV_CACHEDIR."/".NV_LANG_DATA."_".$module_data."_Sitemap.cache";$pa=NV_CURRENTTIME-7200;if(($cache=nv_get_cache($cacheFile))!=false and filemtime($cacheFile)>=$pa){$url=unserialize($cache);}else{$sql="SELECT id, listcatid, edittime, ".NV_LANG_DATA."_alias FROM `".$db_config['prefix']."_".$module_data."_rows` WHERE inhome='1' AND  publtime < ".NV_CURRENTTIME." AND (exptime=0 OR exptime >".NV_CURRENTTIME.") ORDER BY publtime DESC LIMIT 1000";$result=$db->sql_query($sql);$url=array();while(list($id,$catid_i,$edittime,$alias)=$db->sql_fetchrow($result)){$url[]=array('link'=>NV_BASE_SITEURL."index.php?".NV_LANG_VARIABLE."=".NV_LANG_DATA."&amp;".NV_NAME_VARIABLE."=".$module_name."&amp;".NV_OP_VARIABLE."=".$global_array_cat[$catid_i]['alias'].'/'.$alias.'-'.$id,'publtime'=>$edittime);}$cache=serialize($url);nv_set_cache($cacheFile,$cache);}nv_xmlSitemap_generate($url);die();

?>