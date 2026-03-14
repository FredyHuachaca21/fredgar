import { useState, useEffect, useCallback } from "react";
import { motion, type Transition } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ChevronDown, MapPin } from "lucide-react";
import { personal } from "../data/portfolio";

const EASE: Transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { ...EASE, delay },
});

/* ── Text scramble hook ── */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

function useTextScramble(target: string, startDelay = 400) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  const scramble = useCallback(() => {
    const len = target.length;
    const duration = 60; // ms per iteration
    const revealDelay = 3; // iterations before each char locks
    let frame = 0;

    const interval = setInterval(() => {
      const revealed = Math.floor(frame / revealDelay);
      let result = "";
      for (let i = 0; i < len; i++) {
        if (i < revealed) {
          result += target[i];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplay(result);
      frame++;

      if (revealed >= len) {
        clearInterval(interval);
        setDisplay(target);
        setDone(true);
      }
    }, duration);

    return () => clearInterval(interval);
  }, [target]);

  useEffect(() => {
    const timeout = setTimeout(scramble, startDelay);
    return () => clearTimeout(timeout);
  }, [scramble, startDelay]);

  return { display, done };
}

export default function Hero() {
  const { display, done } = useTextScramble(personal.displayName, 500);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Forge glow — top left */}
      <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-[var(--accent)]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      {/* Gold ambient — right */}
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-[var(--accent-gold)]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      {/* Diagonal accent lines */}
      <div className="absolute top-0 left-0 w-px h-[60vh] bg-gradient-to-b from-[var(--accent)]/20 via-[var(--accent)]/5 to-transparent ml-[15%] pointer-events-none hidden lg:block" />
      <div className="absolute bottom-0 right-0 w-px h-[40vh] bg-gradient-to-t from-[var(--accent-gold)]/15 via-transparent to-transparent mr-[20%] pointer-events-none hidden lg:block" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Terminal-style badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-8">
          <div className="rounded-full px-4 py-1.5 text-xs font-mono tracking-wider text-[var(--accent)] border border-[var(--accent)]/20 bg-[var(--accent)]/[0.06]">
            <span className="inline-block w-1.5 h-1.5 bg-[var(--accent)] rounded-full mr-2" style={{ animation: 'pulse-warm 2s ease-in-out infinite' }} />
            disponible para proyectos
          </div>
        </motion.div>

        {/* Name — scramble reveal */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-display text-4xl sm:text-6xl md:text-8xl font-extrabold mb-3 leading-[0.95] tracking-tight"
        >
          <span className={`text-gradient-forge inline-block font-mono ${done ? "" : "opacity-90"}`}>
            {display || "\u00A0"}
          </span>
        </motion.h1>

        {/* Full name subtle */}
        <motion.p
          {...fadeUp(0.28)}
          className="text-xs text-[var(--text-muted)] mb-2 font-mono tracking-[0.3em] uppercase"
        >
          {personal.name}
        </motion.p>

        {/* Title */}
        <motion.p
          {...fadeUp(0.35)}
          className="text-lg md:text-2xl text-[var(--text-secondary)] mb-2 font-display font-medium"
        >
          {personal.title}
        </motion.p>

        {/* Subtitle — tech stack */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-sm text-[var(--text-muted)] mb-8 font-mono tracking-wide"
        >
          {personal.subtitle}
        </motion.p>

        {/* Location */}
        <motion.div {...fadeUp(0.45)} className="flex items-center justify-center gap-1.5 mb-10 text-[var(--text-muted)] text-sm">
          <MapPin className="w-3.5 h-3.5 text-[var(--accent)]/50" />
          <span>{personal.location}</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4 justify-center mb-14">
          <a
            href="#contact"
            className="group relative px-7 py-3 bg-[var(--accent)] hover:bg-[#ff7f50] text-[#050507] rounded-lg font-display font-bold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-[var(--accent)]/20 hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="relative z-10">Contactar</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </a>
          <a
            href="#experience"
            className="px-7 py-3 border border-white/10 hover:border-[var(--accent)]/30 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-lg font-display font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent)]/[0.04]"
          >
            Ver experiencia
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.65)} className="flex items-center justify-center gap-3">
          {[
            { icon: Github, href: personal.github, label: "GitHub" },
            { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
            { icon: Phone, href: `https://wa.me/${personal.phone.replace(/\D/g, "")}`, label: "WhatsApp" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/[0.06] transition-all duration-300 hover:-translate-y-0.5"
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
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[var(--accent)]/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
