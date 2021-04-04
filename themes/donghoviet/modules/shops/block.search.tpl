<!-- BEGIN: main -->

<style type="text/css">

.frm_search {

    background:#F2F2FF;

    margin-bottom: 8px;

	padding:10px 0px;

}

.frm_search select { padding:1px; border:1px solid #CCC; font-size:12px; height:21px }

.frm_search input { border: 1px solid #CCC; font-size:12px; height: 19px; }

.frm_search input.search-input { border:1px solid #CCC; height: 23px; }

</style>

<div class="center_search_form">
							<div class="L">
								<div class="R">
									
                                    <form action="{NV_BASE_SITEURL}" method="get" name="frm_search"  onsubmit="return onsubmitsearch();">
										<b lang="vi">Tìm kiếm</b> :
										<input title="Từ khoá tìm kiếm" type="text" class="form_control keyword" name="keyword" value="{value_keyword}" />
                                        <!-- BEGIN: price -->
										&nbsp;&nbsp; <span lang="vi">Giá từ</span> :
                                        
										<input title="Giá nhỏ nhất" type="text" class="form_control min_price" name="price" value="{value_price1}" />
										&nbsp;&nbsp; ~ <span lang="vi">Đến</span> :
										<input title="Giá lớn nhất" type="text" class="form_control max_price" name="price_to" value="{value_price2}" />
										&nbsp;
                                        <!-- END: price -->
										<input title="Tìm kiếm" type="submit" class="form_button" value="{LANG.search}" onclick="onsubmitsearch()" />
									</form>
                                    
								</div>
							</div>
						</div>

<script type="text/javascript">

	function onsubmitsearch() {

		var keyword = $('#keyword').val();

		var price1 = $('#price1').val();

		if(price1 == null)

			price1 = '';

		var price2 = $('#price2').val();

		if(price2 == null)

			price2 = '';

		var sid = $('#sourceid').val();

		var typemoney = $('#typemoney').val();

		if(typemoney == null)

			typemoney = '';

		var cataid = $('#cata').val();

		if(keyword == '' && price1 == '' && price2 == '' && cataid == 0 && sid == 0) {

			return false;

		} else {

			window.location.href = nv_siteroot + 'index.php?' + nv_lang_variable + '=' + nv_sitelang + '&' + nv_name_variable + '=' + '{module_name}' + '&' + nv_fc_variable + '=search_result&keyword=' + rawurlencode(keyword) + '&price1=' + price1 + '&price2=' + price2 + '&typemoney=' + typemoney + '&cata=' + cataid + '&sid=' + sid;

		}

		return false;

	}

</script>

<!-- END: main -->