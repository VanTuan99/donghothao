<!-- BEGIN: main -->
<div class="module_small module_small_menu_product">
							<div class="title">
								<div class="fl left_icon"></div>
								<div class="fl">
									<span lang="vi">Giỏ hàng của bạn</span>
								</div><div class="fr right_icon"></div>
							</div>
<style type="text/css">
.block_cart {
	padding: 5px;
}
.money {
	color:#CC3300;
	font-weight: bold;
}
</style>
<div class="block_cart" style="  padding: 5px 5px 5px 22px;">
	<!-- BEGIN: enable -->
        <p>
            <strong>{LANG.cart_title} :</strong>
            <span>{num}</span>
            {LANG.cart_product_title}
        </p>
        <!-- BEGIN: price -->
        <p>
            <strong>{LANG.cart_product_total} : </strong>
            <span class="money">{total}</span> {money_unit}
        </p>
        <!-- END: price -->
        <p class="clearfix" style="padding-top:5px">
            <a class="btn_03" title="{LANG.cart_check_out}" href="{LINK_VIEW}" id="submit_send">{LANG.cart_check_out}</a>
        </p>
        <!--  BEGIN: history -->
        <p style=" border-top:1px solid #c0c0c0; margin-bottom:3px; margin-top:5px; padding-top:5px">
            <a href="{LINK_HIS}"><span>{LANG.history_title}</span></a>
        </p>
        <!--  END: history -->
    <!-- END: enable -->
    <!-- BEGIN: disable -->
    <p>
    	{LANG.active_order_dis}
    </p>
    <!-- END: disable -->
</div>

						</div>
<!-- END: main -->