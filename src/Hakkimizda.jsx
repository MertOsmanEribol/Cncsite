import React from 'react'
import TopInfo from './Components/TopInfo'
import HeaderNav from './Components/HeaderNav'
import Footer from './Components/Footer'

function Hakkimizda() {
  return (
    <div>
        <TopInfo/>
        <HeaderNav/>
        <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-gray-900/70 z-10"></div>
        <img 
          className="w-full h-80 object-cover object-center" 
          src="Imgs/hakkimizda.png" 
          alt="Mühendislik" 
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-2">Hakkımızda</h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto my-4"></div>
            <h2 className="text-2xl font-light">cnc Makina Hakkında</h2>
          </div>
        </div>
      </div>
<div className=" md:grid mx-auto mb-15 mt-30 container grid-cols-2">
<div>
  <h1 className="text-4xl mb-3 text-center"> Hakkımızda </h1>
  <p className="text-lg mb-5">10 yılı aşkın işleme tecrübesine sahip cnc Makina, Ümraniye–İstanbul’daki işletmesinde beyaz eşya, otomotiv, motor sektörlerine metal işleme ve taşlama ile parça imalatı yapmaktadır. Bununla beraber gelişmiş işleme ve ölçme becerileriyle kalıp ve özel makine imalatları da yapabilmektedir. 2011 yılı itibariyle yeni bir ürün üretmek, pazarda farklılaşmak ve müşterilerinin imalat yöntemlerine alternatif öneriler sunabilmek için Ar-Ge faaliyetlerini hızlandırmış ve bu alanda Devlet ve Avrupa teşvikleri için görüşmeler yapmaktadır. <br /> </p>
  <p className="text-lg mb-5">Müşteri odaklı çalışan firmamızda kalite, maliyet ve zamanında teslimat ana prensiplerimizi oluşturmaktadır. Hammadde girişinden mamul çıkışına kadar olan her adımda uygulanan kontrol sistemleri, ürünlere yönelik denetim testleriyle mamul kalitesi güvence altına alınmıştır. <br /></p>
  <p className="text-lg">Sektöründe önemli bir yeri olan cnc MAKİNA, ISO 9001, ISO 14001 ve OHSAH 18001 belgelerine sahiptir. Modern teknolojiyi takip eden, makine parkı ve eğitimli personeliyle çalışmalarını sürdüren firmamız açısından önemli olan; müşteri memnuniyet göstergeleri titizlikle takip edilip değerlendirilmesidir. Firmamızda kalite kontrol ekipmanlarının kullanılması yanında ölçüm aparatları ve mastarları sürekli kullanılır. Firmamız ölçüm aparatlarını ve mastarlarını kendisi yapabilecek yetenektedir. Bu yetenek kaliteli bir imalat için mastar yapabilmenin dışında, müşterilerine daha uygun maliyetli çözümler sunulmasına imkanlar sağlamaktadır.</p>
</div>
<div className="mx-auto my-auto md:ms-50"><img className="w-150 h-100" src="Imgs/cnclogo.png" alt="" /></div>

</div>
<Footer/>
    </div>
  )
}

export default Hakkimizda
