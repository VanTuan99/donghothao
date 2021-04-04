<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_FILE_ADMIN'))die('Stop!!!');$shopid=filter_text_input('id','get',0,1);$sql="SELECT cateid,".NV_LANG_DATA."_title FROM `".$db_config['prefix']."_".$module_data."_cateshops` WHERE shopid = ".$shopid;$result=$db->sql_query($sql);while(list($cateid_i,$title_i)=$db->sql_fetchrow($result)){echo "<option value=\"".$cateid_i."\">".$title_i."</option>\n";}

?>