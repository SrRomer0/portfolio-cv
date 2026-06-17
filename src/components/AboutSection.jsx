import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-6 text-gray-300 leading-relaxed text-lg">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-brand-400">#</span> Mi Historia
            </h2>
            <p>
              Mi camino hacia la ingeniería de software no fue el convencional. Durante 5 años trabajé como repartidor en Madrid, lidiando con tráfico en horas pico, trabajo físico exigente y altos niveles de estrés. Esa etapa me forjó una <strong>resiliencia y ética de trabajo inquebrantables</strong>.
            </p>
            <p>
              Cuando la empresa cerró, decidí apostar por lo que realmente me apasionaba desde mi bachillerato tecnológico: <strong>crear soluciones a través del código</strong>. Volver a estudiar el ciclo superior de DAW después de 6 años, mientras trabajaba simultáneamente en ETTs para costearme la vida, fue un reto colosal.
            </p>
            <p>
              Ese esfuerzo dio sus frutos: obtuve una <strong>Matrícula de Honor en Programación</strong> en mi primer año y me gradué con un rotundo <strong>10 (Sobresaliente) en mi TFG</strong> creando una plataforma de microservicios. Hoy, sé que ningún problema es demasiado grande y mi pasión por el código limpio y la arquitectura escalable es el motor de mi carrera profesional.
            </p>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="bg-[#1a1d24] p-6 rounded-2xl border border-white/5 shadow-inner">
              <div className="text-4xl font-bold text-brand-400 mb-2">10</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Nota Proyecto Final (TFG)</div>
            </div>
            <div className="bg-[#1a1d24] p-6 rounded-2xl border border-white/5 shadow-inner">
              <div className="text-xl font-bold text-accent-400 mb-2">M.H.</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Matrícula Honor Programación</div>
            </div>
            <div className="bg-[#1a1d24] p-6 rounded-2xl border border-white/5 shadow-inner">
              <div className="text-xl font-bold text-brand-300 mb-2">100%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Resiliencia y Compromiso</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
