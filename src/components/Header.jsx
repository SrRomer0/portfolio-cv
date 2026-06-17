import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

export default function Header() {
  return (
    <header className="py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 text-brand-400 font-medium text-sm mb-6 border border-brand-500/30"
        >
          {personalInfo.role}
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Hola, soy <span className="text-brand-400">{personalInfo.name}</span>
        </h1>
        
        <p className="text-xl text-gray-400 leading-relaxed mb-8">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-wrap gap-4">
          <motion.a 
            whileTap={{ scale: 0.95 }}
            href={personalInfo.pdfCvPath} 
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
          >
            <Download size={20} />
            <span>Descargar CV en PDF</span>
          </motion.a>
          
          <div className="flex items-center gap-3 ml-0 md:ml-4">
            <SocialLink href={personalInfo.github} icon={<FaGithub size={22} />} />
            <SocialLink href={personalInfo.linkedin} icon={<FaLinkedin size={22} />} />
            <SocialLink href={`mailto:${personalInfo.email}`} icon={<Mail size={22} />} />
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="hidden lg:block relative"
      >
        <div className="w-72 h-72 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-accent-500 rounded-full blur-[60px] opacity-30"></div>
          <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-2xl bg-[#1a1d24]">
            <img src="/images/Foto_CV.webp" alt={personalInfo.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.div>
    </header>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full glass hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:scale-110 active:scale-95"
    >
      {icon}
    </a>
  );
}
