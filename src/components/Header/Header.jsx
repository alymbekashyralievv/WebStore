import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { SlChart } from "react-icons/sl";
import { HiOutlineUser } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/index";
import { GrCart } from "react-icons/gr";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [subProducts, setSubProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoritesCount(favorites.length);

    const handleStorageChange = () => {
      const updatedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavoritesCount(updatedFavorites.length);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleHeartClick = () => {
    navigate('/favorites');
  };

  const handleProfileClick = () => {
    navigate('/signin');
  };

  const handleLogoClick = () => {
    navigate('/home');
  };
  const handleCartClick = () => {
    navigate('/Cart');
  }

  const handleCatalogClick = async () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      const { data, error } = await supabase.from('sub_products').select('*');
      if (error) {
        console.error("Ошибка при получении данных:", error.message);
      } else {
        console.log("Данные из sub_products:", data);
        setSubProducts(data);
      }
    }
  };

  return (
    <div className="container relative">
      <header className="flex h-[76px] items-center relative z-50 bg-white w-full shadow-md p-4 justify-between">
        <div className="flex items-center gap-[10px]" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img className="w-[38px]" src="/src/assets/behoof.svg" alt="Behoof Logo" />
          <h2 className="text-[34px] font-bold">Behoof</h2>
          <p>Лучшие цены в интернет магазинах</p>
        </div>

        <button
          className="bg-[#f9553c] w-[200px] h-[52px] flex items-center justify-center gap-[10px] text-white rounded-[10px]"
          onClick={handleCatalogClick}
        >
          Каталог товаров {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>

        <div className="relative flex gap-[20px]">
          <CiSearch className="absolute left-[7px] top-[14px] text-[25px]" />
          <input
            className="h-[52px] rounded-[10px] bg-[#f4efef] pl-[35px] w-[640px]"
            placeholder="Поиск товаров"
          />
          <button
            className="w-[52px] h-[52px] bg-[#f4efef] rounded-[10px] flex items-center justify-center relative"
            onClick={handleHeartClick}
          >
            <GoHeart />
            {favoritesCount > 0 && (
              <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {favoritesCount}
              </span>
            )}
          </button>
          <button className="w-[52px] h-[52px] bg-[#f4efef] rounded-[10px] flex items-center justify-center">
            <SlChart />
          </button>
          <button
            className="w-[52px] h-[52px] bg-[#f4efef] rounded-[10px] flex items-center justify-center"
            onClick={handleProfileClick}
          >
            <HiOutlineUser />
          </button>
         
        </div>
      </header>
      
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-40">
          <ul className="p-4 space-y-2">
            {subProducts.map((product) => (
              <li key={product.id} className="border-b p-2 flex items-center">
                <img src={product.image} alt={product.name} className="w-[50px] h-auto mr-2" />
                {product.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
