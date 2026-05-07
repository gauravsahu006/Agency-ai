import React from "react";
import ServiceCard from "./ServiceCard";
import assets from "../assets/assets";
import { motion } from "motion/react";
import { delay } from "motion";

export default function Services() {

  const servicesData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.ads_icon
    },
    {
      title: 'Content marketing',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.marketing_icon
    },
    {
      title: 'Content writing',
      description: 'We turn bold ideas into powerful digital solutions that connect...',
      icon: assets.content_icon
    },
    {
      title: 'Social media',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.social_icon
    },
  ]
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="services" className="mt-20 mb-20 px-4 text-center ">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white">
        How can we help?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 , delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-500 mt-3 max-w-xl mx-auto dark:text-white/80">
        From strategy to execution, we craft digital solutions that move your business forward.
      </motion.p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">

        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.section>
  );
}