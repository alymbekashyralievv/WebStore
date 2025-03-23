const Install = () => {
  return (
    <div className="app-container">
      <div className="inline-block relative">
        <h2 className="text-[24px]">
          Наша цель - создать фантастический <br /> сервис для всех потребителей
        </h2>
        <div className="flex">
          <div>
            <h1 className="text-[#fe6b27] text-[48px] w-[200px] cursor-pointer font-bold">
              1 million
            </h1>
            <p className="cursor-pointer">
              products are available in our service with all the necessary data
              for making a purchase decision
            </p>
          </div>
          <div>
            <h1 className="text-[#fe6b27] text-[48px] w-[30px] cursor-pointer font-bold">
              25
            </h1>
            <p className="cursor-pointer">
              technology sites around the world, from which we monitor articles
              to supplement product information
            </p>
          </div>
          <div>
            <h1 className="text-[#fe6b27] text-[48px] w-[30px] cursor-pointer font-bold">
              50
            </h1>
            <p className="cursor-pointer">
              online stores where we track prices so you can compare them and
              also see price history to avoid falling for fake discounts
            </p>
          </div>
          <div>
            <h1 className="text-[#fe6b27] text-[48px] w-[30px] cursor-pointer font-bold">
              6
            </h1>
            <p className="cursor-pointer">
              once a day we update data on all products on our website and are
              ready to notify you about these changes
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#f4efef] h-[453px] justify-center rounded-[16px] gap-[40px] mt-[20px] pl-[80px]">
        <h1 className="text-[48px] cursor-pointer font-bold">
          <span className="text-[#fe6b27]">Экономьте </span>
          свое время <br /> и получайте
          <span className="text-[#fe6b27] text-bold ml-1">
            максимум <br />
          </span>
          от ежедневных покупок
        </h1>
        <div className="flex gap-[20px]">
          <button
            onClick={() => {
              window.open(
                "https://play.google.com/store/games?hl=ru",
                "_blanc"
              );
            }}
            className="flex bg-black h-[61px] justify-center rounded-[10px] text-[white] w-[204px] cursor-pointer"
          >
            <img
              className="h-[39px] w-[34px] mt-[10px]"
              src="/src/assets/play.svg"
              alt=""
            />
            <div className="flex flex-col text-start ml-[10px]">
              Доступно в <img src="/src/assets/plays.svg" alt="" />
            </div>
          </button>
          <button
            onClick={() => {
              window.open("https://www.apple.com/app-store", "_blanc");
            }}
            className="flex bg-black h-[61px] justify-center rounded-[10px] text-[white] w-[204px] cursor-pointer"
          >
            <img
              className="h-[39px] w-[34px] mt-[10px]"
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
