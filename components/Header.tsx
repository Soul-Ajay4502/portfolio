"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Download, Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import * as gtag from '@/lib/gtag';


const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    gtag.pageview(activeSection); // or manually track hash changes if needed
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }
  const handleDownloadResume = () => {
    const resumePath = "/assets/AJAYRAJ_TWO_YEAR_EXPERIENCED_FULLSTACK_DEVELOPER_RESUME.pdf"; // relative to public/
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "AJAYRAJ_FULLSTACK_DEVELOPER_RESUME.pdf"; // File name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-bold text-white">
            AJAYRAJ A R
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center ">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-200 ${activeSection === item.href.substring(1) ? "text-blue-400" : "text-gray-300 hover:text-white"
                  }`}
              >
                {item.name}
              </button>
            ))}
            <Button variant="outline" size="sm" onClick={handleDownloadResume} className="flex items-center gap-2 rounded-full">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-800"
          >
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-gray-300 hover:text-white"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
