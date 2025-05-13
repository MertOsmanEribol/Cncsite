import React from "react";
import TopInfo from "./Components/TopInfo";
import HeaderNav from "./Components/HeaderNav";
import Footer from "./Components/Footer";

function Ekipmanlar() {
  const uretimTezgahlari = [
    { id: 1, baslik: "2 Eksenli CNC Tornalar", img: "src/assets/Imgs/axix2cnc.jpg" },
    { id: 2, baslik: "3 Eksenli CNC Tornalar", img: "src/assets/Imgs/axix3cnc.png" },
    { id: 3, baslik: "Y Eksenli CNC Torna", img: "src/assets/Imgs/yaxixcnc.jpeg" },
    { id: 4, baslik: "4 Eksenli Divizörlü İşleme Merkezi", img: "src/assets/Imgs/axix4isleme.jpeg" },
    { id: 5, baslik: "5 Eksenli Tornalama Merkezi", img: "src/assets/Imgs/axix5turning.jpg" },
    { id: 6, baslik: "5 Eksenli İşleme Merkezi", img: "src/assets/Imgs/axix5center.jpeg" },
  ];
  
  const taslama = [
    { id: 1, baslik: "Dairesel ve aynı anda Çift Yüzey Taşlama Makinaları", img: "src/assets/Imgs/circulargrinding.jpg" },
    { id: 2, baslik: "Silindirik Taşlama Makinaları", img: "src/assets/Imgs/cylindricalgrinding.png" },
  ];
  
  const olcum = [
    { id: 1, baslik: "Çift Taraflı Aynı Anda Taşlama Makinaları – Lepleme İşlemi", img: "src/assets/Imgs/doubleside.jpg" },
    { id: 2, baslik: "CMM Koordinat Ölçme Tezgahı", img: "src/assets/Imgs/cmm.jpg" },
    { id: 3, baslik: "Dijital Mihengir", img: "src/assets/Imgs/mihengir.jpg" },
    { id: 4, baslik: "Profil Projeksiyon", img: "src/assets/Imgs/projeksiyon.jpg" },
    { id: 5, baslik: "Yüzey Kalitesi Ölçüm Cihazları", img: "src/assets/Imgs/yuzey.jpg" },
  ];

  return (
    <div>
      <TopInfo />
      <HeaderNav />
      <div className="min-h-screen bg-gray-50">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/70 z-10"></div>
          <img
            className="w-full h-80 object-cover object-center"
            src="src/assets/Imgs/ekipman.jpeg"
            alt="Araştırma ve Geliştirme"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-2">Ekipmanlarımız</h1>
              <div className="w-24 h-1 bg-purple-500 mx-auto my-4"></div>
              <h2 className="text-2xl font-light">Üretim Tezgahları & Taşlama & Ölçüm</h2>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Rekabet Gücümüz</h2>
            <div className="w-16 h-1 bg-purple-500 mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rekabet gücümüzde bizlere kuvvet katan en önemli özelliğimiz, her zaman en modern tezgah ve ekipman kullanma prensibimizdir.
            </p>
          </div>
          
          {/* Üretim Tezgahları Bölümü */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-purple-800 mb-8 text-center">Üretim Tezgahları</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {uretimTezgahlari.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img src={item.img} alt={item.baslik} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">{item.baslik}</h4>
                    <div className="w-12 h-1 bg-purple-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Taşlama Bölümü */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-purple-800 mb-8 text-center">Taşlama</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {taslama.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img src={item.img} alt={item.baslik} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">{item.baslik}</h4>
                    <div className="w-12 h-1 bg-purple-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Ölçüm Bölümü */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-purple-800 mb-8 text-center">Ölçüm Cihazları</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {olcum.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img src={item.img} alt={item.baslik} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">{item.baslik}</h4>
                    <div className="w-12 h-1 bg-purple-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Ekipmanlar;