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
    <section id="education" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-mono mb-2 tracking-widest uppercase">04. Formación</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Educación & Certificaciones</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-6 flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              Educación
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
                    className="glass-card rounded-2xl p-5 flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{edu.degree}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">{edu.institution}</p>
                      <p className="text-xs text-indigo-400/60 mt-1 font-mono">{edu.period}</p>
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
              className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-6 flex items-center gap-2"
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
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-3.5 h-3.5 text-violet-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-white truncate">{cert.name}</h4>
                    <p className="text-xs text-gray-500">{cert.institution}</p>
                  </div>
                  <span className="text-xs text-indigo-400/60 font-mono whitespace-nowrap flex-shrink-0">
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
