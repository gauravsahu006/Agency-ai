import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

export default function Footer({ theme }) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-24 bg-gray-50 border-t dark:bg-black dark:text-white">

      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="" className="w-32 sm:w-44" />
          </div>

          <p className="text-gray-500 mt-4 text-sm max-w-md dark:text-white/60">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>

          {/* Links */}
          <div className="flex gap-6 mt-6 text-sm text-gray-600 dark:text-white/60">
            <a className="hover:text-primary" href="#">Home</a>
            <a className="hover:text-primary" href="#services">Services</a>
            <a className="hover:text-primary" href="#our-work">Our work</a>
            <a className="hover:text-primary" href="#contact-us">Contact Us</a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-gray-800 dark:text-white/80">
            Subscribe to our newsletter
          </h3>

          <p className="text-gray-500 text-sm mt-2 dark:text-white/60">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          {/* Input */}
          <div className="flex mt-4 gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none bg-white dark:bg-black"
            />

            <button className="bg-linear-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-lg text-sm hover:opacity-90">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm dark:text-white/60">
            Copyright 2025 © agency.ai - All Right Reserved.
          </p>

          {/* Social */}
          <div className="flex gap-4 text-gray-500 text-lg">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.instagram_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
      </motion.div>

    </motion.footer>
  );
}