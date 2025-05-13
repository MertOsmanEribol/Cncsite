import React from 'react'
import TopInfo from './Components/TopInfo'
import HeaderNav from './Components/HeaderNav'
import Footer from './Components/Footer'

function Muhendislik() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <TopInfo/>
      <HeaderNav/>
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-gray-900/70 z-10"></div>
        <img 
          className="w-full h-80 object-cover object-center" 
          src="./src/assets/Imgs/engineering.jpg" 
          alt="Mühendislik" 
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-2">Mühendislik</h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto my-4"></div>
            <h2 className="text-2xl font-light">Yenilikçi Çözümler</h2>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Mühendislik Yeteneklerimiz</h2>
            <p className="text-gray-600 mb-10 text-center">Kapsam Makina olarak, en gelişmiş mühendislik yetkinliklerimizle müşterilerimize hizmet veriyoruz.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Tasarım & Analiz</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>Her türlü müşteri ihtiyaçlarına yönelik CAD / CAM yeteneği</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>CAM Simülasyonu</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>Çok eksenli parça imalatları için CAM yeteneği</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>İmalat yöntemi ve malzemesi belirlenmiş ürünlere alternatif malzeme ve işleme önerisi sunma yeteneği</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Uzmanlık & Hassasiyet</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>Tersine mühendislik yapma yeteneği</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>Eğitimli personelimiz ile 0,002 mm hassaslığında CMM (koordinat ölçümü) ölçümü yapma yeteneği</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>Sistem analizi yapma becerisi ile müşterilerine farkında olmadıkları zaman kayıplarını giderecek yeni makinalar önerme yeteneği</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span>Maliyet analizi ve tahminle yapma becerisi ile hammadde stok ihtiyaçlarını kontrol etme yeteneği</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-500 mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Optimizasyon Yaklaşımımız</h3>
            <p className="text-lg font-medium text-gray-700 mb-6">İşleme sürecini optimize etmek ve daha doğru hammadde önerisi için, parçaları Mühendislerimizce öncelikle bilgisayar ortamında işlenebilme yeteneği</p>
            <p className="text-xl font-bold text-blue-800 mb-4">Bu sayede;</p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <p>İmalattan önce gerekli değişiklikler yapılır</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <p>Tezgahta takımlandırma zamanı kaybedilmez</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <p>Numune maliyeti minumuma düşürülür</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <p>İşleme süresi optimize edilir</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold">5</span>
                </div>
                <p>İşleme esnasında makine/iş parçası davranışlarına yönelik öngörülerin yapılması sağlanır</p>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Muhendislik