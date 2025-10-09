import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import logo resmi dari Flaticon
import reactLogo from "../assets/Skills/atom.png";
import bootstrapLogo from "../assets/Skills/bootstrap.png";
import cssLogo from "../assets/Skills/css-3.png";
import htmlLogo from "../assets/Skills/html-5.png";
import jsLogo from "../assets/Skills/js.png";
import phpLogo from "../assets/Skills/php.png";
import ciLogo from "../assets/Skills/social-media.png";
import laravelLogo from "../assets/Skills/laravel.svg";
import gitLogo from "../assets/Skills/github.svg";
import vscodeLogo from "../assets/Skills/vscode.png";
import figmaLogo from "../assets/Skills/figma.svg";
import dockerLogo from "../assets/Skills/docker.svg";
import postmanLogo from "../assets/Skills/postman.png";

const categories = {
  Stack: [
    { name: "React", level: "Beginner", icon: reactLogo },
    { name: "Bootstrap", level: "Intermediate", icon: bootstrapLogo },
    { name: "CSS", level: "Intermediate", icon: cssLogo },
    { name: "HTML", level: "Advanced", icon: htmlLogo },
    { name: "JavaScript", level: "Intermediate", icon: jsLogo },
    { name: "PHP", level: "Intermediate", icon: phpLogo },
    { name: "CodeIgniter", level: "Intermediate", icon: ciLogo },
    { name: "Laravel", level: "Intermediate", icon: laravelLogo },
  ],
  Tools: [
    { name: "Git", level: "Intermediate", icon: gitLogo },
    { name: "VS Code", level: "Intermediate", icon: vscodeLogo },
    { name: "Figma", level: "Intermediate", icon: figmaLogo },
    { name: "Docker", level: "Beginner", icon: dockerLogo },
    { name: "Postman", level: "Beginner", icon: postmanLogo },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Stack");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const activeSkills = categories[activeTab];

  return (
    <motion.section
      id="skills"
      className="py-20 bg-[#0f0f0f] text-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // animasi aktif tiap kali section muncul
      transition={{ duration: 0.6 }}
    >
      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-orange-500 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        My Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto px-6">
        {/* Tabs sejajar pojok kiri atas */}
        <motion.div
          className="flex justify-start gap-4 mb-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          {Object.keys(categories).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-orange-500 text-white shadow-lg scale-105"
                    : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Skill Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
            className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"
          >
            {activeSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-gray-900/70 rounded-lg p-3 flex items-center gap-3 cursor-pointer shadow-md hover:shadow-orange-500/20 transition-all relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05 }}
              >
                {/* Border Glow */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 rounded-lg border border-orange-400/50 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}

                {/* Logo */}
                <motion.img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 z-10"
                  animate={hoveredIndex === index ? { scale: 1.2 } : { scale: 1 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />

                {/* Nama Stack & Level */}
                <div className="flex flex-col overflow-hidden z-10 relative">
                  <motion.h3
                    className="text-sm font-semibold"
                    animate={hoveredIndex === index ? { y: -4 } : { y: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    {skill.name}
                  </motion.h3>

                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.span
                        key="level"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15, ease: "easeInOut" }}
                        className="text-xs text-orange-400"
                      >
                        {skill.level}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
