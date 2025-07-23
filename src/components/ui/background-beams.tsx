import { cn } from "@/lib/utils"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full bg-gradient-to-r from-pink-50 via-orange-50 to-peach-50 [mask-image:radial-gradient(circle,white,transparent)]",
        className,
      )}
    >
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute h-0.5 w-px bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}
