<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_FILE_ADMIN'))die('Stop!!!');if(!defined('NV_IS_AJAX'))die('Wrong URL');$id=$nv_Request->get_int('id','post',0);if(empty($id))die('Stop!!!');$query="SELECT `act` FROM `".NV_BANNERS_CLIENTS_GLOBALTABLE."` WHERE `id`=".$id;$result=$db->sql_query($query);$numrows=$db->sql_numrows($result);if($numrows!=1)die('Stop!!!');$row=$db->sql_fetchrow($result);$act=$row['act']?0:1;$sql="UPDATE `".NV_BANNERS_CLIENTS_GLOBALTABLE."` SET `act`=".$act." WHERE `id`=".$id;$return=$db->sql_query($sql);$return=$return?"OK":"NO";include(NV_ROOTDIR."/includes/header.php");echo $return.'|act_'.$id.'|'.$id.'|client_info';include(NV_ROOTDIR."/includes/footer.php");

?>