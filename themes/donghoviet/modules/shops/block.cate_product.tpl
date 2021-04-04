<!-- BEGIN: main -->

<div id="products">

<div class="grid clearfix" style="margin-bottom:5px;">

    <div class="title_cate clearfix" style=" border:1px solid #efefef;">

        <div class="fl">

            <a href="{LINK_CATALOG}" title="{TITLE_CATALOG}">{TITLE_CATALOG} ({NUM_PRO} {LANG.title_products})</a>

        </div>

    </div>

    <div class="clearfix">

        <!-- BEGIN: loop -->

        <div class="items" style="width:25%">

            <div class="items_content">

                <div class="content_top">

                    <a href="{link}" class="tooltip"><img src="{src_img}" alt=""/> </a>

                        <br/>

                    <a href="{link}" title="{title}">{title}</a>

                    <br />

                </div>

                <div class="content_body">

                    <!-- BEGIN: price -->

                    <p class="content_price">

                        <span class="{class_money}">{product_price} {money_unit}</span>

                        <!-- BEGIN: discounts -->

                        <br />

                        <span class="money">{product_discounts} {money_unit}</span>

                        <!-- END: discounts -->

                    </p>

                    <!-- END: price -->

                    <!-- BEGIN: contact -->


                    <!-- END: contact -->

                    <div class="clearfix">

                        <!-- BEGIN: order -->

                        <a href="javascript:void(0)" id="{id}" title="{title}" class="pro_order" onclick="cartorder(this)">{LANG.add_product}</a>

                        <!-- END: order -->

                        <a href="{link}" title="{title}" class="pro_detail" >{LANG.detail_product}</a>

                    </div>

                </div>

            </div>

        </div>

        <!-- END: loop -->

        <div style="clear:both"></div>

    </div>

</div>

<!-- BEGIN: sorder -->

<div class="msgshow" id="msgshow"></div>

<!-- END: sorder -->

</div>

<!-- END: main -->