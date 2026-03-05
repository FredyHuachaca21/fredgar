import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Zap, Target, Coffee } from "lucide-react";
import { personal } from "../data/portfolio";

const stats = [
  { value: "5+", label: "Años de experiencia" },
  { value: "30M+", label: "Registros migrados" },
  { value: "60%", label: "Mejora en performance" },
  { value: "35%", label: "Reducción de defectos" },
];

const traits = [
  { icon: Zap, label: "Alta Performance", desc: "Optimización de sistemas críticos en producción" },
  { icon: Target, label: "Orientado a resultados", desc: "Métricas concretas y mejoras medibles" },
  { icon: Coffee, label: "Clean Code", desc: "SOLID, DRY y prácticas de código limpio" },
  { icon: User, label: "Liderazgo técnico", desc: "Migración y modernización de plataformas" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-mono mb-2 tracking-widest uppercase">01. Sobre mí</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Quién soy
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed text-base">
                {personal.summary}
              </p>
              <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-400">
                  Actualmente en <span className="text-white font-medium">Tata Consultancy Services</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Traits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {traits.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card rounded-xl p-4"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-indigo-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{label}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-gradient mb-1">{value}</div>
              <div className="text-xs text-gray-500">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
