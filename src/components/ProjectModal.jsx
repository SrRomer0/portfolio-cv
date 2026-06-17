import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import * as Icons from 'lucide-react';
import MockupFrame from './MockupFrame';

/**
 * @typedef {import('./ProjectCard').Project} Project
 */

/**
 * @param {{ project: Project, onClose: () => void }} props
 */
export default function ProjectModal({ project, onClose }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return null;
  const isMobile = project.type === 'Mobile-App';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <motion.div
        layoutId={`project-card-${project.id}`}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl shadow-2xl z-10 flex flex-col bg-[#1a1d24]"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          aria-label="Cerrar modal del proyecto"
          className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-brand-500 hover:text-white transition-colors z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <X size={20} />
        </motion.button>

        <motion.div
          layoutId={`project-image-${project.id}`}
          className={`w-full relative shrink-0 flex items-center justify-center bg-mockup-bg overflow-hidden ${
            isMobile ? 'h-[500px] pt-8 pb-4' : 'pt-10 pb-12'
          }`}
        >
          {project.youtubeVideoId ? (
            <MockupFrame type={project.type} title={project.id}>
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeVideoId}&controls=0&showinfo=0&rel=0`}
                className={isMobile ? "w-full h-full object-cover object-top" : "w-full aspect-video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </MockupFrame>
          ) : project.video ? (
            <MockupFrame type={project.type} title={project.id}>
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className={isMobile ? "w-full h-full object-cover object-top" : "w-full h-auto block"}
              />
            </MockupFrame>
          ) : project.image ? (
            <MockupFrame type={project.type} title={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className={isMobile ? "w-full h-full object-cover object-top" : "w-full h-auto block"}
              />
            </MockupFrame>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-brand-900 to-dark-bg flex items-center justify-center">
              <span className="text-brand-500 opacity-30 text-6xl font-bold">{project.title}</span>
            </div>
          )}
        </motion.div>

        <div className="p-6 md:p-10 -mt-8 md:-mt-12 relative z-10 flex-1">
          <motion.div layoutId={`project-type-${project.id}`} className="inline-block px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 font-semibold text-sm mb-4 border border-brand-500/30 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            {project.type}
          </motion.div>

          <motion.h2 layoutId={`project-title-${project.id}`} className="text-3xl md:text-5xl font-bold text-white mb-6">
            {project.title}
          </motion.h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.tech.map((t, i) => {
              const IconComponent = Icons[t.icon] || Icons.Code;
              return (
                <span key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-gray-200">
                  <IconComponent size={16} className="text-brand-400" />
                  {t.name}
                </span>
              );
            })}
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Icons.FileText className="text-accent-400" size={20} />
              Sobre el Proyecto
            </h3>
            <div className="text-gray-300 leading-relaxed text-lg mb-10 space-y-5">
              {project.fullDescription.split('\n\n').map((paragraph, i) => {
                if (paragraph.trim().startsWith('▸')) {
                  const textContent = paragraph.substring(1).trim();
                  const colonIndex = textContent.indexOf(':');
                  if (colonIndex > -1) {
                    const title = textContent.substring(0, colonIndex);
                    const desc = textContent.substring(colonIndex + 1);
                    return (
                      <div key={i} className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-6 rounded-2xl flex gap-4 hover:border-brand-500/30 transition-colors shadow-lg">
                        <div className="mt-1.5 shrink-0">
                          <div className="w-2.5 h-2.5 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                        </div>
                        <div>
                          <strong className="text-white block mb-2 text-lg">{title.trim()}</strong>
                          <span className="text-gray-400 text-base leading-relaxed">{desc.trim()}</span>
                        </div>
                      </div>
                    );
                  }
                }
                return <p key={i} className="text-lg">{paragraph}</p>;
              })}
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Icons.Image className="text-accent-400" size={20} />
                  Galería
                </h3>
                <div className={`grid gap-6 mb-8 ${isMobile
                    ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
                    : 'grid-cols-1 md:grid-cols-2'
                  }`}>
                  {project.gallery.map((img, i) => (
                    <div
                      key={i}
                      role="button"
                      tabIndex={0}
                      aria-label={`Ver imagen ${i + 1} de la galería`}
                      onClick={() => setSelectedImage(img)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedImage(img);
                        }
                      }}
                      className={`group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-[28px] ${isMobile ? 'h-[400px]' : 'aspect-video'}`}
                    >
                      <MockupFrame type={project.type} title={`${project.id}-${i}`}>
                        <img
                          src={img}
                          alt={`Gallery ${i}`}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </MockupFrame>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="flex gap-4 mt-8 pt-8 border-t border-white/10">
            <motion.a
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-all border border-white/10 hover:border-brand-500/50"
            >
              <FaGithub size={20} />
              <span>Ver Código Fuente</span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar visor de imagen"
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-brand-500 transition-colors z-[110] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <X size={24} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}