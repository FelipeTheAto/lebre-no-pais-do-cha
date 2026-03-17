import { useState, useEffect } from "react";
import logoBranca from "@/assets/logo-branca.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[hsl(200,7%,16%)]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex items-center justify-between h-14 md:h-16">
        <a href="#" className={`transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <img
            src={logoBranca}
            alt="Lebre no País do Chá"
            className="h-8 md:h-10 w-auto"
          />
        </a>

        <a
          href="#agenda"
          className={`font-display font-bold text-xs sm:text-sm uppercase tracking-wider px-4 py-2 rounded-sm transition-all duration-300 ${
            scrolled
              ? "bg-accent text-accent-foreground opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          Ver Agenda
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
