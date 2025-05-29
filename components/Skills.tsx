"use client"

import { motion } from "framer-motion"
import { skillsData } from "@/lib/data"
import SkillTabs from "./skill-tabs"

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-600 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">{category.icon}</span>
                {category.category}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-300">{skill.name}</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-700 rounded-full h-2 mr-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-blue-600 h-2 rounded-full"
                        />
                      </div>
                      <span className="text-blue-400 text-sm font-medium">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SkillTabs />
        </motion.div>

      </div>
    </section>
  )
}
