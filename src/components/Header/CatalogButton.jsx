import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CatalogButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-500 text-white px-6 py-2 rounded-xl flex items-center gap-2"
      >
        Каталог товаров
        <ChevronDown size={18} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
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
  );
}
