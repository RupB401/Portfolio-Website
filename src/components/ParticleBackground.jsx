import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  // Check device type and screen size
  useEffect(() => {
    const checkDevice = () => {
      const isMobileDevice =
        window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(isMobileDevice);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Check if current theme is dark
  useEffect(() => {
    const checkTheme = () => {
      const savedTheme = localStorage.getItem("theme") || "light";
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
      setIsDark(darkThemes.includes(savedTheme));
    };

    checkTheme();

    // Listen for theme changes
    window.addEventListener("themeChanged", checkTheme);
    window.addEventListener("storage", checkTheme);

    return () => {
      window.removeEventListener("themeChanged", checkTheme);
      window.removeEventListener("storage", checkTheme);
    };
  }, []);

  // Get particle count based on device type
  const getParticleCount = () => {
    if (isMobile) {
      return window.innerWidth <= 480 ? 30 : 60; // Phone: 30, Tablet: 60
    }
    return 180; // Desktop: 180
  };

  // Different particle configs for light and dark themes
  const getParticleConfig = () => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: !isMobile, // Disable click interactions on mobile
          mode: "push",
        },
        onHover: {
          enable: !isMobile, // Disable hover interactions on mobile
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: isMobile ? 2 : 4, // Fewer particles on mobile
        },
        repulse: {
          distance: isMobile ? 100 : 200, // Smaller repulse distance on mobile
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: isDark
          ? [
              "#00f5ff",
              "#ff6b6b",
              "#4ecdc4",
              "#45b7d1",
              "#96ceb4",
              "#ffd93d",
              "#ff9ff3",
            ] // Bright colors for dark mode
          : [
              "#3b82f6",
              "#8b5cf6",
              "#06b6d4",
              "#10b981",
              "#f59e0b",
              "#ef4444",
              "#ec4899",
            ], // Professional colors for light mode
      },
      links: {
        enable: false, // Remove particle links
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: isMobile ? 0.8 : 1.5, // Slower movement on mobile
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: isMobile ? 400 : 600, // Smaller area density on mobile
        },
        value: getParticleCount(), // Dynamic particle count
      },
      opacity: {
        value: isDark ? 0.8 : 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: isDark ? 0.4 : 0.2,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 7 },
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 1.5,
          sync: false,
        },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1,
        },
      },
    },
    detectRetina: true,
  });

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={getParticleConfig()}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default ParticleBackground;
