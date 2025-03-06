import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center text-center mt-[120px]">
      <div className="flex flex-col gap-[20px] items-center">
        <h1 className="text-[80px] font-bold">Упс...</h1>
        <h5 className="text-[24px]">Страница не найдена</h5>
        <p>
          Тут что то упало и это не страшно! <br /> Но мы все сохранили ;)
        </p>
        <button
          onClick={() => {
            navigate("/home");
          }}
          className="flex bg-[#f9553c] items-center justify-center text-[white] w-[201px] h-[52px] rounded-[10px] mt-[22px]"
        >
          Перейти на главную
        </button>
      </div>
    </div>
  );
};

export default NotFound;
