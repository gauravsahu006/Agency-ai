import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const HereSection1 = () => {
  return (
    <section className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-4- text-center w-full overflow-hidden dark:bg-black text-gray-700 dark:text-white">

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
        <img className='w-20' src={assets.group_profile} alt="" />
        <p className='text-xs font-medium'>Trusted by 10k+ people</p>
      </motion.div>
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-semibold mt-6 leading-tight">
        Turning imagination into{" "}
        <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base dark:text-white/75">
        Creating meaningful connections and turning big ideas into interactive digital experiences.
      </motion.p>

      {/* Image Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9}}
        whileInView={{ opacity: 1, scale:1 }}
        transition={{ duration: 0.6, delay: 2 }}
        viewport={{ once: true }}

        className="reletive">
        <img src={assets.hero_img} alt="" className='w-full max-w-6xl' />
        <img src={assets.bgImage1} alt="" className='absolute -top-90 -right-40 sm:top-100 sm:right-70 -z-1 dark:hidden' />
      </motion.div>
    </section>
  )
}

export default HereSection1
