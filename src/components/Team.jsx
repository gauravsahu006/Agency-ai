import React from "react";
import TeamCard from "./TeamCard";
import { teamData } from '../assets/assets'
import { motion } from "motion/react";

export default function Team() {
  const team = [
    {
      name: "Haley Carter",
      role: "CEO & founder",
      image: "https://i.pravatar.cc/100?img=11",
    },
    {
      name: "James Walker",
      role: "Ads manager",
      image: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Jessica Morgan",
      role: "Vice president",
      image: "https://i.pravatar.cc/100?img=13",
    },
    {
      name: "Ashley Bennett",
      role: "Marketing & sales",
      image: "https://i.pravatar.cc/100?img=14",
    },
    {
      name: "Emily Parker",
      role: "Content marketer",
      image: "https://i.pravatar.cc/100?img=15",
    },
    {
      name: "Ryan Mitchell",
      role: "Content writer",
      image: "https://i.pravatar.cc/100?img=16",
    },
    {
      name: "Megan Brooks",
      role: "Performance manager",
      image: "https://i.pravatar.cc/100?img=17",
    },
    {
      name: "Amber Foster",
      role: "Senior writer",
      image: "https://i.pravatar.cc/100?img=18",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      className="mt-24 px-4 text-center">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white">
        Meet the team
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-500 mt-3 max-w-xl mx-auto dark:text-white/80">
        A passionate team of digital experts dedicated to your brand’s success.
      </motion.p>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
        {teamData.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </motion.div> 
    </motion.section>
  );
}