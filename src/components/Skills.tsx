import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2, Layers, Network, ShieldCheck, Database, Cloud, Wrench, Activity, Zap,
} from "lucide-react";
import { skills } from "../data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Code2, Layers, Network, ShieldCheck, Database, Cloud, Wrench, Activity, Zap,
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-mono mb-2 tracking-widest uppercase">02. Habilidades</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Stack técnico</h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] ?? Code2;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass-card rounded-2xl p-5 group"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                    <Icon className="w-4 h-4 text-indigo-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{skill.category}</h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5 hover:border-indigo-500/30 hover:text-indigo-300 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
