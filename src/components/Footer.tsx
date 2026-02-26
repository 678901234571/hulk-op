import React from "react";
import { motion } from "motion/react";

export const Footer = () => {
  return (
    <footer className="w-full py-12 flex flex-col items-center justify-center gap-4 relative z-10">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        <p className="text-white/10 text-sm font-mono tracking-[0.3em] uppercase select-none hover:text-white/30 transition-colors duration-500">
          hulkdev@2007
        </p>
        <div className="w-12 h-[1px] bg-white/5 mt-4" />
      </motion.div>
    </footer>
  );
};
