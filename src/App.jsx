import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import DetailPage from "./pages/detail-page/DetailPage";
import NotFound from "./pages/not-found/NotFound";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";

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

  const handleCatalogClick = async (catalogId) => {
    if (openCatalogId === catalogId) {
      setOpenCatalogId(null);
      setProducts([]);
      setSupProducts([]);
    } else {
      setOpenCatalogId(catalogId);
      setOpenProductId(null);
      await fetchProducts(catalogId);
    }
  };

  const handleProductClick = async (productId) => {
    if (openProductId === productId) {
      setOpenProductId(null);
      setSupProducts([]);
    } else {
      setOpenProductId(productId);
      await fetchSupProducts(productId);
    }
  };

  return (
    <Router>
      <Header />
      {/* <div className="app-container">
        <h1 className="text-3xl font-semibold mb-4">Каталог товаров</h1>
        {catalog.map((cat) => (
          <div
            key={cat.id}
            className="border border-gray-300 p-4 mb-4 rounded-lg hover:bg-gray-50 w-[500px]"
          >
            <h2
              onClick={() => handleCatalogClick(cat.id)}
              className="text-xl font-bold cursor-pointer hover:text-blue-600"
            >
              {cat.name}
            </h2>

            {openCatalogId === cat.id && (
              <div className="mt-4 pl-4">
                <h3 className="text-lg font-semibold">Товары</h3>
                {products.length > 0 ? (
                  products.map((prod) => (
                    <div
                      key={prod.id}
                      className="border-b border-gray-200 py-2 hover:bg-gray-50"
                    >
                      <h3
                        onClick={() => handleProductClick(prod.id)}
                        className="text-lg cursor-pointer text-blue-600 hover:text-blue-800"
                      >
                        {prod.name} - {prod.price}$
                      </h3>

                      {openProductId === prod.id && (
                        <div className="mt-2 pl-4">
                          <h4 className="text-md font-semibold">Модели</h4>
                          {supProducts.length > 0 ? (
                            supProducts.map((sup) => (
                              <p key={sup.id} className="text-sm text-gray-700">
                                🔹 {sup.description}
                              </p>
                            ))
                          ) : (
                            <p className="text-sm text-gray-500">Нет моделей</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">Нет товаров</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div> */}

      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
