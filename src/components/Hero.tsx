import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ChevronDown, MapPin } from "lucide-react";
import { personal } from "../data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-6">
          <div className="glass rounded-full px-4 py-1.5 text-xs font-medium text-indigo-300 border border-indigo-500/20">
            <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse" />
            Disponible para proyectos
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tight"
        >
          <span className="text-gradient">{personal.displayName}</span>
        </motion.h1>

        {/* Full name subtle */}
        <motion.p
          {...fadeUp(0.25)}
          className="text-sm text-gray-600 mb-1 font-mono tracking-widest"
        >
          {personal.name}
        </motion.p>

        {/* Title */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-xl md:text-2xl text-gray-400 mb-3 font-light"
        >
          {personal.title}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.35)}
          className="text-sm md:text-base text-indigo-400/70 mb-6 font-mono tracking-wide"
        >
          {personal.subtitle}
        </motion.p>

        {/* Location */}
        <motion.div {...fadeUp(0.4)} className="flex items-center justify-center gap-1.5 mb-10 text-gray-500 text-sm">
          <MapPin className="w-3.5 h-3.5" />
          <span>{personal.location}</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="group px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
          >
            Contactar
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </a>
          <a
            href="#experience"
            className="px-6 py-3 glass hover:bg-white/8 text-gray-300 hover:text-white rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            Ver experiencia
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.6)} className="flex items-center justify-center gap-4">
          {[
            { icon: Github, href: personal.github, label: "GitHub" },
            { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
            { icon: Phone, href: `tel:${personal.phone}`, label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-indigo-300 hover:border-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600"
      >
        <span className="text-xs">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
