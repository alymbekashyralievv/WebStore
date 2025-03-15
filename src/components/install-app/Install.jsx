import { useNavigate } from "react-router-dom";

const Install = () => {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <div className="bg-[gray] pl-[40px] h-[453px] flex flex-col">
        <h1 className="font-bold text-[48px]">
          <span className="text-[#fe6b27]">Экономьте </span>
          свое время <br /> и получайте
          <span className="text-[#fe6b27] ml-1 text-bo">
            максимум <br />
          </span>
          от ежедневных покупок
        </h1>
        <div className="flex gap-[20px]">
          <button
            onClick={() => {
              navigate("/https://play.google.com/store/games?hl=ru");
            }}
            className="w-[204px] h-[61px] flex bg-black text-[white] rounded-[10px]  justify-center "
          >
            <img
              className="w-[34px] h-[39px] mt-[10px]"
              src="/src/assets/play.svg"
              alt=""
            />
            <div className="flex flex-col text-start ml-[10px]">
              Доступно в <img src="/src/assets/plays.svg" alt="" />
            </div>
          </button>
          <button className="w-[204px] h-[61px] flex bg-black text-[white] rounded-[10px]  justify-center ">
            <img
              className="w-[34px] h-[39px] mt-[10px]"
              src="/src/assets/apple.svg"
              alt=""
            />
            <div className="flex flex-col text-start ml-[10px]">
              Загрузите в <img src="/src/assets/app.svg" alt="" />
            </div>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Install;
