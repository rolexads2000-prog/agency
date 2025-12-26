import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { TRANSLATIONS, WHATSAPP_NUMBER } from '../constants';
import { useLanguage } from './LanguageContext';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].footer;

  return (
    <footer className="relative bg-white border-t border-gray-200 pt-20 pb-10 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-rolex-red/30 to-transparent opacity-50" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rolex-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info - Aligned with Navbar Logo */}
          <div className="space-y-6">
            <a href="#" className="block">
                <img src="/assets/rolexadslogo.webp" alt="Rolex Ads" className="h-10 md:h-12 w-auto object-contain" loading="lazy" width="200" height="50" />
            </a>
            <p className="text-gray-600 text-sm font-medium leading-relaxed max-w-xs uppercase tracking-wide">
                {t.tagline}
            </p>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
              <h4 className="text-gray-900 font-bold text-lg">Services</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                  <li><a href="#graphic-designing" className="hover:text-rolex-red transition-colors block w-fit">Graphic Designing</a></li>
                  <li><a href="#digital-marketing" className="hover:text-rolex-red transition-colors block w-fit">Digital Marketing</a></li>
                  <li><a href="#web-designing" className="hover:text-rolex-red transition-colors block w-fit">Web Development</a></li>
                  <li><a href="#video-editing" className="hover:text-rolex-red transition-colors block w-fit">Video Editing</a></li>
                  <li><a href="#flex-flyers" className="hover:text-rolex-red transition-colors block w-fit">Flex Printing</a></li>
              </ul>
          </div>

          {/* Company Links */}
           <div className="space-y-6">
              <h4 className="text-gray-900 font-bold text-lg">Company</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                  <li><a href="#portfolio" className="hover:text-rolex-red transition-colors block w-fit">Portfolio</a></li>
                  <li><a href="#why-us" className="hover:text-rolex-red transition-colors block w-fit">Why Us</a></li>
                  <li><a href="#testimonials" className="hover:text-rolex-red transition-colors block w-fit">Reviews</a></li>
                  <li><a href="#blog" className="hover:text-rolex-red transition-colors block w-fit">Blog</a></li>
                  <li><a href="#faq" className="hover:text-rolex-red transition-colors block w-fit">FAQ</a></li>
              </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-gray-900 font-bold text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-rolex-red mt-[-2px] group-hover:bg-rolex-red/10 transition-colors">
                        <MapPin size={16} />
                    </div>
                    <span className="leading-relaxed group-hover:text-gray-900 transition-colors">725M+82F, TP Nagar,<br/>Singarayakonda, AP 523101</span>
                </li>
                <li className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-rolex-red group-hover:bg-rolex-red/10 transition-colors">
                        <Phone size={16} />
                    </div>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors">9392556976</a>
                </li>
                <li className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-rolex-red group-hover:bg-rolex-red/10 transition-colors">
                        <Mail size={16} />
                    </div>
                    <a href="mailto:rolexads2000@gmail.com" className="hover:text-gray-900 transition-colors">rolexads2000@gmail.com</a>
                </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-xs text-gray-600 gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
                <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Rolex Ads. {t.rights}</p>
                <p className="text-center md:text-left text-gray-500">
                    Website made by <a href="https://mediamanager4u.com" target="_blank" rel="noopener noreferrer" className="hover:text-rolex-red transition-colors">mediamanager4u.com</a>
                </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6">
                <button onClick={onOpenPrivacy} className="hover:text-rolex-red transition-colors">{t.privacy}</button>
                <button onClick={onOpenTerms} className="hover:text-rolex-red transition-colors">{t.terms}</button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;