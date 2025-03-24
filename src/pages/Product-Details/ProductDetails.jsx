import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SlStar } from "react-icons/sl";
import { GiRoundStar } from "react-icons/gi";
import { GoHeart } from "react-icons/go";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate, useParams } from "react-router-dom";
import { useFavorites } from "../../contexts/FavoritesContext";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { favorites, addToFavorites } = useFavorites();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let { data: product, error } = await supabase
          .from("sup_products")
          .select("*")
          .eq("id", id);
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
  }, [id]);

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

  const isFavorite = favorites.some((item) => item.id === product[0].id);

  return (
    <div className="container">
      <div className="flex gap-[20px]">
        <div>
          <div className="mr-[300px]">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={0}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {product[0].images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt="" className="h-[710px] w-[710px]" />
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
            <h1 className="text-lg font-semibold mb-4">
              Характеристики смартфона {name}
            </h1>
            <div>
              <div className="p-5 rounded-lg shadow-md mt-6">
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
                <button
                  className="flex text-red-500 gap-2 hover:underline items-center mt-4"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? "Свернуть" : "Полный список характеристик"}
                  {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
                {isOpen && (
                  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg max-w-lg">
                    <h2 className="text-gray-900 text-lg font-semibold">
                      🚀 Заводские данные
                    </h2>
                    <ul className="text-gray-700 mt-2 space-y-1">
                      <li>
                        <span className="font-medium mr-[150px]">Тип</span>
                        {type}
                      </li>
                      <li>
                        <span className="font-medium mr-[114px]">Модель</span>
                        {name}
                      </li>
                      <li>
                        <span className="font-medium mr-[92px]">
                          Год релиза
                        </span>
                        {rel_date}
                      </li>
                    </ul>
                    <h2 className="text-gray-900 text-lg font-semibold mt-15">
                      📱 Экран
                    </h2>
                    <ul className="text-gray-700 mt-2 space-y-1">
                      <li>
                        <span className="font-medium mr-[88px]">
                          Диагональ экрана (дюйм)
                        </span>
                        {inch}
                      </li>
                      <li>
                        <span className="font-medium mr-[134px]">
                          Разрешение экрана
                        </span>
                        {resolution}
                      </li>
                      <li>
                        <span className="font-medium mr-[128px]">
                          Плотность пикселей
                        </span>
                        {ppi}
                      </li>
                      <li>
                        <span className="font-medium mr-[140px]">
                          Технология экрана
                        </span>
                        {display}
                      </li>
                      <li>
                        <span className="font-medium mr-[136px]">
                          Количество цветов
                        </span>
                        {color_depth}
                      </li>
                    </ul>
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
        <div>
          <h3 className="font-extrabold">{name}</h3>
          <div className="flex gap-[30px]">
            <div className="text-green-500">{rating} Оценка экспертов</div>
            <div className="flex text-red-500">
              <span>{rating}</span>
              <span className="flex">
                <GiRoundStar />
                <GiRoundStar />
                <GiRoundStar />
                <GiRoundStar />
                <SlStar />
              </span>{" "}
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
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-gray-300 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-gray-300 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-gray-300 h-1.5 rounded-[10px] w-20"></div>
              </div>
              <h3>Дисплей</h3>
              <div className="flex gap-[3px]">
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-gray-300 h-1.5 rounded-[10px] w-20"></div>
              </div>
              <h3>Камера</h3>
              <div className="flex gap-[3px]">
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
              </div>
              <h3>Ответ</h3>
              <div className="flex gap-[3px]">
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
                <div className="bg-red-500 h-1.5 rounded-[10px] w-20"></div>
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
            <a href="https://dostavka.yandex.ru/">Доставка бесплатная</a>
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
                  className={`w-10 p-[4px] h-10 rounded-[8px] border-2 ${
                    color === el.name_color
                      ? "border-[#FF4D4D]"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: el.hex_color }}
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
            </div>
            <div>
              <button
                onClick={() => {
                  addToFavorites(product[0]);
                }}
                className={`cursor-pointer mt-[20px] pt-[16px] pr-[20px] pb-[16px] pl-[20px] rounded-[8px] flex w-[171px] h-[56px] ${
                  isFavorite ? "bg-red-500 text-white" : "bg-red-100 text-red-600"
                }`}
              >
                <GoHeart className="h-[24px] w-[24px] mr-[8px]" />
                {isFavorite ? "В избранном" : "В избранное"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
