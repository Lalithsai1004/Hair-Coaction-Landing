import type React from "react"
import { cn } from "@/lib/utils"

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  ...otherProps
}: {
  children: React.ReactNode
  duration?: number
  className?: string
  [key: string]: any
}) => {
  return (
    <div
      className={cn(
        "bg-transparent relative text-xl h-16 w-40 flex items-center justify-center rounded-full",
        className,
      )}
      {...otherProps}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `linear-gradient(90deg, #ff6b9d, #ffa726, #ffab91, #ff6b9d)`,
          backgroundSize: "400% 400%",
          animation: `gradient ${duration}ms ease infinite`,
        }}
      />
      <div className="relative bg-slate-900/20 border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased font-medium rounded-full">
        {children}
      </div>
    </div>
  )
}
