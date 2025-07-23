"use client"

import { SignUpButton, SignInButton, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { UserPlus, LogIn } from "lucide-react"

export function ClientSignUpButton() {
  return (
    <SignUpButton mode="modal">
      <Button
        size="lg"
        className="bg-gradient-to-r from-pink-500 via-orange-500 to-peach-500 hover:from-pink-600 hover:via-orange-600 hover:to-peach-600 text-white px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group border-0"
      >
        Get Started Free
        <motion.div
          className="ml-2"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <UserPlus className="h-6 w-6" />
        </motion.div>
      </Button>
    </SignUpButton>
  )
}

export function ClientSignInButton() {
  return (
    <SignInButton mode="modal">
      <Button
        size="lg"
        variant="outline"
        className="px-8 py-6 text-lg rounded-full border-2 border-pink-300 text-pink-600 hover:bg-pink-50 transition-all duration-300 bg-transparent"
      >
        <LogIn className="mr-2 h-5 w-5" />
        Sign In
      </Button>
    </SignInButton>
  )
}

export function ClientUserButton() {
  return <UserButton afterSignOutUrl="/" />
}
