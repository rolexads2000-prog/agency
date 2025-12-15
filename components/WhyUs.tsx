import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '../constants';
import { useLanguage } from './LanguageContext';

const CountUp = ({ to }: { to: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = to;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function (easeOutExpo)
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(start + (end - start) * ease));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, to]);

  return <span ref={ref}>{count}</span>;
};

const WhyUs: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
        {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-rolex-red/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="glass-card rounded-3xl p-12 border border-white/10 bg-gradient-to-r from-white/5 to-transparent">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {STATS.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center justify-center p-6 text-center">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-2 font-mono">
                  <CountUp to={stat.value} />{stat.suffix}
                </div>
                <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">
                  {stat.label[language]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;