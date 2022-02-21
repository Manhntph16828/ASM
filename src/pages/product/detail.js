// import { get } from "../../api/product";
import { get } from "../../api/product";
import { addToCart } from "../../utils/cart";
import { $ } from "../../utils/selector";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const DetailProductPage = {
    async render(id) {
        const { data } = await get(id);
        return /*html*/`
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
                     <a href="index.html"><img src="../../images/logo.png" alt=""/></a>
                   
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

            <div class="py-6">
            <!-- Breadcrumbs -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center space-x-2 text-gray-400 text-sm">
                <a href="#" class="hover:underline hover:text-gray-600">Trang chủ /</a>
                <span>${data.name}</span>
                </div>
            </div>
            <!-- ./ Breadcrumbs -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div class="flex flex-col md:flex-row -mx-4">
                    <div class="md:flex-1 px-4">
                        <div >
                        <img class="rounded-lg  mb-4" src="${data.img}" />
                        </div>
                    </div>
                <div class="md:flex-1 px-4">
                    <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">${data.name}</h2>
                    <div class="flex items-center space-x-4 my-4">
                    <div>
                        <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                        <span class="text-indigo-400 mr-1 mt-1">$</span>
                        <span class="font-bold text-indigo-600 text-3xl">${data.price}</span>
                        </div>
                    </div>
                  
                    </div>
                    <p class="text-gray-500">${data.desc}</p>
                    <div class="flex py-4 space-x-4">
                    <div class="relative">
                        <div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
                        <input type="number" id="inputQty" class="border border-gray-400 p-3" value="1" />
                    </div>
                    <button type="button" id="btnAddToCart" class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
                        Add to Cart
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            ${Footer.render()}
            `;
    },
    afterRender(id){
        $('#btnAddToCart').addEventListener('click', async function(){
            const { data } = await get(id);
            addToCart({...data, quantity: +$("#inputQty").value}, () => {
                toastr.success("Thêm thành công!");
            });
        })
    },
};

export default DetailProductPage;