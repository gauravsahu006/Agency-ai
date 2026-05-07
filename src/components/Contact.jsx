import React from "react";
import toast from "react-hot-toast";
import { motion } from "motion/react";

export default function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "94e6890c-eff7-47a1-a2fa-a84ca83d5b1f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Thank you for your submission!')
        event.target.reset();
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  };


  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="contact-us" className="mt-24 px-4 text-center">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white">
        Reach out to us
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-500 mt-3 max-w-xl mx-auto dark:text-white/80">
        Ready to grow your brand? Let’s connect and build something exceptional together.
      </motion.p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 , delay: 0.4}}
        viewport={{ once: true }}
        onSubmit={onSubmit} className="mt-12 max-w-3xl mx-auto text-left">

        {/* Row */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Name */}
          <div>
            <label className="text-sm text-gray-600 dark:text-white/80">Your name</label>
            <div className="mt-1 flex items-center border rounded-lg px-3 py-2 bg-white dark:bg-transparent">
              <span className="text-gray-400 mr-2">👤</span>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full outline-none text-sm "
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600 dark:text-white/80">Email id</label>
            <div className="mt-1 flex items-center border rounded-lg px-3 py-2 bg-white dark:bg-transparent">
              <span className="text-gray-400 mr-2">✉️</span>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="mt-6">
          <label className="text-sm text-gray-600 dark:text-white/80">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="5"
            className="mt-1 w-full border rounded-lg px-3 py-2 outline-none text-sm bg-white dark:bg-transparent"
          ></textarea>
        </div>

        {/* Button */}
        <button
          id="contact-us"
          type="submit"
          className="mt-6 bg-linear-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm hover:opacity-90 transition"
        >
          Submit →
        </button>
      </motion.form>
    </motion.section>
  );
}