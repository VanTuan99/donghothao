<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_FILE_SITEINFO'))die('Stop!!!');$page_title=$lang_module['extensions_php'];require_once(NV_ROOTDIR."/includes/core/phpinfo.php");$array=phpinfo_array(8,1);if(!empty($array)){$xtpl=new XTemplate("extensions_php.tpl",NV_ROOTDIR."/themes/".$global_config['module_theme']."/modules/".$module_file);$thead=array($lang_module['directive'],$lang_module['local_value'],$lang_module['master_value']);foreach($array as $module=>$mod_vals){$xtpl->assign('MODULE',$module);$xtpl->assign('THEAD0',$thead[0]);$xtpl->assign('THEAD1',$thead[1]);$xtpl->assign('THEAD2',$thead[2]);$a=0;foreach($mod_vals as $key=>$value){$xtpl->assign('CLASS',($a%2)?" class=\"second\"":"");$xtpl->assign('KEY',$key);if(!is_array($value)){$xtpl->assign('VALUE',$value);$xtpl->parse('main.loop.if');}elseif(isset($value[1])){$xtpl->assign('VALUE0',$value[0]);$xtpl->assign('VALUE1',$value[1]);$xtpl->parse('main.loop.else');}$xtpl->parse('main.loop');++$a;}$xtpl->parse('main');$contents=$xtpl->text('main');}}include(NV_ROOTDIR."/includes/header.php");echo nv_admin_theme($contents);include(NV_ROOTDIR."/includes/footer.php");

?>