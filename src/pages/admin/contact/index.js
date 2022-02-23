import { getAll, remove } from "../../../api/contact";
import NavAdmin from "../../../components/AdminNav";
import { reRender } from "../../../utils/rerender";

const AdminContacts = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div class="min-h-full">
        ${NavAdmin.render()}
      
        <header class="bg-white shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <!-- This example requires Tailwind CSS v2.0+ -->
              <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                  <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Quản lý liên hệ
                  </h2>
                </div>
               
              </div>
      
          </div>
        </header>
        <main>
          <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <div class="px-4 py-6 sm:px-0">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                STT
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tên người gửi
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nội dung
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email người gửi
                                </th>
                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                            ${data.map((contact, index) => `
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        ${index + 1}
                                    </td>
                                    
                                    <td class="px-6 py-4 whitespace-nowrap">
                                    ${contact.name}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                    ${contact.email}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                    ${contact.desc}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button data-id="${contact.id}" class="btn btn-delete bg-indigo-600 hover:bg-indigo-900 px-4 py-3 text-white rounded-full">Delete</button>
                                    </td>
                                </tr>
                            `).join("")}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                    </div>
            </div>
            <!-- /End replace -->
          </div>
        </main>
      </div>
        
        `;
    },
    afterRender() {
        // Lấy toàn bộ button có class .btn
        const btns = document.querySelectorAll(".btn");
        btns.forEach((buttonElement) => {
            // lấy id button thông qua thuộc tính data-id
            const id = buttonElement.dataset.id;
            buttonElement.addEventListener("click", () => {
                // Xoa phan tu trong mang dua tren ID
                const confirm = window.confirm("Bạn có muốn xóa hay không?");
                if(confirm){
                  // call api xóa
                  remove(id)
                    .then(() => console.log('Bạn đã xóa thành công'))
                    .then(() => reRender(AdminNews, "#app"));
                }
            });
        });
    },
};
export default AdminContacts;