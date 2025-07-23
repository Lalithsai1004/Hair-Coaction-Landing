"use client"
import { useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  Heart,
  Brain,
  Shield,
  Star,
  Sparkles,
  LogIn,
  UserPlus,
} from "lucide-react"
import { HeroParallax } from "@/components/ui/hero-parallax"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { SparklesCore } from "@/components/ui/sparkles"
import { WavyBackground } from "@/components/ui/wavy-background"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { Meteors } from "@/components/ui/meteors"
import { LampContainer } from "@/components/ui/lamp"
import { CardHoverEffect } from "@/components/ui/card-hover-effect"
import { GlowingStars } from "@/components/ui/glowing-stars"
import { MovingBorder } from "@/components/ui/moving-border"
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react"

const navItems = [
  { name: "Problem", link: "#problem", icon: <Target className="h-4 w-4" /> },
  { name: "Vision", link: "#vision", icon: <Heart className="h-4 w-4" /> },
  { name: "Solution", link: "#solution", icon: <Brain className="h-4 w-4" /> },
  { name: "Team", link: "#team", icon: <Users className="h-4 w-4" /> },
]

const heroProducts = [
  {
    title: "Hair Analysis AI",
    link: "#",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250720-WA0032.jpg-rHo8MjpwR6bnUUDA4SxAIY8uD2Qv78.jpeg",
  },
  {
    title: "Scalp Health Monitor",
    link: "#",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250720_194639.jpg-fQrdQTZbbkPWx0VZIHkBZtABkwGodx.jpeg",
  },
  {
    title: "Personalized Care Routine",
    link: "#",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250720-WA0031.jpg-PyIPCZ95ECDWhZzPct81TkgLuoTKuW.jpeg",
  },
  {
    title: "Hair Texture Analysis",
    link: "#",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250720_194610.jpg-ga6R55x2TX3ooXunJ5jHpmgS0Qquqg.jpeg",
  },
  {
    title: "AI Consultation",
    link: "#",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp-Image-2022-07-16-at-1.09.21-PM%5B1%5D.jpg-sCDNG2lbTIPhM8V4ddZDkqC1pNq1Y5.jpeg",
  },
  {
    title: "Hair Growth Tracking",
    link: "#",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250720-WA0039.jpg-cxEHtnSl7HZJqblYF3uXdOEWEmZRH4.jpeg",
  },
]

const testimonials = [
  {
    quote: "HAIR COACTION transformed my hair care routine completely. The AI analysis was spot-on!",
    name: "Sarah Johnson",
    title: "Happy Customer",
  },
  {
    quote: "Finally, a solution that understands my unique hair texture and scalp needs.",
    name: "Priya Sharma",
    title: "Satisfied User",
  },
  {
    quote: "The early detection feature helped me prevent a major scalp issue. Incredible technology!",
    name: "Maria Garcia",
    title: "Grateful Client",
  },
]

const features = [
  {
    title: "AI Hair Analysis",
    description:
      "Advanced algorithms analyze your hair texture, density, and scalp condition for personalized recommendations.",
    link: "#",
  },
  {
    title: "Scalp Disease Detection",
    description: "Early detection of scalp conditions using machine learning models trained on thousands of cases.",
    link: "#",
  },
  {
    title: "Personalized Routines",
    description: "Custom hair care routines tailored to your specific needs, lifestyle, and hair goals.",
    link: "#",
  },
  {
    title: "Expert Network",
    description: "Connect with certified dermatologists and trichologists for professional guidance.",
    link: "#",
  },
  {
    title: "Progress Tracking",
    description: "Monitor your hair health journey with detailed analytics and progress reports.",
    link: "#",
  },
  {
    title: "Community Support",
    description: "Join a vibrant community of hair care enthusiasts sharing tips and experiences.",
    link: "#",
  },
]

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const { isSignedIn, user } = useUser()

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const initSmoothScrolling = async () => {
      const Lenis = (await import("lenis")).default
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")

      gsap.registerPlugin(ScrollTrigger)

      const lenis = new Lenis({
        duration: 1.6,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      // Advanced GSAP animations
      gsap.fromTo(
        ".hero-gradient",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power3.out" },
      )

      gsap.fromTo(
        ".floating-element",
        { y: 0, rotation: 0 },
        {
          y: -20,
          rotation: 5,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        },
      )

      // Scroll-triggered animations
      gsap.utils.toArray(".reveal-up").forEach((element: any) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 100, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      gsap.utils.toArray(".reveal-left").forEach((element: any) => {
        gsap.fromTo(
          element,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      gsap.utils.toArray(".reveal-right").forEach((element: any) => {
        gsap.fromTo(
          element,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })
    }

    initSmoothScrolling()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-peach-50 to-orange-50 overflow-x-hidden">
      <FloatingNav navItems={navItems} />

      {/* Hero Section with Aurora Background */}
      <section className="relative min-h-screen">
        <AuroraBackground>
          <HeroParallax products={heroProducts}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center relative z-10"
            >
              <div className="hero-gradient">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "backOut" }}
                  className="mb-8"
                >
                  <SparklesCore
                    id="hero-sparkles"
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={100}
                    className="w-full h-32 absolute top-0 left-0"
                    particleColor="#ff6b9d"
                  />
                </motion.div>
                <TextGenerateEffect
                  words="Revolutionizing Hair Health with AI"
                  className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-orange-500 to-peach-500 bg-clip-text text-transparent"
                />
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed"
                >
                  Tailoring solutions for unique hair textures, scalp types, and volumes. Empowering individuals with
                  AI-driven personalized hair care that transforms lives.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  {!isSignedIn ? (
                    <>
                      <MovingBorder
                        duration={2000}
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                      >
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
                      </MovingBorder>
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
                    </>
                  ) : (
                    <div className="flex items-center gap-4">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-pink-500 via-orange-500 to-peach-500 hover:from-pink-600 hover:via-orange-600 hover:to-peach-600 text-white px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
                      >
                        Go to Dashboard
                        <ArrowRight className="ml-2 h-6 w-6" />
                      </Button>
                      <div className="flex items-center gap-2 text-gray-700">
                        <span>Welcome back, {user?.firstName}!</span>
                        <UserButton afterSignOutUrl="/" />
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </HeroParallax>
        </AuroraBackground>
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="floating-element absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20"
            style={{ y }}
          />
          <motion.div
            className="floating-element absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-peach-400 to-pink-400 rounded-full opacity-20"
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
          />
        </div>
      </section>

      {/* Problem Statement with Meteors */}
      <section id="problem" className="relative py-32">
        <div className="absolute inset-0">
          <Meteors number={20} />
        </div>
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-red-100 text-red-700 hover:bg-red-100 px-6 py-2 text-lg">Problem Statement</Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              The Hair Health Crisis
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Modern lifestyle challenges are creating unprecedented hair health issues
            </p>
          </motion.div>
          <BentoGrid className="max-w-6xl mx-auto">
            <BentoGridItem
              title="Pollution Impact"
              description="Increasing pollution levels causing Alopecia Areata, Folliculitis, Head Lice, and Telogen Effluvium"
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-red-100 to-orange-100 relative overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250720-WA0042.jpg-0J2g0IipSYPdgAv8LyuzZ8d2n1HbR9.jpeg"
                    alt="Pollution effects on hair"
                    className="object-cover w-full h-full"
                  />
                </div>
              }
              className="md:col-span-2 reveal-up"
              icon={<Shield className="h-4 w-4 text-red-500" />}
            />
            <BentoGridItem
              title="Knowledge Gap"
              description="Early stages of scalp diseases poorly understood, leading to delayed diagnosis"
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-100 to-yellow-100 relative overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250720-WA0036.jpg-Um6RiHZJrmx5XP6wH1S3GGeKZGZHFx.jpeg"
                    alt="Knowledge gap in hair care"
                    className="object-cover w-full h-full"
                  />
                </div>
              }
              className="md:col-span-1 reveal-up"
              icon={<Lightbulb className="h-4 w-4 text-orange-500" />}
            />
            <BentoGridItem
              title="One-Size-Fits-All Problem"
              description="Traditional hair care ignores individual differences in textures and scalp types"
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-yellow-100 to-pink-100 relative overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250720-WA0041.jpg-K1oZQMz2dYR50FiMcKEvCv1CYa7rdu.jpeg"
                    alt="Different hair types"
                    className="object-cover w-full h-full"
                  />
                </div>
              }
              className="md:col-span-1 reveal-up"
              icon={<Users className="h-4 w-4 text-yellow-500" />}
            />
          </BentoGrid>
        </WavyBackground>
      </section>

      {/* Vision Section with Lamp Effect */}
      <section id="vision" className="py-32 relative">
        <LampContainer>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-pink-100 text-pink-700 hover:bg-pink-100 px-6 py-2 text-lg">Our Vision</Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              Transforming Hair Care
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Creating a future where every individual receives personalized hair care solutions
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Personalized Solutions",
                description: "Tailoring solutions for unique hair textures, scalp types, volume and length",
                gradient: "from-pink-500 to-purple-500",
                delay: 0,
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250720-WA0043.jpg-skcaDvMiaNfM4bylwmfCprEGDndcK9.jpeg",
              },
              {
                icon: Brain,
                title: "AI-Powered Prevention",
                description: "Using technology to anticipate and address scalp issues before escalation",
                gradient: "from-purple-500 to-orange-500",
                delay: 0.2,
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250720_194639.jpg-fQrdQTZbbkPWx0VZIHkBZtABkwGodx.jpeg",
              },
              {
                icon: Users,
                title: "Vibrant Community",
                description: "Creating spaces where hair care discussions and knowledge sharing thrive",
                gradient: "from-orange-500 to-pink-500",
                delay: 0.4,
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp-Image-2022-07-16-at-1.09.21-PM%5B1%5D.jpg-sCDNG2lbTIPhM8V4ddZDkqC1pNq1Y5.jpeg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="reveal-up relative"
              >
                <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full overflow-hidden group">
                  <CardContent className="p-0 h-full">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <div className="p-8 text-center">
                      <motion.div
                        className={`bg-gradient-to-br ${item.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <item.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </LampContainer>
      </section>

      {/* Features Section with Card Hover Effect */}
      <section className="py-32 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100 px-6 py-2 text-lg">Features</Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Discover the advanced capabilities that make HAIR COACTION unique
            </p>
          </motion.div>
          <CardHoverEffect items={features} />
        </div>
      </section>

      {/* Solution Section with Glowing Stars */}
      <section id="solution" className="py-32 bg-white relative">
        <GlowingStars />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-100 px-6 py-2 text-lg">
              Our Solution
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              AI-Driven Revolution
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Advanced technology meets personalized care for optimal hair health
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="reveal-left"
            >
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250720-WA0031.jpg-PyIPCZ95ECDWhZzPct81TkgLuoTKuW.jpeg"
                  alt="AI hair analysis technology"
                  className="rounded-3xl shadow-2xl w-full"
                />
                <motion.div
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full p-4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Sparkles className="h-8 w-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
            <div className="space-y-10 reveal-right">
              {[
                {
                  icon: Brain,
                  title: "Advanced AI Algorithms",
                  description:
                    "Creating tailored solutions based on individual hair textures, scalp types, volume, length, and other pertinent factors.",
                  color: "blue",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250720_194610.jpg-ga6R55x2TX3ooXunJ5jHpmgS0Qquqg.jpeg",
                },
                {
                  icon: Shield,
                  title: "Early Disease Detection",
                  description:
                    "AI/ML models analyze and predict potential scalp-related diseases in initial stages, enabling early intervention.",
                  color: "green",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250720-WA0039.jpg-cxEHtnSl7HZJqblYF3uXdOEWEmZRH4.jpeg",
                },
                {
                  icon: Users,
                  title: "Expert Network",
                  description:
                    "Network with dermatologists and trichologists for verified output and professional guidance.",
                  color: "purple",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250720-WA0036.jpg-Um6RiHZJrmx5XP6wH1S3GGeKZGZHFx.jpeg",
                },
                {
                  icon: Lightbulb,
                  title: "Educational Resources",
                  description:
                    "Curated content empowering customers with knowledge about hair characteristics and care routines.",
                  color: "orange",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250720-WA0041.jpg-K1oZQMz2dYR50FiMcKEvCv1CYa7rdu.jpeg",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-6 group bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-15 h-15 rounded-xl object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-peach-100 to-orange-100" />
        <SparklesCore
          id="team-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full absolute inset-0"
          particleColor="#ff6b9d"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100 px-6 py-2 text-lg">Our Team</Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Meet the Visionaries
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              The passionate team behind HAIR COACTION's revolutionary approach
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {[
              {
                name: "Vanshika Gupta",
                role: "Founder",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kIDbvsdx7Vxy4CSfujLIKi8ihSm1qW.png",
                description:
                  "Visionary leader shaping our mission, defining strategic direction, and building company culture while managing investor relations.",
                responsibilities: [
                  "Vision & Mission Definition",
                  "Strategic Decision-Making",
                  "Investor Relations",
                  "Culture & Brand Building",
                ],
                gradient: "from-pink-400 to-rose-500",
                badge: "bg-pink-100 text-pink-700",
              },
              {
                name: "Komal",
                role: "Co-Founder",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GRdENtetXp56p0GseSF8uEgVLfuXWT.png",
                description:
                  "Operations expert turning vision into reality through efficient management, team coordination, and strategic execution.",
                responsibilities: [
                  "Daily Operations Management",
                  "Team Coordination",
                  "Strategy Execution",
                  "Project Oversight",
                ],
                gradient: "from-blue-400 to-purple-500",
                badge: "bg-blue-100 text-blue-700",
              },
              {
                name: "Manya Malik",
                role: "Compliance Specialist",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nETJIDllIr10qSjLz73oTc1Yw9u9v5.png",
                description:
                  "Legal and documentation expert handling compliance, official letters, agreements, and certification management.",
                responsibilities: [
                  "Legal Documentation",
                  "Compliance Management",
                  "Performance Reporting",
                  "Certification Oversight",
                ],
                gradient: "from-green-400 to-emerald-500",
                badge: "bg-green-100 text-green-700",
              },
              {
                name: "Anshika",
                role: "Operations Coordinator",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lTNAq0JazKqO9Gl9Oue8LxnkFyBFe0.png",
                description:
                  "Talent acquisition specialist ensuring smooth onboarding, technical verification, and seamless team integration.",
                responsibilities: [
                  "Talent Acquisition",
                  "Member Onboarding",
                  "Technical Verification",
                  "Internal Coordination",
                ],
                gradient: "from-orange-400 to-red-500",
                badge: "bg-orange-100 text-orange-700",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="reveal-up relative"
              >
                <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-orange-500/10 to-peach-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Meteors number={5} />
                  <CardContent className="p-0 h-full relative z-10">
                    <div className="relative overflow-hidden">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      />
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <motion.div
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Star className="h-5 w-5 text-yellow-500" />
                      </motion.div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">{member.name}</h3>
                      <Badge className={`mb-4 ${member.badge} text-sm px-3 py-1`}>{member.role}</Badge>
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">{member.description}</p>
                      <div className="space-y-2">
                        {member.responsibilities.map((resp, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex items-center text-xs text-gray-500"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${member.gradient} rounded-full mr-2`} />
                            {resp}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100 px-6 py-2 text-lg">
              Testimonials
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
          </motion.div>
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" className="mb-20" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-500 to-peach-500" />
        <BackgroundBeams />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">Ready to Transform Your Hair Health?</h2>
            <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands who have discovered personalized hair care solutions with HAIR COACTION
            </p>
            {!isSignedIn ? (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <SignUpButton mode="modal">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                  >
                    Get Started Today
                    <motion.div
                      className="ml-3"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="h-6 w-6" />
                    </motion.div>
                  </Button>
                </SignUpButton>
              </motion.div>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://hair-coke.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                  >
                    Access Your Dashboard
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-orange-400 to-peach-400 bg-clip-text text-transparent"
            >
              HAIR COACTION
            </motion.div>
            <p className="text-gray-400 mb-8 text-lg">
              Revolutionizing hair health through AI-powered personalized solutions
            </p>
            <div className="flex justify-center space-x-8 text-gray-400 mb-8">
              {["Privacy Policy", "Terms of Service", "Contact Us"].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
            <div className="pt-8 border-t border-gray-800 text-gray-500">
              © 2025 HAIR COACTION. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
