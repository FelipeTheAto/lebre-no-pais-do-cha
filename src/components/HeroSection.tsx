import { motion } from "framer-motion";
import fundo01 from "@/assets/fundo-01.png";
import lebre01 from "@/assets/lebre-01.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(200,7%,16%)]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={fundo01}
          alt="Fundo texturizado laranja"
          className="w-full h-full object-cover"
          loading="eager" />

        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(200,7%,16%)] via-brand-dark/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-brand-lavender/80 font-display text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 md:mb-6">

              Monólogo Teatral
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-brand-lavender mb-6 md:mb-8 text-shadow-hero">

              O que acontece quando o chá <span className="font-cursive text-primary font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">esfria</span> e as luzes da mesa mais famosa da literatura se <span className="font-cursive text-primary">apagam</span>?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-brand-lavender/90 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-2xl">

              Conheça a jornada da Lebre de Março: um monólogo <span className="font-cursive font-bold text-lg md:text-xl">visceral</span> sobre a dependência emocional em amizades e a busca para recuperar a própria <span className="font-cursive">voz</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">

              <a
                href="#agenda"
                className="cta-unstable inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-accent text-accent-foreground font-display font-bold text-sm md:text-lg uppercase tracking-wider rounded-sm w-full sm:w-auto text-center">

                Garantir Minha Vaga Gratuita
              </a>
              

              
            </motion.div>
          </div>

          {/* Lebre image — floats over background + FRAGMENTADA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end z-20 lg:order-last">

            <img
              alt="Lebre de Março — personagem principal do espetáculo"
              className="w-[280px] sm:w-[400px] md:w-[560px] lg:w-[840px] h-auto object-cover"
              style={{
                transform: 'rotate(2deg)',
                mixBlendMode: 'multiply',
                background: 'transparent'
              }} src="/lovable-uploads/7174d72d-3fb9-4a58-a440-0d453f0c3c3f.png" />

          </motion.div>
        </div>
      </div>

      {/* Large asymmetric FRAGMENTADA — behind Lebre */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="absolute -bottom-4 -right-8 md:right-4 lg:right-12 select-none pointer-events-none z-0">

        <p className="font-display text-[4rem] sm:text-[6rem] md:text-[12rem] lg:text-[16rem] font-extrabold text-brand-lavender/[0.12] leading-[0.8] tracking-[-0.04em]"
        style={{ transform: 'rotate(-6deg) translateX(10%)' }}>

          FRA<br />
          <span className="ml-[-1rem] sm:ml-[-2rem] md:ml-[-3rem]">GMEN</span><br />
          <span className="ml-[1.5rem] sm:ml-[3rem] md:ml-[5rem]">TADA</span>
        </p>
      </motion.div>
    </section>);

};

export default HeroSection;