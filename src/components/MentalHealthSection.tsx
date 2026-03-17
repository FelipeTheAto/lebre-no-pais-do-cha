import { motion } from "framer-motion";
import lebre05 from "@/assets/lebre-05.png";
import xicaras01 from "@/assets/xicaras-01.png";
import xicaras02 from "@/assets/xicaras-02.png";
import xicaras03 from "@/assets/xicaras-03.png";

const highlights = [
{
  image: xicaras01,
  title: "A Identificação",
  text: "Veja como as amizades podem se tornar espaços de abuso, impactando sua personalidade de forma devastadora."
},
{
  image: xicaras02,
  title: "A Ponte para a Realidade",
  text: "Rodas de conversa após as sessões com especialistas em saúde mental para transformar a metáfora em ferramenta prática."
},
{
  image: xicaras03,
  title: "Sua Voz de Volta",
  text: "Identifique dinâmicas de poder e retome o controle da sua própria história."
}];


const MentalHealthSection = () => {
  return (
    <section className="relative py-16 md:py-32 bg-gradient-to-b from-[hsl(30,77%,69%)] via-[hsl(30,70%,72%)] to-[hsl(30,60%,78%)] overflow-hidden">
      {/* Decorative teacup backgrounds — hidden on small screens */}
      <img src={xicaras01} alt="" className="absolute top-12 right-[6%] w-28 md:w-40 opacity-10 rotate-12 pointer-events-none select-none hidden sm:block" style={{ mixBlendMode: 'multiply', background: 'transparent' }} />
      <img src={xicaras01} alt="" className="absolute bottom-16 left-[4%] w-24 md:w-32 opacity-[0.07] -rotate-[20deg] pointer-events-none select-none hidden md:block" style={{ mixBlendMode: 'multiply', background: 'transparent' }} />
      <img src={xicaras01} alt="" className="absolute top-1/2 right-[2%] w-20 md:w-28 opacity-[0.06] rotate-[30deg] pointer-events-none select-none hidden md:block" style={{ mixBlendMode: 'multiply', background: 'transparent' }} />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-10 md:mb-14 ml-auto text-left sm:text-right">

          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-foreground">
            Não engula o que te <span className="font-cursive text-brand-red">consome</span>:
            <br className="hidden md:block" />
            aprenda a se levantar da mesa antes que o{" "}
            <span className="font-cursive text-primary">chá esfrie</span>.
          </h2>
        </motion.div>

        {/* Layout: Lebre left + text right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Lebre-05 — large, left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center lg:justify-start">

            <img
              alt="Lebre de Março em perfil — personagem fragmentada"
              className="w-[220px] sm:w-[300px] md:w-[380px] lg:w-[440px] h-auto"
              style={{ transform: 'rotate(-3deg)', mixBlendMode: 'multiply', background: 'transparent' }} src="/lovable-uploads/7619bc6b-830e-4fa6-95c6-91aaff0a10a4.png" />

          </motion.div>

          {/* Text + highlights — right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7">

            <p className="text-base md:text-xl text-foreground/85 leading-relaxed mb-8 md:mb-10">
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
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                    style={{ mixBlendMode: 'multiply', background: 'transparent' }} />

                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold mb-1 text-foreground">{item.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">{item.text}</p>
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