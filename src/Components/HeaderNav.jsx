import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/Imgs/cnclogo.png";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function HeaderNav() {
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openDropdown3, setOpenDropdown3] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown1 = () => {
    setOpenDropdown1(!openDropdown1);
    setOpenDropdown2(false);
    setOpenDropdown3(false);
  };

  const toggleDropdown2 = () => {
    setOpenDropdown2(!openDropdown2);
    setOpenDropdown1(false);
    setOpenDropdown3(false);
  };

  const toggleDropdown3 = () => {
    setOpenDropdown3(!openDropdown3);
    setOpenDropdown1(false);
    setOpenDropdown2(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown1(false);
    setOpenDropdown2(false);
    setOpenDropdown3(false);
  };

  return (
    <div className="sticky top-0 z-50 navbar backdrop-blur-md bg-white/40 shadow-xl text-black font-['Poppins']">
      {/* Mobile Navbar */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:hidden">
        <div className="flex-1" />
        <div className="flex justify-center flex-1">
          <Link to="/">
            <img className="w-24 sm:w-28" src={logo} alt="cnc Logo" />
          </Link>
        </div>
        <div className="flex justify-end flex-1">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/">Anasayfa</Link>
            </li>

            <li className="px-4 py-2">
              <div
                className="flex justify-between items-center w-full"
                onClick={toggleDropdown1}
              >
                <span>Kurumsal</span>
                <span className="cursor-pointer">▼</span>
              </div>
              {openDropdown1 && (
                <ul className="pl-4 mt-2">
                  <li className="py-2">
                    <Link to="/Hakkimizda">Hakkımızda</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/Tarihce">Tarihçe</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/Vizyon">Vizyon ve Hedefler</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="px-4 py-2">
              <div
                className="flex justify-between items-center w-full"
                onClick={toggleDropdown2}
              >
                <span>Mühendislik</span>
                <span className="cursor-pointer">▼</span>
              </div>
              {openDropdown2 && (
                <ul className="pl-4 mt-2">
                  <li className="py-2">
                    <Link to="/Arge">Arge</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/Muhendislik">Mühendislik Yetenekleri</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="px-4 py-2">
              <div
                className="flex justify-between items-center w-full"
                onClick={toggleDropdown3}
              >
                <span>Üretim</span>
                <span className="cursor-pointer">▼</span>
              </div>
              {openDropdown3 && (
                <ul className="pl-4 mt-2">
                  <li className="py-2">
                    <Link to="/Uretim">Üretim</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/Ekipmanlar">Ekipmanlar</Link>
                  </li>
                  <li className="py-2">
                    <Link to="/Yetenekler">Yetenekler</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/Kalite">Kalite</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/Ik">İK</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <Link to="/Iletisim">İletişim</Link>
            </li>

            <li className="px-4 py-4 border-t border-gray-200">
              <div className="flex space-x-6 justify-center">
                <Link to="#" className="text-blue-600">
                  <FaFacebook size={20} />
                </Link>
                <Link to="#" className="text-pink-600">
                  <FaInstagram size={20} />
                </Link>
                <Link to="#" className="text-green-600">
                  <FaWhatsapp size={20} />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="hidden md:flex max-w-screen-2xl mx-auto items-center justify-between px-4 lg:px-8 xl:px-12 py-2">
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              className="w-24 md:w-28 lg:w-32"
              src={logo}
              alt="cnc Logo"
            />
          </Link>
        </div>

        <div className="flex-grow flex justify-center">
          <ul className="flex items-center gap-4 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg xl:text-xl">
            <li className="cursor-pointer transition-all duration-200 hover:text-blue-700">
              <Link to="/">Anasayfa</Link>
            </li>

            <li className="relative group">
              <div
                className="flex items-center cursor-pointer transition hover:text-blue-700"
                onClick={toggleDropdown1}
              >
                Kurumsal <span className="ml-1 text-xs">▼</span>
              </div>
              {openDropdown1 && (
                <ul className="absolute mt-4 left-0 bg-white rounded shadow-lg py-2 w-48 z-20 animate-fade-in">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/Hakkimizda">Hakkımızda</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/Tarihce">Tarihçe</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/Vizyon">Vizyon ve Hedefler</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative group">
              <div
                className="flex items-center cursor-pointer transition hover:text-blue-700"
                onClick={toggleDropdown2}
              >
                Mühendislik <span className="ml-1 text-xs">▼</span>
              </div>
              {openDropdown2 && (
                <ul className="absolute mt-4 left-0 bg-white rounded shadow-lg py-2 w-48 z-20 animate-fade-in">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/Arge">Arge</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/Muhendislik">Mühendislik Yetenekleri</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative group">
              <div
                className="flex items-center cursor-pointer transition hover:text-blue-700"
                onClick={toggleDropdown3}
              >
                Üretim <span className="ml-1 text-xs">▼</span>
              </div>
              {openDropdown3 && (
                <ul className="absolute mt-4 left-0 bg-white rounded shadow-lg py-2 w-48 z-20 animate-fade-in">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/Uretim">Üretim</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/Ekipmanlar">Ekipmanlar</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link to="/Yetenekler">Yetenekler</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="cursor-pointer transition hover:text-blue-700">
              <Link to="/Kalite">Kalite</Link>
            </li>
            <li className="cursor-pointer transition hover:text-blue-700">
              <Link to="/Ik">İK</Link>
            </li>
            <li className="cursor-pointer transition hover:text-blue-700">
              <Link to="/Iletisim">İletişim</Link>
            </li>
          </ul>
        </div>

        <div className="flex-shrink-0 flex gap-3">
          <Link
            to="#"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FaFacebook className="w-7 h-7" />
          </Link>
          <Link
            to="#"
            className="text-pink-600 hover:text-pink-800 transition-colors"
          >
            <FaInstagram className="w-7 h-7" />
          </Link>
          <Link
            to="#"
            className="text-green-600 hover:text-green-800 transition-colors"
          >
            <FaWhatsapp className="w-7 h-7" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
