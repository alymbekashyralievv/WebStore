import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
// import DetailPage from "./pages/detail-page/DetailPage";
// import NavBar from "./nav-bar/NavBar";
import NotFound from "./pages/not-found/NotFound";
import ProductDetails from "./components/Product-Details/ProductDetails";
import Category from "./components/category/Category";
import Favorite from "./components/favorite/Favorite";
import Register from "./components/registaer/Register";
import Cart from "./components/cart/Cart";

import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
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
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
