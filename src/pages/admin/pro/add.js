import axios from "axios";
import { add } from "../../../api/product";
import NavAdmin from "../../../components/AdminNav";

const AdminAddPro = {
  render() {
    return /*html*/ `
        <div class="min-h-full">
        ${NavAdmin.render()}
      
        <header class="bg-white shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <!-- This example requires Tailwind CSS v2.0+ -->
              <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                  <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Thêm mới bài viết
                  </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                  <a href="/admin/pro" class="sm:ml-3">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Quay lại
                    </button>
                  </a>
                </div>
              </div>
      
          </div>
        </header>
        <main>
          <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <form action="" id="form-add" >
            Tên sản phẩm <br/>
              <input type="text"
                    id="name-pro"
                    class="border border-black w-80 mt-2 mb-4"
                    placeholder="Name"
              > <br />
              Giá <br/>
              <input type="text"
                    id="price-pro"
                    class="border border-black w-80 mt-2 mb-4"
                    placeholder="Price"
              > <br />
              Hình ảnh  <br />
              <input type="file"
                    id="img-pro"
                    class="border border-black w-80 mt-2 mb-4"
                    placeholder="Image"
              > <br />
              
              <img class="w-80" src="http://2.bp.blogspot.com/-MowVHfLkoZU/VhgIRyPbIoI/AAAAAAAATtI/fHk-j_MYUBs/s640/placeholder-image.jpg" id="img-preview"/>
              <div >
                Mô tả sản phẩm<br/>
                <textarea name="" id="desc-pro" cols="30" rows="10" class="border border-black w-80 mt-2 mb-4"></textarea><br />
                <button class="bg-blue-500 p-4 text-white w-40 h-14">Thêm</button>
              </div>
              </form>
            <!-- /End replace -->
          </div>
        </main>
      </div>
        
        `;
  },
  afterRender() {
    const formAdd = document.querySelector("#form-add");
    const imgPost = document.querySelector('#img-pro');
    const imgPreview = document.querySelector('#img-preview');
    
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload"
    const CLOUDINARY_PRESET = "jkbdphzy";
    
    // preview image when upload
    imgPost.addEventListener('change', async (e) => {
      imgPreview.src = URL.createObjectURL(e.target.files[0]);
    });

    formAdd.addEventListener("submit", async(e) => {
      e.preventDefault();
      const file = imgPost.files[0];

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_PRESET);

    // call api cloudinary
    
      const response = await axios.post(CLOUDINARY_API, formData, {
        headers: {
          "Content-Type": "application/form-data"
        }
      });
      console.log(response.data.url);

      add({
        name: document.querySelector('#name-pro').value,
        img: response.data.url,
        price:document.querySelector('#price-pro').value,
        desc:document.querySelector('#desc-pro').value,
      });

    });

    
  },
};
export default AdminAddPro;