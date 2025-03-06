import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../supabase";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase.from("catalog").select("*").eq("id", id).single();

      if (error) {
        setError("Ошибка загрузки товара");
      } else {
        setProduct(data);
      }

      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500 text-lg">Загрузка...</p>;
  if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;
  if (!product) return <p className="text-center text-gray-500 text-lg">Товар не найден</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="flex justify-center bg-gray-100 p-4">
        <img src={product.image} alt={product.name} className="w-64 h-64 object-cover" />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-semibold text-green-600">{product.price} ₽</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
// import React from 'react'

// const DetailPage = () => {
//   return (
//     <div></div>
//   )
// }

// export default DetailPage