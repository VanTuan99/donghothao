<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_FILE_ADMIN'))die('Stop!!!');$payment=$nv_Request->get_string('id','post,get','');$value=$nv_Request->get_int('value','post,get',0);$table=$db_config['prefix']."_".$module_data."_payment";$contents=$lang_module['active_change_not_complete'];if(!empty($payment)){list($value)=$db->sql_fetchrow($db->sql_query("SELECT `active` FROM ".$table." WHERE `payment`=".$db->dbescape($payment)));$value=($value=='1')?'0':'1';$query="UPDATE ".$table." SET `active`=".$value." WHERE `payment`=".$db->dbescape($payment);if($db->sql_query($query)){$db->sql_freeresult();$contents=$lang_module['active_change_complete'];}}nv_del_moduleCache($module_name);echo $contents;

?>