import React from 'react'
import TopInfo from "./Components/TopInfo";
import HeaderNav from "./Components/HeaderNav";
import Footer from "./Components/Footer";

function Ik() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopInfo />
      <HeaderNav />
      
       <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/70 z-10"></div>
        <img 
          className="w-full h-80 object-cover object-center" 
          src="Imgs/Ik.jpg" 
          alt="Araştırma ve Geliştirme" 
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-2">İnsan Kaynakları</h1>
            <div className="w-24 h-1 bg-purple-500 mx-auto my-4"></div>
            <h2 className="text-2xl font-light">İnsan Kaynakları Birimimiz</h2>
          </div>
        </div>
      </div>
      <div className="flex-grow container mx-auto px-4 py-8">
       
        
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <p className="mb-6 text-gray-700 leading-relaxed">
            cnc Makina, rekabet gücünü arttırmak, kaliteli ürün ve hizmet anlayışıyla sektörde liderler arasında yer almak ve "Sınırsız Şekillendirme" vizyonu ile şirketlerini geleceğe taşımak için İnsan Kaynakları Yönetimi'ni iş stratejilerinin odağında konumlar ve tüm İK uygulamalarını birbirine bağlı, bütünleşik bir sistemde yönetmeyi hedefler.
          </p>
          
          <p className="mb-6 text-gray-700 leading-relaxed">
            Bu doğrultuda İnsan Kaynakları süreçlerimizi iş önceliklerimizin ve hedeflerimizin odağında tutarak;
          </p>
          
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>İş Sağlığı ve Güvenliği ilke ve sorumlulukları dahilin de iş süreçlerini şekillendiren,</li>
            <li>Sürekli iyileşme ve gelişim için çalışanlarına nitelikli ve etkisi ölçülebilir eğitim ve gelişim fırsatları sunan,</li>
            <li>İç yeteneklerine odaklanarak çalışanlarının sırasıyla; potansiyellerini fark etmesi, geliştirmesi ve kullanabilmesi için eğitim ve gelişim ortamı yaratan,</li>
            <li>Çok kültürlülük ile yoğrulmuş farklılıkları bir fırsat olarak gören ve çeşitlilik ile beslenen bir çalışan profili barındıran,</li>
            <li>Ekip çalışmasını, takımdaşlık bilincini destekleyen,</li>
            <li>Öğrenmeye açık olma anlayışı ile şirket kültürüne yeni gelişmeleri entegre eden,</li>
            <li>Çalışanın iş-özel yaşam dengesini destekleyen,</li>
            <li>Bireysel, toplumsal ve çevresel sorunlara karşı sorumluluk bilinci yüksek bireyler ile toplumun refahına hizmet etmeyi amaçlayan</li>
          </ul>
          
          <p className="text-gray-700 leading-relaxed">
            bir yaklaşım içinde olmayı ve uygulamalarımızı sürekli bu amaçlar doğrultusunda iyileştirmeyi hedefleriz.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Ik