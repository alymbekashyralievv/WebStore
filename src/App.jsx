import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./contexts/FavoritesContext"; // FavoritesProvider импорттолду
import HomePage from "./pages/home-page/HomePage";
import ProductDetails from "./components/Product-Details/ProductDetails";
import Category from "./components/category/Category";
import Favorite from "./components/favorite/Favorite";
import Register from "./components/registaer/Register"; // "registaer" -> "register" деп оңдолушу керек
import Cart from "./components/cart/Cart";
import NotFound from "./pages/not-found/NotFound";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Router>
        <FavoritesProvider> {/* FavoritesProvider менен ороо */}
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cate" element={<Category />} />
            <Route path="/favorites" element={<Favorite />} />
            <Route path="/signin" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} /> {/* NotFound үчүн жапайы карта */}
          </Routes>
          <Footer />
        </FavoritesProvider>
      </Router>
    </div>
  );
};

export default App;
