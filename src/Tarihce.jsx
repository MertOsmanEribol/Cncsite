import React from 'react'
import TopInfo from './Components/TopInfo'
import HeaderNav from './Components/HeaderNav'
import Footer from './Components/Footer'

function Tarihce() {
  return (
    <div>
      <TopInfo/>
      <HeaderNav/>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/70 z-10"></div>
        <img 
          className="w-full h-80 object-cover object-center" 
          src="Imgs/tarihce.jpg" 
          alt="Araştırma ve Geliştirme" 
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-2">Tarihçemiz</h1>
            <div className="w-24 h-1 bg-purple-500 mx-auto my-4"></div>
            <h2 className="text-2xl font-light">Kuruluşumuzdan Günümüze</h2>
          </div>
        </div>
      </div>
<div>
 <div className="container mx-auto px-4  mt-15 mb-78">
       
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-4">Tarihçe</h1>
          <p className='mb-10 text-lg'>cnc MAKİNA  ülkemiz de gelişen otomotiv ve beyaz eşya endüstrisine paralel olarak büyüyen ana firmalara yan sanayi olarak kuruldu. Zaman içerisinde kalitesi ve zamanında üretimleriyle ön plana çıkan firmamız, ana firmalarıyla paralel olarak büyüdü ve çok eksenli makinalarla metal işleme için kendini geliştirdi ve yatırımlarını yaptı. Çok eksenli işleme yeteneğinde de kendini gösteren firmamız, hassas kalıp sanayisine giriş yaptı.</p>
          <p className='text-lg'> 2011 yılı itibariyle yeni bir ürün üretmek, pazarda farklılaşmak ve müşterilerinin imalat yöntemlerine alternatif öneriler sunabilmek için Ar-Ge faaliyetlerini hızlandırmış ve bu alanda Devlet ve Avrupa teşvikleri için görüşmeler yapmaktadır. cnc MAKİNA insan kaynakları ve makine parkına yaptığı yatırımlarla, büyüyen sektör ihtiyaçlarına ve stratejik planlarına paralel olarak büyümektedir.</p>
        </div>
       
      </div>
</div>
<Footer/>
    </div>
  )
}

export default Tarihce
