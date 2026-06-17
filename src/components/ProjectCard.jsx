import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import MockupFrame from './MockupFrame';

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} type
 * @property {string} image
 * @property {string} [video]
 * @property {string} description
 * @property {string[]} tags
 * @property {string[]} gallery
 * @property {string} githubUrl
 * @property {string} [demoUrl]
 */

/**
 * @param {{ project: Project, onClick: () => void }} props
 */
export default function ProjectCard({ project, onClick }) {
  const isMobile = project.type === 'Mobile-App';

  const renderMockup = () => {
    if (!project.image) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-brand-900 to-dark-bg flex items-center justify-center">
          <span className="text-brand-500 opacity-50 text-4xl font-bold">{project.title.substring(0, 2)}</span>
        </div>
      );
    }

    return (
      <MockupFrame type={project.type} title={project.id}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top block m-0 border-none" />
      </MockupFrame>
    );
  };

  return (
    <motion.div
      layoutId={`project-card-${project.id}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles del proyecto ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      className="glass-card rounded-2xl overflow-hidden cursor-pointer group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
    >
      <motion.div
        layoutId={`project-image-${project.id}`}
        className={`w-full overflow-hidden relative flex items-center justify-center bg-[#13151a] border-b border-white/5 ${isMobile ? 'h-80 md:h-96 pt-4' : 'h-60 md:h-72'
          }`}
      >
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="w-[400px] h-[400px] bg-brand-600 rounded-full opacity-[0.15] blur-[80px] group-hover:opacity-30 group-hover:bg-brand-500 transition-all duration-700"></div>
        </div>
        
        {renderMockup()}
      </motion.div>

      <div className="p-6 flex-1 flex flex-col">
        <motion.div layoutId={`project-type-${project.id}`} className="text-accent-400 text-sm font-semibold mb-2">
          {project.type}
        </motion.div>

        <motion.h3 layoutId={`project-title-${project.id}`} className="text-2xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-brand-400" size={20} />
        </motion.h3>

        <motion.p layoutId={`project-desc-${project.id}`} className="text-gray-400 line-clamp-3 mb-6 flex-1">
          {project.shortDescription}
        </motion.p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.slice(0, 3).map((t, i) => {
            const IconComponent = Icons[t.icon] || Icons.Code;
            return (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">
                <IconComponent size={12} className="text-brand-400" />
                {t.name}
              </span>
            );
          })}
          {project.tech.length > 3 && (
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-400 flex items-center">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}