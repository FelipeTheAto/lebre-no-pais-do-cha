import { motion } from "framer-motion";
import posterVertical from "@/assets/poster-vertical.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const StorytellingSection = () => {
  return (
    <section className="py-16 md:py-32 overflow-hidden bg-gradient-to-b from-[hsl(30,60%,78%)] to-[hsl(30,77%,69%)]">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-10 md:mb-16">

          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Você conhece a <span className="font-cursive text-primary text-3xl sm:text-4xl md:text-5xl font-extrabold">história</span>.
          </h2>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-brand-red">
            Mas nunca a viu por este <span className="font-cursive text-3xl sm:text-4xl md:text-5xl font-extrabold">ângulo</span>.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-8">

            <p className="text-base md:text-lg leading-relaxed text-foreground/80">
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

                  <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{item.text}</p>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative">

            <div className="relative overflow-hidden">
              <img

                alt="Poster do espetáculo Lebre no País do Chá"
                className="w-full h-auto"
                loading="lazy"
                style={{ mixBlendMode: 'multiply', background: 'transparent' }} src="/lovable-uploads/f43365b1-a9ab-4465-9c6b-d59fb37c6b94.png" />

            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default StorytellingSection;