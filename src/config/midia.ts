// ════════════════════════════════════════════════════════════════════
// PAINEL DE MÍDIA DA LP — controle todas as imagens por aqui
// ────────────────────────────────────────────────────────────────────
// Cada imagem da página tem uma entrada abaixo. Em cada uma você pode:
//
//   • mostrar : true / false  → LIGA ou REMOVE a imagem da página
//   • src     : o arquivo      → TROCA a imagem (ícone de Lebre ↔ foto real)
//   • classe  : classes Tailwind → TAMANHO, POSIÇÃO e RECORTE
//   • estilo  : ajustes finos    → rotação, blend (opcional)
//
// ── COMO TROCAR UM ÍCONE DE LEBRE POR UMA FOTO REAL ──────────────────
//   1. Jogue a foto em  public/fotos/   (ex: public/fotos/lebre-hero.jpg)
//   2. Troque o  src  da entrada por  "/fotos/lebre-hero.jpg"
//   3. Pra foto PREENCHER o espaço, ajuste a  classe  pra ter altura +
//      object-cover, ex:  "w-full h-[480px] object-cover object-center rounded-2xl"
//   4. APAGUE o  estilo  (o "mixBlendMode: multiply" serve pras ilustrações
//      de fundo transparente; numa foto real ele deixa a imagem esquisita)
//
// ── AS MANOPLAS DA CLASSE ────────────────────────────────────────────
//   h-[420px]     → ALTURA do recorte (sobe/desce o número)
//   w-full        → ocupa toda a largura · w-[440px] trava num valor
//   object-cover  → preenche e corta · object-contain → mostra inteira
//   object-center → parte visível: object-top / object-bottom / object-[50%_30%]
//   rounded-2xl   → cantos arredondados · shadow-lg → sombra
// ════════════════════════════════════════════════════════════════════

import type { CSSProperties } from "react";

// Arquivos em src/assets precisam ser importados aqui.
// Arquivos em public/ entram direto como string ("/fotos/...", "/lovable-uploads/...").
import xicaras01 from "@/assets/xicaras-01.png";
import xicaras02 from "@/assets/xicaras-02.png";
import xicaras03 from "@/assets/xicaras-03.png";

export type ImgConf = {
  mostrar: boolean;
  src: string;
  alt: string;
  classe: string;
  estilo?: CSSProperties;
  // Campos abaixo só pras fotos usadas como FUNDO INTEGRADO (<FundoFoto>):
  // scrim   → degradê escuro POR CIMA da imagem. Mais opaco = texto legível; menos = imagem aparece.
  // mascara → degradê que faz a PRÓPRIA imagem sumir em fade nas bordas (mata o "corte seco").
  //           Onde o degradê é transparent, a imagem desaparece e mostra o fundo escuro da seção.
  scrim?: string;
  mascara?: string;
};

export const midia = {
  // ─── SEÇÃO 1 · HERO ───────────────────────────────────────────────
  heroLebre: {
    mostrar: true,
    src: "/lovable-uploads/7174d72d-3fb9-4a58-a440-0d453f0c3c3f.png",
    alt: "Lebre de Março — personagem principal do espetáculo",
    classe: "w-[280px] sm:w-[400px] md:w-[560px] lg:w-[840px] h-auto object-cover",
    estilo: { transform: "rotate(2deg)", mixBlendMode: "multiply", background: "transparent" },
  },

  // ─── SEÇÃO 2 · STORYTELLING ───────────────────────────────────────
  storyPoster: {
    mostrar: true,
    src: "/fotos/secao-2.jpg",
    alt: "Foto do espetáculo Lebre no País do Chá",
    classe: "w-full h-auto object-contain object-center rounded-none shadow-lg",
    estilo: {mixBlendMode: "normal"}
  },
  // FUNDO INTEGRADO — <FundoFoto> na Seção 2. A Lebre fica à esquerda da foto; o texto vai à direita.
  //   object-[28%_52%] → empurra o recorte pra mostrar a Lebre (que está à esquerda da cena).
  //   scrim 95deg      → claro à esquerda (Lebre aparece), escuro à direita (texto legível).
  fotoSecao2: {
    mostrar: true,
    src: "/fotos/secao-2.jpg",
    alt: "Cena do espetáculo — a Lebre de Março à mesa do chá",
    classe: "inset-0 w-full h-full object-cover object-[28%_52%]",
    scrim: "linear-gradient(95deg, rgba(15,14,18,0.15) 0%, rgba(15,14,18,0.42) 38%, rgba(15,14,18,0.85) 66%, rgba(15,14,18,0.93) 100%)",
  },

  // ─── SEÇÃO 4 · SAÚDE MENTAL ───────────────────────────────────────
  mentalLebre: {
    mostrar: true,
    src: "/lovable-uploads/7619bc6b-830e-4fa6-95c6-91aaff0a10a4.png",
    alt: "Lebre de Março em perfil — personagem fragmentada",
    classe: "w-[220px] sm:w-[300px] md:w-[380px] lg:w-[440px] h-auto",
    estilo: { transform: "rotate(-3deg)", mixBlendMode: "multiply", background: "transparent" },
  },
  highlightIcone1: {
    mostrar: true,
    src: xicaras01,
    alt: "A Identificação",
    classe: "w-full h-full object-contain",
    estilo: { filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.55))" },
  },
  highlightIcone2: {
    mostrar: true,
    src: xicaras02,
    alt: "A Ponte para a Realidade",
    classe: "w-full h-full object-contain",
    estilo: { filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.55))" },
  },
  highlightIcone3: {
    mostrar: true,
    src: xicaras03,
    alt: "Sua Voz de Volta",
    classe: "w-full h-full object-contain",
    estilo: { filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.55))" },
  },
  // FUNDO INTEGRADO — <FundoFoto> na Seção 4, ancorada à ESQUERDA (no lugar da Lebre grande),
  // recortada na bailarina embaixo da mesa. O scrim escurece o lado direito (atrás do texto).
  //   w-[60%] left-0   → a foto ocupa a metade-esquerda do bloco.
  //   object-[50%_42%] → centraliza no rosto da bailarina + mesa.
  //   scrim 90deg      → transparente à esquerda (bailarina), escuro à direita (texto + xícaras).
  fotoSecao4: {
    mostrar: true,
    src: "/fotos/secao-4.jpg",
    alt: "A bailarina sob a mesa — cena do espetáculo Lebre no País do Chá",
    classe: "inset-y-0 left-0 w-full md:w-[60%] h-full object-cover object-[50%_42%]",
    scrim: "linear-gradient(90deg, rgba(15,14,18,0.22) 0%, rgba(15,14,18,0.34) 32%, rgba(15,14,18,0.78) 54%, rgba(15,14,18,0.95) 72%)",
  },

  // ─── SEÇÃO 5 · DA TERAPIA PARA OS PALCOS ──────────────────────────
  // FUNDO INTEGRADO — <FundoFoto> na Seção 5 (atrás do texto), com fade no topo e na base
  //   (a máscara default mata o "corte seco" — a imagem dissolve nas ondas em vez de cortar reto).
  //   object-[50%_32%] → sobe o recorte pra não cortar as cabeças da roda de conversa.
  //   scrim 180deg     → escuro em cima/baixo, clareando no meio pra imagem aparecer.
  fotoSecao5: {
    mostrar: true,
    src: "/fotos/secao-5.jpg",
    alt: "Roda de conversa após a sessão — Lebre no País do Chá",
    classe: "inset-0 w-full h-full object-cover object-[50%_32%]",
    scrim: "linear-gradient(180deg, rgba(15,14,18,0.92) 0%, rgba(15,14,18,0.62) 48%, rgba(15,14,18,0.88) 100%)",
  },
} satisfies Record<string, ImgConf>;
