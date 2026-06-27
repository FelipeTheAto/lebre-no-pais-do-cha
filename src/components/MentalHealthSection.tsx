import { motion } from "framer-motion";
import Img from "@/components/Img";
import FundoFoto from "@/components/FundoFoto";
import { midia } from "@/config/midia";

// Os ícones de cada destaque vêm do painel (src/config/midia.ts → highlightIcone1/2/3).
const highlights = [
{
  conf: midia.highlightIcone1,
  title: "A Identificação",
  text: "Veja como as amizades podem se tornar espaços de abuso, impactando sua personalidade de forma devastadora."
},
{
  conf: midia.highlightIcone2,
  title: "A Ponte para a Realidade",
  text: "Rodas de conversa após as sessões com especialistas em saúde mental para transformar a metáfora em ferramenta prática."
},
{
  conf: midia.highlightIcone3,
  title: "Sua Voz de Volta",
  text: "Identifique dinâmicas de poder e retome o controle da sua própria história."
}];


const MentalHealthSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-40 bg-[hsl(252,15%,12%)]">
      {/* Foto integrada à esquerda (no lugar da Lebre) + scrim escurecendo o lado do texto */}
      <FundoFoto conf={midia.fotoSecao4} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-10 md:mb-14 ml-auto text-left sm:text-right">

          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-brand-lavender">
            Não engula o que te <span className="font-cursive text-brand-red">consome</span>:
            <br className="hidden md:block" />
            aprenda a se levantar da mesa antes que o{" "}
            <span className="font-cursive text-primary">chá esfrie</span>.
          </h2>
        </motion.div>

        {/* Coluna esquerda vazia (mostra a foto) + texto/destaques à direita */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          <div className="hidden lg:block lg:col-span-5" />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7">

            <p className="text-base md:text-xl text-brand-lavender/85 leading-relaxed mb-8 md:mb-10">
              Na nossa história, a <span className="font-cursive text-lg md:text-xl font-extrabold">Lebre de Março</span> foi expulsa da mesa do Chapeleiro e buscou refúgio em uma amizade perigosa com a <span className="font-cursive text-brand-red">Rainha de Copas</span>. O que parecia acolhimento revelou-se um jogo de <span className="font-cursive">controle</span> e manipulação emocional. A cena dá nome ao peso que você carrega em silêncio; a roda de conversa oferece o fôlego necessário para você aprender a <span className="font-cursive">soltá-lo</span>.
            </p>

            {/* Highlights with teacup images */}
            <div className="space-y-6 md:space-y-8">
              {highlights.map((item, i) =>
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex gap-4 md:gap-5 items-start"
                style={{ marginLeft: i > 0 ? `${i * 1.2}rem` : '0' }}>

                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                    <Img conf={item.conf} />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold mb-1 text-brand-lavender">{item.title}</h3>
                    <p className="text-brand-lavender/70 leading-relaxed text-sm sm:text-base">{item.text}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default MentalHealthSection;
