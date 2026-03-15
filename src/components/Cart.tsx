import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, Trash2, CreditCard, ShieldCheck, Minus, Plus } from "lucide-react";

const cartItems = [
  {
    id: "consultoria",
    nombre: "Consultoría Backend",
    precio: 150,
    cantidad: 1,
  },
  {
    id: "api-rest",
    nombre: "Desarrollo API REST",
    precio: 800,
    cantidad: 1,
  },
];

export default function Cart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const subtotal = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const igv = subtotal * 0.18;
  const total = subtotal + igv;

  return (
    <section id="carrito" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] accent-line" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[var(--accent)] text-xs font-mono mb-3 tracking-[0.3em] uppercase">
            07 / Checkout
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Carrito
          </h2>
          <p className="text-[var(--text-muted)] text-[15px]">
            Revisa tus servicios seleccionados y procede al pago seguro.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Items list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 space-y-3"
          >
            {cartItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="forge-card rounded-xl p-5 flex items-center gap-4"
              >
                {/* Icon placeholder */}
                <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/[0.08] border border-[var(--accent)]/15 flex items-center justify-center flex-shrink-0">
                  <ShoppingBag className="w-5 h-5 text-[var(--accent)]" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-display font-bold text-[var(--text-primary)] truncate">
                    {item.nombre}
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
                    S/ {item.precio.toFixed(2)}
                  </p>
                </div>

                {/* Quantity controls */}
                <div className="flex items-center gap-1.5">
                  <button className="w-7 h-7 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/25 transition-all duration-200 cursor-pointer">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-8 text-center text-sm font-mono text-[var(--text-primary)]">
                    {item.cantidad}
                  </span>
                  <button className="w-7 h-7 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/25 transition-all duration-200 cursor-pointer">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                {/* Subtotal */}
                <div className="text-right min-w-[80px]">
                  <span className="text-sm font-display font-bold text-gradient-forge">
                    S/ {(item.precio * item.cantidad).toFixed(2)}
                  </span>
                </div>

                {/* Remove */}
                <button className="w-8 h-8 rounded-md flex items-center justify-center text-[var(--text-muted)] hover:text-red-400 hover:bg-red-400/10 transition-all duration-200 cursor-pointer">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}

            {/* Back to store */}
            <a
              href="#tienda"
              className="inline-flex items-center gap-2 text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors mt-4 font-mono tracking-wider"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 16 16"
              >
                <path d="M10 4l-4 4 4 4" />
              </svg>
              Seguir comprando
            </a>
          </motion.div>

          {/* Order summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2"
          >
            <div className="forge-card rounded-xl p-6 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--accent)]/[0.04] rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[var(--accent-gold)]/[0.03] rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <h3 className="font-display text-sm font-bold text-[var(--text-primary)] mb-5 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[var(--accent)]" />
                  Resumen del pedido
                </h3>

                {/* Breakdown */}
                <div className="space-y-3 mb-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--text-muted)]">Subtotal</span>
                    <span className="text-[var(--text-secondary)] font-mono">
                      S/ {subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--text-muted)]">IGV (18%)</span>
                    <span className="text-[var(--text-secondary)] font-mono">
                      S/ {igv.toFixed(2)}
                    </span>
                  </div>
                  <div className="h-px bg-white/[0.06] my-3" />
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-display font-bold text-[var(--text-primary)]">Total</span>
                    <span className="font-display text-xl font-extrabold text-gradient-forge">
                      S/ {total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Pay button */}
                <button className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[var(--accent)] hover:bg-[#ff7f50] text-[#050507] rounded-lg font-display text-sm font-bold transition-all duration-300 hover:shadow-xl hover:shadow-[var(--accent)]/20 hover:-translate-y-0.5 group cursor-pointer">
                  <CreditCard className="w-4 h-4" />
                  Procesar Pago
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
                </button>

                {/* Security badge */}
                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-[var(--text-muted)]">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-500/60" />
                  <span>Pago seguro con Izipay</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
