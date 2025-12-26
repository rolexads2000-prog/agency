import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle, X, Send, Check } from 'lucide-react';
import { WHATSAPP_NUMBER, TRANSLATIONS, SERVICES } from '../constants';
import { useLanguage } from './LanguageContext';

const CLIENTS = [
  { name: "Sneha Super Specialty Hospital", logo: "/assets/sneha.webp" },
  { name: "KIMS Hospitals", logo: "/assets/kims.webp" },
  { name: "CMR Jewellery", logo: "/assets/cmrjewellery.webp" },
  { name: "Malabar Gold & Diamonds", logo: "/assets/malabar.webp" },
  { name: "Damro", logo: "/assets/damro.webp" },
  { name: "Canara Bank", logo: "/assets/canara.webp" },
  { name: "Synthite", logo: "/assets/synthite.webp" },
  { name: "CMR Shopping Mall", logo: "/assets/cmrmall.webp" },
  { name: "Sri Bhavya", logo: "/assets/sribhavya.png" },
  { name: "Pace", logo: "/assets/pace.png" },
];

const Hero: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Modal State
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [modalForm, setModalForm] = useState({
    name: '',
    service: '',
    message: ''
  });

  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsInputValid(true);

    if (!inputValue.trim()) {
      setIsInputValid(false);
      setErrorMessage(t.validationEmpty);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cleanPhone = inputValue.replace(/[\s-()+]/g, '');
    const isPhone = /^\d{10,15}$/.test(cleanPhone); // Min 10 digits for valid phone submission
    const isEmail = emailRegex.test(inputValue);

    if (isEmail) {
        // Redirect to Mailbox
        window.location.href = `mailto:rolexads@gmail.com?subject=New Inquiry&body=Hi, I am interested in your services. My email is ${inputValue}.`;
    } else if (isPhone) {
        // Open WhatsApp Modal for Phone Numbers
        setShowWhatsAppModal(true);
    } else {
        setIsInputValid(false);
        setErrorMessage(t.validationInvalid);
    }
  };

  const handleWhatsAppContinue = () => {
    const serviceName = modalForm.service || 'General Inquiry';
    const message = `New Inquiry\n\nName: ${modalForm.name}\nPhone: ${inputValue}\nService: ${serviceName}\nMessage: ${modalForm.message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    setShowWhatsAppModal(false);
    setModalForm({ name: '', service: '', message: '' });
    setInputValue('');
  };

  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const headlineKey = `headline-${language}`;

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 px-6 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rolex-red/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rolex-navy/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left Content */}
        <div className="space-y-8 max-w-2xl relative z-10">
          <motion.h1 
            key={headlineKey}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white max-w-4xl"
            variants={typewriterVariants}
            initial="hidden"
            animate="visible"
          >
            {t.headline.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-4">
                {word.split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              {t.subheadline}
            </p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-gray-300">
              <span className="flex items-center gap-2">
                <Check className="text-rolex-red" size={18} strokeWidth={3} /> {t.check1}
              </span>
              <span className="flex items-center gap-2">
                <Check className="text-rolex-red" size={18} strokeWidth={3} /> {t.check2}
              </span>
              <span className="flex items-center gap-2">
                <Check className="text-rolex-red" size={18} strokeWidth={3} /> {t.check3}
              </span>
            </div>

            {/* Mobile Improved Buttons - Full width on mobile */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Rolex%20Ads,%20I%20would%20like%20to%20get%20a%20free%20design%20consultation.`}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-white font-bold rounded-full transition-all duration-500 bg-gradient-to-r from-rolex-red via-[#ff6b6b] to-rolex-red bg-[length:200%_100%] hover:bg-[100%_0] shadow-lg hover:shadow-[0_0_30px_rgba(227,58,58,0.6)]"
              >
                {t.ctaPrimary} <ArrowRight className="ml-2" size={20} />
              </motion.a>
              
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Rolex%20Ads`}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all"
              >
                <MessageCircle className="mr-2" size={20} /> {t.ctaSecondary}
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Floating Tool Icons */}
        <div className="relative flex justify-center items-center h-full min-h-[400px] lg:min-h-[500px] w-full perspective-1000">
             <div className="relative w-full max-w-[400px] aspect-square">
                 {/* Glow Effect */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rolex-red/10 rounded-full blur-[80px]" />

                 {/* Center Piece - Figma */}
                 <motion.div
                    animate={{ y: [-15, 15, -15] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                 >
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-[2rem] bg-[#1E1E1E] border-2 border-[#0ACF83] flex items-center justify-center shadow-2xl shadow-black/50 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#0ACF83]/10 to-transparent opacity-50" />
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" 
                          alt="Figma" 
                          className="w-16 h-16 md:w-20 md:h-20 object-contain relative z-10 drop-shadow-lg" 
                        />
                    </div>
                 </motion.div>

                 {/* Top Left - Photoshop */}
                 <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, y: [-20, 0, -20] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="absolute top-0 left-4 md:-left-4 z-10"
                 >
                    <div className="w-20 h-20 rounded-2xl bg-[#001E36] border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-md hover:scale-110 transition-transform overflow-hidden">
                         <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" 
                            alt="Photoshop" 
                            className="w-full h-full object-cover" 
                         />
                    </div>
                 </motion.div>

                 {/* Top Right - Illustrator */}
                 <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, y: [20, 0, 20] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-8 right-0 md:-right-8 z-10"
                 >
                    <div className="w-20 h-20 rounded-2xl bg-[#330000] border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-md hover:scale-110 transition-transform overflow-hidden">
                         <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" 
                            alt="Illustrator" 
                            className="w-full h-full object-cover" 
                         />
                    </div>
                 </motion.div>

                 {/* Bottom Left - Premiere */}
                 <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, y: [10, -10, 10] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="absolute bottom-12 left-0 md:-left-8 z-10"
                 >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#330033] border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-md hover:scale-110 transition-transform overflow-hidden">
                         <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" 
                            alt="Premiere Pro" 
                            className="w-full h-full object-cover" 
                         />
                    </div>
                 </motion.div>

                 {/* Bottom Right - After Effects */}
                 <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, y: [-15, 5, -15] }}
                    transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-4 right-4 md:-right-4 z-10"
                 >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#00005B] border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-md hover:scale-110 transition-transform overflow-hidden">
                         <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg" 
                            alt="After Effects" 
                            className="w-full h-full object-cover" 
                         />
                    </div>
                 </motion.div>

                 {/* Decorative Circle Ring */}
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 rounded-full border border-dashed border-white/5 -z-10 scale-125"
                 />
             </div>
        </div>
      </div>

      {/* Mini Lead Form Below - Mobile Improved */}
      <div className="container mx-auto flex justify-center px-4 relative z-40 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-2 pl-4 sm:pl-6 flex flex-col sm:flex-row items-center gap-2 w-full max-w-2xl bg-[#111]/80 backdrop-blur-md border border-white/10"
        >
          <div className="flex-1 w-full sm:w-auto relative group py-3 sm:py-2">
            <input
              type="text"
              placeholder={t.formPlaceholder}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                if (!isInputValid) {
                    setIsInputValid(true);
                    setErrorMessage('');
                }
              }}
              className="w-full bg-transparent border-none text-white placeholder-gray-500 outline-none text-base focus:ring-0"
            />
             <AnimatePresence>
                {!isInputValid && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="absolute -bottom-12 left-0 text-xs text-red-400 font-medium bg-black/90 px-3 py-2 rounded-lg border border-red-500/20 shadow-lg z-50 whitespace-nowrap"
                  >
                    {errorMessage}
                  </motion.div>
                )}
            </AnimatePresence>
          </div>
          <button 
            onClick={handleQuickSubmit}
            className="w-full sm:w-auto px-6 py-4 sm:py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold text-sm transition-all whitespace-nowrap active:scale-95 border border-white/10"
          >
            {t.formButton}
          </button>
        </motion.div>
      </div>
      
      {/* Clients Marquee Section */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 2, duration: 1 }}
         className="w-full relative overflow-hidden"
      >
         <div className="text-center mb-6">
            <p className="text-xs font-bold text-gray-500 tracking-[0.2em] uppercase">Trusted By</p>
         </div>
         
         <div className="relative w-full overflow-hidden">
            {/* Gradients to fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

            {/* Marquee Container */}
            <motion.div 
               className="flex gap-12 md:gap-20 items-center w-max"
               animate={{ x: ["-50%", "0%"] }} 
               transition={{ ease: "linear", duration: 25, repeat: Infinity }}
               style={{ willChange: "transform" }}
            >
               {/* Quadruple list to ensure seamless looping on large screens */}
               {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                  <div key={i} className="flex-shrink-0 relative group">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        // INCREASED SIZE & REMOVED GRAYSCALE
                        className="h-16 md:h-24 w-auto object-contain opacity-100 transition-opacity duration-300" 
                        loading="lazy"
                        decoding="async"
                        width="150"
                        height="96"
                      />
                  </div>
               ))}
            </motion.div>
         </div>
      </motion.div>

      {/* WhatsApp Details Modal */}
      <AnimatePresence>
        {showWhatsAppModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowWhatsAppModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#111] w-full max-w-md rounded-2xl border border-white/10 p-8 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowWhatsAppModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4">
                   <MessageCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Complete Your Request</h3>
                <p className="text-sm text-gray-400">Tell us a bit more so we can assist you better on WhatsApp.</p>
              </div>

              <div className="space-y-4">
                <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Your Name</label>
                   <input 
                      type="text" 
                      value={modalForm.name}
                      onChange={(e) => setModalForm({...modalForm, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#25D366] focus:outline-none transition-colors"
                      placeholder="John Doe"
                   />
                </div>

                <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Interested Service</label>
                   <select 
                      value={modalForm.service}
                      onChange={(e) => setModalForm({...modalForm, service: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#25D366] focus:outline-none transition-colors appearance-none"
                   >
                      <option value="" className="bg-black">Select a service...</option>
                      {SERVICES.map(s => (
                          <option key={s.id} value={s.title[language]} className="bg-black">{s.title[language]}</option>
                      ))}
                      <option value="Other" className="bg-black">Other</option>
                   </select>
                </div>

                <div>
                   <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Message (Optional)</label>
                   <textarea 
                      value={modalForm.message}
                      onChange={(e) => setModalForm({...modalForm, message: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#25D366] focus:outline-none transition-colors resize-none"
                      rows={3}
                      placeholder="I need a design for..."
                   />
                </div>

                <button 
                  onClick={handleWhatsAppContinue}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all mt-2"
                >
                   Continue to WhatsApp <Send size={18} />
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;