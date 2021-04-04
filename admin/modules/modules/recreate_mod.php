<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_FILE_MODULES'))die('Stop!!!');$contents='NO_'.$module_name;$modname=filter_text_input('mod','post');if(!empty($modname)and preg_match($global_config['check_module'],$modname)){nv_insert_logs(NV_LANG_DATA,$module_name,$lang_global['recreate'].' module "'.$modname.'"','',$admin_info['userid']);$contents=nv_setup_data_module(NV_LANG_DATA,$modname);}include(NV_ROOTDIR."/includes/header.php");echo $contents;include(NV_ROOTDIR."/includes/footer.php");

?>