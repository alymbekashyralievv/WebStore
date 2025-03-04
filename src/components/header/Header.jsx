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
        <div className="flex gap-[10px]  items-center">
          <img className="w-[38px]" src="/src/assets/behoof.svg" alt="" />
          <h2 className="text-[34px] font-bold">Behoof</h2>
          <p>
            Лучшие цены <br /> в интернет-магазинaх
          </p>
        </div>

        <button
          className="bg-[#f9553c] w-[200px] h-[52px] flex items-center  justify-center gap-[10px] ml-[30px] text-white rounded-[10px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          Каталог товаров <IoIosArrowDown />
        </button>
        {isOpen && (
          <div>
            <ul className="">
              <li className="">Товар 1</li>
              <li className="">Товар 2</li>
              <li className="">Товар 3</li>
            </ul>
          </div>
        )}

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
    </div>
  );
};

export default Header;
