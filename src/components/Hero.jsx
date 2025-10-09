import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";

export default function Hero() {
  const texts = ["DEVELOPING", "CREATIVITY", "DESIGNING"];
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImage =
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80";

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center h-screen overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        className="relative z-10 text-white px-6 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm md:text-base tracking-[0.1em] text-gray-300 uppercase mb-2">
          M.Syaifullah - Web Developer
        </p>

        <div className="relative h-16 md:h-20 flex items-center justify-center perspective">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentText}
              className="absolute text-5xl md:text-5xl font-extrabold text-orange-500 uppercase"
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {texts[currentText]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <p className="mt-3 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I’m a Creative Developer who turns ideas into elegant and functional websites.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <a href="https://www.linkedin.com/in/m-syaifullah-769920302/?isSelfProfile=true" target="_blank" className="hover:text-orange-400 transition">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com" target="_blank" className="hover:text-orange-400 transition">
            <Github size={20} />
          </a>
        </div>

        <motion.div
          className="mt-10 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <p className="text-sm text-gray-400 mb-2 tracking-widest uppercase">
            Scroll Down
          </p>
          <ChevronDown className="text-orange-500" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
