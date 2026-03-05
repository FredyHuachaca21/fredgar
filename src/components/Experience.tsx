import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experience } from "../data/portfolio";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-mono mb-2 tracking-widest uppercase">03. Trayectoria</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experiencia profesional</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block timeline-line" />

          <div className="space-y-12">
            {experience.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass-card rounded-2xl p-6 group relative overflow-hidden">
                      {/* Accent top border */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

                      {/* Current badge */}
                      {exp.current && (
                        <span className={`inline-flex items-center gap-1.5 text-xs font-medium text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-2.5 py-0.5 mb-3 ${isLeft ? "md:ml-auto md:block md:w-fit" : ""}`}>
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                          Actual
                        </span>
                      )}

                      {/* Company & Role */}
                      <div className={`flex items-start gap-3 mb-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-4 h-4 text-indigo-400" />
                        </div>
                        <div className={isLeft ? "md:text-right" : ""}>
                          <h3 className="text-base font-bold text-white">{exp.company}</h3>
                          <p className="text-sm text-indigo-300">{exp.role}</p>
                          {exp.client && (
                            <p className="text-xs text-gray-500">Cliente: {exp.client}</p>
                          )}
                        </div>
                      </div>

                      {/* Meta */}
                      <div className={`flex flex-wrap gap-3 text-xs text-gray-500 mb-4 ${isLeft ? "md:justify-end" : ""}`}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Bullets */}
                      <ul className={`space-y-2 mb-4 ${isLeft ? "md:text-right" : ""}`}>
                        {exp.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className={`flex gap-2 text-sm text-gray-400 ${isLeft ? "md:flex-row-reverse" : ""}`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500/60 flex-shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className={`flex flex-wrap gap-1.5 ${isLeft ? "md:justify-end" : ""}`}>
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
                      className="w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#070b14] shadow-lg shadow-indigo-500/50"
                    />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
