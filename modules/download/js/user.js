function nv_del_row(a,b){confirm(nv_is_del_confirm[0])&&nv_ajax("post",a.href,"del=1&id="+b,"","nv_del_row_result");return false}function nv_del_row_result(a){a=="OK"?window.location.href=window.location.href:alert(nv_is_del_confirm[2]);return false}
function nv_download_file(a,b){var c=document.getElementById("download_hits").innerHTML,c=intval(c);c+=1;document.getElementById("download_hits").innerHTML=c;window.location.href=nv_siteroot+"index.php?"+nv_lang_variable+"="+nv_sitelang+"&"+nv_name_variable+"="+nv_module_name+"&"+nv_fc_variable+"=down&file="+b;return false}
function nv_linkdirect(a){var b=document.getElementById("download_hits").innerHTML,b=intval(b);b+=1;document.getElementById("download_hits").innerHTML=b;win=window.open(nv_siteroot+"index.php?"+nv_lang_variable+"="+nv_sitelang+"&"+nv_name_variable+"="+nv_module_name+"&"+nv_fc_variable+"=down&code="+a,"mydownload");win.focus();return false}
function nv_link_report(a){nv_ajax("post",nv_siteroot+"index.php?"+nv_lang_variable+"="+nv_sitelang+"&"+nv_name_variable+"="+nv_module_name,nv_fc_variable+"=report&id="+a+"&num="+nv_randomPassword(8),"","nv_link_report_result");return false}function nv_link_report_result(){alert(report_thanks_mess);return false}
function nv_sendrating(a,b){a>0&&b>0&&b<6&&nv_ajax("post",nv_siteroot+"index.php",nv_lang_variable+"="+nv_sitelang+"&"+nv_name_variable+"="+nv_module_name+"&rating="+a+"_"+b+"&num="+nv_randomPassword(8),"stringrating");return false}
function nv_send_comment(){nv_settimeout_disable("comment_submit",1E4);var a="uname="+document.getElementById("comment_uname").value;a+="&uemail="+document.getElementById("comment_uemail_iavim").value;a+="&subject="+document.getElementById("comment_subject").value;a+="&content="+document.getElementById("comment_content").value;a+="&seccode="+document.getElementById("comment_seccode_iavim").value;a+="&id="+document.getElementById("comment_fid").value;a+="&ajax=1";nv_ajax("post",nv_siteroot+"index.php?"+
nv_lang_variable+"="+nv_sitelang+"&"+nv_name_variable+"="+nv_module_name+"&"+nv_fc_variable+"=getcomment",a+"&num="+nv_randomPassword(8),"","nv_send_comment_res")}
function nv_send_comment_res(a){a=="OK"?(alert(comment_thanks_mess),nv_list_comments(),document.getElementById("comment_subject").value=comment_subject_defaul,document.getElementById("comment_content").value="",hidden_form()):a=="WAIT"?(alert(comment_please_wait),document.getElementById("comment_subject").value=comment_subject_defaul,document.getElementById("comment_content").value=""):alert(a);nv_change_captcha("vimg","comment_seccode_iavim");return false}
function nv_list_comments(){fid=document.getElementById("comment_fid").value;nv_ajax("get",nv_siteroot+"index.php?"+nv_lang_variable+"="+nv_sitelang+"&"+nv_name_variable+"="+nv_module_name+"&"+nv_fc_variable+"=getcomment","&list_comment="+fid+"&num="+nv_randomPassword(8),"list_comments");return false}
function show_form(){var a=document.getElementById("hidden_form_comment"),b=document.getElementById("form_comment");a.style.visibility="hidden";a.style.display="none";b.style.visibility="visible";b.style.display="block";window.location.href="#cform"}function hidden_form(){var a=document.getElementById("hidden_form_comment"),b=document.getElementById("form_comment");b.style.visibility="hidden";b.style.display="none";a.style.visibility="visible";a.style.display="block";window.location.href="#lcm"}
function nv_comment_del(a,b){confirm(nv_is_del_confirm[0])&&nv_ajax("post",a.href,"del=1&id="+b,"","nv_comment_del_result");return false}function nv_comment_del_result(a){a=="OK"?nv_list_comments():alert(nv_is_del_confirm[2]);return false};