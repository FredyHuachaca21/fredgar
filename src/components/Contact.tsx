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
    label: "WhatsApp",
    value: "Enviar mensaje",
    href: `https://wa.me/${personal.phone.replace(/\D/g, "")}`,
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
    <section id="contact" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] accent-line" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[var(--accent)] text-xs font-mono mb-3 tracking-[0.3em] uppercase">05 / Contacto</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">Hablemos</h2>
          <p className="text-[var(--text-muted)] max-w-lg text-[15px]">
            Disponible para proyectos freelance, posiciones full-time y colaboraciones tecnicas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact cards */}
          <div className="space-y-3">
            {contactItems.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4 forge-card rounded-xl p-5 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/[0.08] border border-[var(--accent)]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent)]/[0.15] transition-all duration-300">
                  <Icon className="w-4 h-4 text-[var(--accent)]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[var(--text-muted)] mb-0.5 font-mono tracking-wider uppercase">{label}</p>
                  <p className="text-sm text-[var(--text-primary)] font-medium">{value}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[var(--accent)]">
                  <ChevronIcon />
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="forge-card rounded-xl p-8 flex flex-col justify-center relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--accent)]/[0.04] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[var(--accent-gold)]/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/[0.1] border border-[var(--accent)]/20 flex items-center justify-center mb-6">
                <Send className="w-5 h-5 text-[var(--accent)]" />
              </div>

              <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3">
                Tienes un proyecto en mente?
              </h3>
              <p className="text-sm text-[var(--text-muted)] mb-8 leading-relaxed">
                Especializado en arquitecturas cloud con Java y Spring Boot.
                Listo para aportar experiencia tecnica a tu equipo.
              </p>

              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[var(--accent)] hover:bg-[#ff7f50] text-[#050507] rounded-lg font-display text-sm font-bold transition-all duration-300 hover:shadow-xl hover:shadow-[var(--accent)]/20 hover:-translate-y-0.5 group"
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

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4l4 4-4 4" />
    </svg>
  );
}
