<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_FILE_ADMIN'))die('Stop!!!');$id=$nv_Request->get_int('id','post,get',0);$contents="NO_".$id;if($id>0){$query="DELETE FROM `".$db_config['prefix']."_".$module_data."_units` WHERE `id`=".$id."";if($db->sql_query($query)){$db->sql_freeresult();$contents="OK_".$id;}}else{$listall=$nv_Request->get_string('listall','post,get');$array_id=explode(',',$listall);$array_id=array_map("intval",$array_id);foreach($array_id as $id){if($id>0){$sql="DELETE FROM `".$db_config['prefix']."_".$module_data."_units` WHERE `id`=".$id."";$result=$db->sql_query($sql);}}$contents="OK_0";}nv_del_moduleCache($module_name);echo $contents;

?>