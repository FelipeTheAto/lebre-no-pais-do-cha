import { motion } from "framer-motion";
import FundoFoto from "@/components/FundoFoto";
import { midia } from "@/config/midia";

const AuthoritySection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-40 bg-[hsl(252,15%,12%)]">
      {/* Imagem integrada como fundo + scrim escuro (painel: midia.ts → "fotoSecao5") */}
      <FundoFoto conf={midia.fotoSecao5} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <p className="font-display text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-brand-lavender/60 mb-4">Origem</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-brand-lavender">
              Da <span className="font-cursive text-primary text-3xl sm:text-4xl md:text-5xl font-extrabold">terapia</span> para os palcos.
            </h2>
            <p className="text-base md:text-xl leading-relaxed text-brand-lavender/85 max-w-3xl">Escrito por <span className="font-cursive">Luiza Barbosa</span> a partir de sua própria jornada, o espetáculo mobiliza talentos do interior do Paraná para dar voz à dependência emocional em amizades — um tema urgente, mas ainda subestimado.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 md:mt-12 border-l-4 border-primary pl-6 sm:pl-8 py-4">

            <p className="font-cursive text-xl sm:text-2xl md:text-3xl text-brand-lavender/75">
              "Por trás de cada fala, há uma história."
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default AuthoritySection;