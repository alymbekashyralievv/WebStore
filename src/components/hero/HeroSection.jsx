import { MdKeyboardArrowRight } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="app-container flex gap-[52px]">
      <div className="w-[879px] h-[308px] rounded-[10px] bg-[#f4efef] p-[30px] flex flex-col gap-[20px] mt-[48px]   ">
        <h2 className="text-[48px] font-bold">
          <span className="text-[#fe6b27]">1.8 млн</span> товаров в
          <span className="text-[#fe6b27]"> 2272</span> магазинaх <br />
          найди, сравни, выбирай!
        </h2>
        <button className="w-[246px] h-[52px] bg-[#f9553c] flex items-center justify-center text-[white] rounded-[10px] ">
          Перейти к категориям
          <MdKeyboardArrowRight className="text-[25px] mt-[4px] ml-[3px]" />
        </button>
      </div>

      <div className="w-[509px] h-[308px] bg-[#f4efef] rounded-[10px] mt-[48px] p-[53px] relative">
        <h2 className="font-bold text-[40px]">
          <span className="text-[#fe6b27]">Топ-10</span> смартфонов <br /> 2023
          года
        </h2>
        <button className="flex bg-[#f9553c] items-center justify-center text-[white] w-[147px] h-[52px] rounded-[10px] mt-[22px]">
          Смотреть <MdKeyboardArrowRight className="mt-[4px] text-[25px]" />
        </button>
        <img
          className="ml-[200px] absolute top-[130px]"
          src="/src/assets/image_17-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
