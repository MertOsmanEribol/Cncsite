import React from "react";
import TopInfo from "./Components/TopInfo";
import HeaderNav from "./Components/HeaderNav";
import Footer from "./Components/Footer";
import { FaIndustry, FaCogs, FaTools, FaRuler, FaCheckCircle } from "react-icons/fa";

function Uretim() {
  // Üretim özellikleri listesi
  const uretimYetenekleri = [
    {
      id: 1,
      title: "Hassas Talaşlı İmalat",
      icon: <FaCogs className="text-purple-600" size={20} />
    },
    {
      id: 2,
      title: "Alüminyum, Çelik, Dövme Parça Üretimi",
      icon: <FaIndustry className="text-purple-600" size={20} />
    },
    {
      id: 3,
      title: "Müşteri ihtiyaçlarına göre hassas döküm yöntemiyle ürün elde edilmesi ve talaşlı işlemi",
      icon: <FaTools className="text-purple-600" size={20} />
    },
    {
      id: 4,
      title: "Müşteri ihtiyaçlarına göre dövme yöntemiyle ürün elde edilmesi ve talaşlı işlemi",
      icon: <FaTools className="text-purple-600" size={20} />
    },
    {
      id: 5,
      title: "Hassas Taşlama",
      icon: <FaRuler className="text-purple-600" size={20} />
    },
    {
      id: 6,
      title: "Özel sızdırmazlık parçalarının imalatı ve 0,002 tolerans paralelliğinde taşlanması",
      icon: <FaCheckCircle className="text-purple-600" size={20} />
    },
    {
      id: 7,
      title: "Dilme bıçak setleri imalatı",
      icon: <FaTools className="text-purple-600" size={20} />
    },
    {
      id: 8,
      title: "Parça ölçüm fikstürleri imalatı",
      icon: <FaRuler className="text-purple-600" size={20} />
    },
    {
      id: 9,
      title: "Parça bağlama aparatları imalatı",
      icon: <FaTools className="text-purple-600" size={20} />
    },
    {
      id: 10,
      title: "Kaynak fikstürleri imalatı",
      icon: <FaIndustry className="text-purple-600" size={20} />
    },
    {
      id: 11,
      title: "Hızlı ve etkin CAD/CAM Mühendislik Çözümleri",
      icon: <FaCogs className="text-purple-600" size={20} />
    }
  ];

  // Üretim görüntüleri
  const uretimGorselleri = [
    {
      id: 1,
      img: "Imgs/uretim1.jpg",
      alt: "Üretim Tezgahı"
    },
    {
      id: 2,
      img: "Imgs/uretim2.jpg",
      alt: "Üretim Hattı"
    },
    {
      id: 3,
      img: "Imgs/engineer.jpg",
      alt: "Mühendislik Çözümleri"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <TopInfo />
      <HeaderNav />
      
      {/* sayfa header burada */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/70 z-10"></div>
        <img
          className="w-full h-64 md:h-80 object-cover object-center"
          src="Imgs/uretim2.jpg"
          alt="Üretim"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Üretim</h1>
            <div className="w-16 md:w-24 h-1 bg-purple-500 mx-auto my-3 md:my-4"></div>
            <h2 className="text-xl md:text-2xl font-light">Üretim & İmalat Çözümleri</h2>
          </div>
        </div>
      </div>



      {/* Ana içerik  */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className=" gap-8">
         
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <FaIndustry className="text-purple-600" size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Üretim Yeteneklerimiz</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                cnc Makina olarak, en son teknolojiye sahip makine parkurumuz ve deneyimli teknik ekibimiz ile hassas metal imalatı konusunda sektörün önde gelen firmalarındanız. Müşteri ihtiyaçlarını en ince detayına kadar analiz ederek, kalite standartlarından ödün vermeden üretim yapmaktayız.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {uretimGorselleri.map((gorsel) => (
                  <div key={gorsel.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img 
                      src={gorsel.img} 
                      alt={gorsel.alt} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">Üretim Kapasitemiz</h3>
                <ul className="space-y-4">
                  {uretimYetenekleri.map((yetenek) => (
                    <li key={yetenek.id} className="flex items-start">
                      <div className="mt-1">{yetenek.icon}</div>
                      <span className="ml-3 text-gray-700">{yetenek.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* üretim avantajları bölümü*/}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-2">Üretim Avantajlarımız</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <FaCheckCircle className="text-purple-600" size={18} />
                    </div>
                    <h4 className="font-semibold ml-3">Hassas Tolerans</h4>
                  </div>
                  <p className="text-gray-600 text-sm">0,002 mm hassasiyete kadar tolerans değerleri ile üretim yapabilme kapasitesi</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <FaCheckCircle className="text-purple-600" size={18} />
                    </div>
                    <h4 className="font-semibold ml-3">Yüksek Hacim</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Büyük miktarlarda üretim yapabilme ve zamanında teslimat garantisi</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <FaCheckCircle className="text-purple-600" size={18} />
                    </div>
                    <h4 className="font-semibold ml-3">Kalite Kontrol</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Her aşamada titiz kalite kontrol süreçleri ve belgelendirme</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <FaCheckCircle className="text-purple-600" size={18} />
                    </div>
                    <h4 className="font-semibold ml-3">Esneklik</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Müşteri ihtiyaçlarına göre özelleştirilebilen üretim süreçleri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <Footer />
    </div>
  );
}

export default Uretim;