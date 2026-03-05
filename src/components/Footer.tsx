import { Code2, Heart } from "lucide-react";
import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-indigo-500/50" />
          <span>
            <span className="text-gradient font-semibold">{personal.displayName}</span>
            <span className="text-gray-700">.com</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span>Hecho con</span>
          <Heart className="w-3 h-3 text-red-500/70 fill-red-500/70" />
          <span>usando React + Tailwind + Framer Motion</span>
        </div>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
