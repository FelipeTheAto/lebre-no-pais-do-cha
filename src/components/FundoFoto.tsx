import type { ImgConf } from "@/config/midia";

// Imagem INTEGRADA como fundo do bloco (atrás do texto), no estilo das
// apresentações: a foto preenche a seção inteira e um "scrim" (degradê escuro)
// fica por cima dela — bem opaco onde o texto está, clareando (fade) onde a
// imagem deve aparecer. O texto da seção vem DEPOIS, por cima, com z-10.
//
// Uso: como PRIMEIRO filho de uma <section className="relative overflow-hidden ...">,
// e o conteúdo logo abaixo dentro de um wrapper  className="relative z-10".
//
//   • conf        → entrada do painel (src/config/midia.ts). O RECORTE vem do
//                   object-position na "classe" (object-center / object-top / object-[50%_30%]).
//   • conf.scrim  → o degradê escuro por cima da imagem (controla onde escurece e o fade).
const FundoFoto = ({ conf }: { conf: ImgConf }) => {
  if (!conf.mostrar) return null;
  return (
    <>
      <img
        src={conf.src}
        alt={conf.alt}
        className={`absolute inset-0 w-full h-full z-0 ${conf.classe}`}
        style={conf.estilo}
        loading="lazy" />

      {conf.scrim &&
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: conf.scrim }} />}

    </>);

};

export default FundoFoto;
