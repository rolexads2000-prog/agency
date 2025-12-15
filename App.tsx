import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import ServiceArea from './components/ServiceArea';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PolicyModal, { PolicyType } from './components/PolicyModal';
import { LanguageProvider } from './components/LanguageContext';
import { SERVICES, WHATSAPP_NUMBER } from './constants';

const App: React.FC = () => {
  const [policyType, setPolicyType] = useState<PolicyType>(null);
  
  const handleOpenServiceModal = (serviceId: string) => {
    // Direct to WhatsApp with specific service message
    const service = SERVICES.find(s => s.id === serviceId);
    const serviceName = service ? service.title['en'] : 'Services';
    const message = `Hi Rolex Ads, I am interested in your ${serviceName}. Please provide more details.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePortfolioInquire = (item: any) => {
     // Direct to WhatsApp with specific portfolio item message
     const message = `Hi Rolex Ads, I really liked the "${item.title['en']}" project in your portfolio. I want something similar for my business.`;
     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-rolex-black text-white font-sans selection:bg-rolex-red selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Services onOpenModal={handleOpenServiceModal} />
          <ServiceArea />
          <Portfolio onInquire={handlePortfolioInquire} />
          <WhyUs />
          <Blog />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer 
          onOpenPrivacy={() => setPolicyType('privacy')}
          onOpenTerms={() => setPolicyType('terms')}
        />
        <PolicyModal isOpen={policyType} onClose={() => setPolicyType(null)} />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
};

export default App;