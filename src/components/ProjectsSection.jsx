import { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';
import { useScrollLock } from '../hooks/useScrollLock';

const ProjectModal = lazy(() => import('./ProjectModal'));

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Custom hook abstractions for clean, declarative side effects
  useScrollLock(!!selectedProject);
  return (
    <section>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center gap-3 mb-10"
      >
        <Code2 className="text-brand-400" size={28} />
        <h2 className="text-3xl md:text-4xl font-bold text-white">Proyectos Destacados</h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={() => setSelectedProject(project)} 
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <Suspense fallback={null}>
            <ProjectModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          </Suspense>
        )}
      </AnimatePresence>
    </section>
  );
}
