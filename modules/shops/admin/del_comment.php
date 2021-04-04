<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_FILE_ADMIN'))die('Stop!!!');$page_title=$lang_module['comment_delete_title'];$listid=$nv_Request->get_string('list','post,get');$del_array=explode(',',$listid);$del_array=array_map("intval",$del_array);foreach($del_array as $cid){$sql="DELETE FROM `".$db_config['prefix']."_".$module_data."_comments_".NV_LANG_DATA."` WHERE cid='$cid'";$result=$db->sql_query($sql);}nv_del_moduleCache($module_name);echo $lang_module['comment_delete_success'];

?>