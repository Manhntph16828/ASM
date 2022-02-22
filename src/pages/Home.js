// import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DetailProductPage from "./product/detail";
import News from "../components/news";
import Sanpham from "../components/sp";
import SanphamHome from "../components/sp-home";
const HomePage = {
	async  render() {
        return /* html */`
        <div class="">
            <header>
                ${Header.render()} 
            </header>
			<img src="../images/banner.jpg" alt=""/>
			<div id="fwslider">
			<div class="slider_container">
				<div class="slide"> 
					<!-- Slide image -->
						<img src="../images/banner.jpg" alt=""/>
					<!-- /Slide image -->
					<!-- Texts container -->
					<div class="slide_content">
						<div class="slide_content_wrap">
							<!-- Text title -->
							<h4 class="title">Aluminium Club</h4>
							<!-- /Text title -->
							
							<!-- Text description -->
							<p class="description">Experiance ray ban</p>
							<!-- /Text description -->
						</div>
					</div>
					 <!-- /Texts container -->
				</div>
				<!-- /Duplicate to create more slides -->
				<div class="slide">
					<img src="images/banner1.jpg" alt=""/>
					<div class="slide_content">
						<div class="slide_content_wrap">
							<h4 class="title">consectetuer adipiscing </h4>
							<p class="description">diam nonummy nibh euismod</p>
						</div>
					</div>
				</div>
				<!--/slide -->
			</div>
			<div class="timers"></div>
			<div class="slidePrev"><span></span></div>
			<div class="slideNext"><span></span></div>
		</div>
		</div>
		    
    <!--/slider -->
		<div class="main">
			<div class="wrap">
				<div class="section group">
				<div class="">
					<h2 class="head">Sản phẩm nổi bật</h2>
						<!-- -->
					<div class="top-box">
						<!-- -->
						${await SanphamHome.render()}	
					</div>	
				<h2 class="head">Sản phẩm mới</h2>
					<div class="top-box1">
					${await SanphamHome.render()}
					</div>	
			</div>
	
   <div class="footer">
		<div class="footer-top">
			<div class="wrap">
			  <div class="section group example">
				<div class="col_1_of_2 span_1_of_2">
					<ul class="f-list">
					  <li><img src="images/2.png"><span class="f-text">Miễn phí giao hàng tại Hà Nội</span><div class="clear"></div></li>
					</ul>
				</div>
				<div class="col_1_of_2 span_1_of_2">
					<ul class="f-list">
					  <li><img src="images/3.png"><span class="f-text">Số điện thoại: 0333333333</span><div class="clear"></div></li>
					</ul>
				</div>
				<div class="clear"></div>
		      </div>
			</div>
		</div>
		</div>
		
		<footer>
		${Footer.render()}
		</footer>
        `;
    },
	afterRender(){
        Header.afterRender();
    }
};
export default HomePage;