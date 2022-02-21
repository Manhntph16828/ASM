import { reRender } from "../utils/reRender";
const Header = {
    render() {
        return /* html */`
        <div id="header" class="header-top">
        <div class="wrap"> 
               
              <div class="cssmenu">
                 <ul>
                     <li><a>
                        <span id="account" class="text-red"></span>
                     </a></li> |
                     <li><a >${localStorage.getItem('user') ? '<button id="logout">Logout</button>' : ""}</a></li> |
                     <li><a href="/signin">Đăng nhập</a></li> |
                     <li><a href="/signup">Đăng ký</a></li>
                 </ul>
             </div>
             <div class="clear"></div>
          </div>
     </div>
     <div class="header-bottom">
         <div class="wrap">
             <div class="header-bottom-left">
                 <div class="logo">
                     <a href="index.html"><img src="images/logo.png" alt=""/></a>
                   
                 </div>
                 <div class="menu">
                 <ul class="megamenu skyblue">
                <li class="active grid"><a href="/">Trang chủ</a></li>			
                 <li>
                    <a class="color5" href="/product">Sản phẩm</a>     
                 </li>
                 <li>
                    <a class="color4" href="/contact">Liên hệ</a>
                 </li>	
                 
             </ul>
             </div>
         </div>
        <div class="header-bottom-right">
          <div class="search">	  
                 <input type="text" name="s" class="textbox" value="Search" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search';}">
                 <input type="submit" value="Subscribe" id="submit" name="submit">
                 <div id="response"> </div>
          </div>
       <div class="tag-list">
       
         <ul class="icon1 sub-icon1 profile_img">
             <li><a class="active-icon c2" href="/cart"> </a>
              
             </li>
         </ul>
         
       </div>
     </div>
      <div class="clear"></div>
      </div>
     </div>
        `;
    },
    afterRender(){
        const account = document.querySelector('#account');
        const btnLogout = document.querySelector('#logout');
        account.innerHTML = JSON.parse(localStorage.getItem('user')).username;
        btnLogout.addEventListener('click', function(){
           localStorage.removeItem('user');
           alert('Ban da logout thanh cong');
           reRender(Header, "#header");
        })
    }
};
export default Header;