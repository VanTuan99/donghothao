<?php

/**
 * @Project NUKEVIET 3.0
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 VINADES.,JSC. All rights reserved
 * @Createdate 2-10-2010 18:49
 */

if ( ! defined( 'NV_IS_FILE_ADMIN' ) ) die( 'Stop!!!' );

$topicid = $nv_Request->get_int( 'topicid', 'post', 0 );
$checkss = $nv_Request->get_string( 'checkss', 'post' );

$contents = "NO_" . $topicid;
list( $topicid ) = $db->sql_fetchrow( $db->sql_query( "SELECT `topicid` FROM `" . $db_config['prefix'] . "_" . $module_data . "_topics` WHERE `topicid`=" . intval( $topicid ) . "" ) );
if ( $topicid > 0 )
{
    $check_del_topicid = false;
    $query = $db->sql_query( "SELECT id, listcatid FROM `" . $db_config['prefix'] . "_" . $module_data . "_rows` WHERE `topicid` = '" . $topicid . "'" );
    $check_rows = intval( $db->sql_numrows( $query ) );
    if ( $check_rows > 0 and $checkss == md5( $topicid . $db_config['prefix']() . $global_config['sitekey'] ) )
    {
        while ( $row = $db->sql_fetchrow( $query ) )
        {
            $arr_catid = explode( ",", $row['listcatid'] );
            foreach ( $arr_catid as $catid_i )
            {
                $db->sql_query( "UPDATE `" . $db_config['prefix'] . "_" . $module_data . "_" . $catid_i . "` SET `topicid` = '0' WHERE `id` =" . $row['id'] );
            }
            $db->sql_query( "UPDATE `" . $db_config['prefix'] . "_" . $module_data . "_rows` SET `topicid` = '0' WHERE `id` =" . $row['id'] );
        }
        $check_del_topicid = true;
    }
    elseif ( $check_rows > 0 )
    {
        $contents = "ERR_ROWS_" . $topicid . "_" . md5( $topicid . session_id() . $global_config['sitekey'] ) . "_" . sprintf( $lang_module['deltopic_msg_rows'], $check_rows );
    }
    else
    {
        $check_del_topicid = true;
    }
    if ( $check_del_topicid )
    {
        $query = "DELETE FROM `" . $db_config['prefix'] . "_" . $module_data . "_topics` WHERE `topicid`=" . $topicid . "";
        if ( $db->sql_query( $query ) )
        {
            $db->sql_freeresult();
            nv_fix_topic();
            $contents = "OK_" . $topicid;
        }
    }
}

nv_del_moduleCache( $module_name );
echo $contents;

?>