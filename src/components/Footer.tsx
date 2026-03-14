import { MapPin } from "lucide-react";
import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-[var(--text-muted)] font-mono tracking-wider">
        <span>&copy; {new Date().getFullYear()} {personal.displayName}</span>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3 h-3 text-[var(--accent)]/40" />
          <span>{personal.location}</span>
        </div>
      </div>
    </footer>
  );
}
