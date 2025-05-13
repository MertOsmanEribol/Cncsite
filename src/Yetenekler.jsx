import React from 'react'
import TopInfo from "./Components/TopInfo";
import HeaderNav from "./Components/HeaderNav";
import Footer from "./Components/Footer";

function Yetenekler() {
  // Malzeme tecrübeleri verileri
  const malzemeler = [
    { id: 1, baslik: "Çelik ve Alaşımları" },
    { id: 2, baslik: "AL Alaşımları" },
    { id: 3, baslik: "Pirinç" },
    { id: 4, baslik: "Toz Metal Parçalar" },
    { id: 5, baslik: "Paslanmaz Çelik" },
    { id: 6, baslik: "Dövme Çelik" },
    { id: 7, baslik: "Pik ve Sfero Döküm" },
  ];

  // İşleme deneyimleri verileri
  const islemeKabiliyetleri = [
    { id: 1, baslik: "Yüksek hızlı (18000rpm) büyük ölçekli 5 tam eksen simültane frezeleme deneyimi" },
    { id: 2, baslik: "Yüksek hızlı (12000rpm) büyük ölçekli 5 tam eksen simültane tornalama deneyimi" },
    { id: 3, baslik: "Renishaw dokunmatik prob donanımlı 5 Eksen freze makineleri" },
    { id: 4, baslik: "40 bar soğutma mili ile alüminyum parçalarında hassas tornalama ve frezeleme deneyimi" },
    { id: 5, baslik: "Özel işleme aparatları dijayn edilip üretilmesiyle beraber işleme optimizasyonları" },
    { id: 6, baslik: "Çok dar tolerans paralelliğinde çift yüzey taşlama deneyimi" },
    { id: 7, baslik: "Hassas silindirik taşlama deneyimi" },
    { id: 8, baslik: "Seri İmalata uygun alın taşlama deneyimi" },
    { id: 9, baslik: "Hassas kalıp imal etme ve Ölçme kabiliyeti" },
  ];

  // Operatör verileri
  const operatorBilgileri = [
    { id: 1, baslik: "Her operatör çalışacağı parça üzerinde ölçüm yapması gereken yerler hakkında eğitime tabi tutulur." },
    { id: 2, baslik: "Üretim yapan operatör kalite kontrol operatörü gibi hareket eder." },
    { id: 3, baslik: "Ölçüm hatalarını minumuma indirmek için olabilecek her noktaya ölçüm mastarları yapılır veya yaptırılır." },
    { id: 4, baslik: "Kalite kontrol operatörleri yapılacak imalatta hangi sıklıklarla ve hangi ölçülerin kontrol edileceğini ekibi içerisinde belirler." },
    { id: 5, baslik: "İmalat yapan operatör ve kalite kontrol operatörünün ölçüm formları farklıdır." },
    { id: 6, baslik: "İmalat esnasında CMM ölçümü ve Profil projeksiyon ölçümleri yapılır" },
  ];

  return (
    <div>
      <TopInfo/>
      <HeaderNav/>
      <div className='min-h-screen bg-gray-50'>
        {/* Banner Bölümü */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/70 z-10"></div>
          <img 
            className="w-full h-80 object-cover object-center" 
            src="Imgs/yetenekler.jpg" 
            alt="Yetenekler ve Kabiliyetler" 
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-2">Yetenekler</h1>
              <div className="w-24 h-1 bg-purple-500 mx-auto my-4"></div>
              <h2 className="text-2xl font-light">Tecrübe & Kapasite & Operatörler</h2>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Genel Giriş */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Üretim Kabiliyetlerimiz</h2>
            <div className="w-16 h-1 bg-purple-500 mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Çeşitli malzemelerde uzmanlaşmış ekibimiz, yüksek hassasiyetli ekipmanlarımız ve deneyimli 
              operatörlerimizle en zorlu üretim ihtiyaçlarınızı karşılıyoruz.
            </p>
          </div>

          {/* Malzemeler Bölümü */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-1 h-12 bg-purple-500 mr-4"></div>
              <h3 className="text-2xl font-bold text-purple-900">Malzeme Tecrübelerimiz</h3>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              Farklı endüstrilerin ihtiyaçlarına yönelik çeşitli malzemeler üzerinde uzmanlaşmış durumdayız.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {malzemeler.map((malzeme) => (
                <div 
                  key={malzeme.id} 
                  className="bg-white rounded-lg shadow-lg p-6 border-b-4 border-purple-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-center">
                   
                    <h4 className="font-semibold text-lg text-gray-800">{malzeme.baslik}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* İşleme Kabiliyetleri Bölümü */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-1 h-12 bg-purple-500 mr-4"></div>
              <h3 className="text-2xl font-bold text-purple-900">İşleme Deneyimi / Kapasite</h3>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              Modern ekipmanlarımız ve uzman kadromuzla sunduğumuz geniş yelpazedeki işleme kabiliyetlerimiz.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {islemeKabiliyetleri.map((yetenek) => (
                <div 
                  key={yetenek.id} 
                  className="bg-white rounded-lg shadow p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full">
                        <span className="text-purple-800 font-bold">{yetenek.id}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">{yetenek.baslik}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Operatörler Bölümü */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16 border-t-4 border-purple-500">
            <div className="flex items-center mb-8">
              <div className="w-1 h-12 bg-purple-500 mr-4"></div>
              <h3 className="text-2xl font-bold text-purple-900">Operatörlerimiz</h3>
            </div>
            <p className="text-lg text-gray-700 mb-8">
              Kaliteli üretimin temelinde yatan operatör standartlarımız ve uygulamalarımız.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {operatorBilgileri.map((bilgi) => (
                <div key={bilgi.id} className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 flex-shrink-0 mr-4">
                    <svg className="w-5 h-5 text-purple-800" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{bilgi.baslik}</p>
                </div>
              ))}
            </div>
          </div>

        
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Yetenekler