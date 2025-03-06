
// import React, { useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { GoHeart } from "react-icons/go";
// import { SlChart } from "react-icons/sl";
// import { HiOutlineUser } from "react-icons/hi";
// import Logo from "../assets/Logo.svg";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

  
//   const catalogItems = [
//     "Смартфоны",
//     "Ноутбуки",
//     "Планшеты",
//     "Умные часы",
//     "Игровые приставки",
//     "Наушники",
//     "Портативные колонки",
//     "Мониторы",
//     "Принтеры и сканеры",
//     "Планшеты и электронные книги",
//     "Корпуса и блоки питания",
//     "Аксесуары",
//   ];

//   return (
//     <div className="container">
//       <header className="flex h-[76px] items-center">
//         <div className="flex gap-[10px]">
//           <img className="w-[38px]" src={Logo} alt="Logo" />
//           <h2 className="text-[34px] font-bold">Behoof</h2>
//           <p>
//             Лучшие цены <br /> в интернет-магазинах
//           </p>
//         </div>

//         <button
//           className="bg-[#FF4D4D] w-[200px] h-[52px] flex items-center justify-center gap-[10px] ml-[20px] text-white rounded-[10px]"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           Каталог товаров
          
//           {isOpen ? (
//             <IoIosArrowUp className="text-white" />
//           ) : (
//             <IoIosArrowDown className="text-white" />
//           )}
//         </button>


//         {isOpen && (
//           <div className="absolute top-[76px] left-[0] w-[2300px] h-[900px] bg-white shadow-lg rounded-b-[10px] p-[10px]">
//             <div className="flex gap-[50px]">
             
//               <div className="w-[300px] ml-[415px]">
//                 <div className=" font-bold text-4xl">Каталог товаров</div>
//                 <div className="mt-[30px]">
                  
//                   {catalogItems.map((item, index) => (
//                     <div
//                       key={index}
//                       className="cursor-pointer p-[10px] bg-[#f4f4f4] text-black rounded-[5px] hover:bg-[#d4d4d4] hover:text-red-500"
//                     >
//                       {item}
//                     </div>
//                   ))}
//                 </div>
//               </div>

            
//               <div className="w-[200px]">
//                 <div className="p-[10px] font-bold text-black rounded-[5px]">
//                   Смартфоны
//                 </div>
//               </div>

            
//               <div className="w-[200px]">
//                 <div className="p-[10px] font-bold text-black rounded-[5px]">
//                   Apple
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="relative flex gap-[10px] ml-auto">
//           <CiSearch className="absolute left-[7px] top-[14px] text-[25px]" />
//           <input
//             className="h-[52px] rounded-[10px] bg-[#f4efef] pl-[35px] w-[640px]"
//             placeholder="Поиск товаров"
//           />
//           <button className="w-[52px] h-[52px] bg-[#f4efef] rounded-[10px] flex items-center justify-center">
//             <GoHeart />
//           </button>
//           <button className="w-[52px] h-[52px] bg-[#f4efef] rounded-[10px] flex items-center justify-center">
//             <SlChart />
//           </button>
//           <button className="w-[52px] h-[52px] bg-[#f4efef] rounded-[10px] flex items-center justify-center">
//             <HiOutlineUser />
//           </button>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;
