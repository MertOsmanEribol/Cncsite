import React, { useState } from "react";
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
        <a href="/"> <img
            className="w-24 sm:w-28"
            src="http://www.kapsammakina.com/uploads/logo/kapsamlogo.png"
            alt="Kapsam Logo"
          /></a>
         
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
            <a href="/"><li className="px-4 py-2 hover:bg-gray-100">Anasayfa</li></a> 
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
               <a href="./Hakkimizda"> <li className="py-2">Hakkımızda</li></a>  
              <a href="./Tarihce"><li className="py-2">Tarihçe</li></a>    
               <a href="./Vizyon"><li className="py-2">Vizyon ve Hedefler</li></a>   
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
               <a href="./Arge"> <li className="py-2">Arge</li></a>  
            <a href="./Muhendislik"><li className="py-2">Mühendislik Yetenekleri</li></a>      
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
                 <a href="./Uretim"><li className="py-2">Üretim</li></a> 
                 <a href="./Ekipmanlar"><li className="py-2">Ekipmanlar</li></a> 
                 <a href="./Yetenekler"><li className="py-2">Yetenekler</li></a> 
                </ul>
              )}
            </li>
           <a href="./Kalite"><li className="px-4 py-2 hover:bg-gray-100">Kalite</li></a> 
            <a href="./Ik"><li className="px-4 py-2 hover:bg-gray-100">İK</li></a>
          <a href="./Iletisim"><li className="px-4 py-2 hover:bg-gray-100">İletişim</li></a>  
            <li className="px-4 py-4 border-t border-gray-200">
              <div className="flex space-x-6 justify-center">
                <a href="#" className="text-blue-600">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-pink-600">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-green-600">
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="hidden md:flex max-w-screen-2xl mx-auto items-center justify-between px-4 lg:px-8 xl:px-12 py-2">
        {/* Logo */}
        <div className="flex-shrink-0">
        <a href="/"> <img
            className="w-24 md:w-28 lg:w-32"
            src="http://www.kapsammakina.com/uploads/logo/kapsamlogo.png"
            alt="Kapsam Logo"
          /></a> 
        </div>

        {/* Menü */}
        <div className="flex-grow flex justify-center">
          <ul className="flex items-center gap-4 lg:gap-6 xl:gap-8 text-sm md:text-base lg:text-lg xl:text-xl">
           <a href="/"><li className="cursor-pointer transition-all duration-200 hover:text-blue-700">
              Anasayfa
            </li></a> 

            {/* Dropdown 1 */}
            <li className="relative group">
              <div
                className="flex items-center cursor-pointer transition hover:text-blue-700"
                onClick={toggleDropdown1}
              >
                Kurumsal <span className="ml-1 text-xs">▼</span>
              </div>
              {openDropdown1 && (
                <ul className="absolute mt-4 left-0 bg-white rounded shadow-lg py-2 w-48 z-20 animate-fade-in">
                 <a href="/Hakkimizda"><li className="px-4 py-2 hover:bg-gray-100">Hakkımızda</li></a> 
              <a href="./Tarihce"><li className="px-4 py-2 hover:bg-gray-100">Tarihçe</li></a>    
          <a href="./Vizyon">  <li className="px-4 py-2 hover:bg-gray-100">Vizyon ve Hedefler</li></a>      
                </ul>
              )}
            </li>

            {/* Dropdown 2 */}
            <li className="relative group">
              <div
                className="flex items-center cursor-pointer transition hover:text-blue-700"
                onClick={toggleDropdown2}
              >
                Mühendislik <span className="ml-1 text-xs">▼</span>
              </div>
              {openDropdown2 && (
                <ul className="absolute mt-4 left-0 bg-white rounded shadow-lg py-2 w-48 z-20 animate-fade-in">
               <a href="./Arge"><li className="px-4 py-2 hover:bg-gray-100">Arge</li></a>   
             <a href="./Muhendislik">  <li className="px-4 py-2 hover:bg-gray-100">Mühendislik Yetenekleri</li></a>   
                </ul>
              )}
            </li>

            {/* Dropdown 3 */}
            <li className="relative group">
              <div
                className="flex items-center cursor-pointer transition hover:text-blue-700"
                onClick={toggleDropdown3}
              >
                Üretim <span className="ml-1 text-xs">▼</span>
              </div>
              {openDropdown3 && (
                <ul className="absolute mt-4 left-0 bg-white rounded shadow-lg py-2 w-48 z-20 animate-fade-in">
              <a href="./Uretim"><li className="px-4 py-2 hover:bg-gray-100">Üretim</li></a>    
              <a href="./Ekipmanlar"><li className="px-4 py-2 hover:bg-gray-100">Ekipmanlar</li></a>    
             <a href="./Yetenekler"><li className="px-4 py-2 hover:bg-gray-100">Yetenekler</li></a>     
                </ul>
              )}
            </li>

           <a href="./Kalite"><li className="cursor-pointer transition hover:text-blue-700">Kalite</li></a> 
         <a href="./Ik"><li className="cursor-pointer transition hover:text-blue-700">İK</li></a>   
          <a href="./Iletisim"><li className="cursor-pointer transition hover:text-blue-700">İletişim</li></a>  
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div className="flex-shrink-0 flex gap-3">
          <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
            <FaFacebook className="w-7 h-7" />
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
            <FaInstagram className="w-7 h-7" />
          </a>
          <a href="#" className="text-green-600 hover:text-green-800 transition-colors">
            <FaWhatsapp className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
