import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { SlChart } from "react-icons/sl";
import { HiOutlineUser } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp, IoIosArrowForward } from "react-icons/io";
import { Menu } from "antd";

const categories = [
  { id: 1, name: "Смартфоны", subcategories: [
    "Все смартфоны", "Новинки смартфонов", "Недорогие смартфоны", "Смартфоны на Android", "Премиум смартфоны", "Кнопочные смартфоны",
    { name: "Apple", models: ["iPhone 14", "iPhone 13", "iPhone SE"] },
    { name: "Xiaomi", models: ["Redmi Note 12", "Xiaomi 13", "Poco X5"] },
    { name: "Samsung", models: ["Galaxy S23", "Galaxy A54", "Galaxy Z Flip"] }
  ] },
  { id: 2, name: "Ноутбуки", subcategories: [
    "Все ноутбуки", "Игровые ноутбуки", "Ультрабуки", "Ноутбуки для работы", "Ноутбуки с процессорами Intel", 
    { name: "Apple", models: ["MacBook Pro", "MacBook Air"] },
    { name: "Asus", models: ["Asus ROG", "Asus ZenBook"] },
    { name: "HP", models: ["HP Pavilion", "HP Omen"] }
  ] },
  { id: 3, name: "Планшеты", subcategories: [
    "Все планшеты", "Планшеты с 4G", "Планшеты для детей", "Планшеты для работы",
    { name: "Apple", models: ["iPad Pro", "iPad Air", "iPad Mini"] },
    { name: "Samsung", models: ["Galaxy Tab S8", "Galaxy Tab A7"] }
  ] },
  { id: 4, name: "Умные часы", subcategories: [
    "Все умные часы", "Спортивные умные часы", "Умные часы для женщин", "Умные часы для мужчин",
    { name: "Apple", models: ["Apple Watch Series 8", "Apple Watch SE"] },
    { name: "Samsung", models: ["Galaxy Watch 5", "Galaxy Watch 4"] }
  ] },
  { id: 5, name: "Игровые приставки", subcategories: [
    "Все игровые приставки", "PlayStation", "Xbox", "Nintendo Switch",
    { name: "Sony", models: ["PlayStation 5", "PlayStation 4"] },
    { name: "Microsoft", models: ["Xbox Series X", "Xbox Series S"] },
    { name: "Nintendo", models: ["Nintendo Switch", "Nintendo Switch Lite"] }
  ] },
  { id: 6, name: "Наушники", subcategories: [
    "Все наушники", "Беспроводные наушники", "Шумоподавляющие наушники", "Наушники с микрофоном",
    { name: "Apple", models: ["AirPods Pro", "AirPods 3"] },
    { name: "Sony", models: ["Sony WH-1000XM5", "Sony WF-1000XM4"] }
  ] }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({}); 

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  return (
    <div className="container relative">
      <header className="flex h-[76px] items-center relative z-50 bg-white w-full shadow-md p-4 justify-between">
        <div className="flex items-center gap-[10px]">
          <img className="w-[38px]" src="/src/assets/behoof.svg" alt="Behoof Logo" />
          <h2 className="text-[34px] font-bold">Behoof</h2>
        </div>
        
        <button
          className="bg-[#f9553c] w-[200px] h-[52px] flex items-center justify-center gap-[10px] text-white rounded-[10px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          Каталог товаров {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
        
        <div className="relative flex gap-[20px]">
          <CiSearch className="absolute left-[7px] top-[14px] text-[25px]" />
          <input
            className="h-[52px] rounded-[10px] bg-[#f4efef] pl-[35px] w-[640px]"
            placeholder="Поиск товаров"
          />
          <button className="w-[52px] h-[52px] bg-[#f4efef] rounded-[10px] flex items-center justify-center">
            <GoHeart />
          </button>
          <button className="w-[52px] h-[52px] bg-[#f4efef] rounded-[10px] flex items-center justify-center">
            <SlChart />
          </button>
          <button className="w-[52px] h-[52px] bg-[#f4efef] rounded-[10px] flex items-center justify-center">
            <HiOutlineUser />
          </button>
        </div>
      </header>

      {isOpen && (
        <div className="absolute top-[76px] left-1/2 transform -translate-x-1/2 w-[1530px]  bg-white p-4 shadow-lg flex z-40 gap-[0px] rounded-[12px]">
          
          <div className="w-1/4 max-h-[400px] overflow-y-auto rounded-[12px] shadow-md p-0 ml-[100px]">
            <h2 className="text-xl font-bold mb-4">Каталог товаров</h2>
            <Menu mode="inline" className="m-0 p-0">
              {categories.map((category) => (
                <Menu.Item 
                  key={category.id} 
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedSubcategory(null);
                    setSelectedBrand(null);
                    toggleCategory(category.id); 
                  }} 
                  className="bg-gray-200 hover:bg-gray-300 cursor-pointer p-2 rounded-t-[8px] border-none"
                >
                  <div className="flex justify-between">
                    {category.name} 
                    {category.subcategories && (
                      <IoIosArrowForward className={`transition-transform ${expandedCategories[category.id] ? "rotate-90" : ""}`} />
                    )}
                  </div>
                </Menu.Item>
              ))}
            </Menu>
          </div>

          
          {selectedCategory?.subcategories && expandedCategories[selectedCategory.id] && (
            <div className="w-1/4 max-h-[400px] overflow-y-auto rounded-[12px] shadow-md p-0">
              <h2 className="text-xl font-bold mb-4">{selectedCategory.name}</h2>
              <Menu mode="inline" className="m-0 p-0">
                {selectedCategory.subcategories.map((sub, index) => (
                  <Menu.Item 
                    key={index} 
                    onClick={() => {
                      setSelectedSubcategory(sub);
                      setSelectedBrand(null);
                    }} 
                    className="bg-gray-200 hover:bg-gray-300 cursor-pointer p-2 border-none"
                  >
                    <div className="flex justify-between">
                      {typeof sub === "string" ? sub : sub.name} 
                      {typeof sub !== "string" && <IoIosArrowForward className="float-right" />}
                    </div>
                  </Menu.Item>
                ))}
              </Menu>
            </div>
          )}

         
          {selectedSubcategory && typeof selectedSubcategory !== "string" && (
            <div className="w-1/4 max-h-[400px] overflow-y-auto rounded-[12px] shadow-md p-0">
              <h2 className="text-xl font-bold mb-4 " >{selectedSubcategory.name}</h2>
              <Menu mode="inline" className="m-0 p-0">
                {selectedSubcategory.models.map((model, idx) => (
                  <Menu.Item key={idx} className="bg-gray-200 hover:bg-gray-300 cursor-pointer p-2 rounded-b-[8px] border-none">
                    {model}
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
