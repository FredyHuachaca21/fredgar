import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingCart, Code2, Server, GraduationCap, Sparkles, Check } from "lucide-react";

const servicios = [
  {
    id: "consultoria",
    icon: Code2,
    nombre: "Consultoría Backend",
    descripcion:
      "Sesión de consultoría personalizada para arquitectura de microservicios, optimización de APIs y mejores prácticas con Java/Spring Boot.",
    precio: 150,
    moneda: "PEN",
    features: ["1 hora de sesión", "Análisis de arquitectura", "Recomendaciones documentadas"],
  },
  {
    id: "api-rest",
    icon: Server,
    nombre: "Desarrollo API REST",
    descripcion:
      "Desarrollo de API REST completa con Spring Boot, documentación OpenAPI, pruebas unitarias y despliegue en la nube.",
    precio: 800,
    moneda: "PEN",
    features: ["Endpoints CRUD", "Documentación Swagger", "Tests unitarios", "Deploy incluido"],
  },
  {
    id: "mentoria",
    icon: GraduationCap,
    nombre: "Mentoría Java/Spring",
    descripcion:
      "Pack de 4 sesiones de mentoría para desarrolladores que quieren dominar Java moderno (8-21) y el ecosistema Spring.",
    precio: 400,
    moneda: "PEN",
    features: ["4 sesiones de 1h", "Material exclusivo", "Ejercicios prácticos", "Soporte por chat"],
  },
  {
    id: "code-review",
    icon: Sparkles,
    nombre: "Code Review Profesional",
    descripcion:
      "Revisión exhaustiva de tu código backend con feedback detallado sobre SOLID, Clean Code, seguridad y rendimiento.",
    precio: 200,
    moneda: "PEN",
    features: ["Hasta 5,000 líneas", "Reporte detallado", "Sesión de feedback"],
  },
];

export default function Tienda() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [added, setAdded] = useState<Record<string, boolean>>({});

  const handleAdd = (id: string) => {
    setAdded((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [id]: false })), 1800);
  };

  return (
    <section id="tienda" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] accent-line" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-[var(--accent)] text-xs font-mono mb-3 tracking-[0.3em] uppercase">
            06 / Servicios
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Tienda
          </h2>
          <p className="text-[var(--text-muted)] max-w-xl text-[15px]">
            Servicios de desarrollo backend y mentoría técnica. Contrata directamente y recibe
            atención personalizada.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 gap-5 mt-14">
          {servicios.map((srv, i) => {
            const Icon = srv.icon;
            const isAdded = added[srv.id];

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="forge-card rounded-xl p-6 flex flex-col relative overflow-hidden group"
              >
                {/* Decorative glow */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-[var(--accent)]/[0.03] rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon + Price row */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-[var(--accent)]/[0.08] border border-[var(--accent)]/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div className="text-right">
                    <span className="font-display text-2xl font-extrabold text-gradient-forge">
                      S/ {srv.precio}
                    </span>
                    <p className="text-[10px] text-[var(--text-muted)] font-mono tracking-wider uppercase">
                      {srv.moneda}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-2 relative z-10">
                  {srv.nombre}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 relative z-10">
                  {srv.descripcion}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 relative z-10">
                  {srv.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <div className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Add to cart button */}
                <div className="mt-auto relative z-10">
                  <button
                    onClick={() => handleAdd(srv.id)}
                    className={`w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg font-display text-sm font-bold transition-all duration-300 cursor-pointer ${
                      isAdded
                        ? "bg-green-500/20 border border-green-500/30 text-green-400"
                        : "bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#050507] hover:shadow-xl hover:shadow-[var(--accent)]/20 hover:-translate-y-0.5"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        Agregado
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" />
                        Agregar al carrito
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Link to cart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 text-center"
        >
          <a
            href="#carrito"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[var(--accent)] hover:bg-[#ff7f50] text-[#050507] rounded-lg font-display text-sm font-bold transition-all duration-300 hover:shadow-xl hover:shadow-[var(--accent)]/20 hover:-translate-y-0.5 group"
          >
            <ShoppingCart className="w-4 h-4" />
            Ver carrito
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 16 16"
            >
              <path d="M6 4l4 4-4 4" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
