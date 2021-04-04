<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_MAINFILE'))die('Stop!!!');if(!defined('NV_IS_CRON'))die('Stop!!!');function cron_online_expired_del(){global $db;$query="DELETE FROM `".NV_SESSIONS_GLOBALTABLE."` WHERE `onl_time` < ".(NV_CURRENTTIME-NV_ONLINE_UPD_TIME);$db->sql_query($query);return true;}

?>