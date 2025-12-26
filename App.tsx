import React, { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { LanguageProvider } from './components/LanguageContext';
import { SERVICES, WHATSAPP_NUMBER } from './constants';

// Lazy load heavy components
const Portfolio = lazy(() => import('./components/Portfolio'));
const WhyUs = lazy(() => import('./components/WhyUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ServiceArea = lazy(() => import('./components/ServiceArea'));
const Blog = lazy(() => import('./components/Blog'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const PolicyModal = lazy(() => import('./components/PolicyModal'));

import type { PolicyType } from './components/PolicyModal';

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-rolex-red border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
          <Suspense fallback={<LoadingFallback />}>
            <ServiceArea />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Portfolio onInquire={handlePortfolioInquire} />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <WhyUs />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Blog />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Testimonials />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <FAQ />
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer 
          onOpenPrivacy={() => setPolicyType('privacy')}
          onOpenTerms={() => setPolicyType('terms')}
        />
        </Suspense>
        <Suspense fallback={null}>
          <PolicyModal isOpen={policyType} onClose={() => setPolicyType(null)} />
        </Suspense>
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
};

export default App;