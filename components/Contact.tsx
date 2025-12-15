import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, MessageSquare, MapPin, Phone, Mail } from 'lucide-react';
import { WHATSAPP_NUMBER, TRANSLATIONS, SERVICES } from '../constants';
import { useLanguage } from './LanguageContext';
import Lottie from 'lottie-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    contact: '',
    service: '',
    projectDetails: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confettiData, setConfettiData] = useState<any>(null);
  
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].contact;

  useEffect(() => {
    // Fetch a confetti animation JSON
    fetch('https://assets5.lottiefiles.com/packages/lf20_rovf9gzu.json')
      .then((res) => res.json())
      .then((data) => setConfettiData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate minimal processing time
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Construct clean and detailed message
    const serviceName = formState.service || 'General Inquiry';
    const message = `New Contact Inquiry\n\nName: ${formState.name}\nContact: ${formState.contact}\nService Interested: ${serviceName}\nDetails: ${formState.projectDetails || 'N/A'}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');

    // Show success state
    setIsSubmitting(false);
    setIsSuccess(true);
    
    console.log("Lead redirected to WhatsApp", formState);
  };

  const getWhatsAppLink = () => {
    const serviceName = formState.service || 'General Inquiry';
    const message = `New Contact Inquiry\n\nName: ${formState.name}\nContact: ${formState.contact}\nService Interested: ${serviceName}\nDetails: ${formState.projectDetails || 'N/A'}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
        {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-rolex-navy/30 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass-card rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Form Side */}
          <div className="lg:w-3/5 p-10 md:p-14 relative bg-black/40">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -50 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-2">{t.title}</h3>
                  <p className="text-gray-400 mb-8">{t.subtitle}</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="peer glass-input w-full px-4 py-4 rounded-xl border-none focus:ring-0 placeholder-transparent"
                        placeholder={t.nameLabel}
                      />
                      <label 
                        htmlFor="name"
                        className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-rolex-red peer-valid:-top-2 peer-valid:text-xs peer-valid:text-rolex-red"
                      >
                        {t.nameLabel}
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        name="contact"
                        id="contact"
                        required
                        value={formState.contact}
                        onChange={(e) => setFormState({...formState, contact: e.target.value})}
                        className="peer glass-input w-full px-4 py-4 rounded-xl border-none focus:ring-0 placeholder-transparent"
                        placeholder={t.contactLabel}
                      />
                      <label 
                        htmlFor="contact"
                        className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-rolex-red peer-valid:-top-2 peer-valid:text-xs peer-valid:text-rolex-red"
                      >
                        {t.contactLabel}
                      </label>
                    </div>

                    <div className="relative">
                       <select
                         name="service"
                         id="service"
                         required
                         value={formState.service}
                         onChange={(e) => setFormState({...formState, service: e.target.value})}
                         className="peer glass-input w-full px-4 py-4 rounded-xl border-none focus:ring-0 text-white appearance-none"
                       >
                         <option value="" className="bg-rolex-black text-gray-400">Select a service...</option>
                         {SERVICES.map((service) => (
                           <option key={service.id} value={service.title[language]} className="bg-rolex-black">
                             {service.title[language]}
                           </option>
                         ))}
                         <option value="Other" className="bg-rolex-black">Other</option>
                       </select>
                       <label 
                        htmlFor="service"
                        className="absolute left-4 -top-2 text-xs text-rolex-red"
                      >
                        {t.serviceLabel}
                      </label>
                    </div>

                    <div className="relative">
                      <textarea
                        name="details"
                        id="details"
                        rows={3}
                        value={formState.projectDetails}
                        onChange={(e) => setFormState({...formState, projectDetails: e.target.value})}
                        className="peer glass-input w-full px-4 py-4 rounded-xl border-none focus:ring-0 placeholder-transparent resize-none"
                        placeholder={t.detailsLabel}
                      />
                      <label 
                        htmlFor="details"
                        className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-rolex-red peer-valid:-top-2 peer-valid:text-xs peer-valid:text-rolex-red"
                      >
                        {t.detailsLabel}
                      </label>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-rolex-red via-[#ff6b6b] to-rolex-red bg-[length:200%_100%] transition-all duration-500 hover:bg-[100%_0] shadow-lg hover:shadow-[0_0_30px_rgba(227,58,58,0.6)]"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>{t.submit} <Send size={18} /></>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col justify-center items-center text-center py-12 relative overflow-hidden"
                >
                  {/* Confetti Animation - Top Right Corner */}
                  {confettiData && (
                    <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 pointer-events-none -mt-4 -mr-4">
                       <Lottie animationData={confettiData} loop={false} />
                    </div>
                  )}

                  <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-green-500 w-12 h-12" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">{t.successTitle}</h3>
                  <p className="text-gray-300 mb-8 max-w-sm">
                    {t.successMessage}
                  </p>

                  <a 
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-white px-8 py-4 rounded-xl font-bold transition-all duration-500 bg-gradient-to-r from-[#25D366] via-[#4ce485] to-[#25D366] bg-[length:200%_100%] hover:bg-[100%_0] shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                  >
                    <MessageSquare size={20} /> {t.successChat}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Info Side */}
          <div className="lg:w-2/5 bg-rolex-navy/50 p-10 md:p-14 border-l border-white/5 flex flex-col justify-between">
             <div>
                <h4 className="text-white font-bold text-xl mb-6">{t.contactInfo}</h4>
                <ul className="space-y-6 text-gray-300">
                    <li className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-rolex-red/20 transition-colors">
                            <Mail className="text-rolex-red" size={20} />
                        </div>
                        <span className="text-sm md:text-base">rolexads@gmail.com</span>
                    </li>
                    <li className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-rolex-red/20 transition-colors">
                            <Phone className="text-rolex-red" size={20} />
                        </div>
                        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="text-sm md:text-base hover:text-white transition-colors">9392556976</a>
                    </li>
                    <li className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-rolex-red/20 transition-colors">
                            <MapPin className="text-rolex-red" size={20} />
                        </div>
                        <span className="text-sm md:text-base leading-snug">725M+82F TP Nagar, Singarayakonda, Andhra Pradesh 523101</span>
                    </li>
                </ul>
             </div>

             <div className="mt-12 lg:mt-0">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-rolex-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="text-white italic text-sm relative z-10">"{t.quoteText}"</p>
                    <div className="mt-4 flex items-center gap-3 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden">
                             <img src="https://picsum.photos/seed/tech/100/100" alt="Client" className="w-full h-full object-cover" />
                        </div>
                        <span className="text-xs text-gray-400">VP of Marketing, TechCorp</span>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;