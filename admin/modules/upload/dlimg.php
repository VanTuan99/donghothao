<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_FILE_ADMIN'))die('Stop!!!');$path=nv_check_path_upload($nv_Request->get_string('path','post,get'));$image=htmlspecialchars(trim($nv_Request->get_string('img','post,get')),ENT_QUOTES);$image=basename($image);$path_filename=NV_ROOTDIR.'/'.$path."/".$image;if(!empty($image)&&is_file($path_filename)&&nv_check_allow_upload_dir($path)){require_once(NV_ROOTDIR.'/includes/class/download.class.php');$download=new download($path_filename,NV_ROOTDIR.'/'.$path,$image);$download->download_file();exit();}else{echo 'file not exist !';}

?>