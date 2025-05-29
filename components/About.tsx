"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <Image
                src="https://res.cloudinary.com/dqx2hecxm/image/upload/v1748451213/AJAY_symnbh.jpg"
                alt="AJAYRAJ A R"
                fill
                className="rounded-full object-fill p-0.5 border-4 border-blue-600"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Full Stack Developer with a Passion for Innovation</h3>

            <p className="text-lg mb-6">
              I'm a dedicated Full Stack Developer with over 2 years of experience in building modern, scalable web
              applications. My journey in software development has been driven by curiosity and a constant desire to
              learn new technologies.
            </p>

            <p className="text-lg mb-6">
              I specialize in React, Next.js, and Node.js, with extensive experience in both SQL and NoSQL databases. I
              enjoy creating seamless user experiences and robust backend systems that power modern applications.
            </p>

            <p className="text-lg mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-700 px-4 py-2 rounded-lg">
                <span className="text-blue-400 font-semibold">2+</span>
                <span className="text-gray-300 ml-2">Years Experience</span>
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-lg">
                <span className="text-blue-400 font-semibold">10+</span>
                <span className="text-gray-300 ml-2">Projects Completed</span>
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-lg">
                <span className="text-blue-400 font-semibold">5+</span>
                <span className="text-gray-300 ml-2">Technologies Mastered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
