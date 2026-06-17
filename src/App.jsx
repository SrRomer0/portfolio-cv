import Header from './components/Header';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import CtaSection from './components/CtaSection';

function App() {

  return (
    <div className="min-h-screen bg-dark-bg text-gray-200 selection:bg-brand-500/30 selection:text-brand-200">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-brand-900/20 rounded-full blur-[120px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-accent-900/20 rounded-full blur-[150px] translate-y-1/3"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <Header />

        <main className="pb-32 space-y-32 mt-12">
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <CtaSection />
        </main>
        
        <footer className="py-8 border-t border-white/10 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Diego Romero. Todos los derechos reservados.</p>
          <p>Construido con React, Tailwind CSS y Framer Motion.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
