import React from "react";
import WorkCard from "./WorkCard";
import assets from "../assets/assets";
import { motion } from "motion/react";

export default function Works() {
  const works = [
    {
      title: "Mobile app marketing",
      desc: "We turn bold ideas into powerful digital solutions that connect...",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard management",
      desc: "We turn bold ideas into powerful digital solutions that connect...",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      desc: "We turn bold ideas into powerful digital solutions that connect...",
      image: assets.work_fitness_app,
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="our-work" className=" px-4 text-center">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white">
        Our latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-500 mt-3 max-w-xl mx-auto dark:text-white/80">
        Browse our portfolio of innovative digital projects that showcase creativity, performance, and results.
      </motion.p>

      {/* Cards */}
      <div
        className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {works.map((item, index) => (
          <WorkCard key={index} {...item} />
        ))}
      </div>
    </motion.section>
  );
}