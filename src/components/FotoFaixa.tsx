import type { ImgConf } from "@/config/midia";
import { motion } from "framer-motion";

// Foto em FAIXA full-bleed (borda a borda) que se funde na cor da seção pelas
// pontas de cima e de baixo — vira parte do design, não um quadro inserido.
// Use como filha direta da <section> (fora do container), pra vazar a largura toda.
//   • conf     → entrada do painel (src/config/midia.ts). A ALTURA vem da "classe" (h-[...]).
//   • corFusao → cor desta seção pra fundir as pontas (ex: "hsl(30,77%,69%)").
//                Pra fusão MAIS suave/longa, aumente o h-* dos degradês abaixo.
const FotoFaixa = ({ conf, corFusao }: { conf: ImgConf; corFusao: string }) => {
  if (!conf.mostrar) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="relative w-full overflow-hidden mt-12 md:mt-20">

      <img
        src={conf.src}
        alt={conf.alt}
        className={conf.classe}
        style={conf.estilo}
        loading="lazy" />

      {/* degradês que fundem as pontas na cor da seção (h-* = quão longa é a fusão) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20 md:h-32"
        style={{ background: `linear-gradient(to bottom, ${corFusao}, transparent)` }} />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-32"
        style={{ background: `linear-gradient(to top, ${corFusao}, transparent)` }} />

    </motion.div>);

};

export default FotoFaixa;
