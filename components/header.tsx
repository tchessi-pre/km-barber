"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#galerie", label: "Galerie" },
  { href: "#services", label: "Services" },
  { href: "#produits", label: "Boutique" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#accueil")

  const navigateToHash = (hash: string) => {
    const element = document.querySelector(hash)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    if (window.location.hash !== hash) {
      window.history.pushState(null, "", hash)
    }
    setActiveSection(hash)
  }

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.substring(1))
    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50)

        const scrollPosition = window.scrollY + 100
        for (const section of sections) {
          const element = document.getElementById(section)
          if (
            element &&
            element.offsetTop <= scrollPosition &&
            element.offsetTop + element.offsetHeight > scrollPosition
          ) {
            setActiveSection(`#${section}`)
            break
          }
        }

        ticking = false
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    if (!window.location.hash) return
    const hash = window.location.hash
    if (navLinks.some((l) => l.href === hash) || hash === "#contact") {
      setActiveSection(hash)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-background/95 backdrop-blur-lg border-b border-border/50 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#accueil" className="group flex items-center gap-3">
          {/* Custom scissors icon */}
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="6" cy="6" r="3" />
              <circle cx="6" cy="18" r="3" />
              <line x1="20" y1="4" x2="8.12" y2="15.88" />
              <line x1="14.47" y1="14.48" x2="20" y2="20" />
              <line x1="8.12" y1="8.12" x2="12" y2="12" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold leading-tight tracking-wide text-foreground">
              K.M Barber
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Chez Elvis
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                navigateToHash(link.href)
              }}
              className={`relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary after:absolute after:bottom-0 after:left-1/2 after:h-px after:-translate-x-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-1/2 ${activeSection === link.href ? "text-primary after:w-1/2" : "text-foreground/70 after:w-0"
                }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              navigateToHash("#contact")
            }}
            className="ml-4 rounded-full border border-primary bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            RDV
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav
          className="border-t border-border/50 bg-background/95 backdrop-blur-lg px-6 py-4"
          aria-label="Navigation mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                setMobileOpen(false)
                navigateToHash(link.href)
              }}
              className={`block py-3 text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary ${activeSection === link.href ? "text-primary" : "text-foreground/70"
                }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              setMobileOpen(false)
              navigateToHash("#contact")
            }}
            className="mt-2 block w-full rounded-full border border-primary bg-primary/10 py-3 text-center text-sm font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Prendre RDV
          </a>
        </nav>
      </div>
    </header>
  )
}
