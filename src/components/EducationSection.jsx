import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center gap-3 mb-10"
      >
        <GraduationCap className="text-brand-400" size={28} />
        <h2 className="text-3xl md:text-4xl font-bold text-white">Formación Académica</h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6 md:p-8 rounded-2xl border-white/5 hover:border-brand-500/30 transition-colors flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-gray-400">
              <span className="font-medium text-brand-300">{item.institution}</span>
              <span className="text-sm font-semibold tracking-wider text-accent-400">{item.period}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
