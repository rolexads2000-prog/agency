import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { TRANSLATIONS, WHATSAPP_NUMBER } from '../constants';
import { useLanguage } from './LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const { language, toggleLanguage } = useLanguage();
  const t = TRANSLATIONS[language].nav;

  // Background animation
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0.98)']
  );
  const backdropBlur = useTransform(scrollY, [0, 50], ['blur(0px)', 'blur(16px)']);
  const borderColor = useTransform(scrollY, [0, 50], ['rgba(0,0,0,0.05)', 'rgba(0,0,0,0.1)']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    // If mobile menu is open, close it first, then scroll
    if (isMobileOpen) {
      setIsMobileOpen(false);
      // Small delay to allow menu animation to finish/start and body scroll to unlock
      setTimeout(() => {
        scrollToSection(targetId);
      }, 300);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: t.services, href: '#services' },
    { name: t.portfolio, href: '#portfolio' },
    { name: t.whyUs, href: '#why-us' },
    { name: t.blog, href: '#blog' },
    { name: t.testimonials, href: '#testimonials' },
  ];

  return (
    <>
      <motion.nav
        style={{ backgroundColor, backdropFilter: backdropBlur, borderBottomColor: borderColor }}
        className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-transparent transition-colors duration-300 flex items-center"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src="/assets/rolexadslogo.png" alt="Rolex Ads" className="h-10 md:h-12 w-auto object-contain" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-gray-700 hover:text-rolex-red transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-rolex-red transition-colors bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200 hover:border-rolex-red"
            >
              <Globe size={14} />
              {language === 'en' ? 'EN' : 'TE'}
            </button>

            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Rolex%20Ads,%20I%20would%20like%20to%20get%20a%20quote.`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full text-white text-sm font-bold transition-all duration-500 bg-gradient-to-r from-rolex-red via-[#ff6b6b] to-rolex-red bg-[length:200%_100%] hover:bg-[100%_0] shadow-lg hover:shadow-[0_0_30px_rgba(227,58,58,0.6)]"
            >
              {t.cta}
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-bold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200"
            >
              <Globe size={14} />
              {language === 'en' ? 'EN' : 'TE'}
            </button>
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors z-50 relative"
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#0B0B0B]/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-2 h-full overflow-y-auto pb-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  whileTap={{ scale: 0.98, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="group flex items-center justify-between py-5 text-xl font-medium text-gray-200 border-b border-white/5 px-4 rounded-xl transition-all"
                >
                  {link.name}
                  <ChevronRight size={20} className="text-gray-600 group-hover:text-rolex-red transition-colors" />
                </motion.a>
              ))}
              
              <div className="mt-8 px-2">
                <motion.a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Rolex%20Ads,%20I%20would%20like%20to%20get%20a%20quote.`}
                  target="_blank"
                  rel="noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center py-5 rounded-2xl text-white font-bold bg-gradient-to-r from-rolex-red via-[#ff6b6b] to-rolex-red bg-[length:200%_100%] hover:bg-[100%_0] transition-all duration-500 shadow-lg text-lg"
                >
                  {t.cta}
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;