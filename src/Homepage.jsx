import React from "react";
import HeaderNav from "./Components/HeaderNav";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft, FaQuoteLeft, FaArrowRight, FaBullseye, FaRegLightbulb, FaCogs, FaUsers } from "react-icons/fa";
import TopInfo from "./Components/TopInfo";

function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      img: "src/assets/Imgs/girisimcilik.jpg",
      title: "Girişimcilik",
      subtitle: "Yenilikçi Fikirler, Güçlü Çözümler",
      description: "10 yılı aşkın sektör tecrübesiyle müşterilerimize yenilikçi çözümler sunuyoruz."
    },
    {
      img: "src/assets/Imgs/guvenilirlik.jpg",
      title: "Güvenilirlik",
      subtitle: "Sektörde Güven Veren İş Ortağınız",
      description: "Kalite standartları ve zamanında teslimatla müşteri memnuniyetini önceliklendiriyoruz."
    },
    {
      img: "src/assets/Imgs/mükemmelik.jpg",
      title: "Mükemmellik",
      subtitle: "Detaylara Gösterilen Özen",
      description: "Hassas mühendislik ve kalite kontrolüyle mükemmelliği hedefliyoruz."
    },
    {
      img: "src/assets/Imgs/surdurulebilir.jpg",
      title: "Sürdürülebilirlik",
      subtitle: "Geleceğe Yatırım",
      description: "Sürdürülebilir üretim ve Ar-Ge çalışmalarıyla sektöre yön veriyoruz."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, );

  const services = [
    {
      icon: <FaCogs size={30} className="text-blue-600" />,
      title: "Üretim Tezgahlarımız",
      img: "src/assets/Imgs/uretim1.jpg",
      description: "Son teknoloji üretim tezgahlarımız ve makinelerimiz ile hizmetinizdeyiz!",
      link: "/uretim"
    },
    {
      icon: <FaBullseye size={30} className="text-blue-600" />,
      title: "Kalite Standartlarımız",
      img: "src/assets/Imgs/kalite.png",
      description: "ISO ve OHSAS standartlarına göre 5S prensipleri ile üretimlerimizi gerçekleştirmekteyiz.",
      link: "/kalite"
    },
    {
      icon: <FaRegLightbulb size={30} className="text-blue-600" />,
      title: "Mühendislik",
      img: "src/assets/Imgs/engineer.jpg",
      description: "Son teknolojileri kullanarak hassas mühendislik yeteneklerimiz ile kaliteli bir hizmet sunuyoruz.",
      link: "/muhendislik"
    },
    {
      icon: <FaUsers size={30} className="text-blue-600" />,
      title: "Uzman Çalışma Ekibi",
      img: "src/assets/Imgs/team.png",
      description: "Uzman mühendislerimiz ve teknik ekibimizle kusursuz ve hatasız çalışmalar üretmekteyiz.",
      link: "/ekip"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <TopInfo />
      <HeaderNav />
      
      {/* Hero Slider */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-black/50 z-10"></div>
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="w-full flex-shrink-0 relative">
              <img
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                src={slide.img}
                alt={`slide-${idx}`}
              />
            </div>
          ))}
        </div>
        
        {/* Slider Content */}
        <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{slides[currentSlide].title}</h1>
              <div className="w-16 md:w-24 h-1 bg-blue-500 mb-3 md:mb-6"></div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-2 md:mb-4">{slides[currentSlide].subtitle}</h2>
              <p className="text-sm md:text-lg mb-4 md:mb-8 max-w-md">{slides[currentSlide].description}</p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 md:py-3 px-6 md:px-8 rounded-lg transition duration-300 flex items-center justify-center">
                  Hizmetlerimiz <FaArrowRight className="ml-2" />
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white py-2 md:py-3 px-6 md:px-8 rounded-lg transition duration-300">
                  İletişime Geçin
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Slider Controls */}
        <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center space-x-3 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                currentSlide === idx ? "bg-blue-500" : "bg-white/60"
              }`}
            ></button>
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full z-30 transition duration-300"
        >
          <FaChevronLeft size={16} className="md:hidden" />
          <FaChevronLeft size={20} className="hidden md:block" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full z-30 transition duration-300"
        >
          <FaChevronRight size={16} className="md:hidden" />
          <FaChevronRight size={20} className="hidden md:block" />
        </button>
      </div>
      
      {/* Ana Değerler Bölümü */}
      <div className="bg-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Çözüm Ortağınız</h2>
            <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto mb-3 md:mb-4"></div>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2">
              Beyaz eşya, otomotiv ve motor sektörlerine metal işleme, taşlama, kalıp ve özel makine imalatları ile 10 yılı aşkın süredir hizmet veriyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-36 sm:h-40 md:h-48 overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex items-center mb-3 md:mb-4">
                    <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{service.description}</p>
                  <a 
                    href={service.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm md:text-base"
                  >
                    Detaylı İncele <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Hakkımızda Bölümü */}
      <div className="bg-gray-50 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-12 items-center">
            <div className="md:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Kapsam Makina Hakkında</h2>
              <div className="w-16 md:w-24 h-1 bg-blue-500 mb-4 md:mb-6"></div>
              
              <div className="mb-4 md:mb-6">
                <div className="bg-blue-100 p-3 md:p-4 rounded-lg mb-4 md:mb-6">
                  <FaQuoteLeft className="text-blue-600 mb-2" size={18} />
                  <p className="text-sm md:text-base text-gray-700 italic">
                    "Müşteri odaklı çalışan firmamızda kalite, maliyet ve zamanında teslimat ana prensiplerimizi oluşturmaktadır."
                  </p>
                </div>
                
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                  10 yılı aşkın işleme tecrübesine sahip Kapsam Makina, Ümraniye–İstanbul'daki işletmesinde beyaz eşya, otomotiv, motor sektörlerine metal işleme ve taşlama ile parça imalatı yapmaktadır. Bununla beraber gelişmiş işleme ve ölçme becerileriyle kalıp ve özel makine imalatları da yapabilmektedir.
                </p>
                
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                  2011 yılı itibariyle yeni bir ürün üretmek, pazarda farklılaşmak ve müşterilerinin imalat yöntemlerine alternatif öneriler sunabilmek için Ar-Ge faaliyetlerini hızlandırmış ve bu alanda Devlet ve Avrupa teşvikleri için görüşmeler yapmaktadır.
                </p>
                
                <p className="text-sm md:text-base text-gray-600">
                  Sektöründe önemli bir yeri olan KAPSAM MAKİNA, ISO 9001, ISO 14001 ve OHSAH 18001 belgelerine sahiptir. Modern teknolojiyi takip eden, makine parkı ve eğitimli personeliyle çalışmalarını sürdüren firmamız açısından önemli olan; müşteri memnuniyet göstergeleri titizlikle takip edilip değerlendirilmesidir.
                </p>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 md:py-3 px-6 md:px-8 rounded-lg transition duration-300 flex items-center text-sm md:text-base">
                Daha Fazla Bilgi <FaArrowRight className="ml-2" />
              </button>
            </div>
            
            <div className="md:col-span-2 flex justify-center mt-6 md:mt-0">
              <div className="relative">
                <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-12 h-12 md:w-24 md:h-24 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-blue-500"></div>
                <img 
                  src="src/assets/Imgs/kapsamlogo.png" 
                  alt="Kapsam Makina Logo" 
                  className="max-w-full rounded-lg shadow-xl relative z-10" 
                />
                <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-12 h-12 md:w-24 md:h-24 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
     
      
      <Footer />
    </div>
  );
}

export default Homepage;


// sidebar
//  <div className="lg:col-span-1">
//             <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//               <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Üretim Kategorileri</h3>
//               <ul className="space-y-2">
//                 <li className="py-2 border-b border-gray-100">
//                   <a href="#" className="flex items-center text-purple-600 hover:text-purple-800">
//                     <FaCogs className="mr-2" /> Talaşlı İmalat
//                   </a>
//                 </li>
//                 <li className="py-2 border-b border-gray-100">
//                   <a href="#" className="flex items-center text-gray-700 hover:text-purple-600">
//                     <FaTools className="mr-2" /> Hassas Taşlama
//                   </a>
//                 </li>
//                 <li className="py-2 border-b border-gray-100">
//                   <a href="#" className="flex items-center text-gray-700 hover:text-purple-600">
//                     <FaIndustry className="mr-2" /> Özel Aparatlar
//                   </a>
//                 </li>
//                 <li className="py-2 border-b border-gray-100">
//                   <a href="#" className="flex items-center text-gray-700 hover:text-purple-600">
//                     <FaRuler className="mr-2" /> Fikstür İmalatı
//                   </a>
//                 </li>
//                 <li className="py-2">
//                   <a href="#" className="flex items-center text-gray-700 hover:text-purple-600">
//                     <FaCogs className="mr-2" /> CAD/CAM Çözümleri
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-md p-6 text-white">
//               <h3 className="text-xl font-bold mb-3">Üretim Danışmanlığı</h3>
//               <p className="mb-4">Üretim süreçlerinizi optimize etmek ve verimliliğinizi artırmak için uzman ekibimizle iletişime geçin.</p>
//               <button className="bg-white text-purple-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-medium transition duration-300 w-full">
//                 İletişime Geçin
//               </button>
//             </div>
//           </div>
