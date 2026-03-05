import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { personal } from "../data/portfolio";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/fredy-huachaca",
    href: personal.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "FredyHuachaca21",
    href: personal.github,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-mono mb-2 tracking-widest uppercase">05. Contacto</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hablemos</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Disponible para proyectos freelance, posiciones full-time y colaboraciones técnicas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact cards */}
          <div className="space-y-4">
            {contactItems.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 glass-card rounded-2xl p-5 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                  <Icon className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                  <p className="text-sm text-gray-200 font-medium">{value}</p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400">
                  →
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center mb-6">
                <Send className="w-5 h-5 text-indigo-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Especializado en arquitecturas cloud con Java y Spring Boot.
                Listo para aportar experiencia técnica a tu equipo.
              </p>

              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 group"
              >
                Enviar mensaje
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
