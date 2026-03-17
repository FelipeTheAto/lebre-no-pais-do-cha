import { Instagram } from "lucide-react";
import logoPreta from "@/assets/logo-preta.png";
import chancelas from "@/assets/CHANCELAS PARA LANDING PAGE.png";

const Footer = () => {
  return (
    <footer className="py-10 md:py-16 bg-[hsl(30,60%,78%)]">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img
              src={logoPreta}
              alt="Lebre no País do Chá — logo"
              className="w-20 md:w-28 h-auto" />
            <a
              href="https://instagram.com/lebrenopaisdocha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/40 hover:text-foreground transition-colors"
              aria-label="Instagram @lebrenopaisdocha"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@lebrenopaisdocha</span>
            </a>
          </div>

          <div className="text-center md:text-right text-foreground/40 text-sm">
            <p className="text-xs">© 2026 Lebre no País do Chá. Todos os direitos reservados.</p>
          </div>
        </div>

        <div className="mt-10 md:mt-14 flex justify-center">
          <img
            src={chancelas}
            alt="Chancelas e apoios do projeto"
            className="w-full max-w-6xl h-auto object-contain" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
