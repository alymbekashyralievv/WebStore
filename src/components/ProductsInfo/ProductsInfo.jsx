
// import React, { useState, useEffect } from "react";

// const ProductInfo = () => {
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const response = await fetch("")
//       const data = await response.json();
//       setProduct(data);
//     };

//     fetchProduct();
//   }, []);

//   if (!product) {
//     return <p>Загрузка...</p>;
//   }

//   return (
//     <div className="product-info">
//       <div className="product-image">
//         <img src={product.imageUrl} alt={product.name} />
//       </div>
//       <div className="product-details">
//         <h2>{product.name}</h2>
//         <p>{product.description}</p>
//         <p>Цена: {product.price} руб.</p>
//         <button className="buy-button">Купить</button>
//       </div>
//     </div>
//   );
// };

// export default ProductInfo;


import React, { useEffect, useState } from "react";

const ProductInfo = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/product/1") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="product-info">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Цена: {product.price} руб.</p>
        <button className="buy-button">Купить</button>
      </div>
    </div>
  );
};

export default ProductInfo;
