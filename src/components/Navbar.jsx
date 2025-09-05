import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled
          ? "py-3 bg-gray-400/10 dark:bg-gray-400/10 backdrop-blur-xl border-b border-gray-400/20 dark:border-gray-600/30 shadow-2xl"
          : "py-5 bg-transparent"
      )}
      style={{
        backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
      }}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-base-content"> Case </span>{" "}
            <span className="text-teal-400">Studies</span>
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-base-content/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}

          {/* Theme Controls */}
          <div className="flex items-center gap-2 ml-4">
            <DarkModeToggle />
          </div>
        </div>

        {/* mobile nav */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme Controls for Mobile */}
          <DarkModeToggle />

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-base-content z-50"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={cn(
            "fixed inset-0 bg-gray-900/60 dark:bg-gray-800/70 backdrop-blur-2xl border border-gray-400/20 dark:border-gray-600/30 shadow-2xl z-40 flex flex-col items-center justify-center",
            "transition-all duration-500 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
          style={{
            backdropFilter: "blur(25px) saturate(180%)",
            WebkitBackdropFilter: "blur(25px) saturate(180%)",
          }}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-base-content/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
