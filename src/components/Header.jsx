"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/logo.png"
import Magnet from './Magnet'

const menuItems = [
  { label: "Нүүр", ariaLabel: "Нүүр хуудас руу очих", link: "/" },
  { label: "Бидний тухай", ariaLabel: "Манай тухай", link: "/about" },
  { label: "Үйлчилгээ", ariaLabel: "Үйлчилгээ үзэх", link: "/services" },
  { label: "Сэтгэгдэл", ariaLabel: "Сэтгэгдэл унших", link: "/reviews" },
  { label: "Холбоо барих", ariaLabel: "Холбоо барих", link: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full  shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-4 md:justify-start">
        <Link href="/">
          <Magnet padding={50} disabled={false} magnetStrength={6}> 
            <Image src={logo} width={60} height={60} alt="image"></Image> </Magnet>
        </Link>

        <nav className="hidden md:flex flex-1 justify-center space-x-8">
        
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              aria-label={item.ariaLabel}
              className="text-white hover:text-[#FF9443] transition-colors duration-300 font-medium"
            >  <Magnet padding={50} disabled={false} magnetStrength={6}> 
                    {item.label} 
                    </Magnet>
           
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex flex-col justify-between w-8 h-6 focus:outline-none md:hidden"
        >
          <span
            className={`h-1 w-full bg-white rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ ease: "easeInOut", duration: 0.4 }}
            className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 text-[32px] z-40 md:hidden"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  href={item.link}
                  aria-label={item.ariaLabel}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 hover:text-[#FF9443] font-medium transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
