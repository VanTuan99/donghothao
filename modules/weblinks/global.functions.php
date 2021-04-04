<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_MAINFILE'))die('Stop!!!');function _substr($str,$length,$minword=3){$sub='';$len=0;foreach(explode(' ',$str)as $word){$part=(($sub!='')?' ':'').$word;$sub.=$part;$len+=strlen($part);if(isset($word{$minword})&&isset($sub{$length-1})){break;}}return $sub.((isset($str{$len}))?'...':'');}

?>