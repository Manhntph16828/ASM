
import axios from 'axios';
import { getAll } from "../api/post";
const News = {
    async render() {
        const { data } = await getAll()
        return /* html */`

            <div >
                <div class="grid grid-cols-4 gap-1 px-8">
                        ${data.map((post) => `
                        <div class="inner_content clearfix border p-4 ">
                            <div class="product_image">
                                <a href="/news/${post.id}">
                                    <img class="w-full h-80" src="${post.img}" />
                                </a>
                            </div>
                            <div class="price">
                                <div class="cart-left">
                                    <p class="title"><a href="/news/${post.id}" >${post.title}</a></p>
                                    <div class="price1">
                                    <span class="actual">$${post.price}</span>
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
export default News;


