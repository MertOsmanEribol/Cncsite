import React from 'react'
import TopInfo from "./Components/TopInfo";
import HeaderNav from "./Components/HeaderNav";
import Footer from "./Components/Footer";

function Kalite() {
  // Kalite standartları verileri
  const kaliteStandartlari = [
    { 
      id: 1, 
      baslik: "ISO 9001", 
      aciklama: "ISO 9001 standartlarına uygun şekilde üretim yapıyoruz. Bu sertifika, müşteri memnuniyetini artırmak için kalite yönetim sistemlerini sürekli iyileştirdiğimizin kanıtıdır.", 
      gorsel: "Imgs/Iso9001.jpg",
      icon: "Imgs/icons/quality.svg"
    },
    { 
      id: 2, 
      baslik: "ISO 14001", 
      aciklama: "ISO 14001 standartlarında çevre yönetim sistemleri ile üretim gerçekleştiriyoruz. Bu, çevresel etkileri minimize etmek için taahhüdümüzü gösterir.", 
      gorsel: "Imgs/Iso14001.jpg",
      icon: "Imgs/icons/environment.svg"
    },
    { 
      id: 3, 
      baslik: "OHSAS 18001", 
      aciklama: "OHSAS 18001 standartlarında iş sağlığı ve güvenliği yönetim sistemleri ile çalışmalarımızı sürdürüyoruz. Çalışanlarımızın güvenliği bizim için önceliktir.", 
      gorsel: "Imgs/ohsas18001.jpg",
      icon: "Imgs/icons/safety.svg"
    }
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
            src="Imgs/vizyon.jpg"
            alt="Kalite Standartlarımız"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-2">Kalite</h1>
              <div className="w-24 h-1 bg-purple-500 mx-auto my-4"></div>
              <h2 className="text-2xl font-light">Kalite Standartlarımız</h2>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Kalite Giriş Bölümü */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Üretim Kalite Politikamız</h2>
            <div className="w-16 h-1 bg-purple-500 mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kaliteyi bir tesadüf değil, bilinçli bir tercih olarak görüyoruz. 
              Uluslararası standartlara uygun üretimimizle müşteri memnuniyetini ve sürekli iyileştirmeyi hedefliyoruz.
            </p>
          </div>

          {/* Sertifikalar Bölümü */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {kaliteStandartlari.map((standart) => (
              <div 
                key={standart.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={standart.gorsel} 
                    alt={standart.baslik} 
                    className="w-full h-full object-contain p-4" 
                  />
                  <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 rounded-bl-lg">
                    Sertifikalı
                  </div>
                </div>
                
                <div className="p-6 border-t border-gray-200">
                  <div className="flex items-center mb-4">
                  
                    <h3 className="text-xl font-bold text-purple-900">{standart.baslik}</h3>
                  </div>
                  <p className="text-gray-600">{standart.aciklama}</p>
                  
                
                </div>
              </div>
            ))}
          </div>

       
          
        
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Kalite   