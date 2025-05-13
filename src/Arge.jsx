import React from "react";
import TopInfo from "./Components/TopInfo";
import HeaderNav from "./Components/HeaderNav";
import Footer from "./Components/Footer";

function Arge() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <TopInfo />
      <HeaderNav />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/70 z-10"></div>
        <img
          className="w-full h-80 object-cover object-center"
          src="Imgs/arge.jpg"
          alt="Araştırma ve Geliştirme"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-2">AR-GE</h1>
            <div className="w-24 h-1 bg-purple-500 mx-auto my-4"></div>
            <h2 className="text-2xl font-light">İnovasyon ve Teknoloji</h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-10">
              <div className="w-12 h-1 bg-purple-500 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-800">
                Araştırma ve Geliştirme
              </h2>
              <div className="w-12 h-1 bg-purple-500 ml-4"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="col-span-2 bg-purple-700 p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-40 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl font-bold">Ar-Ge</span>
                    </div>
                    <p className="text-xl font-semibold mb-2">
                      Yenilikçi Çözümler
                    </p>
                    <p className="font-light">
                      Teknoloji odaklı geleceğe yatırım
                    </p>
                  </div>
                </div>

                <div className="col-span-3 p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    cnc MAKİNA, teknolojik gelişmeleri yakından takip eden ve
                    inovatif yaklaşımlarıyla ön plana çıkan bir kuruluş olarak,
                    araştırma ve geliştirme (Ar-Ge) faaliyetlerini daha da
                    ileriye taşımak amacıyla TÜBİTAK, KOSGEB ve çeşitli Avrupa
                    Birliği fonları gibi yerel ve uluslararası destek
                    mekanizmalarını titizlikle araştırmaktadır.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Şirket, bu destek programları doğrultusunda yürüttüğü
                    çalışmalar sayesinde sektörde bir ilk olma özelliği taşıyan
                    ve daha önce benzeri bulunmayan çelik çember üretim
                    makinasını Ar-Ge temelli bir proje olarak başarıyla
                    geliştirmiştir.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Bugün gelinen noktada, bu yenilikçi makinanın üretimini
                    kendi bünyesinde gerçekleştiren cnc MAKİNA, sanayi
                    sektörüne katma değer sağlayan, yüksek teknolojiye dayalı
                    çözümleriyle dikkat çekmekte ve Türkiye'nin teknoloji odaklı
                    sanayi dönüşümüne katkıda bulunmaktadır.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-purple-500 mb-12">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Yenilikçi Başarımız
            </h3>
            <p className="text-xl font-medium text-gray-700 mb-6">
              Sektörde bir ilk olma özelliği taşıyan çelik çember üretim
              makinası
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-purple-800 mb-3">
                  Ar-Ge Temelli Yaklaşım
                </h4>
                <p className="text-gray-600">
                  Tamamen yerli imkanlarla geliştirilmiş yenilikçi teknoloji
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-semibold text-purple-800 mb-3">
                  Katma Değer
                </h4>
                <p className="text-gray-600">
                  Türkiye'nin teknoloji odaklı sanayi dönüşümüne katkı
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Arge;
