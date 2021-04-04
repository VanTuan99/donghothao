<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_FILE_ADMIN'))die('Stop!!!');$q=filter_text_input('q','get',"",1);if(empty($q))return;$sql="SELECT title FROM `".NV_PREFIXLANG."_".$module_data."_topics` WHERE  `title` LIKE '%".$db->dblikeescape($q)."%' OR `keywords` LIKE '%".$db->dblikeescape($q)."%' ORDER BY `weight` ASC";$result=$db->sql_query($sql);while(list($title)=$db->sql_fetchrow($result)){echo "".$title."\n";}

?>