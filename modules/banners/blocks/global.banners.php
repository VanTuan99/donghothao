<?php
/**
 * @Project NUKEVIET 3.4
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2012 VINADES.,JSC. All rights reserved
 * @Createdate Sun, 08 Apr 2012 00:00:00 GMT GMT
 */
if(!defined('NV_MAINFILE'))
die('Stop!!!');
if(!nv_function_exists('nv_block_data_config_banners')) {
function nv_block_data_config_banners($module,$data_block,$lang_block) {
global $db,$language_array;
$html="<select name=\"config_idplanbanner\">\n";
$html.="<option value=\"\">".$lang_block['idplanbanner']."</option>\n";
$query="SELECT * FROM `".NV_BANNERS_PLANS_GLOBALTABLE."` WHERE (`blang`='".NV_LANG_DATA."' OR `blang`='') ORDER BY `title` ASC";
$result=$db->sql_query($query);
while($row_bpn=$db->sql_fetchrow($result)) {$value=$row_bpn['title']." (";
$value.=((!empty($row_bpn['blang']) and isset($language_array[$row_bpn['blang']]))?$language_array[$row_bpn['blang']]['name']:$lang_block['blang_all']).", ";
$value.=$row_bpn['form'].", ";
$value.=$row_bpn['width']."x".$row_bpn['height']."px";
$value.=")";
$sel=($data_block['idplanbanner']==$row_bpn['id'])?' selected':'';
$html.="<option value=\"".$row_bpn['id']."\" ".$sel.">".$value."</option>\n";
}$html.="</select></td>\n";
return '<tr><td>'.$lang_block['idplanbanner'].'</td><td>'.$html.'</td></tr>';
}
function nv_block_data_config_banners_submit($module,$lang_block) {
global $nv_Request;
$return=array();
$return['error']=array();
$return['config']=array();
$return['config']['idplanbanner']=$nv_Request->get_int('config_idplanbanner','post',0);
if(empty($return['config']['idplanbanner'])) {$return['error'][]=$lang_block['idplanbanner'];
}
return $return;
}
function nv_block_global_banners($block_config) {
global $global_config;
$xmlfile=NV_ROOTDIR.'/'.NV_DATADIR.'/bpl_'.$block_config['idplanbanner'].'.xml';
if(!file_exists($xmlfile)) {
return '';
}$xml=simplexml_load_file($xmlfile);
if($xml===false) {
return '';
}$width_banners=intval($xml->width);
$height_banners=intval($xml->height);
$array_banners=$xml->banners->banners_item;
$array_banners_content=array();
foreach($array_banners as $banners) {$banners=( array )$banners;
$banners['file_height']=round($banners['file_height']*$width_banners/$banners['file_width']);
$banners['file_width']=$width_banners;
$banners['file_alt']=(!empty($banners['file_alt']))?$banners['file_alt']:$banners['title'];
$banners['file_image']=NV_BASE_SITEURL.NV_UPLOADS_DIR."/".NV_BANNER_DIR."/".$banners['file_name'];
$banners['link']=NV_BASE_SITEURL."index.php?".NV_LANG_VARIABLE."=".NV_LANG_DATA."&amp;".NV_NAME_VARIABLE."=banners&amp;".NV_OP_VARIABLE."=click&amp;id=".$banners['id'];
$array_banners_content[]=$banners;
}
if($xml->form=="random") {shuffle($array_banners_content);
}unset($xml,$array_banners);
if(file_exists(NV_ROOTDIR."/themes/".$global_config['module_theme']."/blocks/global.banners.tpl")) {$block_theme=$global_config['module_theme'];
} elseif(file_exists(NV_ROOTDIR."/themes/".$global_config['site_theme']."/blocks/global.banners.tpl")) {$block_theme=$global_config['site_theme'];
} else {$block_theme="default";
}
$xtpl=new XTemplate("global.banners.tpl",NV_ROOTDIR."/themes/".$block_theme."/blocks");
foreach($array_banners_content as $banners) {$xtpl->assign('DATA',$banners);
if($banners['file_ext']=="swf") {
if(!empty($banners['file_click'])) {$xtpl->parse('main.loop.type_swf.fix_link');
}$xtpl->parse('main.loop.type_swf');
} elseif(!empty($banners['file_click'])) {$xtpl->parse('main.loop.type_image_link');
} else {$xtpl->parse('main.loop.type_image');
}
$xtpl->parse('main.loop');
}$xtpl->parse('main');
return $xtpl->text('main');
}
}
if(defined('NV_SYSTEM')) {$content=nv_block_global_banners($block_config);
}
?>