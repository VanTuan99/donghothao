<?php

/**
 * @Project NUKEVIET 3.3
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2011 VINADES.,JSC. All rights reserved
 * @Createdate Sat, 10 Dec 2011 06:46:54 GMT
 */

if(!defined('NV_MAINFILE'))die('Stop!!!');$openid_servers=array();$openid_servers['google']=array('identity'=>'https://www.google.com/accounts/o8/id','required'=>array('email'=>'contact/email','firstname'=>'namePerson/first','lastname'=>'namePerson/last','gender'=>'person/gender',));$openid_servers['yahoo']=array('identity'=>'https://me.yahoo.com','required'=>array('email'=>'contact/email','nickname'=>'namePerson/friendly','fullname'=>'namePerson','gender'=>'person/gender',));$openid_servers['myopenid']=array('identity'=>'https://www.myopenid.com','required'=>array('email'=>'contact/email','nickname'=>'namePerson/friendly','fullname'=>'namePerson','gender'=>'person/gender',));$openid_servers['nukeviet']=array('identity'=>'http://openid.nukeviet.vn/index.php','required'=>array('email'=>'contact/email','nickname'=>'namePerson/friendly','fullname'=>'namePerson','gender'=>'person/gender',));

?>