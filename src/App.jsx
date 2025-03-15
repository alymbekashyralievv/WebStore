import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import DetailPage from "./pages/detail-page/DetailPage";
import NotFound from "./pages/not-found/NotFound";
import Header from "./layout/header/Header";
import { useEffect } from "react";
import { supabase } from "./supabase";
import ProductDetails from "./pages/Product-Details/ProductDetails";
import React from "react";

// Импорт Swiper


const App = () => {
  const getData = async () => {
    let { data: catalog, error } = await supabase.from("catalog").select("*");
    // console.log(catalog);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>


      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
