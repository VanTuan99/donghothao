<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_FILE_ADMIN'))die('Stop!!!');$page_title=$lang_module['plans_list'];$contents=array();$contents['containerid']="plans_list";$contents['aj']="nv_show_plans_list('plans_list');";$contents=call_user_func("nv_plans_list_theme",$contents);include(NV_ROOTDIR."/includes/header.php");echo nv_admin_theme($contents);include(NV_ROOTDIR."/includes/footer.php");

?>