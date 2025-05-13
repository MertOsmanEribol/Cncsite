import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPhoneSquare,
  FaChevronRight,
} from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-gray-600  relative bottom-0 w-full text-white p-4 lg:p-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {/* Şirket Bilgisi */}
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold mb-3">cnc Makina</h1>
            <p className="text-sm mb-4">
              cnc MAKİNA ülkemizde gelişen otomotiv ve beyaz eşya endüstrisine
              paralel olarak büyüyen ana firmalara yan sanayi olarak kuruldu.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-3">
              <Link
                to="#"
                className="text-blue-300 hover:text-blue-100 transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                to="#"
                className="text-pink-300 hover:text-pink-100 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                to="#"
                className="text-green-300 hover:text-green-100 transition-colors"
              >
                <FaWhatsapp className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* İletişim Bilgileri */}
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold mb-3">İletişim Bilgilerimiz</h1>
            <div className="flex items-start gap-3 justify-center md:justify-start mb-3">
              <MdFactory className="mt-1 flex-shrink-0" />
              <p className="text-sm">
                İMES SANAYİ SİTESİ E BLOK
                <br />
                503 SOKAK NO:7 Y.DUDULLU -<br />
                ÜMRANİYE / İSTANBUL
              </p>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <FaPhoneSquare className="flex-shrink-0" />
              <span className="text-sm">Telefon: +90 216 540 44 80</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <IoMailOutline className="flex-shrink-0" />
              <span className="text-sm">info@cncmakina.com</span>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold mb-3">Hızlı Linkler</h1>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-200 hover:text-white transition-colors"
                >
                  <FaChevronRight className="text-xs" />
                  <span className="text-sm">Anasayfa</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Hakkimizda"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-200 hover:text-white transition-colors"
                >
                  <FaChevronRight className="text-xs" />
                  <span className="text-sm">Hakkımızda</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Uretim"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-200 hover:text-white transition-colors"
                >
                  <FaChevronRight className="text-xs" />
                  <span className="text-sm">Üretim</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Kalite"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-200 hover:text-white transition-colors"
                >
                  <FaChevronRight className="text-xs" />
                  <span className="text-sm">Kalite</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Ik"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-200 hover:text-white transition-colors"
                >
                  <FaChevronRight className="text-xs" />
                  <span className="text-sm">İnsan Kaynakları</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Iletisim"
                  className="flex items-center justify-center md:justify-start gap-2 text-gray-200 hover:text-white transition-colors"
                >
                  <FaChevronRight className="text-xs" />
                  <span className="text-sm">İletişim</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Telif Hakkı Bilgisi */}
        <div className="mt-6 pt-4 border-t border-gray-500 text-center text-sm">
          <p>© {new Date().getFullYear()} cnc Makina. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
