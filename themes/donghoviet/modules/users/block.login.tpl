<!-- BEGIN: main -->
<div class="module_small module_small_login">
							<div class="title">
								<div class="fl left_icon"></div>
								<div class="fl">
									<span lang="vi">ĐĂNG NHẬP</span>
								</div><div class="fr right_icon"></div>
							</div>
							<div class="content padding">
								<div class="login">
									<form name="form_login" action="{USER_LOGIN}" method="post" onsubmit="check_form_login(); return false;">
										<div class="name">
											<span lang="vi">Tên đăng nhập :</span> 
										</div>
										<div class="control">
											<input type="text" class="form_control" name="loginname" />
										</div>
										<div class="name">
											<span lang="vi">Mật khẩu :</span> 
										</div>
										<div class="control">
											<input type="password" class="form_control" name="password" />
										</div>
										
                                        <div class="button">
											<input type="submit" class="form_button" value="Đăng nhập" />
										</div>
                                        
										<div class="link">
											<a href="http://localhost/donghoviet/vi/users/register/" lang="vi">Đăng ký</a>&nbsp; | &nbsp;
                                            <a href="{USER_LOSTPASS}" lang="vi">Quên mật khẩu ?</a>
										</div>										
									</form>
								</div>
							</div>                            
						</div>
 <!-- END: main -->
<!-- BEGIN: signed -->
<div class="module_small module_small_login">
							<div class="title">
								<div class="fl left_icon"></div>
								<div class="fl">
									<span lang="vi">THÀNH VIÊN</span>
								</div><div class="fr right_icon"></div>
							</div>
<div class="content signed clearfix">
    <p>
        {LANG.wellcome}: <strong>{USER.full_name}</strong>
    </p>
    <a title="{LANG.edituser}" href="{CHANGE_INFO}"><img src="{AVATA}" alt="{USER.full_name}" class="fl" /></a>
    <!-- BEGIN: admin -->
    	<a title="{LANG.logout}" href="{LOGOUT_ADMIN}">{LANG.logout}</a>
    <!-- END: admin -->
    <a title="{LANG.changpass}" href="{CHANGE_PASS}">{LANG.changpass}</a>
    <a title="{LANG.edituser}" href="{CHANGE_INFO}">{LANG.edituser}</a>
    {in_group} 
</div>
</div>
<!-- END: signed -->
