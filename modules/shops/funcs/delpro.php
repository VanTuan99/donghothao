<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_MOD_SHOPS'))die('Stop!!!');if(!defined('NV_IS_AJAX'))die('Wrong URL');$id=$nv_Request->get_int('id','post,get',0);$contents="NO_".$lang_module['profile_del_error'];list($id,$user_id)=$db->sql_fetchrow($db->sql_query("SELECT `id` ,`user_id` FROM `".$db_config['prefix']."_".$module_data."_rows` WHERE `id`=".intval($id).""));if($id>0&&$user_id==$user_info['userid']){$query="DELETE FROM `".$db_config['prefix']."_".$module_data."_rows` WHERE `id`=".$id."";if($db->sql_query($query)){$db->sql_freeresult();$contents="OK_".$id;}}echo $contents;

?>