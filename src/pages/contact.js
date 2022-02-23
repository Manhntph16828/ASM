import { signin } from "../api/user";
import axios from "axios";
import { add } from "../api/contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import $ from 'jquery';
import validate from 'jquery-validation';
const Contact = {
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
	    <ul class="breadcrumb breadcrumb__t"><a class="home" href="#">Trang chủ</a>  / Liên hệ</ul>
		   <div class="content-top">
			   <form id="form-add">
					<div class="to">
                     	<input id="name-contact" type="text" class="text" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}">
					 	<input id="email-contact" type="text" class="text" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" style="margin-left: 10px">
					</div>
					<div class="text">
	                   <textarea id="desc-contact" value="Message:" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message';}">Message:</textarea>
	                </div>
	                
					<button class="bg-blue-500 p-4 text-white">Submit</button>
               </form>
                <div class="map">
					<iframe width="100%" height="175" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Lighthouse+Point,+FL,+United+States&amp;aq=4&amp;oq=light&amp;sll=26.275636,-80.087265&amp;sspn=0.04941,0.104628&amp;ie=UTF8&amp;hq=&amp;hnear=Lighthouse+Point,+Broward,+Florida,+United+States&amp;t=m&amp;z=14&amp;ll=26.275636,-80.087265&amp;output=embed"></iframe><br><small><a href="https://maps.google.co.in/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Lighthouse+Point,+FL,+United+States&amp;aq=4&amp;oq=light&amp;sll=26.275636,-80.087265&amp;sspn=0.04941,0.104628&amp;ie=UTF8&amp;hq=&amp;hnear=Lighthouse+Point,+Broward,+Florida,+United+States&amp;t=m&amp;z=14&amp;ll=26.275636,-80.087265" style="color:#666;text-align:left;font-size:12px">View Larger Map</a></small>
				</div>
            </div>
       </div> 
    </div>
        <footer>
		${Footer.render()}
		</footer>
        `;
    },
	afterRender() {
		const formAdd = $("#form-add");
		const imgPost = document.querySelector('#img-contatc');
		const imgPreview = document.querySelector('#img-preview');
	
		const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload"
		const CLOUDINARY_PRESET = "jkbdphzy";
	
		let imgLink = "";
		
		// preview image when upload
		imgPost.addEventListener('change', async (e) => {
		  imgPreview.src = URL.createObjectURL(e.target.files[0]);
		});
	
		formAdd.validate({
		  rules: {
			"name-pro":{
						required: true,
						minlength: 5
					},
		  },
		  messages: {
			"name-pro": {
						required: "Không được để trống trường này!",
						minlength: "Nhập ít nhất 5 ký tự"
					},
		  },
		  
		  submitHandler:  function() {
			async function addProduct(){
			  const file = imgPost.files[0];
			  if(file){
				const formData = new FormData();
				formData.append('file', file);
				formData.append('upload_preset', CLOUDINARY_PRESET);
		  
				// call api cloudinary
			  
				const { data } = await axios.post(CLOUDINARY_API, formData, {
				  headers: {
					"Content-Type": "application/form-data"
				  }
				});
				imgLink = data.url;
			  }
			  add({
				name: document.querySelector('#name-pro').value,
				price: document.querySelector('#price-pro').value,
				img: imgLink ? imgLink : "",
				desc:document.querySelector('#desc-pro').value,
			  });
			}
			addProduct();
		  }
		});
	  },
}
export default Contact;