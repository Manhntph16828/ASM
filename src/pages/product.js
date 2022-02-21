import Header from "../components/Header";
import Footer from "../components/Footer";
import Sanpham from "../components/sp";
const Product ={
  async  render() {
        return /* html */`
		<header>
		${Header.render()} 
		</header>
        <div class="mens">    
  <div class="main">
     <div class="wrap">
		<div class="cont span_2_of_3">
		  	<h2 class="head">Sản phẩm</h2>
		  	<div class="mens-toolbar">
              <div class="sort">
               	<div class="sort-by">
		            <label>Sắp xếp</label>
		            <select>
		                            <option value="">
		                    Tên                </option>
		                            <option value="">
		                    Gía                </option>
		            </select>
		            <a href=""><img src="images/arrow2.gif" alt="" class="v-middle"></a>
               </div>
    		</div>
        <div class="pager">   
        	<div class="limiter visible-desktop">
            <label>Show</label>
            <select>
                            <option value="" selected="selected">
                    9                </option>
                            <option value="">
                    15                </option>
                            <option value="">
                    30                </option>
                        </select> per page        
             </div>
       		<ul class="dc_pagination dc_paginationA dc_paginationA06">
			    <li><a href="#" class="previous">Pages</a></li>
			    <li><a href="#">1</a></li>
			    <li><a href="#">2</a></li>
		  	</ul>
	   		<div class="clear"></div>
    	</div>
     	<div class="clear"></div>
	</div>
			<div class="top-box">
				<!-- -->
				${await Sanpham.render()}	
				<div class="clear"></div>
			</div>	
			<div class="top-box">
			
				<div class="clear"></div>
			</div>	
			<div class="top-box1">
			 
			
				<div class="clear"></div>
			</div>	
		
		  <div class="top-box1">
			
			
				<div class="clear"></div>
			</div>	
		 
		    			 							 			    
		  </div>
			<div class="rsidebar span_1_of_left">
				<h5 class="m_1">Loại hàng</h5>
					
					<ul class="kids">
						<li><a href="#">Đồ nam</a></li>
						<li class="last"><a href="#">Đồ nữ</a></li>
					</ul>
                   <section  class="sky-form">
					<h4>Gía</h4>
						<div class="row row1 scroll-pane">
							
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>100 - 200$</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>300 - 400$</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>500 - 600$</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>700 - 800$</label>
								<label class="checkbox"><input type="checkbox" name="checkbox" ><i></i> >800$</label>
								
							</div>
						</div>
		        </section>
		       
		       <section  class="sky-form">
					<h4>Size</h4>
						<div class="row row1 scroll-pane">
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i></i>Nhỏ</label>
							</div>
							<div class="col col-4">
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Trung bình</label>
								<label class="checkbox"><input type="checkbox" name="checkbox"><i></i>Lớn</label>
							
							</div>
						</div>
		       </section>
		       
		       <section  class="sky-form">
					<h4>Màu sắc</h4>
						<ul class="color-list">
							<li><a href="#"> <span class="color1"> </span><p class="red">Đỏ</p></a></li>
							<li><a href="#"> <span class="color2"> </span><p class="red">Xanh lá</p></a></li>
							<li><a href="#"> <span class="color3"> </span><p class="red">Xanh dương</p></a></li>
							<li><a href="#"> <span class="color4"> </span><p class="red">Vàng</p></a></li>
							<li><a href="#"> <span class="color5"> </span><p class="red">Hồng</p></a></li>
							<li><a href="#"> <span class="color6"> </span><p class="red">Cam</p></a></li>
							<li><a href="#"> <span class="color7"> </span><p class="red">Nâu</p></a></li>
					   </ul>
		       </section>
		      </div>
			<div class="clear"></div>
			</div>
		   </div>
		</div>
		<footer>
		${Footer.render()}
		</footer>
		<script src="js/jquery.easydropdown.js"></script>
        `;
    },
};
export default Product;