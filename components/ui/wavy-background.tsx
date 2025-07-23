"use client"
import { cn } from "@/lib/utils"

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
  [key: string]: any
}) => {
  return (
    <div className={cn("h-screen flex flex-col items-center justify-center relative", containerClassName)}>
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 h-full w-full"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#ff6b9d", stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: "#ffa726", stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: "#ffab91", stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,250.7C672,256,768,288,864,293.3C960,299,1056,277,1152,250.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#gradient)"
          />
        </svg>
      </div>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  )
}
