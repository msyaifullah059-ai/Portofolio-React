// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Facebook, } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      link: "mailto:msyaifullah059@gmail.com",
      desc: "Let’s collaborate or chat through email — I’ll get back to you soon.",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      link: "https://www.instagram.com/m.s_ipul10/",
      desc: "Follow my journey and see what I’m building behind the scenes.",
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      title: "Facebook",
      link: "https://web.facebook.com/ipul.brandal.39?locale=id_ID",
      desc: "Let’s connect and talk about web development ideas.",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-[#0b0b0b] to-[#131313] text-gray-300 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Let’s Build Something Great
      </motion.h2>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
        I’m always open to new projects, collaborations, or just a friendly chat
        about tech. Feel free to reach out through any of the platforms below 👇
      </p>

      {/* Contact Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {contacts.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ duration: 0.3 }}
            className="group bg-[#1a1a1a]/60 border border-gray-800 hover:border-orange-500/50 
                       shadow-lg hover:shadow-orange-500/10 rounded-2xl p-6 w-64 
                       text-center transition-all backdrop-blur-md"
          >
            <div className="flex justify-center mb-3 text-orange-400 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg text-white mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </motion.a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-20 text-center">
        <motion.a
          href="mailto:msyaifullah059@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center 
                    bg-orange-500 text-white px-8 py-3 
                    rounded-xl font-semibold shadow-md 
                    hover:bg-orange-600 hover:shadow-orange-500/40 
                    transition-all duration-300"
        >
          Let’s Talk
        </motion.a>
      </div>

    </motion.section>
  );
}
