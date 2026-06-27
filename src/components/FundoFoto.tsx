import type { ImgConf } from "@/config/midia";

// Imagem INTEGRADA como fundo do bloco (atrás do texto), no estilo das
// apresentações: a foto preenche a área e um "scrim" (degradê escuro) fica por
// cima dela — bem opaco onde o texto está, clareando (fade) onde a imagem deve
// aparecer. A própria imagem some em fade nas bordas (máscara) pra não dar
// "corte seco". O texto da seção vem DEPOIS, por cima, com z-10.
//
// Uso: como PRIMEIRO filho de uma <section className="relative overflow-hidden ...">
// com fundo escuro, e o conteúdo logo abaixo num wrapper  className="relative z-10".
//
// Tudo vem do painel (src/config/midia.ts):
//   • classe   → geometria + recorte da imagem (inset-0 w-full h-full object-cover object-[x_y])
//   • mascara  → fade das bordas da imagem (default: some no topo e na base)
//   • scrim    → degradê escuro por cima (onde escurece pro texto, onde clareia pra imagem)
const FADE_VERTICAL = "linear-gradient(to bottom, transparent 0%, #000 14%, #000 86%, transparent 100%)";

const FundoFoto = ({ conf }: { conf: ImgConf }) => {
  if (!conf.mostrar) return null;
  const mascara = conf.mascara ?? FADE_VERTICAL;
  return (
    <>
      <img
        src={conf.src}
        alt={conf.alt}
        className={`absolute z-0 ${conf.classe}`}
        style={{ ...conf.estilo, WebkitMaskImage: mascara, maskImage: mascara }}
        loading="lazy" />

      {conf.scrim &&
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: conf.scrim }} />}

    </>);

};

export default FundoFoto;
