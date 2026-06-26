import type { ImgConf } from "@/config/midia";

// Renderiza uma imagem a partir de uma entrada do painel (src/config/midia.ts).
// Se a entrada estiver com  mostrar: false , não renderiza nada (remove da página).
const Img = ({ conf }: { conf: ImgConf }) => {
  if (!conf.mostrar) return null;
  return (
    <img
      src={conf.src}
      alt={conf.alt}
      className={conf.classe}
      style={conf.estilo}
      loading="lazy" />);

};

export default Img;
