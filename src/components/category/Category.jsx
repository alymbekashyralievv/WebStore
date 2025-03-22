import React, { useState } from 'react';
import { GoHeart } from "react-icons/go";
import { SlChart } from "react-icons/sl";

const categories = [
  {
    id: 1,
    name: 'Смартфоны',
    image: "https://s3-alpha-sig.figma.com/img/7053/aec9/8c1434c4c197d2747bb000b549b7c3d0",
    models: [
      {
        name: 'NOKIA C31',
        image: 'https://m.media-amazon.com/images/I/51kMH+PMx2L.jpg',
        specs: [
          { name: 'Дизайн', value: 80 },
          { name: 'Батарея', value: 70 },
          { name: 'Дисплей', value: 90 },
          { name: 'Камера', value: 85 },
          { name: 'Ответ', value: 75 },
          { name: 'Портативность', value: 60 },
        ],
      },
      {
        name: 'Xiaomi REDMI 13C',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6ayJpXQ-Towj5WvOoNFofZECdXKS1ClYPQ&s',
        specs: [
          { name: 'Дизайн', value: 85 },
          { name: 'Батарея', value: 75 },
          { name: 'Дисплей', value: 95 },
          { name: 'Камера', value: 90 },
          { name: 'Ответ', value: 80 },
          { name: 'Портативность', value: 65 },
        ],
      },
      {
        name: "VIVO Y78",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVr-j4I0J0weGSbJChhYF7Cv2x1n6xXv32Gg&s',
        specs: [
            {name: 'Дизайн', value: 50},
            {name: 'Батарея', value: 70},
            {name: 'Дисплей', value: 90},
            {name: 'Камера', value: 65},
            {name: 'Ответ', value: 80},
            {name: 'портативность', value: 90},
        ]
      },
      {
        name: "Samsung Galaxy AO4E",
        image: 'https://images.samsung.com/is/image/samsung/p6pim/za/sm-a042fzkdafa/gallery/za-galaxy-a04e-sm-a042-sm-a042fzkdafa-thumb-534218938',
        specs: [
            {name: 'Дизайн', value: 50},
            {name: 'Батарея', value: 70},
            {name: 'Дисплей', value: 76},
            {name: 'Камера', value: 70},
            {name: 'Ответ', value: 90},
            {name: 'портативность', value: 80},
        ]
      },
    ],
  },
  {
    id: 2,
    name: 'Ноутбуки',
    image: 'https://www.esseshop.it/getimage/products/EsseShop.it-HPINC-4WU43EA_0.jpg',
    models: [
      {
        name: 'MacBook Pro 14 M2 Pro',
        image: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/Apple_MacBook_Pro_14_2023__1_.JPG',
        specs: [
          { name: 'Дизайн', value: 90 },
          { name: 'Производительность', value: 95 },
          { name: 'Дисплей', value: 98 },
          { name: 'Автономность', value: 85 },
          { name: 'Порты', value: 70 },
          { name: 'Портативность', value: 60 },
        ],
      },
      {
        name: 'Acer Nitro V15 ANV15-51-55UT ',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQreLlt94gUb6Ja_7-sRwcDH3zg2JCCclirPA&s',
        specs: [
          { name: 'Дизайн', value: 85 },
          { name: 'Производительность', value: 92 },
          { name: 'Дисплей', value: 90 },
          { name: 'Автономность', value: 75 },
          { name: 'Порты', value: 80 },
          { name: 'Портативность', value: 70 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Планшеты',
    image: 'https://cdn-icons-png.flaticon.com/512/1038/1038494.png',
    models: [
      {
        name: 'iPad Pro 11 M2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20lXBP8JAvN1hygWCTecxMbxl3ipxVJfIPg&s',
        specs: [
          { name: 'Дизайн', value: 95 },
          { name: 'Производительность', value: 97 },
          { name: 'Дисплей', value: 99 },
          { name: 'Автономность', value: 80 },
          { name: 'Порты', value: 50 },
          { name: 'Портативность', value: 90 },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Умные часы',
    image: 'https://cdn-icons-png.flaticon.com/512/3845/3845727.png',
    models: [
      {
        name: 'Apple Watch Ultra',
        image: 'https://object.pscloud.io/cms/cms/Photo/img_0_911_981_0_1_TyMcWK.jpg',
        specs: [
          { name: 'Дизайн', value: 85 },
          { name: 'Функции', value: 95 },
          { name: 'Дисплей', value: 90 },
          { name: 'Автономность', value: 70 },
          { name: 'Прочность', value: 95 },
          { name: 'Портативность', value: 80 },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Игровые приставки',
    image: 'https://cdn-icons-png.flaticon.com/512/2432/2432719.png',
    models: [
      {
        name: 'PlayStation 5',
        image: 'https://cdn1.ozone.ru/s3/multimedia-b/6765505583.jpg',
        specs: [
          { name: 'Дизайн', value: 80 },
          { name: 'Мощность', value: 99 },
          { name: 'Игротека', value: 95 },
          { name: 'Шум', value: 50 },
          { name: 'Порты', value: 70 },
          { name: 'Портативность', value: 20 },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Наушники',
    image: 'https://cdn-icons-png.flaticon.com/512/3176/3176389.png',
    models: [
      {
        name: 'AirPods Pro 2',
        image: 'https://cdn1.ozone.ru/s3/multimedia-c/6765505580.jpg',
        specs: [
          { name: 'Дизайн', value: 90 },
          { name: 'Звук', value: 95 },
          { name: 'Шумоподавление', value: 85 },
          { name: 'Автономность', value: 80 },
          { name: 'Порты', value: 50 },
          { name: 'Портативность', value: 100 },
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Портативные колонки',
    image: 'https://cdn-icons-png.flaticon.com/512/893/893081.png',
    models: [
      {
        name: 'JBL Charge 5',
        image: 'https://cdn1.ozone.ru/s3/multimedia-u/6765505594.jpg',
        specs: [
          { name: 'Дизайн', value: 85 },
          { name: 'Звук', value: 90 },
          { name: 'Автономность', value: 85 },
          { name: 'Порты', value: 70 },
          { name: 'Влагозащита', value: 95 },
          { name: 'Портативность', value: 90 },
        ],
      },
    ],
  },
];


export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [comparison, setComparison] = useState([]);

  const handleCategoryClick = (id) => {
    setSelectedCategory(id);
  };

  const handleFavoriteClick = (model) => {
    setFavorites((prev) =>
      prev.includes(model) ? prev.filter((fav) => fav !== model) : [...prev, model]
    );
  };

  const handleComparisonClick = (model) => {
    setComparison((prev) =>
      prev.includes(model) ? prev.filter((comp) => comp !== model) : [...prev, model]
    );
  };

  return (
    <div className="flex flex-col items-center">
      {/* Категории */}
      <div className="grid grid-cols-8 gap-4 p-4 bg-gray-100 rounded-2xl shadow-lg">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`flex flex-col items-center cursor-pointer p-2 rounded-lg transition-all hover:bg-gray-200 ${
              selectedCategory === category.id ? 'bg-gray-300' : ''
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <img src={category.image} alt={category.name} className="w-16 h-16 rounded-lg mb-2 object-cover" />
            <span className="text-sm font-medium text-center">{category.name}</span>
          </div>
        ))}
      </div>

      {/* Модели */}
      {selectedCategory && categories.find((cat) => cat.id === selectedCategory).models.length > 0 && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md grid grid-cols-2 gap-4" style={{ width: '970px' }}>
          {categories
            .find((cat) => cat.id === selectedCategory)
            .models.map((model, index) => (
              <div key={index} className="flex border p-4 rounded-lg" style={{ height: '290px' }}>
                {/* Картинка модели */}
                <img src={model.image} alt={model.name} className="w-1/3 rounded-lg object-cover" />

                {/* Описание модели */}
                <div className="ml-4 flex flex-col justify-between w-3/4">
                  <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                  <ul className="space-y-2">
                    {model.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center">
                        {/* Название характеристики */}
                        <span className="w-32">{spec.name}</span>

                        {/* Полоска характеристики */}
                        <div
                          className="flex-1 h-2 bg-gray-200 ml-[30px] rounded-full overflow-hidden"
                          style={{ maxWidth: '200px' }}
                        >
                          <div
                            className="h-full bg-red-500"
                            style={{ width: `${spec.value}%`, transition: 'width 0.3s ease' }}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* Иконки */}
                  <div className="flex gap-4 mt-4">
                    <GoHeart
                      className={`cursor-pointer text-2xl ${
                        favorites.includes(model) ? 'text-red-500' : 'text-gray-400'
                      }`}
                      onClick={() => handleFavoriteClick(model)}
                    />
                    <SlChart
                      className={`cursor-pointer text-2xl ${
                        comparison.includes(model) ? 'text-red-500' : 'text-gray-400'
                      }`}
                      onClick={() => handleComparisonClick(model)}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
