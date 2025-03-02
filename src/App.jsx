import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import DetailPage from "./pages/detail-page/DetailPage";
import NavBar from "./nav-bar/NavBar";
import NotFound from "./pages/not-found/NotFound";
import Header from "./components/header/Header";

const App = () => {
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

export default App;
