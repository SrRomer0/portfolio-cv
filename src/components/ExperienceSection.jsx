import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import ExperienceItem from './ExperienceItem';
import { experience } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center gap-3 mb-16"
      >
        <Briefcase className="text-accent-400" size={28} />
        <h2 className="text-3xl md:text-4xl font-bold text-white">Experiencia</h2>
      </motion.div>
      
      <div className="space-y-16">
        {experience.map((item, index) => (
          <ExperienceItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
