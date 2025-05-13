import React from "react";
import TopInfo from "./Components/TopInfo";
import HeaderNav from "./Components/HeaderNav";
import Footer from "./Components/Footer";

function Vizyon() {
  return (
    <div>
      <TopInfo />
      <HeaderNav />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/70 z-10"></div>
        <img 
          className="w-full h-80 object-cover object-center" 
          src="Imgs/vizyon.jpg" 
          alt="Araştırma ve Geliştirme" 
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-2">cnc Makina</h1>
            <div className="w-24 h-1 bg-purple-500 mx-auto my-4"></div>
            <h2 className="text-2xl font-light">Vizyon & Hedefler</h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mb-15 mt-15">
      
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-4">Vizyon & Hedefler</h1>
          <ul className="list-disc list-inside space-y-3">
            <li>
              Rekabetçi fiyatlarla müşterilerine hizmet etmek ve müşterilerinin
              ihtiyaçlarını önceden tahmin ederek gerekli alt yapıyı oluşturmak
            </li>
            <li>
              Ürün teslimi ve kalitesinin ne kadar önemli olduğunun bilincinde
              olmak
            </li>
            <li>
              İnsan kaynaklarına, ülkemizin geleceğini yetiştiren en değerli
              bölüm olarak bakmak ve bunu tüm personeline aşılamak
            </li>
            <li>
              Müşterileriyle sürekli iletişim halinde kalarak, süreçleri ve
              performansları iyileştirmek için odaklanmak
            </li>
            <li>
              Müşterileri ile uzun vadeli ve güvenilir tedarikçi ilişkileri
              geliştirmek
            </li>
            <li>
              Müşterileriyle beraber rekabetçi piyasada daha ön planda olmak
              için maliyetleri azaltma çalışmaları yapmak
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-4">Şirketin Odakları</h1>
          <ul className="list-disc list-inside space-y-3">
            <li>Rekabetçi Fiyatlandırma</li>
            <li>Hassas İşleme Ürünleri</li>
            <li>Yıllık Yüksek Adetli Parça İmalatları</li>
            <li>Çok Parçalı Hassas Kalıp İmalatları</li>
            <li>Tersine Mühendislik Faaliyetleri</li>
            <li>Mastar ve Özel Bağlama Aparatları Dizaynları</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Vizyon;