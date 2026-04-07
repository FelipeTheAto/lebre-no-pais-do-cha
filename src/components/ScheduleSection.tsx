import { motion } from "framer-motion";
import { MapPin, Clock, GraduationCap } from "lucide-react";

const openShows = [
  { city: "Cascavel", venue: "Teatro Municipal Sefrin Filho", date: "17 Abr.", time: "19h30", link: "https://parallela.art.br/evento/lebre/" },
  { city: "Toledo", venue: "Teatro Municipal de Toledo", date: "29 Abr.", time: "19h30", link: "https://parallela.art.br/evento/lebre/" },
];

const studentShows = [
  { city: "Ouro Verde do Oeste", venue: "Teatro Ouro Verde", date: "24 Abr.", time: "14h" },
  { city: "Toledo", venue: "Teatro Municipal de Toledo", date: "30 Abr.", time: "10h" },
  { city: "Medianeira", venue: "Centro Popular de Cultura Arandurá (CPC Arandurá)", date: "08 Mai.", time: "14h" },
];

const ScheduleSection = () => {
  return (
    <section id="agenda" className="py-16 md:py-32 bg-gradient-to-b from-[hsl(200,7%,16%)] to-[hsl(200,7%,20%)]">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-brand-lavender">
            Escolha sua cidade e <span className="font-cursive text-primary text-3xl sm:text-4xl md:text-5xl font-extrabold">garanta</span> seu lugar:
          </h2>
          <div className="flex flex-wrap gap-4 mt-6 text-brand-lavender/60 text-sm">
            <span>Classificação: 14+</span>
            <span>•</span>
            <span>Público-alvo: Adolescentes e Jovens Adultos (14 a 26 anos)</span>
          </div>
        </motion.div>

        {/* Sessões abertas */}
        <div className="space-y-4 mb-16">
          {openShows.map((show, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 md:p-8 rounded-sm border border-brand-lavender/10 hover:border-primary/40 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary whitespace-nowrap">
                  {show.date}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-lavender group-hover:text-primary transition-colors">
                    {show.city}
                  </h3>
                  <p className="flex items-center gap-2 text-brand-lavender/60 text-sm mt-1">
                    <MapPin className="w-4 h-4 shrink-0" />
                    {show.venue}
                  </p>
                  <p className="flex items-center gap-2 text-brand-lavender/60 text-sm mt-1">
                    <Clock className="w-4 h-4 shrink-0" />
                    {show.time}
                  </p>
                </div>
              </div>
              <a
                href={show.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-unstable inline-flex items-center justify-center px-5 py-3 bg-accent text-accent-foreground font-display font-bold text-xs sm:text-sm uppercase tracking-wider rounded-sm w-full sm:w-auto md:min-w-[200px] text-center"
              >
                Garantir Minha Vaga
              </a>
            </motion.div>
          ))}
        </div>

        {/* Sessões fechadas para estudantes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-brand-lavender/80 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            Sessões exclusivas para estudantes
          </h3>
          <p className="text-brand-lavender/50 text-sm mt-2">
            Sessões fechadas para alunos do ensino fundamental e médio, mediante articulação com as escolas e secretarias de educação.
          </p>
        </motion.div>

        <div className="space-y-4">
          {studentShows.map((show, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 md:p-8 rounded-sm border border-brand-lavender/10 border-dashed opacity-80"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-lavender/40 whitespace-nowrap">
                  {show.date}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-lavender/70">
                    {show.city}
                  </h3>
                  <p className="flex items-center gap-2 text-brand-lavender/40 text-sm mt-1">
                    <MapPin className="w-4 h-4 shrink-0" />
                    {show.venue}
                  </p>
                  <p className="flex items-center gap-2 text-brand-lavender/40 text-sm mt-1">
                    <Clock className="w-4 h-4 shrink-0" />
                    {show.time}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center justify-center px-5 py-3 bg-brand-lavender/10 text-brand-lavender/50 font-display font-bold text-xs sm:text-sm uppercase tracking-wider rounded-sm w-full sm:w-auto md:min-w-[200px] text-center cursor-default select-none">
                Consulte sua escola
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
