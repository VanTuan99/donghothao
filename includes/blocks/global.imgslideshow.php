<?php
/**
 * @Project NUKEVIET 3.0
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 VINADES., JSC. All rights reserved
 * @Createdate 3/25/2010 18:6
 */

if ( ! function_exists( 'nv_imgshows_news' ) )
{

    function nv_imgshows_news ( )
    {
        global $global_config, $db, $lang_global, $db_config, $my_head;
		$content = '<object id="movie1" width="790" height="330" data="'.NV_BASE_SITEURL.'themes/'.$global_config['site_theme'].'/images/center.swf" type="application/x-shockwave-flash">
		<param name="scale" value="noscale" />
		<param name="wmode" value="transparent" />
		
		<param name="name" value="movie1" />
		<param name="flashvars" value="xmlVar='.NV_BASE_SITEURL.'themes/'.$global_config['site_theme'].'/images/album.xml" />
		<param name="src" value="'.NV_BASE_SITEURL.'themes/'.$global_config['site_theme'].'/images/center.swf" />
		<param name="quality" value="high" />
		</object>'; 
        return $content;
    }
}
$content = nv_imgshows_news();

?>