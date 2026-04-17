import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Programa = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#1a1a1a] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-display mb-6"
        >
          Programa do espetáculo
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-20 h-px bg-[#C9A84C] mx-auto mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-cursive text-4xl sm:text-5xl md:text-6xl text-[#F5F0E8] mb-6 leading-tight"
        >
          Lebre no País do Chá
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-[#F5F0E8]/70 text-base md:text-lg mb-10 leading-relaxed"
        >
          Veja o programa completo do espetáculo — ficha técnica, textos e
          créditos da temporada 2026.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          href="/programa-lebre.pdf"
          download
          className="inline-flex items-center gap-3 px-8 py-4 border border-[#C9A84C] text-[#C9A84C] uppercase tracking-[0.25em] text-xs md:text-sm hover:bg-[#C9A84C] hover:text-[#1a1a1a] transition-colors duration-300"
        >
          <Download className="w-4 h-4" />
          Baixar programa (PDF)
        </motion.a>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="w-20 h-px bg-[#C9A84C] mx-auto mt-12 mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="font-cursive text-sm text-[#F5F0E8]/40"
        >
          "Quando o chá esfriar, as tortas endurecerem… só sobrará eu."
        </motion.p>
      </div>
    </div>
  );
};

export default Programa;
