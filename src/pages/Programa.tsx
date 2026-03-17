import { motion } from "framer-motion";

const Programa = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-6">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-display mb-6"
        >
          Programa
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
          className="font-cursive text-4xl sm:text-5xl md:text-7xl text-[#F5F0E8] mb-4"
        >
          Lebre no País do Chá
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-[#C9A84C] uppercase tracking-[0.25em] text-sm md:text-base mb-8"
        >
          Fragmentada
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="w-20 h-px bg-[#C9A84C] mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="font-cursive text-lg text-[#F5F0E8]/40"
        >
          Em breve
        </motion.p>
      </div>
    </div>
  );
};

export default Programa;
