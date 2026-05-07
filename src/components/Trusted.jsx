import React from "react";
import { company_logos } from "../assets/assets";
import { motion } from "motion/react";

export default function Trusted() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="services" className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:bg-black dark:text-white/80">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}

        className="text-gray-500 text-sm mb-6 dark:text-white/80">
        Trusted by Leading Companies
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-center gap-10 text-lg font-semibold Ftext-gray-600">
        {company_logos.map((logo, index) => (
          <motion.img
            variants={{
              hidden: { opacity: 0 , y: 10},
              visible: {opacity:1 , y: 0},
            }}
            transition={{duration: 0.4}}
            key={index} src={logo} alt="" className="max-h-5 sm:max-h-6 dark:drop-shadow-xl" />
        ))}
      </motion.div>
    </motion.div>
  );
}