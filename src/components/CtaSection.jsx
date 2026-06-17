import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function CtaSection() {
  return (
    <section className="mt-24 mb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-accent-600/20 rounded-3xl blur-xl"></div>
      <div className="relative glass-card p-10 md:p-16 rounded-3xl border border-brand-500/30 text-center flex flex-col items-center shadow-[0_0_40px_rgba(139,92,246,0.15)]">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          ¿Buscando un desarrollador Backend que entienda de arquitectura?
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl">
          Cuento con la base teórica (Técnico Superior DAW), experiencia práctica (Microservicios, React Native) y verdadera pasión por el código limpio. Si tu equipo valora el rendimiento y las buenas prácticas, hagamos <i>match</i>.
        </p>
        <motion.a
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          href={`mailto:${personalInfo.email}`}
          className="flex items-center gap-3 px-8 py-4 rounded-full bg-brand-600 text-white font-bold text-lg transition-all shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)]"
        >
          <Mail size={24} />
          <span>Contactar ahora</span>
        </motion.a>
      </div>
    </section>
  );
}
