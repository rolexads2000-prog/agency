import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_ITEMS, TRANSLATIONS } from '../constants';
import { PortfolioItem } from '../types';
import { X, ExternalLink } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import logo from '../assets/logo.png';
interface PortfolioProps {
  onInquire: (item: PortfolioItem) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onInquire }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].portfolio;

  return (
    <section id="portfolio" className="py-24 bg-black/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            {t.title}
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              layoutId={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group relative rounded-2xl overflow-visible cursor-pointer ${index === 1 || index === 4 ? 'md:col-span-1 md:row-span-1' : ''}`}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title[language]} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-rolex-red text-xs font-bold tracking-widest uppercase mb-1">{item.category[language]}</span>
                <h3 className="text-white text-xl font-bold">{item.title[language]}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              layoutId={selectedItem.id}
              className="bg-[#111] w-full max-w-4xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2 bg-black h-64 md:h-auto">
                <img src={selectedItem.imageUrl} alt={selectedItem.title[language]} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-rolex-red font-mono text-sm mb-2">{selectedItem.category[language]}</p>
                      <h3 className="text-3xl font-bold text-white mb-1">{selectedItem.title[language]}</h3>
                      <p className="text-gray-500">{t.clientLabel}: {selectedItem.client}</p>
                    </div>
                    <button onClick={() => setSelectedItem(null)} className="text-gray-500 hover:text-white">
                      <X />
                    </button>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    This project involved creating a high-impact visual identity to target a premium demographic. 
                    We utilized our signature glassmorphic style combined with bold typography to drive engagement.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                        onInquire(selectedItem);
                        setSelectedItem(null);
                    }}
                    className="flex-1 text-white font-bold py-4 rounded-xl transition-all duration-500 bg-gradient-to-r from-rolex-red via-[#ff6b6b] to-rolex-red bg-[length:200%_100%] hover:bg-[100%_0] shadow-lg hover:shadow-[0_0_30px_rgba(227,58,58,0.5)] active:scale-95"
                  >
                    {t.modalButton}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;