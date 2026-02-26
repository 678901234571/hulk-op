import React from "react";
import { motion } from "motion/react";
import { Github, MessageSquare, Twitter, Instagram } from "lucide-react";

export const SocialSidebar = () => {
  const socials = [
    { icon: Github, href: "https://github.com", color: "hover:text-white" },
    { icon: MessageSquare, href: "https://discord.gg/6dDz5RNn", color: "hover:text-[#5865F2]" },
    { icon: Twitter, href: "https://twitter.com", color: "hover:text-[#1DA1F2]" },
    { icon: Instagram, href: "https://instagram.com", color: "hover:text-[#E4405F]" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-8"
    >
      {socials.map((social, i) => (
        <motion.a
          key={i}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5, scale: 1.1 }}
          className={`text-white/20 transition-all ${social.color}`}
        >
          <social.icon size={20} />
        </motion.a>
      ))}
      <div className="w-px h-24 bg-gradient-to-b from-white/20 to-transparent self-center" />
    </motion.div>
  );
};
