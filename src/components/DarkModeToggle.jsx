import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const darkThemes = [
    "dark",
    "night",
    "black",
    "dracula",
    "forest",
    "halloween",
    "luxury",
    "business",
    "synthwave",
    "cyberpunk",
    "coffee",
    "dim",
  ];

  const checkTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const isDarkTheme = darkThemes.includes(savedTheme);
    setIsDark(isDarkTheme);

    // Apply theme to document
    document.documentElement.setAttribute("data-theme", savedTheme);
  };

  useEffect(() => {
    checkTheme();

    // Listen for theme changes
    const handleThemeChange = () => {
      checkTheme();
    };

    window.addEventListener("storage", handleThemeChange);
    window.addEventListener("themeChanged", handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleThemeChange);
      window.removeEventListener("themeChanged", handleThemeChange);
    };
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    // Also update DaisyUI theme
    document.documentElement.setAttribute("data-theme", newTheme);
    // Trigger custom event for same-tab updates
    window.dispatchEvent(new Event("themeChanged"));
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="btn btn-ghost btn-circle btn-sm"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600" />
      )}
    </button>
  );
};

export default DarkModeToggle;
