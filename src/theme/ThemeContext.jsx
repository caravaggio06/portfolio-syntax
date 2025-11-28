// src/theme/ThemeContext.jsx
import { createContext, useContext, useMemo, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");

  const value = useMemo(() => {
    const isDark = mode === "dark";
    return {
      mode,
      isDark,
      theme: {
        background: isDark ? "#020617" : "#f5f5f5",
        surface: isDark ? "rgba(15,23,42,0.9)" : "rgba(255,255,255,0.9)",
        textPrimary: isDark ? "#f9fafb" : "#020617",
        textMuted: isDark ? "#9ca3af" : "#6b7280",
        accent: "#fbbf24",
      },
      toggle: () => setMode((m) => (m === "dark" ? "light" : "dark")),
    };
  }, [mode]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
