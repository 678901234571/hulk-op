import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-bg-dark flex flex-col items-center justify-center p-6"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-12"
          >
            <img 
              src="https://cdn.discordapp.com/attachments/1338476072160727091/1476474414295158915/hulklogo-removebg-preview.png?ex=69a14173&is=699feff3&hm=5df0e8d1b5eea4539652ec2e563f2364c6b0882971b402f4e6c4800714a2d92f&" 
              alt="Hulk Logo" 
              className="w-32 h-32 object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden relative">
            <motion.div 
              className="h-full bg-brand-accent"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="mt-4 font-mono text-[10px] text-white/20 uppercase tracking-widest">
            Initializing Systems... {Math.round(progress)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
