import React from 'react';
import { motion } from 'framer-motion';
import { TRANSLATIONS } from '../constants';
import { useLanguage } from './LanguageContext';

const TOOLS = [
  { id: 'ps', name: 'Photoshop', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg', padding: false },
  { id: 'ai', name: 'Illustrator', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg', padding: false },
  { id: 'pr', name: 'Premiere Pro', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg', padding: false },
  { id: 'ae', name: 'After Effects', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg', padding: false },
  { id: 'fi', name: 'CorelDRAW', icon: '/assets/logocoreldraw.webp', padding: true },
  { id: 'id', name: 'InDesign', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg', padding: false },
];

const ServiceArea: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].serviceArea;

  return (
    <section className="py-24 relative overflow-hidden bg-rolex-navy/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rolex-navy/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.title}</h2>
           <p className="text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {TOOLS.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 3 + Math.random() * 2, // Random duration between 3-5s
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2
              }}
              whileHover={{ scale: 1.1, y: 0, transition: { duration: 0.2 } }}
              className="group relative flex flex-col items-center"
            >
              <div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg relative overflow-hidden backdrop-blur-sm bg-white/5 transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
              >
                <img 
                    src={tool.icon} 
                    alt={tool.name} 
                    className={`object-contain drop-shadow-lg ${tool.padding ? 'w-3/5 h-3/5' : 'w-full h-full'}`}
                />
              </div>

              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm font-medium text-gray-400 group-hover:text-white transition-colors"
              >
                {tool.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;