import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { SlChart } from "react-icons/sl";
import { HiOutlineUser } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { supabase } from "../../supabase";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [catalog, setCatalog] = useState([]);
  const [products, setProducts] = useState([]);
  const [sup_products, setSup_products] = useState([]);
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

  const fetchSupProducts = async (products_id) => {
    try {
      const { data, error } = await supabase
        .from("sup_products")
        .select("*")
        .eq("products_id", products_id);
      if (error) throw error;
      console.log(data);

      setSup_products(data);
    } catch (error) {
      console.error("Ошибка загрузки моделей:", error.message);
    }
  };

  const handleCatalogClick = async (catalogId) => {
    if (openCatalogId === catalogId) {
      setOpenCatalogId(null);
      setProducts([]);
      setSup_products([]);
    } else {
      setOpenCatalogId(catalogId);
      setOpenProductId(null);
      await fetchProducts(catalogId);
    }
  };

  const handleProductClick = async (products_id) => {
    if (openProductId === products_id) {
      setOpenProductId(null);
      setSup_products([]);
    } else {
      setOpenProductId(products_id);
      await fetchSupProducts(products_id);
    }
  };
  return (
    <div className="app-container">
      <header className="flex h-[76px] items-center">
        <div className="flex gap-[10px]">
          <img className="w-[38px]" src="/src/assets/behoof.svg" alt="" />
          <h2
            // onClick={() => {}}
            className="text-[34px] font-bold cursor-pointer"
          >
            Behoof
          </h2>
          <p className="cursor-pointer">
            Лучшие цены <br /> в интернет-магазинaх
          </p>
        </div>

        <div className="relative">
          <button
            className="bg-[#f9553c] w-[200px] h-[52px] flex items-center  justify-center gap-[10px] ml-[40px] text-white rounded-[10px] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            Каталог товаров <IoIosArrowDown />
          </button>
          {isOpen && (
            <div className="absolute bg-white shadow-md rounded-[10px]  ">
              <div className="">
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
                                  <h4 className="text-md font-semibold">
                                    Модели
                                  </h4>
                                  {sup_products.length > 0 ? (
                                    sup_products.map((sup) => (
                                      <p
                                        key={sup.id}
                                        className="text-sm text-gray-700"
                                      >
                                        🔹 {sup.name}
                                      </p>
                                    ))
                                  ) : (
                                    <p className="text-sm text-gray-500">
                                      Нет моделей
                                    </p>
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
              </div>
            </div>
          )}
        </div>

        <div className="relative flex gap-[25px]">
          <CiSearch className="absolute left-[7px] top-[14px] text-[25px] " />
          <input
            className="h-[52px] rounded-[10px] bg-[#f4efef] pl-[35px] w-[640px]"
            placeholder="Поиск товаров"
          />
          <button className="w-[52px] h-[52px] bg-[#f4efef] rounded-[10px] flex items-center justify-center cursor-pointer">
            <GoHeart />
          </button>
          <button className="w-[52px] h-[52px] bg-[#f4efef] rounded-[10px] flex items-center justify-center cursor-pointer">
            <SlChart />
          </button>
          <button className="w-[52px] h-[52px] bg-[#f4efef] rounded-[10px] flex items-center justify-center cursor-pointer">
            <HiOutlineUser />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;