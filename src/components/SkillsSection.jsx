import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { skills } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center gap-3 mb-10"
      >
        <Terminal className="text-brand-400" size={28} />
        <h2 className="text-3xl md:text-4xl font-bold text-white">Stack Tecnológico</h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6 rounded-2xl border-white/5 hover:border-brand-500/30 transition-colors"
          >
            <h3 className="text-lg font-semibold text-white mb-4">{skillGroup.name}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 font-medium hover:bg-white/10 transition-colors">
                  <item.icon className="text-brand-400" size={16} />
                  {item.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
