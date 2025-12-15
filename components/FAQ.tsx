import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS, TRANSLATIONS } from '../constants';
import { useLanguage } from './LanguageContext';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].faq;

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question.en,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.en
      }
    }))
  };

  return (
    <section id="faq" className="py-24 relative">
      {/* Inject Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            {t.title}
          </motion.h2>
          <p className="text-gray-400">{t.subtitle}</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.question[language]}</span>
                {openIndex === index ? <ChevronUp className="text-rolex-red" /> : <ChevronDown className="text-gray-400" />}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-300 border-t border-white/5 bg-black/20">
                      {faq.answer[language]}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;