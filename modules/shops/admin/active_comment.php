<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_FILE_ADMIN'))die('Stop!!!');$active=$nv_Request->get_int('active','post');$list=$nv_Request->get_string('list','post');$cid_array=explode(',',$list);$cid_array=array_map("intval",$cid_array);if($active){foreach($cid_array as $cid){$query="UPDATE `".$db_config['prefix']."_".$module_data."_comments_".NV_LANG_DATA."` SET status='1' WHERE status!=1 AND cid=".$cid."";$db->sql_query($query);}}else{foreach($cid_array as $cid){$query="UPDATE `".$db_config['prefix']."_".$module_data."_comments_".NV_LANG_DATA."` SET status='0' WHERE status=1 AND cid=".$cid."";$db->sql_query($query);}}nv_del_moduleCache($module_name);echo $lang_module['comment_update_success'];

?>