import { FC, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "system" | "jarvis" | "bluebeetle" | "ultron";

interface ThemeOption {
  id: Theme;
  label: string;
  primary: string;
  secondary: string;
  bg: string;
  tooltip: string;
}

const themes: ThemeOption[] = [
  {
    id: "system",
    label: "SA",
    primary: "#00ff88",
    secondary: "#00994f",
    bg: "#0d1410",
    tooltip: "system",
  },
  {
    id: "jarvis",
    label: "JV",
    primary: "#ff4500",
    secondary: "#ffa500",
    bg: "#140800",
    tooltip: "Jarvis",
  },
  {
    id: "bluebeetle",
    label: "BB",
    primary: "#1e90ff",
    secondary: "#ffffff",
    bg: "#000c1a",
    tooltip: "Blue Beetle",
  },
  {
    id: "ultron",
    label: "UL",
    primary: "#c0c0c0",
    secondary: "#505050",
    bg: "#0a0a0a",
    tooltip: "Ultron",
  },
];

const ThemeSwitcher: FC = () => {
  const [active, setActive] = useState<Theme>("system");
  const [hoveredId, setHoveredId] = useState<Theme | null>(null);

  // Apply theme on mount (restore from localStorage)
  useEffect(() => {
    const saved =
      (localStorage.getItem("portfolio-theme") as Theme) || "system";
    applyTheme(saved);
  }, []);

  const applyTheme = (theme: Theme) => {
    if (theme === "system") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    localStorage.setItem("portfolio-theme", theme);
    setActive(theme);
  };

  return (
    <div
      style={{
        position: "fixed",
        left: "1.2rem",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 998,
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        alignItems: "center",
      }}
    >
      {/* Vertical connector line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1,
          background:
            "linear-gradient(to bottom, transparent, var(--border), transparent)",
          zIndex: -1,
        }}
      />

      {themes.map((theme) => {
        const isActive = active === theme.id;
        const isHovered = hoveredId === theme.id;

        return (
          <div
            key={theme.id}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Tooltip */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: "absolute",
                    left: "calc(100% + 10px)",
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: theme.primary,
                    background: theme.bg,
                    border: `1px solid ${theme.primary}40`,
                    padding: "3px 10px",
                    pointerEvents: "none",
                  }}
                >
                  {theme.tooltip}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Circle button */}
            <motion.button
              onClick={() => applyTheme(theme.id)}
              onMouseEnter={() => setHoveredId(theme.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.92 }}
              title={theme.tooltip}
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: `2px solid ${
                  isActive ? theme.primary : theme.primary + "55"
                }`,
                background: theme.bg,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                boxShadow: isActive
                  ? `0 0 14px ${theme.primary}60, 0 0 4px ${theme.primary}40`
                  : "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
                padding: 0,
              }}
            >
              {/* Split-colour fill inside the circle */}
              <div
                style={{
                  position: "absolute",
                  inset: 3,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${theme.primary} 50%, ${theme.secondary} 50%)`,
                  opacity: isActive ? 1 : 0.6,
                  transition: "opacity 0.2s",
                }}
              />

              {/* Active indicator ring pulse */}
              {isActive && (
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    inset: -4,
                    borderRadius: "50%",
                    border: `1px solid ${theme.primary}`,
                    pointerEvents: "none",
                  }}
                />
              )}
            </motion.button>
          </div>
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
