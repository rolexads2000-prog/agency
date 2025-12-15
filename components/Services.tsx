import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, TRANSLATIONS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface ServicesProps {
  onOpenModal: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onOpenModal }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].services;

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            {t.title}
          </motion.h2>
          <div className="h-1 w-20 bg-rolex-red rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden"
              onClick={() => onOpenModal(service.id)}
              tabIndex={0}
              role="button"
              aria-label={`Get a quote for ${service.title[language]}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rolex-red/0 to-rolex-red/0 group-hover:from-rolex-red/5 group-hover:to-transparent transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-rolex-red/30">
                  <service.icon className="text-white group-hover:text-rolex-red transition-colors" size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rolex-red transition-colors">
                  {service.title[language]}
                </h3>
                
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {service.description[language]}
                </p>

                <div className="flex items-center text-sm font-semibold text-white/50 group-hover:text-white transition-colors">
                  {t.cta} <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;