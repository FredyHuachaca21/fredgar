import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { experience } from "../data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] accent-line" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[var(--accent)] text-xs font-mono mb-3 tracking-[0.3em] uppercase">03 / Trayectoria</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)]">Experiencia profesional</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
                  className="absolute left-[17px] md:left-[25px] top-7 z-10"
                >
                  <div className="w-4 h-4 rounded-full bg-[var(--accent)] border-[3px] border-[var(--bg-deep)] shadow-[0_0_12px_var(--accent-glow)]" />
                </motion.div>

                {/* Card */}
                <div className="forge-card rounded-xl p-6 relative overflow-hidden">
                  {/* Top accent */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

                  {/* Company & Role */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/[0.08] border border-[var(--accent)]/15 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-4 h-4 text-[var(--accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-base font-bold text-[var(--text-primary)]">{exp.company}</h3>
                      <p className="text-sm text-[var(--accent)] font-medium">{exp.role}</p>
                      {exp.client && (
                        <p className="text-xs text-[var(--text-muted)] mt-0.5 font-mono">Cliente: {exp.client}</p>
                      )}
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)] mb-5">
                    <span className="flex items-center gap-1.5 font-mono">
                      <Calendar className="w-3 h-3 text-[var(--accent)]/40" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[var(--accent)]/40" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                        <ChevronRight className="w-3.5 h-3.5 text-[var(--accent)]/50 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-[var(--accent)]/[0.06] text-[var(--accent)] border border-[var(--accent)]/15 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
