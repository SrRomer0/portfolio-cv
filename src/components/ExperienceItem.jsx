import { motion } from 'framer-motion';

/**
 * @typedef {Object} Experience
 * @property {string} id
 * @property {string} role
 * @property {string} company
 * @property {string} period
 * @property {string} description
 * @property {string[]} achievements
 * @property {string[]} tech
 */

/**
 * @param {{ item: Experience, index: number }} props
 */
export default function ExperienceItem({ item, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="flex flex-col md:flex-row md:gap-10 relative">
        
        <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-white/10 ml-3"></div>
        
        <div className="md:hidden absolute left-3 top-[18px] w-6 h-6 rounded-full glass border-brand-500/50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(139,92,246,0.3)] bg-[#1a1d24]">
          <div className="w-2 h-2 rounded-full bg-brand-400"></div>
        </div>

        <div className="md:hidden mb-4 ml-10 pt-2 relative">
          <span className="text-sm font-semibold text-brand-400 tracking-wider uppercase block">{item.period}</span>
        </div>

        <div className="hidden md:block w-48 shrink-0 pt-9 text-right relative">
          <span className="text-sm font-semibold text-brand-400 tracking-wider uppercase pr-8 block">{item.period}</span>
          
          <div className="absolute right-0 top-0 bottom-0 w-px bg-white/10"></div>
          
          <div className="absolute right-0 top-[46px] w-6 h-6 rounded-full glass border-brand-500/50 flex items-center justify-center translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(139,92,246,0.3)] z-10 bg-[#1a1d24]">
            <div className="w-2 h-2 rounded-full bg-brand-400"></div>
          </div>
        </div>

        <div className="flex-1 glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-brand-500/30 transition-all duration-300 group ml-10 md:ml-0 hover:-translate-y-1 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-300 transition-colors">{item.role}</h3>
          <h4 className="text-lg text-gray-400 font-medium mb-4">{item.company}</h4>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            {item.description}
          </p>

          <ul className="space-y-3">
            {item.achievements.map((achievement, i) => (
              <li key={i} className="flex gap-3 text-gray-400">
                <span className="text-accent-500 shrink-0 mt-1">▹</span>
                <span className="leading-relaxed text-sm md:text-base">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
