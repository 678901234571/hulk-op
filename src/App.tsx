/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Navbar, Hero, HomeDetails, About, Projects, Ventures, Skills, Contact } from "./components/PortfolioSections";
import { ScrollToTop } from "./components/ScrollToTop";
import { SocialSidebar } from "./components/SocialSidebar";
import { LoadingScreen } from "./components/LoadingScreen";
import { MusicPlayer } from "./components/MusicPlayer";
import { Footer } from "./components/Footer";
import { motion, useScroll, useSpring, AnimatePresence, useTransform } from "motion/react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="pt-20"
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<PageWrapper><Hero /><HomeDetails /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /><Skills /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/ventures" element={<PageWrapper><Ventures /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <BrowserRouter>
      <LoadingScreen />
      <div className="relative min-h-screen bg-bg-dark selection:bg-brand-primary/30">
        <div className="fixed inset-0 pointer-events-none noise z-[100]" />
        <ScrollToTop />
        <SocialSidebar />
        <MusicPlayer />
        
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary z-[60] origin-left"
          style={{ scaleX }}
        />

        <Navbar />
        
        <main>
          <AnimatedRoutes />
        </main>

        <Footer />

        {/* Decorative Background Elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 overflow-hidden">
          <motion.div style={{ y: y1 }} className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/20 blur-[150px] rounded-full" />
          <motion.div style={{ y: y2 }} className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/20 blur-[150px] rounded-full" />
          <motion.div style={{ y: y3 }} className="absolute top-[40%] right-[20%] w-[30%] h-[30%] bg-brand-accent/10 blur-[120px] rounded-full" />
          <motion.div style={{ y: y1 }} className="absolute bottom-[30%] left-[10%] w-[25%] h-[25%] bg-pink-500/10 blur-[100px] rounded-full" />
          <motion.div style={{ y: y2 }} className="absolute top-[70%] left-[50%] w-[20%] h-[20%] bg-purple-500/10 blur-[80px] rounded-full" />
        </div>
      </div>
    </BrowserRouter>
  );
}
