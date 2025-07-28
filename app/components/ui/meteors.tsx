"use client"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export const Meteors = ({
  number,
  className,
}: {
  number?: number
  className?: string
}) => {
  const [meteors, setMeteors] = useState<
    { left: number; delay: number; duration: number }[]
  >([])

  useEffect(() => {
    const arr = new Array(number || 20).fill(true).map(() => ({
      left: Math.floor(Math.random() * (400 - -400) + -400),
      delay: Math.random() * (0.8 - 0.2) + 0.2,
      duration: Math.floor(Math.random() * (10 - 2) + 2),
    }))
    setMeteors(arr)
  }, [number])

  return (
    <>
      {meteors.map((m, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className,
          )}
          style={{
            top: 0,
            left: m.left + "px",
            animationDelay: m.delay + "s",
            animationDuration: m.duration + "s",
          }}
        ></span>
      ))}
    </>
  )
}
