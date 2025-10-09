import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-md text-gray-200"
          : "bg-transparent text-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
            className={`text-2xl font-bold ${
                scrolled ? "text-orange-500" : "text-orange-500"
            }`}
            >
            MS<span className="text-gray-100">Dev.</span>
        </h1>

        <div className="space-x-6 hidden md:block">
          <a href="#hero" className="hover:text-orange-500 transition font-bold">Home</a>
          <a href="#about" className="hover:text-orange-500 transition font-bold">About</a>
          <a href="#skills" className="hover:text-orange-500 transition font-bold">Skills</a>
          <a href="#projects" className="hover:text-orange-500 transition font-bold">Projects</a>
          <a href="#contact" className="hover:text-orange-500 transition font-bold">Contact</a>
        </div>
      </div>
    </nav>
  );
}
