import { signin } from "../api/user";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Signin = {
    render(){
        return /*html*/`
            <!--<form id="formSignin">
                <input type="email" placeholder="email" id="email" />
                <input type="password" placeholder="password" id="password" />
                <button><a>Đăng nhập</a></button>
            </form>-->
            <header>
                ${Header.render()}
            </header>
            <div class="login">
          	<div class="wrap">
				<div class="col_1_of_login span_1_of_login">
					<h4 class="title">New Customers</h4>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan</p>
					<div class="button1">
					   <a href="/signup"><input type="submit" name="Submit" value="Đăng ký"></a>
					 </div>
					 <div class="clear"></div>
				</div>
				<div class="col_1_of_login span_1_of_login">
				<div class="login-title">
	           		<h4 class="title">Đăng nhập</h4>
					<div id="loginbox" class="loginbox">
						<form action="" method="post" name="login" id="login-form">
						  <fieldset class="input">
						    <p id="login-form-username">
						      <label for="modlgn_username">Email</label>
						      <input  id="email" type="text" name="email" class="inputbox" size="18" autocomplete="off">
						    </p>
						    <p id="login-form-password">
						      <label for="modlgn_passwd">Mật khẩu</label>
						      <input id="password" type="password" name="password" class="inputbox" size="18" autocomplete="off">
						    </p>
						    <div class="remember">
							    <!--<p id="login-form-remember">
							      <label for="modlgn_remember"><a href="#">Forget Your Password ? </a></label>
							   </p>-->
							    <input type="submit" name="Submit" class="button" value="Đăng nhập">
								<div class="clear"></div>
							 </div>
						  </fieldset>
						 </form>
					</div>
			    </div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
        <footer>
		${Footer.render()}
		</footer>
        `;
    },
    afterRender(){
        const formSignin = document.querySelector('#login-form');
        formSignin.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const response = await signin({
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value,
                });
                localStorage.setItem('user', JSON.stringify(response.data.user));
                if(response.data.user.id === 1){
                    document.location.href="/admin/pro";
                } else {
                    document.location.href="/";
                }

            } catch (error) {
                console.log(error.response.data);
            }
        });
    },
}
export default Signin;