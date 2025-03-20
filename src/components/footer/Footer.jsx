import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaVk } from "react-icons/fa6";
import "./Footer.css";
import Logo from "../../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="app-container">
      <div className="footer-container">
        <div className="footer-top">
          <div className="logo">
            <img src={Logo} alt="Логотип" />
            <h1 className="text-[173px] behoof font-bold">Behoof</h1>
            <p className="text-gray-500 ml-[240px] mt-[20px]">Мы в соц сетях</p>
          </div>

          <div className="social-icons">
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
              <FaVk />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTiktok />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://web.telegram.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-column">
            <h3 className="text-gray-500">Пользователю</h3>
            <p>Связаться с нами</p>
            <p>Поддерка пользователей</p>
            <p>FAQ & Руководства</p>
            <p>Политика конфиденциальности</p>
            <p>Пользовательское соглашение</p>
          </div>
          <div className="footer-column">
            <h3 className="text-gray-500">Популярные категории</h3>
            <p>Параграф с информацией</p>
            <p>Смартфоны </p>
            <p>Teteras electricas</p>
            <p>Стиральные машины</p>
            <p>Телевизоры</p>
          </div>
          <div className="footer-column">
            <h3 className="text-gray-500">Команда Behoof</h3>
            <p>Параграф с информацией</p>
            <p>О нас</p>
            <p>Работа у нас</p>
          </div>
        </div>
        <div className="footer-line">
          <p className="text-gray-500 ml-[240px] mt-[30px]">
            Copyright © 2025 Behoof, Inc. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
