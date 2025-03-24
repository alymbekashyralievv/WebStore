import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SlStar } from "react-icons/sl";
import { GiRoundStar } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import { useFavorites } from "./FavoritesContext"; // Контексттен импорт
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProductDetails = ({ productId = 20 }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { favorites, addToFavorites } = useFavorites();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let { data: product, error } = await supabase
          .from("sup_products")
          .select("*")
          .eq("id", productId);
        setProduct(product);
        if (error) throw new Error(error.message);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading)
    return <p className="text-center text-gray-500 text-lg">Загрузка...</p>;
  if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;
  if (!product || product.length === 0)
    return <p className="text-center text-red-500 text-lg">Товар не найден</p>;

  const {
    inch,
    system,
    camera,
    charge,
    name,
    description,
    color,
    memory,
    rel_date,
    type,
    resolution,
    ppi,
    display,
    price,
    color_depth,
    images,
  } = product[0];

  const isFavorite = favorites.some((item) => item.id === product[0].id);

  return (
    <div className="container">
      <div className="flex gap-[20px]">
        <div className="border border-[red]">
          <div className="mr-[300px]">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt="" className="w-[710px] h-[710px]" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Калган код... */}
          <button
            onClick={() => addToFavorites(product[0])}
            className={`cursor-pointer mt-[20px] pt-[16px] pr-[20px] pb-[16px] pl-[20px] rounded-[8px] flex w-[171px] h-[56px] ${
              isFavorite ? "bg-red-500 text-white" : "bg-red-100 text-red-600"
            }`}
          >
            <GoHeart className="mr-[8px] w-[24px] h-[24px]" />
            {isFavorite ? "В избранном" : "В избранное"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
