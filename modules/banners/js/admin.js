function nv_show_cl_list(a){nv_ajax("get",script_name+"?"+nv_name_variable+"=banners",nv_fc_variable+"=cl_list&num="+nv_randomPassword(8),a);return false}function nv_cl_del(a){confirm(nv_is_del_confirm[0])&&nv_ajax("post",script_name+"?"+nv_name_variable+"=banners",nv_fc_variable+"=del_client&id="+a+"&num="+nv_randomPassword(8),"","nv_cl_del_res");return false}function nv_cl_del_res(a){a=a.split("|");a[0]=="OK"?nv_show_cl_list(a[1]):alert(nv_is_del_confirm[2]);return false}
function nv_cl_del2(a){confirm(nv_is_del_confirm[0])&&nv_ajax("post",script_name+"?"+nv_name_variable+"=banners",nv_fc_variable+"=del_client&id="+a+"&num="+nv_randomPassword(8),"","nv_cl_del2_res");return false}function nv_cl_del2_res(a){a=a.split("|");a[0]=="OK"?window.location.href=script_name+"?"+nv_name_variable+"=banners&"+nv_fc_variable+"="+a[2]:alert(nv_is_del_confirm[2]);return false}
function nv_chang_act(a,b){if(confirm(nv_is_change_act_confirm[0]))nv_settimeout_disable(b,5E3),nv_ajax("post",script_name+"?"+nv_name_variable+"=banners",nv_fc_variable+"=change_act_client&id="+a+"&num="+nv_randomPassword(8),"","nv_chang_act_res");else{var c=document.getElementById(b);c.checked=c.checked==true?false:true}}
function nv_chang_act_res(a){a=a.split("|");if(a[0]!="OK")alert(nv_is_change_act_confirm[2]),a=document.getElementById(a[1]),a.checked=a.checked==true?false:true,clearTimeout(nv_timer),a.disabled=true;return false}function nv_chang_act2(a){confirm(nv_is_change_act_confirm[0])&&nv_ajax("post",script_name+"?"+nv_name_variable+"=banners",nv_fc_variable+"=change_act_client&id="+a+"&num="+nv_randomPassword(8),"","nv_chang_act2_res")}
function nv_chang_act2_res(a){a=a.split("|");a[0]!="OK"?alert(nv_is_change_act_confirm[2]):nv_client_info(a[2],a[3]);return false}function nv_client_info(a,b){nv_ajax("get",script_name+"?"+nv_name_variable+"=banners",nv_fc_variable+"=info_cl&id="+a+"&num="+nv_randomPassword(8),b);return false}function nv_banners_list(a,b){nv_ajax("get",script_name+"?"+nv_name_variable+"=banners",nv_fc_variable+"=banners_client&id="+a+"&num="+nv_randomPassword(8),b);return false}
function nv_show_plans_list(a){nv_ajax("get",script_name+"?"+nv_name_variable+"=banners",nv_fc_variable+"=plist&num="+nv_randomPassword(8),a);return false}function nv_pl_chang_act(a,b){if(confirm(nv_is_change_act_confirm[0]))nv_settimeout_disable(b,5E3),nv_ajax("post",script_name+"?"+nv_name_variable+"=banners",nv_fc_variable+"=change_act_plan&id="+a+"&num="+nv_randomPassword(8),"","nv_pl_chang_act_res");else{var c=document.getElementById(b);c.checked=c.checked==true?false:true}}
function nv_pl_chang_act_res(a){a=a.split("|");if(a[0]!="OK")alert(nv_is_change_act_confirm[2]),a=document.getElementById(a[1]),a.checked=a.checked==true?false:true,clearTimeout(nv_timer),a.disabled=true;return false}function nv_pl_del(a){confirm(nv_is_del_confirm[0])&&nv_ajax("post",script_name+"?"+nv_name_variable+"=banners",nv_fc_variable+"=del_plan&id="+a+"&num="+nv_randomPassword(8),"","nv_pl_del_res");return false}
function nv_pl_del_res(a){a=a.split("|");a[0]=="OK"?nv_show_plans_list(a[1]):alert(nv_is_del_confirm[2]);return false}function nv_plan_info(a,b){nv_ajax("get",script_name+"?"+nv_name_variable+"=banners",nv_fc_variable+"=info_pl&id="+a+"&num="+nv_randomPassword(8),b);return false}
function nv_pl_chang_act2(a){confirm(nv_is_change_act_confirm[0])&&nv_ajax("post",script_name+"?"+nv_name_variable+"=banners",nv_fc_variable+"=change_act_plan&id="+a+"&num="+nv_randomPassword(8),"","nv_pl_chang_act2_res")}function nv_pl_chang_act2_res(a){a=a.split("|");a[0]!="OK"?alert(nv_is_change_act_confirm[2]):nv_plan_info(a[2],a[3]);return false}
function nv_pl_del2(a){confirm(nv_is_del_confirm[0])&&nv_ajax("post",script_name+"?"+nv_name_variable+"=banners",nv_fc_variable+"=del_plan&id="+a+"&num="+nv_randomPassword(8),"","nv_pl_del2_res");return false}function nv_pl_del2_res(a){a=a.split("|");a[0]=="OK"?window.location.href=script_name+"?"+nv_name_variable+"=banners&"+nv_fc_variable+"="+a[2]:alert(nv_is_del_confirm[2]);return false}
function nv_show_banners_list(a,b,c,f){var d=nv_fc_variable+"=b_list";b!=0?d+="&clid="+b:c!=0&&(d+="&pid="+c);d+="&act="+f;$("#"+a).load(script_name+"?"+nv_name_variable+"=banners&"+d+"&num="+nv_randomPassword(8)+"&nocache="+(new Date).getTime());return false}
function nv_chang_weight_banners(a,b,c,f,d){var e=nv_fc_variable+"=b_list";nv_settimeout_disable("id_weight_"+d,5E3);var g=document.getElementById("id_weight_"+d).options[document.getElementById("id_weight_"+d).selectedIndex].value;b!=0?e+="&clid="+b:c!=0&&(e+="&pid="+c);e+="&act="+f;e+="&id="+d;e+="&weight="+g;$("#"+a).load(script_name+"?"+nv_name_variable+"=banners&"+e+"&num="+nv_randomPassword(8)+"&nocache="+(new Date).getTime());return false}
function nv_b_chang_act(a,b){if(confirm(nv_is_change_act_confirm[0]))nv_settimeout_disable(b,5E3),nv_ajax("post",script_name+"?"+nv_name_variable+"=banners",nv_fc_variable+"=change_act_banner&id="+a+"&num="+nv_randomPassword(8),"","nv_b_chang_act_res");else{var c=document.getElementById(b);c.checked=c.checked==true?false:true}}
function nv_b_chang_act_res(a){a=a.split("|");a[0]!="OK"?(alert(nv_is_change_act_confirm[2]),a=document.getElementById(a[1]),a.checked=a.checked==true?false:true,clearTimeout(nv_timer),a.disabled=true):window.location.href=window.location.href;return false}function nv_b_chang_act2(a){confirm(nv_is_change_act_confirm[0])&&nv_ajax("post",script_name+"?"+nv_name_variable+"=banners",nv_fc_variable+"=change_act_banner&id="+a+"&num="+nv_randomPassword(8),"","nv_b_chang_act_res")}
function nv_b_chang_act_res(a){a.split("|")[0]!="OK"?alert(nv_is_change_act_confirm[2]):window.location.href=window.location.href;return false}
function nv_show_stat(a,b,c,f,d){nv_settimeout_disable(f,5E3);b=document.getElementById(b).options[document.getElementById(b).selectedIndex].value;c=document.getElementById(c).options[document.getElementById(c).selectedIndex].value;nv_ajax("get",script_name+"?"+nv_name_variable+"=banners",nv_fc_variable+"=show_stat&id="+a+"&month="+b+"&ext="+c+"&num="+nv_randomPassword(8),d);return false}
function nv_show_list_stat(a,b,c,f,d,e){a=nv_fc_variable+"=show_list_stat&bid="+a+"&month="+b+"&ext="+c+"&val="+f;e!="0"&&(a+="&page="+e);nv_ajax("get",script_name+"?"+nv_name_variable+"=banners",a+"&num="+nv_randomPassword(8),d)};