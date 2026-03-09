"use client"

import Image from "next/image"
import { getWhatsAppRDVLink } from "@/lib/products"
import { ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      id="accueil"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-barbershop.jpg"
          alt="Intérieur du salon K.M Barber Chez Elvis"
          fill
          className="object-cover scale-105"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/90 via-background/40 to-background" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "8rem" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/4 left-8 hidden w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:block"
      />
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "8rem" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/4 right-8 hidden w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:block"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Barbershop Marseille
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        </motion.div>

        {/* Main heading */}
        <h1 className="font-serif text-5xl font-bold leading-[1.1] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="inline-block text-balance"
          >
            K.M Barber
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative inline-block text-primary"
          >
            Chez Elvis
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
              className="absolute -bottom-4 left-0 w-full text-primary/30"
              viewBox="0 0 200 8"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 4C50 0 150 8 200 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </motion.svg>
          </motion.span>
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-foreground/60 sm:text-lg md:text-xl"
        >
          {"L'excellence de la coiffure Afro & Urbaine à Marseille."}
          <br className="hidden sm:block" />
          <span className="text-foreground/80">Expertise, précision et passion pour votre style.</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="https://maps.google.com/?q=8+Rue+de+Lyon+13015+Marseille+France"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Voir l'itinéraire
          </a>
          <a
            href="#galerie"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            Découvrir
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
