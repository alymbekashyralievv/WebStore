
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import DetailPage from "./pages/detail-page/DetailPage";
import NavBar from "./nav-bar/NavBar";
import NotFound from "./pages/not-found/NotFound";
import { useEffect } from "react";
import { supabase } from "./supabase";
import Header from "./components/Header";

const App = () => {
  const getData = async () => {
    let { data: catalog, error } = await supabase.from("catalog").select("*");
    console.log(catalog);
  };
  useEffect(() => {
    getData();
  });
  return (
    <div>
      <Router>
        <NavBar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App
