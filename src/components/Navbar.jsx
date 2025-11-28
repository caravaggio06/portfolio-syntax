import React from 'react';

import { useTheme } from "../theme/ThemeContext";

export default function Navbar() {
  const { mode, toggle } = useTheme();

  return (
    <header className="mb-8">
      <nav className="flex items-center justify-between gap-4">
        <div className="font-semibold tracking-tight">
          Kerem Kale
        </div>

        <div className="flex items-center gap-3 text-sm">
          {/* deine bisherigen Nav-Links belassen */}
          <a href="#projects" className="hover:text-yellow-300">
            Projekte
          </a>
          <a href="#skills" className="hover:text-yellow-300">
            Skills
          </a>
          <a href="#experience" className="hover:text-yellow-300">
            Erfahrung
          </a>
          <a href="#contact" className="hover:text-yellow-300">
            Kontakt
          </a>

          <button
            type="button"
            onClick={toggle}
            className="ml-2 rounded-full border border-yellow-400 px-3 py-1 text-xs uppercase tracking-wide hover:bg-yellow-400/10"
          >
            {mode === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}
