<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_MOD_WEBLINKS'))die('Stop!!!');global $timeout;$sql="SELECT `url` FROM `".NV_PREFIXLANG."_".$module_data."_rows` WHERE `id`='".$id."' LIMIT 0,1";$result=$db->sql_query($sql);$row=$db->sql_fetchrow($result);if($row['url']!=""){if(!preg_match("/http:\/\//i",$row['url'])){$url="http://".$url;}if(isset($_COOKIE['timeout'])&&$_COOKIE['timeout']==$id){$contents.=sprintf($lang_module['notimeout'],$timeout);}else{setcookie('timeout',$id,time()+$timeout*60);$db->sql_query("UPDATE ".NV_PREFIXLANG."_".$module_data."_rows SET `hits_total`=`hits_total`+1 WHERE id='".$id."'");}Header("Location: ".$row['url']);exit();}include(NV_ROOTDIR."/includes/header.php");echo nv_site_theme($contents);include(NV_ROOTDIR."/includes/footer.php");

?>