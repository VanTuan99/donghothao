// JavaScript Document
function check_hoidap(string, level, id){
	
	//Gán giá trị = 0 cho hd_category_id
	document.getElementById("hd_category_id").value = "";
	
	//Tách chuỗi để kiểm tra xem có phải category cuối cùng hay ko
	arr_str = string.split("_");
	
	//Nếu chuỗi bằng rỗng thì return luôn
	if(arr_str[0] == "") return;
	
	//Lấy thẻ div để load ajax
	div_level = level + 1;
	
	//Người dùng đã chọn đến category cuối cùng
	if(arr_str[0] == "true"){
		//Hiển thị thông báo đã chọn xong category và return luôn
		/*
		document.getElementById("hoidap_message").style.display	= "inline";
		document.getElementById("hoidap_message_2").style.display= "none";
		*/
		document.getElementById("hoidap_finish").style.display	= "inline";
		document.getElementById("hd_category_id").value = arr_str[1];
		load_data("/ajax/load_hoidap_fn.php?id=" + arr_str[1], "hoidap_finish");
		for(i=0; i<=3; i++){
			//Ẩn những thẻ div load ajax khác đi 
			if(i > level) document.getElementById("hoidap_" + i).style.display = "none";
		}
		//window.location.hash='#jump_me';
		return;
	}
	
	//Ẩn cái finish đi
	/*
	document.getElementById("hoidap_message").style.display	= "none";
	document.getElementById("hoidap_message_2").style.display= "inline";
	document.getElementById("hoidap_message_2").innerHTML		= '<img align="absmiddle" src="/images/hoidap_icon_2.gif" /> Bạn chưa chọn đến danh mục cuối cùng. Hãy tiếp tục chọn "<b>Bước số ' + div_level  + '</b>"';
	*/
	document.getElementById("hoidap_finish").style.display	= "none";
	
	for(i=0; i<=3; i++){
		//Kiểm tra xem nếu nhỏ hơn hoặc = thẻ div load ajax thì cho hiển thị
		if(i <= div_level) document.getElementById("hoidap_" + i).style.display = "inline";
		//Ngược lại thì ẩn luôn
		else document.getElementById("hoidap_" + i).style.display = "none";
	}
	
	//Load file ajax
	load_data("/ajax/load_hoidap.php?id=" + id + "&parent_id=" + arr_str[1], "hoidap_" + div_level);
	
}

function search_result_click(id){
	document.getElementById("hd_category_id").value = id;
	document.getElementById("hoidap_finish").style.display	= "inline";
	load_data("/ajax/load_hoidap_fn.php?id=" + id, "hoidap_finish");
	window.location.hash='#jump_me';
}