import React, { useEffect } from "react";
import { motion } from "framer-motion";
import portfolioImg from "../assets/Project/profile.jpeg";

export default function About() {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <motion.section
      id="about"
      className="relative py-24 bg-[#0f0f0f] text-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* IMAGE SECTION */}
        <motion.div
          className="relative flex-1 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <motion.img
              src={portfolioImg}
              alt="Profile"
              className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover shadow-xl border-4 border-gray-700 select-none pointer-events-none"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* WATERMARK */}
            <span className="absolute bottom-3 right-4 text-white/70 text-xs md:text-sm font-semibold select-none">
              © MSDev.
            </span>
          </div>
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold mb-6 text-orange-500">
            About Me
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
            I’m a graduate of the{" "}
            <span className="text-orange-500 font-semibold">
              Informatics Department
            </span>{" "}
            at Ahmad Dahlan University. I am highly motivated to learn,
            adaptable to technological developments, and passionate about
            software and web development. I am a strong communicator, work both
            in teams and independently, and utilize my analytical skills to
            efficiently solve technical problems.
          </p>

          {/* BUTTONS */}
          <div className="flex justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1663JKjKMdyHKO8uK_InMYBNEu0iJQm8L/view?usp=sharing"
              download="Syaifullah_Resume.pdf"
              className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-orange-600 transition flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
