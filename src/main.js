import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import AdminProPage  from "./pages/admin/pro";
import AdminNews from "./pages/admin/news";
import News from "./components/news";
import AdminAddNews from "./pages/admin/news/add";
import AdminEditNews from "./pages/admin/news/edit";
import AdminAddPro from "./pages/admin/pro/add";
import AdminEditPro from "./pages/admin/pro/edit";
import Product from "./pages/product";
import CartPage from "./pages/cart";
// hais
import ProductsPage from "./pages/product";
import DetailProductPage from "./pages/product/detail";
import Sanpham from "./components/sp";
import SanphamHome from "./components/sp-home";
import Contact from "./pages/contact";
import HomePage from "./pages/Home";
import Banner from "./components/Banner";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
const router = new Navigo("/", { linksSelector: "a", hash: true });
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
};
  router.on("/admin/*", () => {}, {
  before(done, match) {
    // do something
    if(localStorage.getItem('user')){
      const userId = JSON.parse(localStorage.getItem('user')).id;
      if(userId === 1){
          done();  
      } else {
          document.location.href="/";
      }
    } else{
        document.location.href="/";
    }
    
  }
})

router.on({
  "/": () => {
    print(HomePage);
  },
    
    "/sp": () => print(Sanpham),
    "/sp-home": () => print(SanphamHome),
    "/product": () => print(Product),
    "/contact": () => print(Contact),
    "/products": () => print(ProductsPage),
    "/products/:id": ({ data }) => print(DetailProductPage, data.id),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/pro": () => print(AdminProPage),
    "/admin/news/add": () => print(AdminAddNews),
    "/admin/pro/add": () => print(AdminAddPro),
    "/admin/news/:id/edit": ({data}) => print(AdminEditNews, data.id),
    "/admin/pro/:id/edit": ({data}) => print(AdminEditPro, data.id),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/cart": () => print(CartPage),

});
router.notFound(() => print("Not Found Page"));
router.resolve();