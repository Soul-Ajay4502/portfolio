"use client"

import { motion } from "framer-motion"
import { experienceData } from "@/lib/data"

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-600"></div>

          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900 z-10"></div>

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                title={experience.location || "Kochi,Kerala,India"}
              >
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-600 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{experience.position}</h3>
                    <span className="text-blue-400 font-medium">{experience.duration}</span>
                  </div>

                  <h4 className="text-lg text-blue-400 mb-3">{experience.company}</h4>
                  <p className="text-gray-300 mb-4">{experience.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-700 text-blue-400 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
