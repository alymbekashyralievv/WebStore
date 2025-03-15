import { useEffect, useState } from "react";
import { supabase } from "../../supabase";

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

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await supabase.from("apple").select("*");

        setProduct(data);
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
  if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;
  if (!product)
    return <p className="text-center text-red-500 text-lg">Товар не найден</p>;

  return (
    <div>
      <div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1XxMGlVQYECsHdL6RQDAFZSHSuIVHyAu6w&s"
            alt=""
            className="w-[300px] h-[400px] object-cover"
          />
        </div>

        <div className="flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1XxMGlVQYECsHdL6RQDAFZSHSuIVHyAu6w&s"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1XxMGlVQYECsHdL6RQDAFZSHSuIVHyAu6w&s"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1XxMGlVQYECsHdL6RQDAFZSHSuIVHyAu6w&s"
            alt=""
          />
        </div>
        <h3>Характеристики Смартфонa Samsung Galaxy A25</h3>
        <div className="text-gray-500 flex gap-[20px] mt-[20px]">
          <p>Камера</p>
          <p>Система</p>
          <p>Диагональ</p>
          <p>Зарядка</p>
        </div>
        <h3 className="mb-[20px] mt-[50px]">Описание</h3>
        <p className="w-[617px] h-[312px]">
          {" "}
          Смартфон Apple iPhone 13 выполнен в компактном корпусе с
          привлекательной розовой расцветкой и защищенной конструкцией по
          стандарту IP68. Мощный чип A15 Bionic обеспечивает быструю и
          стабильную работу при запуске приложений, просмотре видео,
          веб-серфинге и выполнении других задач. На дисплее 6.1 дюйма OLED
          выводится четкая и красочная картинка. На тыловой стороне расположена
          камера с двумя датчиками по 12 Мп, которые при поддержке ряда
          технологий и функций позволяют создавать реалистичные снимки в
          различных условиях. На передней стороне имеется камера 12 Мп для селфи
          и общения. В мобильном устройстве предлагается широкий набор
          беспроводных интерфейсов и разъем Lightning 8-pin. Аккумулятор
          гарантирует продолжительное время автономности. Из особенностей
          отмечаются поддержка быстрой зарядки, беспроводной зарядки и устройств
          MagSafe с магнитным позиционированием.
        </p>
      </div>
      <div className="ml-[750px] mt-[-1100px]">
        <h3> Смартфонa Samsung Galaxy A25 256ГБ белый</h3>
        <div className="flex gap-[30px]">
          <div className="text-green-500">4.4 Оценка экспертов</div>
          <div>4.0 ⭐⭐⭐⭐☆ 447 Отзывов</div>
        </div>
        <div>
          <h4></h4>
          <div>
            <h3>Дизайн</h3>
            <div className="flex gap-[3px]">
              <div className="bg-red-500  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px]"></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-gray-300  w-20 h-1 rounded-[10px]"></div>
            </div>
            <h3>Батарея</h3>
            <div className="flex gap-[3px]">
              <div className="bg-red-500  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-gray-300  w-20 h-1 rounded-[10px]"></div>
              <div className="bg-gray-300  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-gray-300 w-20 h-1 rounded-[10px]"></div>
            </div>
            <h3>Дисплей</h3>
            <div className="flex gap-[3px]">
              <div className="bg-red-500 w-20 h-1 rounded-[10px] "></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px]"></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-gray-300  w-20 h-1 rounded-[10px]"></div>
            </div>
            <h3>Камера</h3>
            <div className="flex gap-[3px]">
              <div className="bg-red-500  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px]"></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px]"></div>
            </div>
            <h3>Ответ</h3>
            <div className="flex gap-[3px]">
              <div className="bg-red-500  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px]"></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px]"></div>
            </div>
            <h3>Портативность</h3>
            <div className="flex gap-[3px]">
              <div className="bg-red-500  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px]"></div>
              <div className="bg-red-500  w-20 h-1 rounded-[10px] "></div>
              <div className="bg-gray-300  w-20 h-1 rounded-[10px]"></div>
            </div>
          </div>
        </div>
        <div>
          <h4></h4>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
