<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_FILE_MODULES'))die('Stop!!!');$page_title=$lang_module['autoinstall'];$xtpl=new XTemplate("autoinstall.tpl",NV_ROOTDIR."/themes/".$global_config['module_theme']."/modules/".$module_file);$xtpl->assign('LANG',$lang_module);$xtpl->assign('GLANG',$lang_global);if(!$sys_info['zlib_support']){$xtpl->parse('main.error');}else{$xtpl->assign('NV_BASE_ADMINURL',NV_BASE_ADMINURL);$xtpl->assign('NV_NAME_VARIABLE',NV_NAME_VARIABLE);$xtpl->assign('NV_OP_VARIABLE',NV_OP_VARIABLE);$xtpl->assign('MODULE_NAME',$module_name);$xtpl->parse('main.ok');}$xtpl->parse('main');$contents=$xtpl->text('main');include(NV_ROOTDIR."/includes/header.php");echo nv_admin_theme($contents);include(NV_ROOTDIR."/includes/footer.php");

?>