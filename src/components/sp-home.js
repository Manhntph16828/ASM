
import axios from 'axios';
import { getAll } from "../api/product";
const SanphamHome = {
    async render() {
        const { data } = await getAll()
        return /* html */`
            <div class="">
                <div class="grid grid-cols-4 gap-1 mr-10">
                        ${data.map((product) => `
                        <div class="inner_content clearfix border p-4">
                            <div class="product_image">
                                <a href="/products/${product.id}">
                                    <img class="w-full h-80" src="${product.img}" />
                                </a>
                            </div>
                            <div class="price">
                                <div class="cart-left">
                                    <p class="title"><a href="/products/${product.id}">${product.name}</a></p>
                                    <div class="price1">
                                    <span class="actual">$${product.price}</span>
                                    </div>
                                </div>
                                <button  type="button" id="btnAddToCart"><div class="cart-right"></div></button>
                                
                                <div class="clear"></div>
                            </div>				
                       </div>
                            `).join("")}
                </div>
            </div>
            <div class="col_1_of_3 span_1_of_3">
				
				</div>
            `; 
    
    },
};
export default SanphamHome;


