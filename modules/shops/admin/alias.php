<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_IS_FILE_ADMIN'))die('Stop!!!');$title=filter_text_input('title','post','');$alias=change_alias($title);include(NV_ROOTDIR."/includes/header.php");echo $alias;include(NV_ROOTDIR."/includes/footer.php");

?>