// JavaScript Document

var isIE				= (navigator.userAgent.toLowerCase().indexOf("msie") == -1 ? false : true);
var isIE6			= (navigator.userAgent.toLowerCase().indexOf("msie 6") == -1 ? false : true);
var isIE7			= (navigator.userAgent.toLowerCase().indexOf("msie 7") == -1 ? false : true);
var isChrome		= (navigator.userAgent.toLowerCase().indexOf("chrome") == -1 ? false : true);

function addCommas(nStr){
	nStr += ''; x = nStr.split(',');	x1 = x[0]; x2 = ""; x2 = x.length > 1 ? ',' + x[1] : ''; var rgx = /(\d+)(\d{3})/; while (rgx.test(x1)) { x1 = x1.replace(rgx, '$1' + '.' + '$2'); } return x1 + x2;
}

var vatgia_product_favorites_comment	= '<div class="title">Lợi ích khi theo dõi sản phẩm?</div><div class="content">Khi quý khách "Theo dõi" sản phẩm thì mọi thông tin như giá cả, hỏi đáp, đánh giá liên quan đến sản phẩm được cập nhật, thì hệ thống sẽ tự động gửi thông tin vào tài khoản của quý khách trên Vatgia.com. Quý khách có thể theo dõi thông báo mới từ hệ thống trên icon hình quả cầu bên cạnh ô tìm kiếm của website.</div>';
function addToCartButton(record_id, estore_id, estore_name, vatgia_verified, map_friend, direct_add_to_cart_link, baokim_payment, redirect){
	strReturn	= '<div class="add_to_cart_button">';
	if(vatgia_verified == 1) strReturn	+= '<div class="vatgia_verified">Hãy đặt hàng tại đây<br />để được đảm bảo an toàn <img class="tooltip_content" tooltipContent="vatgia_verified_text" src="' + fs_imagepath + 'icon_question_small.gif" style="cursor:pointer" /></div>';
	if(direct_add_to_cart_link != ""){
		strReturn	+= '<div><a href="' + direct_add_to_cart_link + '"><img src="' + fs_imagepath + 'btn_order.gif" /></a></div>';
		strReturn	+= '<div class="end"><a class="tooltip_content" tooltipContent="vatgia_product_favorites_comment" href="/home/addfavorites.php?addto=product&record_id=' + record_id + '&redirect=' + redirect + '" rel="nofollow"><img src="' + fs_imagepath + 'btn_order_favorites.gif" /></a></div>';
	}
	else{
		href	= '/home/addtocart.php?iPro=' + record_id + '&estore_id=' + estore_id + '&estore_name=' + estore_name + '&return=' + redirect;
		strReturn	+= '<div><a href="javascript:;" onclick="addToCartLink(\'' + href + '\'); return false;"><img src="' + fs_imagepath + 'btn_order.gif" /></a></div>';
		strReturn	+= '<div class="or">Hoặc</div>';
		strReturn	+= '<div>';
			if(map_friend !== null){
				strReturn	+= '<select id="friend_id"><option value="0">- Chọn người nhận -</option>';
				$.each(map_friend, function(key, value){
					strReturn	+= '<option value="' + key + '">' + value + '</option>';
				});
				strReturn	+= '</select>';
			}
			strReturn	+= '<a href="javascript:;" onClick="window.location.href=\'/home/buynow.php?iPro=' + record_id + '&iUse=' + estore_id + '&iUf=\' + parseInt($(&quot;#friend_id&quot;).val())"><img src="' + fs_imagepath + 'btn_order_1_click.gif" /></a>';
		strReturn	+= '</div>';
		strReturn	+= '<div' + (baokim_payment == 0 ? ' class="end"' : "") + '><a class="tooltip_content" tooltipContent="vatgia_product_favorites_comment" href="/home/addfavorites.php?addto=product&record_id=' + record_id + '&redirect=' + redirect + '" rel="nofollow"><img src="' + fs_imagepath + 'btn_order_favorites.gif" /></a></div>';
		if(baokim_payment == 1){
			strReturn	+= '<div class="baokim_pay_now end">An toàn hơn qua Baokim.vn<br /><a href="/home/baokim_pay_now.php?iPro=' + record_id + '&iUse=' + estore_id + '" target="_blank"><img src="' + fs_imagepath + 'btn_order_baokim.gif" /></a></div>';
			strReturn	+= '<div class="end"><a href="https://www.baokim.vn/promote/vatgia-baokim.html" target="_blank" rel="nofollow"><img src="' + fs_imagepath + 'baokim_event.gif" /></a></div>';
		}
		else strReturn	+= '<div class="baokim_pay_now end" style="text-align:left"><a title="Yêu cầu hỗ trợ thanh toán qua Bảo Kim" href="javascript:showBoxBaokimRequestIntegrate(' + estore_id + ');"><img src="' + fs_imagepath + 'icon_warning_2.gif" border="0" align="top" style="margin-top:0px" />&nbsp; Gian hàng này chưa được hỗ trợ <b style="color:#f00001">thanh toán tạm giữ với Baokim.vn</b></a></div>';
	}
	strReturn	+= '</div>';
	return strReturn;
}

function showBoxBaokimRequestIntegrate(iUse){

	cssTemp		= '<style type="text/css">';
	cssTemp		+=	'.baokim_request_intergrate{padding: 10px;font-size: 13px;line-height: 20px;}';
	cssTemp		+=	'.baokim_request_intergrate ul li{ list-style: none;display: block;background: url("' + fs_imagepath + 'icon_check_2.gif") no-repeat center left;padding-left: 18px;}';
	cssTemp		+= '</style>';

	contentTemp	= '<div class="baokim_request_intergrate">';
	contentTemp	+= '<table cellspacing="3" cellpadding="3">';
	contentTemp	+= '<tr>';
	contentTemp	+= '<td><img src="' + fs_imagepath + 'icon_warning_3.gif" /></td>';
	contentTemp	+= '<td align="left">';
	contentTemp	+= '<div style="margin-bottom: 10px">Bạn nên mua sắm ở gian hàng có hỗ trợ thanh toán qua Bảo Kim để được:</div>';
	contentTemp	+= '<ul><li><b>Đảm bảo an toàn tuyệt đối</b></li><li><b>Được hoàn lại <span style="color:#F00">100% tiền</span></b> khi người bán không làm đúng cam kết trong thời gian tạm giữ tiền</li></ul>';
	contentTemp	+= '<div style="margin-top: 10px"><b style="color:#E97D13">Gian hàng này chưa được hỗ trợ <span style="color:#0085bd">thanh toán tạm giữ qua Bảo Kim</span></b> !</div>';
	contentTemp	+= '</td>';
	contentTemp	+= '</tr>';
	contentTemp	+= '<tr><td colspan="2">';
	contentTemp	+= '<div class="fl"><b>Gửi yêu cầu gian hàng hỗ trợ thanh toán qua Bảo Kim</b></div>';
	contentTemp	+= '<div class="fr"><input type="button" onclick="baokimRequestIntegrate(' + iUse + ')" value="Gửi yêu cầu" />&nbsp;<input type="button" onclick="$.colorbox.close();" value="Hủy bỏ" /></div>';
	contentTemp	+= '</td></tr>';
	contentTemp	+= '</table>';
	contentTemp	+= '</div>';

	htmlData	= cssTemp + contentTemp;
	$.colorbox({html:htmlData});

}

function addToCartLink(href){
	quantity		= 1;
	obTemp		= $("#addtocart_quantity");
	if(obTemp.length) quantity = parseInt(obTemp.val());
	if(quantity <= 0 || isNaN(quantity)){
		alert("Số lượng phải lớn hơn 0.");
		obTemp.focus();
		return false;
	}
	window.location.href	= href + "&quantity=" + quantity;
}

function baokimPayment(){
	return '<a title="Thanh toán với Baokim.vn" class="colorbox_iframe_baokim" href="/ajax_v2/load_news.php?iData=7964" target="_blank" rel="nofollow"><img align="absmiddle" src="/images/baokim_icon.gif" /></a>';
}

function baokimRequestIntegrate(estore_id){
	if(user_logged == 0){
		alert("Bạn chưa đăng nhập vào hệ thống.");
	}
	else{
		$.get(con_ajax_path + "baokim_request_integrate.php?iEst=" + estore_id, function(data){
			if(checkAjaxResponse(data)){
				alert("Yêu cầu tích hợp thanh toán tạm giữ với Baokim.vn đã được gửi tới gian hàng.\n Cảm ơn bạn đã đồng hành mua sắm cùng Vatgia.com");
			}
		});
	}
}

function generateBaoKimCertification(baokim_payment){
	content	= '';
	if(baokim_payment == 1) content	= '<div style="padding:10px 0px; text-align:center"><a rel="nofollow" target="_blank" href="https://www.baokim.vn/ho-tro/a/thanh-toan-tren-vat-gia/mua-hang-nhan-tien-thuong/"><img border="0" src="' + fs_imagepath + 'baokim_certification.gif" /></a></div>';

	return content;
}
function generateBaoKimBonus(){
	content	= '<div style="padding:10px 0px; text-align:center"><a rel="nofollow" target="_blank" href="https://www.baokim.vn/promote/vatgia-baokim.html"><img border="0" width="380" src="' + fs_imagepath + 'baokim_bonus.gif" /></a></div>';
	return content;
}

// Change type khi post, edit sản phẩm
function changeTypeProduct(type, ob){
	if(type == 1) ob.val(1).attr("disabled", true);
	else ob.attr("disabled", false);
}

function change_tab(id_tab, num_data, id_show, id_data, dom){
	for(i=0; i<num_data; i++){
		$("#tab_" + i).attr("class", "normal");
	}
	$("#tab_" + id_tab).attr("class", "current");
	if(id_show != "" && id_data != ""){
		data = $("#" + id_data).html();
		$("#" + id_show).html(data);
	}
	if(dom == 1){
		$('.product_picture_thumbnail').tooltip({
			bodyHandler: function(){
				return this.rel;
			},
			track: true,
			showURL: false,
			extraClass: ''
		});
	}
}

function checkAjaxResponse(response){
	if(response.substr(0, 7) == "[error]"){
		alert(response.replace("[error]", "").replace(/<br \/>/gi, '\n').replace(/\&bull;/gi, '-'));
		return false;
	}
	return true;
}

function check_form_login(){
	frm	= document.form_login;
	if(frm.loginname.value == ""){alert("Bạn chưa nhập tên đăng nhập."); frm.loginname.focus(); return false;}
	if(frm.password.value == ""){alert("Bạn chưa nhập mật khẩu."); frm.password.focus(); return false;}
	frm.submit();
}

function close_teaser(id_text, id_nut_open, id_nut_close){
	document.getElementById(id_text).className			= "product_teaser product_teaser_close";
	document.getElementById(id_nut_close).style.display= "none";
	document.getElementById(id_nut_open).style.display	= "inline";
}

function convertVideoLink(ob){

	opts	= {
		limit	: 5,
		width	: 560,
		height: 315
	}

	args	= convertVideoLink.arguments;
	if(typeof(args[1]) != "undefined") $.extend(opts, args[1]);

	youtubeIDextract	= function(text){
		var replace = "$1";
		if(!text.match(/(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g)) return false;
		if(text.match(/^[^v]+v.([^&^=^\/]{11}).*/)) return text.replace(/^[^v]+v.([^&^=^\/]{11}).*/,replace);
		else if(text.match(/^[^v]+\?v=([^&^=^\/]{11}).*/)) return text.replace(/^[^v]+\?v=([^&^=^\/]{11}).*/,replace);
		else return false;
	}
	ob.each(function(){
		$(this).find("a").filter(function(){
			return this.href.match(/(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g);
		}).each(function(index, domEle){
			code	= youtubeIDextract($(domEle).attr("href"));
			if(code.length > 20) return;
			if(code !== false){
				iframe= $('<iframe width="' + opts.width + '" height="' + opts.height + '" src="http://www.youtube.com/embed/' + htmlspecialbo(code) + '" frameborder="0" allowfullscreen="true" style="margin:5px 0px"></iframe>');
				iframe.insertAfter($(domEle));
				$(domEle).remove();
			}
			if(index >= (opts.limit - 1)) return false;
		});
	});

}

function deleteExclusivePicture(iPro, iGal, authen_code){
	if(confirm("Bạn có muốn xóa ảnh này không?")){
		$("#picture_" + iPro + "_" + iGal).load("/ajax_v2/delete_exclusive_picture.php?iPro=" + iPro + "&iGal=" + iGal + "&authen_code=" + authen_code);
	}
}

function formatCurrency(div_id, str_number){
	document.getElementById(div_id).innerHTML = addCommas(str_number);
}

function generateProductDataOption(id, authen_code){
	str = '<span id="product_picture_option_' + id + '">';
			if(authen_code != ""){
				str += '<a title="Sửa thông tin sản phẩm" class="colorbox_iframe" href="' + con_ajax_path + 'load_edit_product.php?iData=' + id + '" target="_blank" rel="nofollow"><img src="' + fs_imagepath + 'icon_edit.gif" /></a>';
				str += '<a title="Xóa sản phẩm" class="text_link_v2" href="javascript:;" rel="nofollow" onclick="if (confirm(\'Bạn có chắc muốn xóa sản phẩm này không?\')) { window.location.href = \'/home/delete_product.php?record_id=' + id + '&authen_code=' + authen_code + '&redirect=' + fs_redirect + '\';}"><img src="' + fs_imagepath + 'icon_delete.gif" /></a>';
			}
				str += '<img title="Phóng to" src="' + fs_imagepath + 'icon_zoom_in.gif" onClick="$(this).parent().parent().find(\'.colorbox\').click()" />' +
			'</span>';
	return str;
}

function generateVote(numberstar){
	maxStar		= 5;
	numberstar	= parseFloat(numberstar)
	var intStar	= parseInt(numberstar);
	//Kiểm tra sai số
	if (intStar < 0) { intStar = 0; numberstar = 0; }
	if (intStar > maxStar) { intStar = maxStar; numberstar = maxStar; }
	//Ghi star xịn ra
	for (i=1; i<=intStar; i++) document.write('<img src="' + theme_imagepath + 'star_1.gif" />');
	//Neu intStar!=numberstar thi them 0,5 vao va cong intStar them 1
	if (intStar!=numberstar){ document.write('<img src="' + theme_imagepath + 'star_2.gif" />'); intStar++;}
	//ghi ra so sao = 0 con lai
	for (i=intStar+1; i<=maxStar; i++) document.write('<img src="' + theme_imagepath + 'star_0.gif" />');
}

function getCookie(c_name){
	if(document.cookie.length>0){
		c_start=document.cookie.indexOf(c_name + "=");
		if(c_start!=-1){
			c_start=c_start + c_name.length+1;
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1) c_end=document.cookie.length;
			return unescape(document.cookie.substring(c_start,c_end));
		}
	}
	return "";
}

function hoidap_reply_thankyou_point(point){
	rate_max = 5;
	for(i=1; i<=rate_max; i++){
		star_image = (i <= point) ? "/images/star_green.gif" : "/images/star_none.gif";
		document.write('<img align="absmiddle" src="' + star_image + '" />');
	}
}

function htmlspecialbo(string){
	arrStr	= ['<', '"', '>'];
	arrRep	= ['&lt;', '&quot;', '&gt;'];
	for(i=0; i<arrStr.length; i++){
		eval('string	= string.replace(/' + arrStr[i] + '/g, "' + arrRep[i] + '");');
	}
	return string;
}

function initColorBox(){
	$(".colorbox").colorbox({
		maxWidth: "95%",
		maxHeight: "95%",
		current: "ảnh {current} / {total}",
		fixed: true,
		onComplete: function(){
			strHtml		= "";
			if(typeof($(this).attr("tooltipContent")) != "undefined"){
				arrTemp	= $(this).attr("tooltipContent").split("@#@");
				name		= (typeof(arrTemp[2]) != "undefined" ? '<a href="' + htmlspecialbo(arrTemp[2]) + '" target="blank">' + htmlspecialbo(arrTemp[0]) + '</a>' : htmlspecialbo(arrTemp[0]));
				price		= (parseFloat(arrTemp[1]) > 0 ? parseFloat(arrTemp[1]) : 0);
				link		= (typeof(arrTemp[2]) != "undefined" ? ' - <a href="' + htmlspecialbo(arrTemp[2]) + '" target="blank">Xem chi tiết</a>' : '');
				if(name != "")strHtml += '<div class="cboxText">' + name + '</div>';
				if(price > 0) strHtml += '<div class="cboxPrice">Giá: <b>' + addCommas(price) + ' VNĐ</b>' + link + '</div>';
			}
			if(strHtml != "") $("#cboxLoadedContent").append('<div class="cboxContent">' + strHtml + '</div>');
		}
	});
	$(".colorbox_iframe").colorbox({ iframe: true, width: "735px", height: "95%", overlayClose: false, fixed: true });
	$(".colorbox_iframe_baokim").colorbox({ iframe: true, width: "735px", height: "95%", overlayClose: false, fixed: true });
	$(".colorbox_iframe_upload").colorbox({ iframe: true, width: "800px", height: "95%", fixed: true });
}

function notice_alert(type, url){
	str = '';
	switch(type){
		case "price":
			str = '<a class="notice_price" title="Báo sai giá sản phẩm của gian hàng này" href="#notice_price" rel="nofollow" lang="vi" onClick="if(confirm(\'Xin bạn vui lòng đăng nhập để sử dụng tính năng này !\\nBạn hãy click vào OK để đến trang đăng nhập.\')) window.location.href=\'/home/login.php?redirect=' + url + '\'">Báo sai giá</a>';
			break;
		case "stock":
			str = '<a class="notice_stock" title="Báo hết hàng tại cửa hàng này" href="#notice_stock" rel="nofollow" lang="vi" onClick="if(confirm(\'Xin bạn vui lòng đăng nhập để sử dụng tính năng này !\\nBạn hãy click vào OK để đến trang đăng nhập.\')) window.location.href=\'/home/login.php?redirect=' + url + '\'">Báo hết hàng</a>';
			break;
	}
	document.write(str);
}

function notice_product(type, pro_id, u_id, u_name){
	str = '';
	switch(type){
		case "price":
			str = '<a class="notice_price" title="Báo sai giá sản phẩm của gian hàng này" href="#notice_price" rel="nofollow" lang="vi" onclick="if (confirm(\'Bạn đã kiểm tra và chắc chắn giá tại cửa hàng ' + u_name + ' là sai?\')){load_data(\'/ajax/notice_price.php?iUse=' + u_id + '&iPro=' + pro_id + '\', \'div_notice_' + u_id + '\'); }">Báo sai giá</a>';
			break;
		case "stock":
			str = '<a class="notice_stock" title="Báo hết hàng tại cửa hàng này" href="#notice_stock" rel="nofollow" lang="vi" onclick="if (confirm(\'Bạn đã kiểm tra và chắc chắn sản phẩm cửa hàng ' + u_name + ' đã hết hàng?\')){load_data(\'/ajax/notice_stock.php?iUse=' + u_id + '&iPro=' + pro_id + '\', \'div_notice_' + u_id + '\'); }">Báo hết hàng</a>';
			break;
	}
	document.write(str);
}

function open_teaser(id_text, id_nut_open, id_nut_close){
	document.getElementById(id_text).className			= "product_teaser product_teaser_open";
	document.getElementById(id_nut_open).style.display	= "none";
	document.getElementById(id_nut_close).style.display= "inline";
}

// Show link đăng sản phẩm vào mục đặc biệt
function product_season(pro_id, type){
	document.write('<a href="#season" title="Đăng sản phẩm vào mục đặc biệt" rel="nofollow" style="cursor:pointer" onClick="$.colorbox({ iframe: true, href: \'/ajax_v2/load_season_product.php?nocrossdomain=1&iData=' + pro_id + '\', width: \'735px\', height: \'95%\', overlayClose: false })"><img align="absmiddle" src="/images/icon_season_' + type + '_v2.gif" /> Đăng vào mục đặc biệt</a>');
}

// Show link đăng quảng cáo sản phẩm qua Facebook
function product_facebook_ads(pro_id){
	document.write('<a href="#facebook_ads" title="Quảng cáo trên Facebook" rel="nofollow" style="cursor:pointer" onClick="$.colorbox({ iframe: true, href: \'/ajax_v2/facebook_ads.php?nocrossdomain=1&record_id=' + pro_id + '\', width: \'735px\', height: \'95%\', overlayClose: false })"><img align="absmiddle" src="/images/icon_facebook.gif" /> Quảng cáo trên Facebook</a>');
}

// Show link đăng quảng cáo Popup cho sản phẩm
function product_popup_ads(pro_id){
	document.write('<a href="#popup_ads" title="Quảng cáo Popup" rel="nofollow" style="cursor:pointer" onClick="$.colorbox({ iframe: true, href: \'/ajax_v2/popup_ads.php?nocrossdomain=1&record_id=' + pro_id + '\', width: \'735px\', height: \'95%\', overlayClose: false })"><img align="absmiddle" src="/images/icon_popup.gif" /> Quảng cáo Popup</a>');
}

// Show link đăng quảng cáo VatgiaAd cho sản phẩm
function product_vatgia_ads(pro_id){
	document.write('<a target="_blank" title="Quảng cáo Vatgia Ad" href="/profile/?module=advertising&record_id=' + pro_id + '" rel="nofollow" style="cursor:pointer"><img align="absmiddle" src="/images/icon_vatgia_ad.gif" /> Quảng cáo Vatgia Ad</a>');
}

function quick_search_center(user_path){
	frm		= document.center_search_form;
	keyword	= frm.keyword.value;
	price		= frm.price.value;
	price_to	= frm.price_to.value;

	url		= user_path + "&module=quicksearch";
	if(keyword != ""){
		while(keyword.indexOf('/') >= 0)	keyword = keyword.replace('/','');
		while(keyword.indexOf('\\') >= 0)keyword = keyword.replace('\\','');
		url	= url + "&keyword=" + encodeURI(keyword);
	}
	if(parseFloat(price) > 0) 	url	= url + "&price=" + price;
	if(parseFloat(price_to) > 0) url	= url + "&price_to=" + price_to;

	window.location.href = url;
}

function save_cookie(cookie_name, cookie_value){
	document.cookie = cookie_name + "=" + cookie_value;
}

function show_hide_content(id1, id2, height){
	ob1	= document.getElementById(id1);
	ob2	= document.getElementById(id2);
	if(ob1.style.height	== height){
		ob1.style.height	= "auto";
		ob2.innerHTML		= "Thu nhỏ";
		ob2.className		= "collapse";
	}
	else{
		ob1.style.height	= height;
		ob2.innerHTML		= "Mở rộng";
		ob2.className		= "expand";
	}
}

function showYM(nick, icontype, text, max_length, url){
	name	= (text.length <= max_length || max_length == 0) ? text : text.substr(0, max_length) + "...";
	document.write('<a title="' + text + '" class="text_link_v2" href="ymsgr:sendim?' + nick + '&m=Xin chao, toi muon hoi ve san pham ' + url + ' !" rel="nofollow"><img align="absmiddle" border="0" src="http://opi.yahoo.com/online?u=' + nick + '&m=g&t=' + icontype + '&l=us" alt="Y!M" />' + name + '</a>');
}

function showSkype(nick, text, max_length){
	name	= (text.length <= max_length || max_length == 0) ? text : text.substr(0, max_length) + "...";
	document.write('<a title="' + text + '" class="text_link_v2" href="skype:' + nick + '?call" rel="nofollow"><img align="absmiddle" border="0" src="/images/skype.gif" alt="Skype" />' + name + '</a>');
}

function tooltipBaokimPayNow(){
	$(".baokim_pay_now").tooltip({
		bodyHandler: function(){
			$("#tooltip").css("width", "300px");
			return '<div style="margin-bottom:5px">Bạn cần liên hệ với người bán trước khi thanh toán để chắc chắn về những thông tin sau:</div>' +
					 '- Giá chính xác của sản phẩm.<br />' +
					 '- Tình trạng hàng (Còn hàng/ Hết hàng).<br />' +
					 '- Phí vận chuyển đối với sản phẩm.<br />' +
					 '- Chi phí khác (nếu có).';
		},
		track: true,
		showURL: false,
		extraClass: ''
	});
}

function showAdminBar(){
	/** ["css_class_name","action(function)","name"] **/
	var arrMenu = new Array (
			 ["setting","showSettingMenu()","Quản trị gian hàng"],
			 ["help","showHelp()","Hướng dẫn QTGH"]
		 );

	var content	= '<ul>';
	for(var i=0; i < arrMenu.length; i++){
		content += '<li class="' + arrMenu[i][0] + '"><a href="javascript:' + arrMenu[i][1] + ';">' + arrMenu[i][2] + '</a></li>';
	}
	content	+= '</ul>';

	$("#body").append('<div id="footer_admin_bar">'+content+'</div>');

	var ob = $("#footer_admin_bar");
	$(window).scroll(function(){
		if(isIE6){
			var offsetTop	= $(window).scrollTop() + $(window).height() - ob.height();
			ob.offset({ top:offsetTop });
		}
		else{
			ob.css({"position":"fixed"});
		}
	});
}

function showSettingMenu(){
	$("#footer_admin_bar li.setting").prepend()
	var count = $("#body").has("div.admin_menu").length;
	if(count == 0){
		$("#body").append('<div class="admin_menu"></div>');
	}

	var ob = $("div.admin_menu");
	ob.css({"bottom":$("realtime_box").height()});

	if(isIE6 == false){
		ob.css({"position":"fixed"});
	}

	if(ob.html() == ""){
		var content = 'Quản trị gian hàng | Cấu hình Estore | Quản trị gian hàng';
		ob.html(content);
	}else{
		ob.toggle();
	}

	$(window).scroll(function(){
		ob.hide();
	});
}

function windowPrompt(data){

	$(".wPrompt").remove();

	var wPromptOpts	= {
		version		: 20120403,
		width			: "auto",
		height		: "auto",
		title			: "",
		content		: "",
		comment		: "",
		fixed			: true,
		showBottom	: true,
		href			: null,
		ajax			: false,
		iframe		: false,
		overlay		: true,
		overlayClose: true,
		alert			: false,
		confirm		: false,

		onOpen		: null,
		onComplete	: null,
		onCleanup	: null,
		onClosed		: null
	};

	var optsAlert	= {
		value			: "Đồng ý",
		callback		: null
	}

	var optsConfirm= {
		valueTrue	: "Đồng ý",
		valueFalse	: "Từ chối",
		callback		: null
	}

	args	= windowPrompt.arguments;
	if(args.length == 2){
		wPromptOpts.title	= args[0];
		data			= args[1];
	}

	// Extend data
	if(typeof(data) == "object"){
		$.extend(wPromptOpts, data);
		if(wPromptOpts.alert != false || wPromptOpts.confirm != false){
			// Khi alert, confirm cho showBottom mặc định = false
			if(typeof(data.showBottom) == "undefined") wPromptOpts.showBottom = false;
		}
	}

	// Extend alert
	if(typeof(wPromptOpts.alert) == "object") $.extend(optsAlert, wPromptOpts.alert);
	else if(typeof(wPromptOpts.alert) == "function") optsAlert.callback = wPromptOpts.alert;

	// Extend confirm
	if(typeof(wPromptOpts.confirm) == "object") $.extend(optsConfirm, wPromptOpts.confirm);
	else if(typeof(wPromptOpts.confirm) == "function") optsConfirm.callback = wPromptOpts.confirm;

	// Get DOM element
	domEleWindowPrompt	= function(){
		domEle	= $(".wPrompt, .wPromptOverlay");
		domEle	= $.extend(domEle, {wPrompt: $(".wPrompt"), wPromptOverlay: $(".wPromptOverlay")});
		return domEle;
	}

	// Alert function
	alertWindowPrompt	= function(){
		closeWindowPrompt();
		if(typeof(optsAlert.callback) == "function") optsAlert.callback();
	}

	// Confirm function
	confirmWindowPrompt	= function(confirm){
		closeWindowPrompt();
		if(typeof(optsConfirm.callback) == "function") optsConfirm.callback(confirm);
	}

	// Close function
	closeWindowPrompt = function(){
		if(typeof(wPromptOpts.onCleanup) == "function") wPromptOpts.onCleanup(domEleWindowPrompt());
		$(".wPrompt, .wPromptOverlay").remove();
		if(typeof(wPromptOpts.onClosed) == "function") wPromptOpts.onClosed();
	}

	if(typeof(data) == "object"){
		// Ajax
		if(wPromptOpts.ajax && wPromptOpts.href != null) wPromptOpts.content	= $.ajax({ url: wPromptOpts.href, async: false }).responseText;
		// Iframe
		else if(wPromptOpts.iframe && wPromptOpts.href != null) wPromptOpts.content	= '<iframe class="wPromptIframe" name="wPromptIframe" frameborder="0" src="' + wPromptOpts.href + '" onload="window.frames[\'wPromptIframe\'].document.body.style.marginRight=\'5px\'"></iframe>';
		// Function
		else if(typeof(wPromptOpts.content) == "function") wPromptOpts.content = wPromptOpts.content();
	}
	else if(typeof(data) == "function") wPromptOpts.content = data();
	else wPromptOpts.content = data;

	// Width, Height temp
	widthTemp	= 21;
	heightTemp	= (wPromptOpts.showBottom ? 53 : 26);

	// Width
	if(wPromptOpts.width != "auto"){
		if(String(wPromptOpts.width).indexOf("%") !== -1)	wPromptOpts.width	= parseInt(wPromptOpts.width)/100 * ($(window).width() - widthTemp);
		wPromptOpts.width	= parseInt(wPromptOpts.width) + "px";
	}
	// Height
	if(wPromptOpts.height != "auto"){
		if(String(wPromptOpts.height).indexOf("%") !== -1)	wPromptOpts.height= parseInt(wPromptOpts.height)/100 * ($(window).height() - heightTemp);
		wPromptOpts.height= parseInt(wPromptOpts.height) + "px";
	}

	// onOpen
	if(typeof(wPromptOpts.onOpen) == "function") wPromptOpts.onOpen();

	// Nếu isIE6 thì không cho overlay
	if(isIE6) wPromptOpts.overlay	= false;

	html	= '';
	if(wPromptOpts.overlay && !$(".wPromptOverlay").length) html += '<div class="wPromptOverlay"' + (wPromptOpts.overlayClose ? ' style="cursor:pointer" onClick="closeWindowPrompt()"' : '') + '></div>';
	wPromptAbsolute	= (!wPromptOpts.fixed || isIE6 ? ' wPromptAbsolute' : '');
	html += '<div class="wPrompt' + wPromptAbsolute + '">';
		html += '<div class="wPromptWrapper" style="width:' + wPromptOpts.width + '">';
			html += '<div class="wPromptLoadedContent" style="width:' + wPromptOpts.width + '; height:' + wPromptOpts.height + '">';
				if(wPromptOpts.iframe && wPromptOpts.href != null) html += wPromptOpts.content;
				else{
					if(wPromptOpts.title != "") html += '<div class="wPromptTitle">' + wPromptOpts.title + '</div>';
					cssIcon	= '';
					if(wPromptOpts.alert != false)	cssIcon = ' wPromptAlert';
					if(wPromptOpts.confirm != false) cssIcon = ' wPromptConfirm';
					html += '<div class="wPromptContent' + cssIcon + '">';
					html += wPromptOpts.content;
					if(wPromptOpts.alert != false){
						html += '<div class="wPromptAlertButton"><input type="button" class="wPromptInputButton" value="' + optsAlert.value + '" onClick="alertWindowPrompt()" /></div>';
					}
					if(wPromptOpts.confirm != false){
						html += '<div class="wPromptConfirmButton">';
							html += '<input type="button" class="wPromptInputButton" value="' + optsConfirm.valueTrue + '" onClick="confirmWindowPrompt(true)" /> &nbsp;';
							html += '<input type="button" class="wPromptInputButton" value="' + optsConfirm.valueFalse + '" onClick="confirmWindowPrompt(false)" />';
						html += '</div>';
					}
					html += '</div>';
				}
			html += '</div>';
			html += '<div class="clear"></div>';
			if(wPromptOpts.showBottom){
				html += '<div class="wPromptBottom">';
					if(wPromptOpts.comment != "") html += '<div class="wPromptComment">' + wPromptOpts.comment + '</div>';
					html += '<a title="Đóng" class="wPromptClose" href="javascript:;" onClick="closeWindowPrompt()"></a>';
					html += '<div class="clear"></div>';
				html += '</div>';
			}
		html += '</div>';
	html += '</div>';

	ob	= $(html);

	$("body").prepend(ob);

	if(wPromptOpts.alert != false || wPromptOpts.confirm != false) ob.find(".wPromptInputButton:first").focus();

	ob.filter(".wPrompt").css({
		top: function(){
			offsetTop	= parseInt(($(window).height() - $(this).find(".wPromptLoadedContent").height() - heightTemp) / 2);
			if(offsetTop < 0) offsetTop = 0;
			if(!wPromptOpts.fixed || isIE6) offsetTop += $(window).scrollTop();
			return offsetTop + "px";
		},
		left: function(){
			offsetLeft	= parseInt(($(window).width() - $(this).find(".wPromptLoadedContent").width() - widthTemp) / 2);
			if(offsetLeft < 0) offsetLeft = 0;
			return offsetLeft + "px";
		}
	});

	if(wPromptOpts.width == "auto" && (isIE6 || isIE7)){
		fixW	= ob.find(".wPromptLoadedContent").width();
		ob.find(".wPromptWrapper").width(fixW);
	}

	// onComplete
	if(typeof(wPromptOpts.onComplete) == "function") wPromptOpts.onComplete(domEleWindowPrompt());

}