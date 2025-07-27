"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black",
        className,
      )}
    >
      {/* Lamp Glow Background Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        {/* Left Glow */}
        <motion.div
          initial={{ opacity: 0.3, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute h-64 w-96 -left-32 bg-gradient-to-tr from-pink-500 via-transparent to-transparent blur-3xl"
        />
        {/* Right Glow */}
        <motion.div
          initial={{ opacity: 0.3, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute h-64 w-96 -right-32 bg-gradient-to-tl from-orange-400 via-transparent to-transparent blur-3xl"
        />
        {/* Center Glow */}
        <motion.div
          initial={{ opacity: 0.3, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute h-48 w-[28rem] top-1/3 bg-pink-500 rounded-full blur-2xl opacity-40"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-7xl px-4">
        {children}
      </div>
    </div>
  )
}
