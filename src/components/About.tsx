import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Coffee, User } from "lucide-react";
import { personal } from "../data/portfolio";

const stats = [
  { value: "5+", label: "Anos de experiencia" },
  { value: "30M+", label: "Registros migrados" },
  { value: "60%", label: "Mejora en performance" },
  { value: "35%", label: "Reduccion de defectos" },
];

const traits = [
  { icon: Zap, label: "Alta Performance", desc: "Optimizacion de sistemas criticos en produccion" },
  { icon: Target, label: "Orientado a resultados", desc: "Metricas concretas y mejoras medibles" },
  { icon: Coffee, label: "Clean Code", desc: "SOLID, DRY y practicas de codigo limpio" },
  { icon: User, label: "Liderazgo tecnico", desc: "Migracion y modernizacion de plataformas" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6 relative" ref={ref}>
      {/* Accent line separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] accent-line" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[var(--accent)] text-xs font-mono mb-3 tracking-[0.3em] uppercase">01 / Sobre mi</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
            Quien soy
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start mb-20">
          {/* Summary — wider */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-3"
          >
            <div className="forge-card rounded-xl p-8">
              <p className="text-[var(--text-secondary)] leading-[1.8] text-[15px]">
                {personal.summary}
              </p>
              <div className="mt-8 pt-6 border-t border-white/[0.04] flex items-center gap-3">
                <div className="w-2 h-2 bg-[var(--accent)] rounded-full" style={{ animation: 'pulse-warm 2s ease-in-out infinite' }} />
                <span className="text-sm text-[var(--text-muted)]">
                  Abierto a <span className="text-[var(--accent)] font-medium">nuevas oportunidades</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Traits — narrower */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 grid grid-cols-1 gap-3"
          >
            {traits.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="forge-card rounded-xl p-4 flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/[0.08] border border-[var(--accent)]/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="text-sm font-display font-semibold text-[var(--text-primary)] mb-0.5">{label}</h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{desc}</p>
                </div>
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
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              className="forge-card rounded-xl p-6 text-center group"
            >
              <div className="font-display text-3xl md:text-4xl font-extrabold text-gradient-forge mb-2">{value}</div>
              <div className="text-xs text-[var(--text-muted)] font-mono tracking-wider uppercase">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
