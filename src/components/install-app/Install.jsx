import { useNavigate } from "react-router-dom";

const Install = () => {
  const navigate = useNavigate();
  return (
    <div className="app-container   ">
      <div className="relative inline-block ">
        <h2 className="text-[24px]">
          Наша цель - создать фантастический <br /> сервис для всех потребителей
        </h2>
        <div className="flex">
          <div>
            <h1 className="text-[48px] text-[#fe6b27]">5</h1>
            Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a
            pharetra viverra enim nunc.
          </div>
          <div>
            <h1 className="text-[48px] text-[#fe6b27]">30</h1>
            Gravida vel convallis id aliquet volutpat nullam dignissim. Amet
            parturient elementum lectus rhoncus at.
          </div>
          <div>
            <h1 className="text-[48px] text-[#fe6b27]">300</h1>
            Sed varius ut venenatis id amet et consectetur pellentesque. Vitae
            urna ornare vel suspendisse tincidunt.
          </div>
          <div>
            <h1 className="text-[48px] text-[#fe6b27]">8</h1>
            Id enim ornare lacus duis. Ac fermentum auctor cras adipiscing
            feugiat quis convallis velit.
          </div>
        </div>
      </div>
      <div className="bg-[#f4efef] pl-[80px] h-[453px] flex flex-col rounded-[16px] mt-[20px] justify-center gap-[40px]">
        <h1 className="font-bold text-[48px]">
          <span className="text-[#fe6b27]">Экономьте </span>
          свое время <br /> и получайте
          <span className="text-[#fe6b27] ml-1 text-bold  ">
            максимум <br />
          </span>
          от ежедневных покупок
        </h1>
        <div className="flex gap-[20px] ">
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
        <div className="relative">
          <img
            className="h-[330px] w-[598px] absolute ml-[600px] top-[-282px] z-10"
            src="/src/assets/tel.svg"
            alt=""
          />
          <img
            className="h-[295px] w-[598px] absolute ml-[765px] top-[-247px]"
            src="/src/assets/tel.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Install;
