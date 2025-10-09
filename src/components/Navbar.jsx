import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // ikon hamburger & close

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

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

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <a href="#hero" className="hover:text-orange-500 transition font-bold">Home</a>
          <a href="#about" className="hover:text-orange-500 transition font-bold">About</a>
          <a href="#skills" className="hover:text-orange-500 transition font-bold">Skills</a>
          <a href="#projects" className="hover:text-orange-500 transition font-bold">Projects</a>
          <a href="#contact" className="hover:text-orange-500 transition font-bold">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-100 focus:outline-none">
            {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md text-gray-200 flex flex-col items-center py-6 space-y-4 transition-all">
          <a href="#hero" onClick={toggleMobileMenu} className="hover:text-orange-500 font-bold">Home</a>
          <a href="#about" onClick={toggleMobileMenu} className="hover:text-orange-500 font-bold">About</a>
          <a href="#skills" onClick={toggleMobileMenu} className="hover:text-orange-500 font-bold">Skills</a>
          <a href="#projects" onClick={toggleMobileMenu} className="hover:text-orange-500 font-bold">Projects</a>
          <a href="#contact" onClick={toggleMobileMenu} className="hover:text-orange-500 font-bold">Contact</a>
        </div>
      )}
    </nav>
  );
}
