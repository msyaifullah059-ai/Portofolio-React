import React, { useState } from "react";
import { motion } from "framer-motion";

import akademikImg from "../assets/Project/akademik.png";
import monitoringImg from "../assets/Project/monitoring.png";
import webprofileImg from "../assets/Project/web-profile.png";
import inventoryImg from "../assets/Project/inventory.jpeg";
import timesheetImg from "../assets/Project/timesheet.jpeg";

const projects = [
  {
    title: "Academic Information Systems",
    desc: "A comprehensive Academic Information System designed to efficiently manage student data, academic schedules, grades, teacher information, and more through a user-friendly interface.",
    stack: ["PHP", "CodeIgniter", "MariaDB", "Bootstrap"],
    image: akademikImg,
  },
  {
    title: "Activity Monitoring System",
    desc: "A web-based Activity Monitoring System designed to track, manage, and evaluate daily activities and project progress in real-time, improving transparency and productivity.",
    stack: ["PHP", "CodeIgniter", "MariaDB", "Bootstrap"],
    image: monitoringImg,
  },
  {
    title: "School Profile Web",
    desc: "A modern and responsive School Profile Website designed to showcase school identity, achievements, and programs with a clean and engaging user experience.",
    stack: ["WordPress", "Elementor"],
    image: webprofileImg,
  },
  {
    title: "Inventory Management",
    desc: "A web-based application designed to help companies efficiently manage and consolidate inventory. This system makes it easy for users to record, consolidate, and analyze inventory data stored across multiple locations in real time.",
    stack: ["React", "Laravel", "API", "Docker"],
    image: inventoryImg,
  },
  {
    title: "Timesheet App",
    desc: "A web-based application for digitally recording and managing operator time. It features CRUD, search, date filters, Excel export, and role-based access control, all in a modern and responsive design.",
    stack: ["Laravel", "React", "Docker", "API"],
    image: timesheetImg,
  },
];

export default function Projects() {
  const [visible, setVisible] = useState(3);

  const handleLoadMore = () => {
    setVisible((prev) => (prev >= projects.length ? 3 : prev + 3));
  };

  return (
    <motion.section
      id="projects"
      className="py-24 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] text-gray-100 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl font-extrabold mb-14 text-transparent bg-clip-text bg-gradient-to-r text-orange-500"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 max-w-7xl mx-auto px-6">
        {projects.slice(0, visible).map((p, i) => (
          <motion.div
            key={i}
            className="relative bg-[#141414]/80 backdrop-blur-lg border border-gray-700 hover:border-orange-500/50 rounded-2xl overflow-hidden shadow-xl group transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="overflow-hidden">
              <motion.img
                src={p.image}
                alt={p.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6 text-left">
              <h3 className="font-bold text-xl mb-2 text-orange-500 group-hover:text-orange-400 transition">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-orange-500/10 text-orange-500 border border-orange-400/20 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <motion.button
          onClick={handleLoadMore}
          className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-orange-600 hover:shadow-orange-500/40 transition-all duration-300 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          {visible >= projects.length ? "Show Less" : "Load More"}
        </motion.button>
      </div>

    </motion.section>
  );
}
