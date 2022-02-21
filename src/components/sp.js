
import axios from 'axios';
import { getAll } from "../api/product";
const Sanpham = {
    async render() {
        const { data } = await getAll()
        return /* html */`

            <div >
                <div class="grid grid-cols-3 gap-1 px-8 ">
                        ${data.map((product) => `
                        
                        <div class="inner_content clearfix border p-4 ">
                            <div class="product_image">
                                <a href="/news/${product.id}">
                                    <img class="w-full h-80" src="${product.img}" />
                                </a>
                            </div>
                            <div class="price">
                                <div class="cart-left">
                                    <p class="title"><a href="/news/${product.id}" >${product.name}</a></p>
                                    <div class="price1">
                                    <span class="actual">$${product.price}</span>
                                    </div>
                                </div>
                                <div class="cart-right"> </div>
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
export default Sanpham;


