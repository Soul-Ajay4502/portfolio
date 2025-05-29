"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { useForm } from '@formspree/react'
import Toast from "./toas-by-me"
import { useEffect } from "react"


export default function Contact() {
  const [formState, handleSubmit] = useForm("mpwdvowg");

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">rajay5767@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white">+91 9846027693</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">Kochi,Kerala,India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Soul-Ajay4502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Github size={20} className="text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ajayraj-a-r/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      {formState.succeeded && (
        <Toast message="Message sent successfully!" type="success" />
      )}
    </section>
  )
}
