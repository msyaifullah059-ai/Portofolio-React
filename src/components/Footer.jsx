import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {

  const [showScroll, setShowScroll] = useState(false);

  // Deteksi posisi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) setShowScroll(true);
      else setShowScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0b0b0b] border-t border-gray-800 py-10 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side - Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center md:text-left"
        >
          <h3 className="text-xl font-bold text-white">
            <span className="text-orange-500">MS</span>
            <span className="text-gray-200">Dev.</span>
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Turning ideas into impactful digital experiences.
          </p>
        </motion.div>

        {/* Right side - Copyright */}
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm text-gray-500 text-center md:text-right"
        >
          © {new Date().getFullYear()} — Crafted with ❤️ by{" "}
          <span className="text-orange-500">MS</span>
          <span className="text-gray-200">Dev</span>.
        </motion.p>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg shadow-orange-500/20 transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </footer>
  );
}
