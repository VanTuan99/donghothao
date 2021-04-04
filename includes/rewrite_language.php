<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_MAINFILE'))die('Stop!!!');$rewrite["#([\"|\']".NV_BASE_SITEURL."index.php*\?)".NV_LANG_VARIABLE."=([a-z-]*)\&[amp;]*#"]="\\1\\3";$rewrite["#([\"|\']".NV_BASE_SITEURL."index.php)*\?".NV_LANG_VARIABLE."=([a-z-]*)([\"|\'])#"]="\\1\\3";$rewrite["#([\"|\'|\>]".$global_config['site_url']."/"."index.php*\?)".NV_LANG_VARIABLE."=([a-z-]*)\&[amp;]*#"]="\\1\\3";$rewrite["#([\"|\'|\>]".$global_config['site_url']."/"."index.php)*\?".NV_LANG_VARIABLE."=([a-z-]*)([\"|\'|\<])#"]="\\1\\3";

?>