import React from 'react';

import { useTheme } from "../theme/ThemeContext";

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen text-slate-100 relative overflow-hidden"
      style={{ background: theme.background, color: theme.textPrimary }}
    >
      {/* hier liegen deine Orbs / Hintergrund-Elemente */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 md:py-12">
        {children}
      </div>
    </div>
  );
}