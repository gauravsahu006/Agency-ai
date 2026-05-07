import React from "react";
import { motion } from "motion/react";

export default function WorkCard({ image, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group">

      {/* Image */}
      <div className="rounded-2xl overflow-hidden bg-blue-100 p-4 transition-all duration-300 group-hover:scale-105 ">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-full h-45 object-cover"
        />
      </div>

      {/* Text */}
      <div className="mt-4">
        <h3 className="font-semibold text-gray-800 dark:text-white/90">{title}</h3>
        <p className="text-sm text-gray-500 mt-1 dark:text-white/70">{desc}</p>
      </div>
    </motion.div>
  );
}