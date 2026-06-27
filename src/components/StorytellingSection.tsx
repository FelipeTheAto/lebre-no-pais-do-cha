import { motion } from "framer-motion";
import FundoFoto from "@/components/FundoFoto";
import { midia } from "@/config/midia";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const StorytellingSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-40 bg-[hsl(252,15%,12%)]">
      {/* Foto integrada de fundo + scrim (painel: midia.ts → "fotoSecao2") */}
      <FundoFoto conf={midia.fotoSecao2} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12">
        <div className="ml-auto max-w-xl lg:max-w-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-8 md:mb-12">

            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-brand-lavender">
              Você conhece a <span className="font-cursive text-primary text-3xl sm:text-4xl md:text-5xl font-extrabold">história</span>.
            </h2>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-brand-red">
              Mas nunca a viu por este <span className="font-cursive text-3xl sm:text-4xl md:text-5xl font-extrabold">ângulo</span>.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-8">

            <p className="text-base md:text-lg leading-relaxed text-brand-lavender/85">
              No clássico, a Lebre de Março é apenas uma convidada <span className="font-cursive text-xl font-extrabold">excêntrica</span>. Aqui, ela assume o centro do palco para revelar o que acontece nos bastidores de uma relação <span className="font-cursive text-brand-red">tóxica</span>.
            </p>

            <div className="space-y-6">
              {[
              {
                title: "Do Isolamento à Manipulação",
                text: "Após ser expulsa da mesa do Chapeleiro, a Lebre busca refúgio em uma amizade com a Rainha de Copas."
              },
              {
                title: "A Armadilha Invisível",
                text: "O que parecia conforto torna-se um jogo psicológico de controle e dependência devastadora."
              },
              {
                title: "O Impacto Real",
                text: "Uma metáfora lúdica para tratar de temas urgentes: como as amizades podem se tornar espaços de abuso e comprometer nossa saúde mental."
              }].
              map((item, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="border-l-4 border-brand-red pl-6 py-2">

                  <h3 className="font-display text-xl font-bold mb-2 text-brand-lavender">
                    {item.title}
                  </h3>
                  <p className="text-brand-lavender/70 leading-relaxed">{item.text}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default StorytellingSection;
