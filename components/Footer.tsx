"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400">© {new Date().getFullYear()} AJAYRAJ A R. All rights reserved.</p>
          <p className="text-gray-500 mt-2">Built with Next.js, Tailwind CSS, and Three.js</p>
        </motion.div>
      </div>
    </footer>
  )
}
