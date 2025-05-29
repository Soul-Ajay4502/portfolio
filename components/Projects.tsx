"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { projectsData } from "@/lib/data"

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 pb-4 relative rounded-lg overflow-hidden border border-gray-700 hover:border-blue-600 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {project.showCode ?
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                      >
                        <Github size={20} className="text-white" />
                      </a> :
                      <button
                        disabled
                        className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                      >
                        <Github size={20} className="text-white" />
                      </button>
                    }
                    {project.showDemo ? <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                      : <button
                        disabled
                        className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </button>
                    }
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-700 text-blue-400 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4 absolute bottom-5 right-4">
                {project.showCode ?
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={20} className="text-white" />
                  </a> :
                  <button
                    disabled
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={20} className="text-white" />
                  </button>
                }
                {project.showDemo ? <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </a> :
                  <button
                    disabled
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </button>
                }
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
