import { MapPin, Clock, Phone, Scissors, Sparkles } from "lucide-react"
import { getWhatsAppRDVLink } from "@/lib/products"

const services = [
  {
    icon: Scissors,
    title: "Coupe Afro Classique",
    description: "Coupe afro naturelle, shaping et entretien",
  },
  {
    icon: Sparkles,
    title: "Dégradé Afro",
    description: "Low fade, mid fade, high fade avec finition parfaite",
  },
  {
    icon: Scissors,
    title: "Waves 360",
    description: "Coupe et brushing pour des waves parfaites",
  },
  {
    icon: Sparkles,
    title: "Twists / Vanilles",
    description: "Twists two-strand, vanilles courtes ou longues",
  },
  {
    icon: Scissors,
    title: "Tresses Cornrows",
    description: "Tresses plaquées, nattes collées, motifs personnalisés",
  },
  {
    icon: Sparkles,
    title: "Dreadlocks",
    description: "Création, reprise et entretien de locks",
  },
  {
    icon: Scissors,
    title: "Flat Top",
    description: "Coupe flat top classique ou moderne",
  },
  {
    icon: Sparkles,
    title: "Afro Tapered",
    description: "Afro court avec dégradé progressif",
  },
  {
    icon: Scissors,
    title: "Mohawk / Crête",
    description: "Coupe mohawk avec sides rasés ou dégradés",
  },
  {
    icon: Sparkles,
    title: "Freeform Locs",
    description: "Dreadlocks naturelles style freeform",
  },
  {
    icon: Scissors,
    title: "Coupe + Barbe",
    description: "Service complet coupe afro et taille de barbe",
  },
  {
    icon: Sparkles,
    title: "Design / Trait",
    description: "Dessins, motifs et lignes personnalisés",
  },
]

const hours = [
  { day: "Lundi", time: "09h00 - 20h00" },
  { day: "Mardi", time: "09h00 - 20h00" },
  { day: "Mercredi", time: "09h00 - 20h00" },
  { day: "Jeudi", time: "09h00 - 20h00" },
  { day: "Vendredi", time: "09h00 - 20h00" },
  { day: "Samedi", time: "09h00 - 20h00" },
  { day: "Dimanche", time: "09h00 - 20h00" },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-card py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Nos Services
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            <span className="text-balance">Coiffure Africaine</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/60">
            Spécialistes de la coiffure africaine et masculine. Des coupes classiques aux styles les plus tendances.
          </p>
        </div>

        {/* Services grid */}
        <div className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-background p-6 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20 group-hover:scale-110 duration-300">
                  <service.icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mb-20 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary">
            <MapPin className="h-4 w-4" />
          </div>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Location section */}
        <div className="rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm lg:p-10">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Google Maps */}
            <div className="relative overflow-hidden rounded-xl border border-border/50 shadow-2xl">
              <div className="relative aspect-[4/3] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.8!2d5.3664!3d43.3284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0b8f8b8b8b8%3A0x0!2s8%20Rue%20de%20Lyon%2C%2013015%20Marseille%2C%20France!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation K.M Barber Chez Elvis"
                  className="absolute inset-0 h-full w-full transition-all duration-500 hover:grayscale-0"
                />
              </div>
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-primary/20 bg-background/95 p-4 backdrop-blur-sm shadow-lg">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <p className="text-center text-sm font-medium text-foreground">
                    8 Rue de Lyon, 13015 Marseille
                  </p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="mb-2 text-center lg:text-left">
                <h3 className="font-serif text-3xl font-bold text-foreground">Nous trouver</h3>
                <p className="mt-2 text-foreground/60">
                  Situé au cœur de Marseille, notre salon est facilement accessible. Venez profiter d'une ambiance détendue et professionnelle.
                </p>
              </div>

              {/* Address */}
              <div className="group flex flex-col gap-4 rounded-xl border border-border/50 bg-background p-5 text-center transition-all hover:border-primary/30 hover:bg-primary/5 hover:shadow-md sm:flex-row sm:text-left">
                <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:mx-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-foreground">Adresse</h3>
                  <p className="mt-1 text-foreground/70 leading-relaxed">
                    8 Rue de Lyon
                    <br />
                    13015 Marseille, France
                  </p>
                  <a
                    href="https://maps.google.com/?q=8+Rue+de+Lyon+13015+Marseille+France"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80 group-hover:underline sm:justify-start"
                  >
                    Itinéraire
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="group flex flex-col gap-4 rounded-xl border border-border/50 bg-background p-5 transition-all hover:border-primary/30 hover:bg-primary/5 hover:shadow-md sm:flex-row">
                <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:mx-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-foreground text-center sm:text-left">
                    Horaires d'ouverture
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {hours.map(({ day, time }) => (
                      <li
                        key={day}
                        className="flex items-center justify-between text-sm border-b border-border/30 pb-1 last:border-0 last:pb-0"
                      >
                        <span className="text-foreground/70 font-medium">{day}</span>
                        <span
                          className={
                            time === "Fermé"
                              ? "text-red-500/70 font-medium"
                              : "font-semibold text-foreground"
                          }
                        >
                          {time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={getWhatsAppRDVLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-white shadow-lg transition-all hover:bg-[#128C7E] hover:shadow-xl hover:scale-[1.02]"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">Prendre RDV sur WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
