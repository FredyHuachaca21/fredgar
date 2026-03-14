import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { education, certifications } from "../data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  BookOpen,
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] accent-line" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[var(--accent)] text-xs font-mono mb-3 tracking-[0.3em] uppercase">04 / Formacion</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)]">Educacion & Certificaciones</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-mono text-[var(--accent)] uppercase tracking-[0.25em] mb-6 flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              Educacion
            </motion.h3>

            <div className="space-y-4">
              {education.map((edu, i) => {
                const Icon = iconMap[edu.icon] ?? GraduationCap;
                return (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="forge-card rounded-xl p-5 flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/[0.08] border border-[var(--accent)]/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[var(--accent)]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-[var(--text-primary)]">{edu.degree}</h4>
                      <p className="text-xs text-[var(--text-secondary)] mt-1">{edu.institution}</p>
                      <p className="text-xs text-[var(--accent)]/50 mt-1.5 font-mono tracking-wider">{edu.period}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs font-mono text-[var(--accent-gold)] uppercase tracking-[0.25em] mb-6 flex items-center gap-2"
            >
              <Award className="w-4 h-4" />
              Certificaciones
            </motion.h3>

            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                  className="forge-card rounded-xl p-4 flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--accent-gold)]/[0.06] border border-[var(--accent-gold)]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent-gold)]/[0.12] transition-colors">
                    <Award className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-display font-medium text-[var(--text-primary)] truncate">{cert.name}</h4>
                    <p className="text-xs text-[var(--text-muted)]">{cert.institution}</p>
                  </div>
                  <span className="text-xs text-[var(--accent-gold)]/50 font-mono whitespace-nowrap flex-shrink-0 tracking-wider">
                    {cert.date}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
