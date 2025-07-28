"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string
    link: string
    icon?: React.ReactNode
    external?: boolean
    isButton?: boolean
  }[]
  className?: string
}) => {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent rounded-full bg-white/80 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        <div className="text-xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
          HAIR COACTION
        </div>

        {navItems.map((navItem, idx) => (
          navItem.isButton ? (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border text-sm font-medium relative border-neutral-200 text-black px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:from-pink-600 hover:to-orange-600 transition-all">
                {navItem.name}
              </button>
            </a>
          ) : (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center flex space-x-1 text-neutral-600 hover:text-pink-500 transition-colors"
              )}
              target={navItem.external ? "_blank" : "_self"}
              rel={navItem.external ? "noopener noreferrer" : undefined}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </a>
          )
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
