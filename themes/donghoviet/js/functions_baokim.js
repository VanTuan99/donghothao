function addToCartButton_v2(data){
	
	opts	= {
		record_id		: 0,
		estore_id		: 0,
		estore_name		: "",
		verified			: 0,
		map_friend		: null,
		direct_order	: "",
		baokim_payment	: 0,
		redirect			: "",
		button_width	: 160,
		button_height	: 24
	}
	
	$.extend(opts, data);
	
	strReturn	= '<div style="background: #edeff4; border: 1px #E2E2E2 solid; padding: 10px;">';
		if(opts.direct_order != ""){
			strReturn	+= '<div style="text-align: center;"><a href="' + opts.direct_order + '"><img src="' + fs_imagepath + 'btn_order.gif" /></a></div>';
		}
		else{
			href	= '/home/addtocart.php?iPro=' + opts.record_id + '&estore_id=' + opts.estore_id + '&estore_name=' + opts.estore_name + '&return=' + opts.redirect;
			strReturn	+= '<div style="float: left; margin-right: 10px;">';
				strReturn	+= '<div style="margin-bottom: 10px;"><a href="javascript:;" onclick="window.open(\'/home/buynow.php?iPro=' + opts.record_id + '&iUse=' + opts.estore_id + '&iUf=\' + parseInt($(&quot;#friend_id&quot;).val()), \'_parent\')"><img src="' + fs_imagepath + 'btn_order_1_click.gif" width="' + opts.button_width + '" height="' + opts.button_height + '" /></a></div>';
				strReturn	+= '<div><a href="javascript:;" onclick="addToCartLink(\'' + href + '\'); return false;"><img src="' + fs_imagepath + 'btn_order.gif" width="' + opts.button_width + '" height="' + opts.button_height + '" /></a></div>';
			strReturn	+= '</div>';
			strReturn	+= '<div style="float: right; width: 198px; overflow: hidden;">';
			if(opts.baokim_payment == 1){
				strReturn	+= '<div style="background: url(' + fs_imagepath + 'icon_question.gif) no-repeat right top; padding-right: 15px; font-size: 11px; margin-bottom: 5px;"><a href="https://www.baokim.vn/promote/vatgia-baokim.html" target="_blank" rel="nofollow" style="color: #605d57;">An toàn hơn qua <b>Baokim.vn</b><br />Nhận ngay <b style="color: #960000">100.000 đ</b> vào tài khoản</a></div>';
				strReturn	+= '<div><a href="/home/baokim_pay_now.php?iPro=' + opts.record_id + '&iUse=' + opts.estore_id + '" target="_blank" rel="nofollow"><img src="' + fs_imagepath + 'btn_order_baokim.gif" /></a></div>';
			}
			else{
				strReturn	+= '<div><a class="text_link" href="javascript:;" onclick="showBoxBaokimRequestIntegrate(' + opts.estore_id + ');"><img align="absmiddle" src="' + fs_imagepath + 'icon_warning_2.gif" border="0" /> <b style="color:#f00001;">Gian hàng này chưa hỗ trợ thanh toán tạm giữ qua Baokim.vn</b><div style="margin-top: 3px;">Click để gửi yêu cầu hỗ trợ</div></a></div>';
			}
			strReturn	+= '</div>';
			strReturn	+= '<div class="clear"></div>';
		}
	strReturn	+= '</div>';
	
	return strReturn;
	
}