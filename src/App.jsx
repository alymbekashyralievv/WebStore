import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
// import DetailPage from "./pages/detail-page/DetailPage";
// import NavBar from "./nav-bar/NavBar";
import NotFound from "./pages/not-found/NotFound";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";

import ProductDetails from "./components/Product-Details/ProductDetails";
import Header from "./components/Header/Header";
import Category from "./components/category/Category";
import Favorite from "./components/favorite/Favorite";
import Register from "./components/registaer/Register";
import Cart from "./components/cart/Cart";


const App = () => {
  const [catalog, setCatalog] = useState([]);
  const [products, setProducts] = useState([]);
  const [supProducts, setSupProducts] = useState([]);
  const [openCatalogId, setOpenCatalogId] = useState(null);
  const [openProductId, setOpenProductId] = useState(null);

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const { data, error } = await supabase.from("catalog").select("*");
        if (error) throw error;
        setCatalog(data);
      } catch (error) {
        console.error("Ошибка загрузки каталога:", error.message);
      }
    };

    fetchCatalog();
  }, []);

  const fetchProducts = async (catalogId) => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("catalog_id", catalogId);
      if (error) throw error;
      setProducts(data);
    } catch (error) {
      console.error("Ошибка загрузки товаров:", error.message);
    }
  };

  const fetchSupProducts = async (productId) => {
    try {
      const { data, error } = await supabase
        .from("sup_products")
        .select("*")
        .eq("product_id", productId);
      if (error) throw error;
      setSupProducts(data);
    } catch (error) {
      console.error("Ошибка загрузки моделей:", error.message);
    }
  };

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/detail/:id" element={<DetailPage />} /> */}
          <Route path="/detail/:id" element={<ProductDetails />} />
          <Route path="/cate" element={<Category />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/signin" element={<Register />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
