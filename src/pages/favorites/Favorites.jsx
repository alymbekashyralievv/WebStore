// import React from "react";
// import { GoHeart } from "react-icons/go";
// import { useNavigate } from "react-router-dom";
// import { useFavorites } from "../../contexts/FavoritesContext";

// const Favorites = () => {
//   const navigate = useNavigate();
//   const { favorites, removeFromFavorites } = useFavorites(); // Получите избранные товары и функцию удаления

//   return (
//     <div className="p-6">
//       <h1 className="text-5xl font-bold mb-6">Избранное</h1>

//       {favorites.length === 0 ? (
//         <p className="text-gray-500">У вас нет избранных товаров.</p>
//       ) : (
//         favorites.map((product) => (
//           <div
//             key={product.id}
//             className="flex bg-white p-6 rounded-2xl shadow-lg items-start mt-6 space-x-6"
//           >
//             <img
//               className="h-[250px] w-[150px] object-contain"
//               src={product.image || product.images?.[0]} // Используйте первое изображение
//               alt={product.name}
//             />

//             <div className="flex-1">
//               <p className="text-gray-500 text-sm">Смартфон</p>
//               <h2 className="text-xl font-bold">{product.name}</h2>

//               <div className="flex my-3 space-x-4">
//                 <button
//                   className="flex bg-red-500 h-10 justify-center rounded-full text-fuchsia-50 w-10 cursor-pointer items-center"
//                   onClick={() => removeFromFavorites(product.id)} // Удаление из избранного
//                 >
//                   <GoHeart className="h-[24px] w-[24px]" />
//                 </button>
//               </div>

//               <p className="text-gray-500">Цена</p>
//               <p className="text-2xl font-bold">{product.price} ₽</p>

//               <div>
//                 <button
//                   className="bg-red-500 rounded-[6px] text-fuchsia-50 cursor-pointer mt-[10px] pb-[7px] pl-[12px] pr-[12px] pt-[7px]"
//                   onClick={() => navigate(`/detail/${product.id}`)}
//                 >
//                   К информации ←
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Favorites;

import React from "react";
import { GoHeart } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../contexts/FavoritesContext";

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold mb-6">Избранное</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500">У вас нет избранных товаров.</p>
      ) : (
        favorites.map((product) => (
          <div
            key={product.id}
            className="flex bg-white p-6 rounded-2xl shadow-lg items-start mt-6 space-x-6"
          >
            <img
              className="h-[250px] w-[150px] object-contain"
              src={product.image || product.images?.[0]}
              alt={product.name}
            />

            <div className="flex-1">
              <p className="text-gray-500 text-sm">Смартфон</p>
              <h2 className="text-xl font-bold">{product.name}</h2>

              <div className="flex my-3 space-x-4">
                <button
                  className="flex bg-red-500 h-10 justify-center rounded-full text-fuchsia-50 w-10 cursor-pointer items-center"
                  onClick={() => removeFromFavorites(product.id)}
                >
                  <GoHeart className="h-[24px] w-[24px]" />
                </button>
              </div>

              <p className="text-gray-500">Цена</p>
              <p className="text-2xl font-bold">{product.price} ₽</p>

              <div>
                <button
                  className="bg-red-500 rounded-[6px] text-fuchsia-50 cursor-pointer mt-[10px] pb-[7px] pl-[12px] pr-[12px] pt-[7px]"
                  onClick={() => navigate(`/product/${product.id}`)} // Маршрутту тууралаңыз
                >
                  К информации ←
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
