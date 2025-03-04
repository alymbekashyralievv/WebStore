



import { Search, Heart, BarChart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white">
      <div className="flex items-center gap-2">
        <span className="text-red-500 text-2xl font-bold">Behoof</span>
        <span className="text-gray-500 text-sm">Лучшие цены в <br/>интернет-магазинах</span>
      </div>
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
        Каталог товаров
      </button>
      <div className="flex-1 mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Поиск товаров"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>
      <div className=" flex items-center gap-4">
        <Heart className="text-gray-500 cursor-pointer" />
        <BarChart className="text-gray-500 cursor-pointer" />
        <User className="text-gray-500 cursor-pointer" />
      </div>
    </header>
  );
}

