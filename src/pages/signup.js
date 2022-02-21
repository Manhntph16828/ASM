import { signup } from "../api/user";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Signup = {
    render(){
        return /*html*/`
            <!--<form id="formSignup">
                <input type="text" placeholder="username" id="username" />
                <input type="email" placeholder="email" id="email" />
                <input type="password" placeholder="password" id="password" />
                <button>Đăng ký</button>
            </form>-->
            <header>
                ${Header.render()} 
            </header>
            <section>
            <div class="register_account">
                <div class="wrap">
                    <h4 class="title">Tạo tài khoản</h4>
                    <form id="formSignup">
                        <div class="col_1_of_2 span_1_of_2">
                            <div><input id="username" type="text" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}"></div>
                            <div><input id="email"  type="text" value="E-Mail" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'E-Mail';}"></div>
                            <div><input id="password" type="text" value="password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'password';}"></div>
                            <button class="grey">Đăng ký</button>
                        </div>
                    </form>
                </div>
            </div>
            
            </section>
          <div>${Footer.render()}</div>
        `;
    },
    afterRender(){
        const formSignup = document.querySelector('#formSignup');
        formSignup.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const response = await signup({
                    username: document.querySelector('#username').value,
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value,
                });
                console.log(response);

            } catch (error) {
                console.log(error.response.data);
            }
        });
    }
}
export default Signup;