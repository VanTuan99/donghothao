<?php

if ( ! defined( 'NV_MAINFILE' ) ) die( 'Stop!!!' );



if ( ! nv_function_exists( 'nv_global_slider' ) )

{

    function nv_global_slider ( )

	{

        global $global_config, $db;

	$xtpl = new XTemplate( "gloabl_slider.tpl", NV_ROOTDIR . "/themes/" . $global_config['site_theme'] . "/blocks" );

    $xtpl->assign( 'TEMPLATE', $global_config['site_theme'] );

    $base_url_site = NV_BASE_SITEURL . "?";

    $xtpl->parse( 'main' );

    return $xtpl->text( 'main' );

	}

}



if ( defined( 'NV_SYSTEM' ) )

{

    $content = nv_global_slider( );

}



?>