import { useEffect, useState } from "react";
import { supabase } from "../../supabase";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SlStar } from "react-icons/sl";
import { GiRoundStar } from "react-icons/gi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useParams } from "react-router-dom";

const mockData = {
  name: "Смартфон Samsung Galaxy A25",
  images: [
    "https://stores.kg/_next/image?url=https%3A%2F%2Fdocs.stores.kg%2Fimages%2Fproduct_images%2F67a468334d78f_frame-1004.jpg&w=96&q=75",
    "https://stores.kg/_next/image?url=https%3A%2F%2Fdocs.stores.kg%2Fimages%2Fproduct_images%2F67a468334d78f_frame-1004.jpg&w=96&q=75",
    "https://stores.kg/_next/image?url=https%3A%2F%2Fdocs.stores.kg%2Fimages%2Fproduct_images%2F67a468334d78f_frame-1004.jpg&w=96&q=75",
    "https://stores.kg/_next/image?url=https%3A%2F%2Fdocs.stores.kg%2Fimages%2Fproduct_images%2F67a468334d78f_frame-1004.jpg&w=96&q=75",
  ],
  rating: 4.0,
  review: 447,
  design: 4,
  battery: 2,
  display: 4,
  camera: 5,
  answer: 5,
  portability: 4,
  price: "78 999 ₽",
  colors: [
    {
      textColor: "серый",
      hashColor: "#FFE0BB",
    },
    {
      textColor: "черный",
      hashColor: "#000",
    },
    {
      textColor: "",
      hashColor: "#FFE0BB",
    },
    {
      textColor: "",
      hashColor: "#FFE0BB",
    },
  ],
  color: "#6C6C6C",
  storages: [128, 256, 512],
  storage: 256,
};

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let { data: product, error } = await supabase
          .from("sup_products")
          .select("*")
          .eq("id", productId);
        console.log(product);

        setProduct(product);
        if (error) {
          throw Error(error);
        }
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
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;
  if (!product)
    return <p className="text-center text-lg text-red-500">Товар не найден</p>;

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
    rating,
  } = product[0];

  return (
    <div className="app-container">
      <div className="flex gap-[20px]">
        <div className="border border-[red]">
          <div className="mr-[300px]">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={0}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {mockData.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={product[0].image}
                    alt=""
                    className="h-[710px] w-[710px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex justify-between mb-[32px] mr-[300px]">
            {product[0].images?.map((url, index) => (
              <img
                className="h-[222px] max-w-[250px] min-w-[100px]"
                key={index}
                src={url}
                alt="photo"
              />
            ))}
          </div>
          <div className="border-[#F2F5F9] border-2 p-[20px] rounded-[12px]">
            <h3 className="font-semibold">Характеристики Смартфонa {name}</h3>
            <div className="flex text-gray-500 gap-[20px] my-[20px]">
              <p className="bg-[#F6F7FA] rounded-[8px] px-[12px] py-[8px]">
                Камера <span className="text-black">{camera}</span>
              </p>
              <p className="bg-[#F6F7FA] rounded-[8px] px-[12px] py-[8px]">
                Система <span className="text-black">{system}</span>
              </p>
              <p className="bg-[#F6F7FA] rounded-[8px] px-[12px] py-[8px]">
                Диагональ <span className="text-black">{inch}</span>
              </p>
              <p className="bg-[#F6F7FA] rounded-[8px] px-[12px] py-[8px]">
                Зарядка <span className="text-black">{charge}</span>
              </p>
            </div>
            <div>
              <div>
                <button
                  className="flex text-red-500 cursor-pointer gap-2 items-center"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? "Свернуть" : "Полный список характеристик"}
                  <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                </button>

                {isOpen && (
                  <div className="p-4 mt-4">
                    <h3 className="font-extrabold">Заводские данные</h3>
                    <p></p>
                    <p>Тип: {type}</p>
                    <p>Модель: {name}</p>
                    <p>Год релиза: {rel_date}</p>
                    <h3 className="font-extrabold">Экран</h3>
                    <p>Диагональ экрана (дюйм): {inch}</p>
                    <p>Разрешение экрана: {resolution}</p>
                    <p>Плотность пикселей: {ppi}</p>
                    <p>Технология изготовления экрана: {display}</p>
                    <p>Количество цветов экрана: {color_depth}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-[20px] mt-[50px]">Описание</h3>
            <p className="h-[312px] w-[617px]">{description}</p>
          </div>
        </div>
        <div className="border border-[#f43232]">
          <h3 className="font-extrabold"> {name}</h3>
          <div className="flex gap-[30px]">
            <div className="text-green-500">{rating} Оценка экспертов</div>
            <div className="flex text-red-500 items-center">
              <span>{rating}</span>
              <span className="flex">
                <GiRoundStar />
                <GiRoundStar />
                <GiRoundStar />
                <GiRoundStar />
                <SlStar />
              </span>
              447 Отзывов
            </div>
          </div>
          <div>
            <div>
              <h3>Дизайн</h3>
              <div className="flex gap-[3px]">
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-gray-300 h-1.5 rounded-[10px] w-20"></div>
              </div>
              <h3>Батарея</h3>
              <div className="flex gap-[3px]">
                <div className="bg-red-500 h-1 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1 rounded-[10px] w-20"></div>
                <div className="bg-gray-300 h-1 rounded-[10px] w-20"></div>
                <div className="bg-gray-300 h-1 rounded-[10px] w-20"></div>
                <div className="bg-gray-300 h-1 rounded-[10px] w-20"></div>
              </div>
              <h3>Дисплей</h3>
              <div className="flex gap-[3px]">
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-gray-300 h-1.5 rounded-[10px] w-20"></div>
              </div>
              <h3>Камера</h3>
              <div className="flex gap-[3px]">
                <div className="bg-red-500 h-1 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1 rounded-[10px] w-20"></div>
              </div>
              <h3>Ответ</h3>
              <div className="flex gap-[3px]">
                <div className="bg-red-500 h-1 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1 rounded-[10px] w-20"></div>
              </div>
              <h3>Портативность</h3>
              <div className="flex gap-[3px]">
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-gray-300 h-1.5 rounded-[10px] w-20"></div>
              </div>
            </div>
          </div>
          <div className="mt-[25px]">
            <p>♕ Самый дешевый</p>
            <h2 className="font-extrabold">{price}₽</h2>
            <a href="https://dostavka.yandex.ru/"> Доставка бесплатная</a>
          </div>
          <div>
            <div className="flex gap-2 mt-2">
              <h3 className="font-medium">Цвет:</h3>
              {[
                { hex_color: "#000000", name_color: "black" },
                { hex_color: "#FFDDDD", name_color: "red" },
              ].map((el, index) => (
                <button
                  key={index}
                  className={`w-10 p-[4px]  h-10 rounded-[8px] border-2 
                                    ${
                                      color === el.name_color
                                        ? "border-[#FF4D4D]"
                                        : "border-gray-300"
                                    }  bg-[${el.hex_color}]`}
                ></button>
              ))}
            </div>

            <div className="flex gap-2 mt-2">
              <h3 className="font-medium mt-4">Память:</h3>
              {memory.map((m, index) => (
                <button
                  className="border-2 border-gray-300 rounded text-gray-500 px-4 py-2"
                  key={index}
                >
                  {m} ГБ
                </button>
              ))}
              {/* <button className="border-2 border-red-500 rounded text-black px-4 py-2">256 ГБ</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
