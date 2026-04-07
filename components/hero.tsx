import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image with Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-barbershop.jpg"
          alt="Intérieur du salon K.M Barber Chez Elvis"
          fill
          className="object-cover scale-105"
          priority
          sizes="100vw"
        />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/65 via-background/20 to-background/80" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background/55 via-transparent to-background/55" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.22)_100%)]" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 hidden h-32 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:block" />
      <div className="absolute top-1/4 right-8 hidden h-32 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Top badge */}
        <div className="mb-8 hidden items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 backdrop-blur-sm sm:inline-flex">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Barbershop Marseille
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-4xl font-bold leading-[1.1] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="inline-block text-balance">K.M Barber</span>
          <br />
          <span className="relative inline-block text-primary">
            Chez Elvis
            <svg
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
            </svg>
          </span>
        </h1>

        {/* Tagline */}
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg md:text-xl">
          <span className="block text-balance">
            {"L'excellence de la coiffure Afro & Urbaine à Marseille."}
          </span>
          <span className="mt-3 block text-foreground/70">
            Expertise, précision et passion pour votre style.
          </span>
          <span className="mt-5 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Sans rendez-vous
          </span>
        </p>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
        </div>
      </div>
    </section>
  )
}
