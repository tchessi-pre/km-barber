import Image from "next/image"
import { getWhatsAppRDVLink } from "@/lib/products"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-barbershop.jpg"
        alt="Intérieur du salon K.M Barber Chez Elvis"
        fill
        className="object-cover scale-105"
        priority
        sizes="100vw"
      />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-8 hidden h-32 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:block" />
      <div className="absolute top-1/4 right-8 hidden h-32 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Top badge */}
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-5 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Barbershop Marseille
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-5xl font-bold leading-[1.1] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="inline-block text-balance">K.M Barber</span>
          <br />
          <span className="relative inline-block text-primary">
            Chez Elvis
            <svg
              className="absolute -bottom-2 left-0 w-full text-primary/30"
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
        <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed text-foreground/60 sm:text-lg md:text-xl">
          {"L'art de la coupe masculine dans une ambiance rock'n'roll."}
          <br className="hidden sm:block" />
          <span className="text-foreground/80">Style vintage, savoir-faire moderne.</span>
        </p>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={getWhatsAppRDVLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Prendre RDV
          </a>
          <a
            href="#galerie"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-foreground/5 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            Découvrir
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex items-center justify-center gap-8 sm:gap-12">
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-primary sm:text-4xl">10+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-foreground/50">Ans d{"'"}expérience</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-primary sm:text-4xl">5K+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-foreground/50">Clients satisfaits</p>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-center">
            <p className="font-serif text-3xl font-bold text-primary sm:text-4xl">4.9</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-foreground/50">Note Google</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#galerie"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40 transition-colors hover:text-primary"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-current p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </a>
    </section>
  )
}
