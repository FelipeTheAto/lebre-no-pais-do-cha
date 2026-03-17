import { motion } from "framer-motion";

const PersonificationSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-[hsl(200,7%,16%)] via-[hsl(200,7%,20%)] to-[hsl(200,7%,16%)]">
      {/* Decorative fragmented words */}
      <div className="absolute top-20 right-10 opacity-[0.06] hidden lg:block">
        <p className="font-display text-[10rem] font-extrabold leading-none" style={{ transform: 'rotate(3deg)' }}>
          DESL<br />
          <span className="ml-16">OCA</span><br />
          <span className="ml-8">DA</span>
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-brand-lavender">

            Um diálogo entre o{" "}
            <span className="font-cursive text-primary font-extrabold text-3xl sm:text-4xl md:text-5xl">texto</span> e o{" "}
            <span className="font-cursive text-primary text-3xl sm:text-4xl md:text-5xl font-extrabold">corpo</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-xl md:text-2xl leading-relaxed text-brand-lavender/80 max-w-3xl mx-auto">

            No palco, a Lebre não está <span className="font-cursive text-2xl font-extrabold">sozinha</span>. Uma bailarina de jazz personifica a sua <span className="font-cursive text-primary">consciência</span>. Enquanto a protagonista fala, o movimento expressa a batalha silenciosa entre a razão e a emoção, preenchendo as lacunas onde as palavras <span className="font-cursive">falham</span>.
          </motion.p>

          {/* Visual separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-lg mx-auto" />


          {/* Duality visual */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex items-center justify-center gap-12 md:gap-20">

            <div className="text-center">
              <p className="font-display text-2xl sm:text-4xl md:text-6xl font-bold text-primary opacity-80">FAN</p>
              <p className="font-display text-2xl sm:text-4xl md:text-6xl font-bold text-primary opacity-60 ml-2 sm:ml-4">TA</p>
              <p className="font-display text-2xl sm:text-4xl md:text-6xl font-bold text-primary opacity-80 ml-4 sm:ml-8">SIA</p>
            </div>
            <div className="w-px h-20 sm:h-32 bg-brand-lavender/20" />
            <div className="text-center">
              <p className="font-display text-2xl sm:text-4xl md:text-6xl font-bold text-brand-lavender/30 rotate-180">REALI</p>
              <p className="font-display text-2xl sm:text-4xl md:text-6xl font-bold text-brand-lavender/20 ml-2 sm:ml-4 rotate-180">DADE</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default PersonificationSection;