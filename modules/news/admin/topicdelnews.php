<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_FILE_ADMIN'))die('Stop!!!');$id=$nv_Request->get_string('list','post,get');$id=explode(',',$id);foreach($id as $value){$sql="UPDATE `".NV_PREFIXLANG."_".$module_data."_rows` SET topicid=0 WHERE id='$value'";$result=$db->sql_query($sql);}echo $lang_module['topic_delete_success'];

?>