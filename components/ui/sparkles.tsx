"use client"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SparklesProps {
  id?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  className?: string
  particleColor?: string
}

export const SparklesCore = (props: SparklesProps) => {
  const {
    id,
    className,
    background = "#0d1117",
    minSize = 0.6,
    maxSize = 1.4,
    particleDensity = 120,
    particleColor = "#FFF",
  } = props
  const [init, setInit] = useState(false)

  useEffect(() => {
    setInit(true)
  }, [])

  const particles = []
  for (let i = 0; i < particleDensity; i++) {
    particles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      delay: Math.random() * 2,
    })
  }

  return (
    <div className={cn("relative", className)}>
      {init && (
        <div
          style={{
            background,
          }}
          className="absolute inset-0"
        >
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute animate-pulse"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particleColor,
                borderRadius: "50%",
                animationDelay: `${particle.delay}s`,
                animationDuration: "3s",
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
