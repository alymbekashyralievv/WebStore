import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Grid } from "swiper/modules";
import "../category/Category.css";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from("category").select("*");
      if (error) {
        console.error("Ошибка при загрузке категорий:", error);
      } else {
        setCategories(data);
      }
    };

    const fetchProducts = async () => {
      const { data, error } = await supabase.from("sup_products").select("*");

      if (error) {
        console.error("Ошибка при загрузке продуктов:", error);
      } else {
        const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 4);
        setProducts(shuffled);
      }
    };

    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <div className="app-container pt-[53px]">
      <h1 className="text-[24px] font-bold text-center">Лучший выбор</h1>
      <div className="flex justify-center bg-[#f4efef] h-[427px] pt-[119px] rounded-[12px] gap-[20px] clip  ">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div className="flex flex-col" key={category.id}>
              <div className="bg-[white] rounded-[12px] w-[164px] h-[164px] flex items-center justify-center">
                <img
                  className="w-[124px] h-[124px]"
                  src={category.image}
                  alt={category.name}
                />
              </div>
              <h1 className="text-center">{category.name}</h1>
            </div>
          ))
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
      <div>
        <Swiper
          modules={[Grid]}
          grid={{ rows: 1, fill: "row" }}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="p-2 border rounded-lg   "
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[200px] h-[200px]  "
              />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">{product.price} руб.</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;