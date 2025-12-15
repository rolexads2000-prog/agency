import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, X, Clock, FileText, ChevronRight } from 'lucide-react';
import { BLOG_POSTS, TRANSLATIONS, WHATSAPP_NUMBER } from '../constants';
import { useLanguage } from './LanguageContext';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].blog;
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 relative bg-rolex-navy/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
                {t.title}
            </motion.h2>
            <div className="h-1 w-20 bg-rolex-red rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="glass-card rounded-2xl overflow-hidden group hover:border-rolex-red/30 transition-all cursor-pointer flex flex-col h-full bg-gradient-to-b from-white/5 to-transparent border border-white/5"
              onClick={() => setSelectedPost(post)}
            >
              {/* Decorative Header Gradient instead of Image */}
              <div className="h-2 w-full bg-gradient-to-r from-rolex-red via-[#ff6b6b] to-rolex-navy/50 opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="p-8 flex flex-col flex-1 relative">
                 <div className="absolute top-8 right-8 text-white/10 group-hover:text-rolex-red/10 transition-colors">
                     <FileText size={48} />
                 </div>

                 <div className="flex items-center gap-3 mb-6">
                    <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-gray-400 flex items-center gap-1.5">
                        <Calendar size={12} className="text-rolex-red" /> {post.date}
                    </span>
                 </div>

                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-rolex-red transition-colors">
                  {post.title[language]}
                </h3>
                
                <p className="text-gray-400 text-sm mb-8 line-clamp-3 flex-1 leading-relaxed">
                  {post.excerpt[language]}
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-sm font-bold text-white group-hover:text-rolex-red transition-colors flex items-center gap-2">
                        {t.readMore}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-rolex-red group-hover:text-white transition-all">
                        <ChevronRight size={14} />
                    </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Blog Reading Modal */}
      <AnimatePresence>
        {selectedPost && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
                onClick={() => setSelectedPost(null)}
            >
                <motion.div
                    layoutId={selectedPost.id}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className="bg-[#0B0B0B] w-full max-w-3xl max-h-[90vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button 
                        onClick={() => setSelectedPost(null)}
                        className="absolute top-4 right-4 z-20 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/10 transition-colors border border-white/10"
                    >
                        <X size={24} />
                    </button>

                    {/* Header - Text Only now */}
                    <div className="p-8 md:p-12 bg-gradient-to-br from-[#1a2332] to-[#0B0B0B] border-b border-white/10 relative">
                            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                            <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                <Calendar size={14} className="text-rolex-red" /> {selectedPost.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock size={14} /> 3 min read
                            </span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight max-w-2xl">
                            {selectedPost.title[language]}
                        </h2>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12">
                        <div 
                            className="prose prose-invert prose-lg max-w-none text-gray-300 first-letter:text-5xl first-letter:font-bold first-letter:text-rolex-red first-letter:mr-3 first-letter:float-left"
                            dangerouslySetInnerHTML={{ __html: selectedPost.content[language] }}
                        />
                        
                        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center text-center">
                            <p className="text-white font-bold mb-4">Want to implement this for your business?</p>
                             <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Rolex%20Ads,%20I%20read%20your%20blog%20post%20"${encodeURIComponent(selectedPost.title['en'])}"%20and%20I%20am%20interested%20in%20implementing%20this.`}
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => setSelectedPost(null)}
                                className="px-8 py-3 rounded-full text-white font-bold bg-gradient-to-r from-rolex-red via-[#ff6b6b] to-rolex-red bg-[length:200%_100%] hover:bg-[100%_0] transition-all shadow-lg"
                              >
                                Get a Free Consultation
                              </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;