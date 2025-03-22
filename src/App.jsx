import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
// import DetailPage from "./pages/detail-page/DetailPage";
// import NavBar from "./nav-bar/NavBar";
import NotFound from "./pages/not-found/NotFound";
import ProductDetails from "./components/Product-Details/ProductDetails";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/detail/:id" element={<DetailPage />} /> */}
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
