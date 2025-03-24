// import React, { useEffect, useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { GoHeart } from "react-icons/go";
// import { SlChart } from "react-icons/sl";
// import { HiOutlineUser } from "react-icons/hi";
// import {
//   IoIosArrowDown,
//   IoIosArrowUp,
//   IoIosArrowForward,
// } from "react-icons/io";
// import { Menu } from "antd";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "../../supabase";

// const Header = () => {
//   const navigate = useNavigate();
//   const handleProductClick = (productId) => {
//     navigate(`/product/${productId}`);
//   };

//   const [isOpen, setIsOpen] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [expandedCategories, setExpandedCategories] = useState({});

//   useEffect(() => {
//     const fetchCatalog = async () => {
//       const { data, error } = await supabase.from("catalog").select(`
//           id, 
//           name, 
//           products (
//             id, 
//             name,
//             sup_products (
//               id, 
//               name
//             )
//           )
//         `);

//       if (error) {
//         console.error("Ошибка запроса:", error);
//       } else {
//         setCategories(data);
//       }
//     };

//     fetchCatalog();
//   }, []);

//   const toggleCategory = (categoryId) => {
//     setExpandedCategories((prev) => ({
//       ...prev,
//       [categoryId]: !prev[categoryId],
//     }));
//   };
//   const [favoritesCount, setFavoritesCount] = useState(0);
//   const handleProfileClick = () => {
//     navigate("/profile"); // Change the route as needed
//   };

//   return (
//     <div className="app-container relative">
//       <header className="flex h-[76px] justify-between p-4 w-full items-center relative z-50">
//         <div className="flex gap-[10px] items-center">
//           <img
//             onClick={() => navigate("/home")}
//             className="w-[38px] cursor-pointer"
//             src="/src/assets/behoof.svg"
//             alt="Behoof Logo"
//           />
//           <h2
//             onClick={() => navigate("/home")}
//             className="text-[34px] cursor-pointer font-bold"
//           >
//             Behoof
//           </h2>
//           Лучшие цены <br /> в интернет-магазинах
//         </div>

//         <button
//           className="flex bg-[#f9553c] h-[52px] justify-center rounded-[10px] text-white w-[200px] gap-[10px] items-center"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           Каталог товаров {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
//         </button>

//         <div className="flex gap-[20px] relative">
//           <CiSearch className="text-[25px] absolute left-[7px] top-[14px]" />
//           <input
//             className="bg-[#f4efef] h-[52px] rounded-[10px] w-[640px] pl-[35px]"
//             placeholder="Поиск товаров"
//           />
//           <button className="flex bg-[#f4efef] h-[52px] justify-center rounded-[10px] w-[52px] items-center">
//             <GoHeart />
//             {favoritesCount > 0 && (
//               <span className="flex bg-red-500 h-5 justify-center rounded-full text-white text-xs w-5 absolute font-bold items-center right-1 top-1">
//                 {favoritesCount}
//               </span>
//             )}
//           </button>
//           <button className="flex bg-[#f4efef] h-[52px] justify-center rounded-[10px] w-[52px] items-center">
//             <SlChart />
//           </button>
//           <button
//             className="flex bg-[#f4efef] h-[52px] justify-center rounded-[10px] w-[52px] items-center"
//             onClick={handleProfileClick}
//           >
//             <HiOutlineUser />
//           </button>
//         </div>
//       </header>

//       {isOpen && (
//         <div className="flex bg-white p-4 rounded-[12px] shadow-lg w-[1530px] -translate-x-1/2 absolute gap-[0px] left-1/2 top-[76px] transform z-40">
//           <div className="p-0 rounded-[12px] shadow-md w-1/4 max-h-[400px] ml-[100px] overflow-y-auto">
//             <h2 className="text-xl font-bold mb-4">Каталог товаров</h2>
//             {categories.length > 0 ? (
//               <Menu mode="inline" className="m-0 p-0">
//                 {categories.map((category) => (
//                   <Menu.Item
//                     key={category.id}
//                     onClick={() => {
//                       setSelectedCategory(category);
//                       setSelectedProduct(null);
//                       toggleCategory(category.id);
//                     }}
//                     className="cursor-pointer"
//                   >
//                     <div className="flex justify-between items-center">
//                       {category.name}
//                       {category.products?.length > 0 && (
//                         <IoIosArrowForward
//                           className={`transition-transform ${
//                             expandedCategories[category.id] ? "rotate-90" : ""
//                           }`}
//                         />
//                       )}
//                     </div>
//                   </Menu.Item>
//                 ))}
//               </Menu>
//             ) : (
//               <p>Загрузка категорий...</p>
//             )}
//           </div>

//           {selectedCategory?.products &&
//             expandedCategories[selectedCategory.id] && (
//               <div className="p-0 rounded-[12px] shadow-md w-1/4 max-h-[400px] overflow-y-auto">
//                 <h2 className="text-xl font-bold mb-4">
//                   {selectedCategory.name}
//                 </h2>
//                 <Menu mode="inline" className="m-0 p-0">
//                   {selectedCategory.products.map((product) => (
//                     <Menu.Item
//                       key={product.id}
//                       onClick={() => setSelectedProduct(product)}
//                       className="bg-gray-200 border-none p-2 cursor-pointer hover:bg-gray-300"
//                     >
//                       <div className="flex justify-between">
//                         {product.name}
//                         {product.sup_products?.length > 0 && (
//                           <IoIosArrowForward className="float-right" />
//                         )}
//                       </div>
//                     </Menu.Item>
//                   ))}
//                 </Menu>
//               </div>
//             )}

//           {selectedProduct?.sup_products && (
//             <div className="p-0 rounded-[12px] shadow-md w-1/4 max-h-[400px] overflow-y-auto">
//               <h2 className="text-xl font-bold mb-4">{selectedProduct.name}</h2>
//               <Menu mode="inline" className="m-0 p-0">
//                 {selectedProduct.sup_products.map((subProduct) => (
//                   <Menu.Item
//                     key={subProduct.id}
//                     onClick={() => handleProductClick(subProduct.id)}
//                     className="bg-gray-200 border-none p-2 rounded-b-[8px] cursor-pointer hover:bg-gray-300"
//                   >
//                     {subProduct.name}
//                   </Menu.Item>
//                 ))}
//               </Menu>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { SlChart } from "react-icons/sl";
import { HiOutlineUser } from "react-icons/hi";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowForward,
} from "react-icons/io";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase";
import { useFavorites } from "../../contexts/FavoritesContext"; // Контексттен favorites алуу

const Header = () => {
  const navigate = useNavigate();
  const { favorites } = useFavorites(); // FavoritesContext'тен favorites алуу

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});

  useEffect(() => {
    const fetchCatalog = async () => {
      const { data, error } = await supabase.from("catalog").select(`
          id, 
          name, 
          products (
            id, 
            name,
            sup_products (
              id, 
              name
            )
          )
        `);

      if (error) {
        console.error("Ошибка запроса:", error);
      } else {
        setCategories(data);
      }
    };

    fetchCatalog();
  }, []);

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  // Жүрөк баскычы басылышы менен "Избранное" бетине өтүү
  const handleFavoritesClick = () => {
    navigate("/favorites");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="app-container relative">
      <header className="flex h-[76px] justify-between p-4 w-full items-center relative z-50">
        <div className="flex gap-[10px] items-center">
          <img
            onClick={() => navigate("/home")}
            className="w-[38px] cursor-pointer"
            src="/src/assets/behoof.svg"
            alt="Behoof Logo"
          />
          <h2
            onClick={() => navigate("/home")}
            className="text-[34px] cursor-pointer font-bold"
          >
            Behoof
          </h2>
          Лучшие цены <br /> в интернет-магазинах
        </div>

        <button
          className="flex bg-[#f9553c] h-[52px] justify-center rounded-[10px] text-white w-[200px] gap-[10px] items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          Каталог товаров {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>

        <div className="flex gap-[20px] relative">
          <CiSearch className="text-[25px] absolute left-[7px] top-[14px]" />
          <input
            className="bg-[#f4efef] h-[52px] rounded-[10px] w-[640px] pl-[35px]"
            placeholder="Поиск товаров"
          />
          <button
            className="flex bg-[#f4efef] h-[52px] justify-center rounded-[10px] w-[52px] items-center relative"
            onClick={handleFavoritesClick} // "Избранное" бетине өтүү
          >
            <GoHeart />
            {favorites.length > 0 && (
              <span className="flex bg-red-500 h-5 justify-center rounded-full text-white text-xs w-5 absolute font-bold items-center right-1 top-1">
                {favorites.length} {/* favorites массивинен санды алуу */}
              </span>
            )}
          </button>
          <button className="flex bg-[#f4efef] h-[52px] justify-center rounded-[10px] w-[52px] items-center">
            <SlChart />
          </button>
          <button
            className="flex bg-[#f4efef] h-[52px] justify-center rounded-[10px] w-[52px] items-center"
            onClick={handleProfileClick}
          >
            <HiOutlineUser />
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="flex bg-white p-4 rounded-[12px] shadow-lg w-[1530px] -translate-x-1/2 absolute gap-[0px] left-1/2 top-[76px] transform z-40">
          <div className="p-0 rounded-[12px] shadow-md w-1/4 max-h-[400px] ml-[100px] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Каталог товаров</h2>
            {categories.length > 0 ? (
              <Menu mode="inline" className="m-0 p-0">
                {categories.map((category) => (
                  <Menu.Item
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category);
                      setSelectedProduct(null);
                      toggleCategory(category.id);
                    }}
                    className="cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      {category.name}
                      {category.products?.length > 0 && (
                        <IoIosArrowForward
                          className={`transition-transform ${
                            expandedCategories[category.id] ? "rotate-90" : ""
                          }`}
                        />
                      )}
                    </div>
                  </Menu.Item>
                ))}
              </Menu>
            ) : (
              <p>Загрузка категорий...</p>
            )}
          </div>

          {selectedCategory?.products &&
            expandedCategories[selectedCategory.id] && (
              <div className="p-0 rounded-[12px] shadow-md w-1/4 max-h-[400px] overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">
                  {selectedCategory.name}
                </h2>
                <Menu mode="inline" className="m-0 p-0">
                  {selectedCategory.products.map((product) => (
                    <Menu.Item
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className="bg-gray-200 border-none p-2 cursor-pointer hover:bg-gray-300"
                    >
                      <div className="flex justify-between">
                        {product.name}
                        {product.sup_products?.length > 0 && (
                          <IoIosArrowForward className="float-right" />
                        )}
                      </div>
                    </Menu.Item>
                  ))}
                </Menu>
              </div>
            )}

          {selectedProduct?.sup_products && (
            <div className="p-0 rounded-[12px] shadow-md w-1/4 max-h-[400px] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">{selectedProduct.name}</h2>
              <Menu mode="inline" className="m-0 p-0">
                {selectedProduct.sup_products.map((subProduct) => (
                  <Menu.Item
                    key={subProduct.id}
                    onClick={() => handleProductClick(subProduct.id)}
                    className="bg-gray-200 border-none p-2 rounded-b-[8px] cursor-pointer hover:bg-gray-300"
                  >
                    {subProduct.name}
                  </Menu.Item>
                ))}
              </Menu>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
