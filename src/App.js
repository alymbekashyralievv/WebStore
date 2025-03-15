import React from "react";
import ProductInfo from "./components/ProductInfo";
import "./App.css"; 

const App = () => {
  const product = {
    name: "Гаджет 1",
    description: "Это описание товара. Он очень полезный и удобный.",
    price: 1999,
    imageUrl: "https://link-to-image.jpg",
  };

  return (
    <div className="app">
      <h1>Информация о товаре</h1>
      <ProductInfo product={product} />
    </div>
  );
};

export default App;
