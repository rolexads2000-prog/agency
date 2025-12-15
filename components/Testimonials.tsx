import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS, TRANSLATIONS } from '../constants';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].testimonials;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">{t.title}</h2>
        </div>

        <div 
          className="relative min-h-[300px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-10 rounded-3xl md:p-12 text-center"
            >
              <Quote className="text-rolex-red mx-auto mb-6 opacity-50" size={48} />
              
              <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed mb-8">
                "{TESTIMONIALS[index].quote[language]}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <img 
                  src={TESTIMONIALS[index].avatar} 
                  alt={TESTIMONIALS[index].name} 
                  className="w-12 h-12 rounded-full border-2 border-white/20"
                />
                <div className="text-left">
                  <h4 className="text-white font-bold">{TESTIMONIALS[index].name}</h4>
                  <p className="text-rolex-red text-sm">{TESTIMONIALS[index].role[language]}, {TESTIMONIALS[index].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2 items-center">
                {TESTIMONIALS.map((_, i) => (
                    <button 
                        key={i} 
                        onClick={() => setIndex(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-rolex-red' : 'w-2 bg-white/20'}`}
                    />
                ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;