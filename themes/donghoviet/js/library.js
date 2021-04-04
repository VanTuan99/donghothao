// JavaScript Document
<!--
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_validateForm() { //v4.0
  var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm.arguments;
  for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=MM_findObj(args[i]);
    if (val) {if (val.title!="") {nm=val.title;} else {nm=val.name;} if ((val=val.value)!="") {
      if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
        if (p<1 || p==(val.length-1)) errors+='- "'+nm+'" Phải là một địa chỉ email.\n';
      } else if (test!='R') { num = parseFloat(val);
        if (isNaN(val)) errors+='- "'+nm+'" Phải là một số.\n';
        if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
          min=test.substring(8,p); max=test.substring(p+1);
          if (num<min || max<num) errors+='- "'+nm+'" must contain a number between '+min+' and '+max+'.\n';
    } } } else if (test.charAt(0) == 'R') errors += '- Bạn chưa nhập "'+nm+'".\n'; }
  } if (errors) alert('Có những lỗi sau:\n'+errors);
  document.MM_returnValue = (errors == '');
}

function tab_register(select_id,count_tab){
	for(i=1;i<=count_tab;i++){
		document.getElementById("dangky_buoc_"+i).style.display='none';
		document.getElementById("td_register_"+i).className='text_tab_1';
	}
		document.getElementById("dangky_buoc_"+select_id).style.display='inline';
		document.getElementById("td_register_"+select_id).className='text_tab_2';
}

function register_tab(select_id,count_tab){
	for(i=1;i<=count_tab;i++){
		document.getElementById("dangky_buoc_"+i).style.display='none';
		document.getElementById("td_register_"+i).className='text_register_1';
	}
		document.getElementById("dangky_buoc_"+select_id).style.display='inline';
		document.getElementById("td_register_"+select_id).className='text_register_2';
}

function check_strlen(id1, id2, strlen){
	object1	= document.getElementById(id1);
	object2	= document.getElementById(id2);
	if(object1.value.length > strlen){
		object2.innerHTML = 0;
		alert("Bạn đã nhập đủ " + strlen + " ký tự.");
		object1.value = object1.value.substr(0,strlen);
		return false;
	}
	object2.innerHTML = parseInt(strlen - object1.value.length);
}