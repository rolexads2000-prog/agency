import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText } from 'lucide-react';

export type PolicyType = 'privacy' | 'terms' | null;

interface PolicyModalProps {
  isOpen: PolicyType;
  onClose: () => void;
}

const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose }) => {
  const isPrivacy = isOpen === 'privacy';
  const title = isPrivacy ? "Privacy Policy" : "Terms of Service";
  const Icon = isPrivacy ? Shield : FileText;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-[#0B0B0B] w-full max-w-3xl max-h-[80vh] rounded-3xl border border-white/10 shadow-2xl relative flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            >
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-rolex-red/10 rounded-lg text-rolex-red">
                        <Icon size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                </div>
                <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                    <X size={24} />
                </button>
            </div>
            
            <div className="p-8 overflow-y-auto custom-scrollbar text-gray-300 space-y-6 leading-relaxed text-sm md:text-base">
                {isPrivacy ? (
                    <>
                        <p className="text-gray-500">Last Updated: October 2024</p>
                        <p>At Rolex Ads, we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.</p>
                        
                        <h3 className="text-lg font-bold text-white mt-4 border-l-4 border-rolex-red pl-3">1. Information We Collect</h3>
                        <p>We may collect personal information such as your name, phone number, and email address when you voluntarily fill out forms on our website (e.g., "Get Quote" or "Contact Us"). We do not collect sensitive personal data without your consent.</p>

                        <h3 className="text-lg font-bold text-white mt-4 border-l-4 border-rolex-red pl-3">2. How We Use Your Information</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>To provide, operate, and maintain our services.</li>
                            <li>To improve, personalize, and expand our website.</li>
                            <li>To communicate with you regarding your inquiries, projects, or promotional offers.</li>
                            <li>To find and prevent fraud.</li>
                        </ul>

                        <h3 className="text-lg font-bold text-white mt-4 border-l-4 border-rolex-red pl-3">3. Data Security</h3>
                        <p>We implement appropriate security measures to protect your personal data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

                        <h3 className="text-lg font-bold text-white mt-4 border-l-4 border-rolex-red pl-3">4. Cookies</h3>
                        <p>Our website may use cookies to enhance user experience. You can choose to disable cookies through your individual browser options.</p>

                        <h3 className="text-lg font-bold text-white mt-4 border-l-4 border-rolex-red pl-3">5. Contact Us</h3>
                        <p>If you have any questions about this Privacy Policy, please contact us at <span className="text-white">rolexads2000@gmail.com</span> or via WhatsApp at <span className="text-white">9392556976</span>.</p>
                    </>
                ) : (
                    <>
                        <p className="text-gray-500">Last Updated: October 2024</p>
                        <p>Welcome to Rolex Ads. By accessing our website and using our services, you agree to comply with and be bound by the following Terms of Service.</p>

                        <h3 className="text-lg font-bold text-white mt-4 border-l-4 border-rolex-red pl-3">1. Services</h3>
                        <p>Rolex Ads provides digital marketing, graphic design, web development, video editing, and flex printing services. All services are subject to availability and acceptance of your order. We reserve the right to refuse service to anyone for any reason at any time.</p>

                        <h3 className="text-lg font-bold text-white mt-4 border-l-4 border-rolex-red pl-3">2. Intellectual Property</h3>
                        <p>Unless otherwise agreed in writing, Rolex Ads retains ownership of all underlying design files and source code until full payment is received. Upon full payment, usage rights are transferred to the client as per the specific project agreement.</p>

                        <h3 className="text-lg font-bold text-white mt-4 border-l-4 border-rolex-red pl-3">3. Revisions & Approvals</h3>
                        <p>We provide a set number of revisions as per your selected package. Any additional revisions beyond the agreed scope may incur extra charges. Once a design is approved by the client, any further changes will be billed separately.</p>

                        <h3 className="text-lg font-bold text-white mt-4 border-l-4 border-rolex-red pl-3">4. Payments & Refunds</h3>
                        <p>Payments for services are due as per the agreed schedule. We generally require an advance payment to commence work. Refunds are handled on a case-by-case basis depending on the amount of work completed. No refunds are issued for completed projects.</p>

                        <h3 className="text-lg font-bold text-white mt-4 border-l-4 border-rolex-red pl-3">5. Limitation of Liability</h3>
                        <p>Rolex Ads shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.</p>
                    </>
                )}
            </div>
            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PolicyModal;