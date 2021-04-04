<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_FILE_ADMIN'))die('Stop!!!');$id=$nv_Request->get_array('idcheck','post');$msg="";$sizeof=sizeof($id);for($i=0;$i<$sizeof;++$i){$query="DELETE FROM `".NV_PREFIXLANG."_".$module_data."_rows` WHERE id=".intval($id[$i])."";if($db->sql_query($query)){$db->sql_freeresult();$msg.=$lang_module['weblink_del_success'];}else{$msg.=$lang_module['weblink_del_error'];}}include(NV_ROOTDIR."/includes/header.php");echo nv_admin_theme($msg);include(NV_ROOTDIR."/includes/footer.php");

?>