import React from "react";
import { Sun, Moon } from "lucide-react";
import { Theme } from "../hooks/useTheme";

interface ThemeToggleButtonProps {
  theme: Theme;
  toggleTheme: () => void;
  className?: string;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  theme,
  toggleTheme,
  className = "",
}) => {
  return (
    <button
      onClick={toggleTheme}
      className={`
        relative p-2 rounded-lg transition-all duration-300 ease-in-out
        bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600
        border border-slate-300 dark:border-slate-600
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${className}
      `}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun
          className={`
            absolute inset-0 w-5 h-5 text-yellow-500 transition-all duration-300
            ${
              theme === "dark"
                ? "rotate-90 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }
          `}
        />

        {/* Moon Icon */}
        <Moon
          className={`
            absolute inset-0 w-5 h-5 text-blue-400 transition-all duration-300
            ${
              theme === "light"
                ? "-rotate-90 scale-0 opacity-0"
                : "rotate-0 scale-100 opacity-100"
            }
          `}
        />
      </div>
    </button>
  );
};

export default ThemeToggleButton;
