"use client"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const [beams, setBeams] = useState<
    { left: string; top: string; animationDelay: string; animationDuration: string }[]
  >([])

  useEffect(() => {
    const arr = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 2}s`,
    }))
    setBeams(arr)
  }, [])

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full bg-gradient-to-r from-pink-50 via-orange-50 to-peach-50 [mask-image:radial-gradient(circle,white,transparent)]",
        className,
      )}
    >
      {beams.map((b, i) => (
        <div
          key={i}
          className={`absolute h-0.5 w-px bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse`}
          style={{
            left: b.left,
            top: b.top,
            animationDelay: b.animationDelay,
            animationDuration: b.animationDuration,
          }}
        />
      ))}
    </div>
  )
}
