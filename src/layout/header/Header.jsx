import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { SlChart } from "react-icons/sl";
import { HiOutlineUser } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
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
            className="bg-[#f9553c] w-[200px] h-[52px] flex items-center  justify-center gap-[10px] ml-[30px] text-white rounded-[10px] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            Каталог товаров <IoIosArrowDown />
          </button>
          {isOpen && (
            <div className="absolute left-0  mt-2  bg-white shadow-md rounded-[10px] w-[200px]">
              <ul className="space-y-2 text-gray-700">
                <li className="hover:bg-gray-100 p-2 rounded">Смартфоны</li>
                <li className="hover:bg-gray-100 p-2 rounded">Ноутбуки</li>
                <li className="hover:bg-gray-100 p-2 rounded">Аксессуары</li>
                <li className="hover:bg-gray-100 p-2 rounded">Планшеты</li>
                <li className="hover:bg-gray-100 p-2 rounded">Умные часы</li>
                <li className="hover:bg-gray-100 p-2 rounded">Игровые приствки</li>
                <li className="hover:bg-gray-100 p-2 rounded">Наушники</li>
                <li className="hover:bg-gray-100 p-2 rounded">Портативные колонки</li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative flex gap-[20px]">
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
