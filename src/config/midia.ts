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
  // FAIXA full-bleed (borda a borda) — renderizada por <FotoFaixa> na Seção 2.
  // Sem rounded/shadow/max-w de propósito: numa faixa eles voltam a virar "quadro".
  fotoSecao2: {
    mostrar: true,
    src: "/fotos/secao-2.jpg",
    alt: "Cena do espetáculo Lebre no País do Chá",
    classe: "w-full h-[460px] md:h-[640px] object-cover object-center",
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
    estilo: { mixBlendMode: "multiply", background: "transparent" },
  },
  highlightIcone2: {
    mostrar: true,
    src: xicaras02,
    alt: "A Ponte para a Realidade",
    classe: "w-full h-full object-contain",
    estilo: { mixBlendMode: "multiply", background: "transparent" },
  },
  highlightIcone3: {
    mostrar: true,
    src: xicaras03,
    alt: "Sua Voz de Volta",
    classe: "w-full h-full object-contain",
    estilo: { mixBlendMode: "multiply", background: "transparent" },
  },
  // FAIXA full-bleed — renderizada por <FotoFaixa> na Seção 4.
  fotoSecao4: {
    mostrar: true,
    src: "/fotos/secao-4.jpg",
    alt: "Roda de conversa após o espetáculo Lebre no País do Chá",
    classe: "w-full h-[460px] md:h-[640px] object-cover object-center",
  },

  // ─── SEÇÃO 5 · DA TERAPIA PARA OS PALCOS ──────────────────────────
  // FAIXA full-bleed — renderizada por <FotoFaixa> na Seção 5.
  fotoSecao5: {
    mostrar: true,
    src: "/fotos/secao-5.jpg",
    alt: "Luiza Barbosa em cena no espetáculo Lebre no País do Chá",
    classe: "w-full h-[400px] md:h-[600px] object-cover object-center",
  },
} satisfies Record<string, ImgConf>;
