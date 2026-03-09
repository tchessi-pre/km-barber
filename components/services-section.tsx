import { MapPin, Clock, Phone, Scissors, Sparkles } from "lucide-react"
import { getWhatsAppRDVLink } from "@/lib/products"

const services = [
  {
    icon: Scissors,
    title: "Coupe Afro Classique",
    description: "Coupe afro naturelle, shaping et entretien",
    price: "20€",
  },
  {
    icon: Sparkles,
    title: "Dégradé Afro",
    description: "Low fade, mid fade, high fade avec finition parfaite",
    price: "18€",
  },
  {
    icon: Scissors,
    title: "Waves 360",
    description: "Coupe et brushing pour des waves parfaites",
    price: "25€",
  },
  {
    icon: Sparkles,
    title: "Twists / Vanilles",
    description: "Twists two-strand, vanilles courtes ou longues",
    price: "35€",
  },
  {
    icon: Scissors,
    title: "Tresses Cornrows",
    description: "Tresses plaquées, nattes collées, motifs personnalisés",
    price: "40€",
  },
  {
    icon: Sparkles,
    title: "Dreadlocks",
    description: "Création, reprise et entretien de locks",
    price: "Sur devis",
  },
  {
    icon: Scissors,
    title: "Flat Top",
    description: "Coupe flat top classique ou moderne",
    price: "22€",
  },
  {
    icon: Sparkles,
    title: "Afro Tapered",
    description: "Afro court avec dégradé progressif",
    price: "20€",
  },
  {
    icon: Scissors,
    title: "Mohawk / Crête",
    description: "Coupe mohawk avec sides rasés ou dégradés",
    price: "25€",
  },
  {
    icon: Sparkles,
    title: "Freeform Locs",
    description: "Dreadlocks naturelles style freeform",
    price: "Sur devis",
  },
  {
    icon: Scissors,
    title: "Coupe + Barbe",
    description: "Service complet coupe afro et taille de barbe",
    price: "30€",
  },
  {
    icon: Sparkles,
    title: "Design / Trait",
    description: "Dessins, motifs et lignes personnalisés",
    price: "+5€",
  },
]

const hours = [
  { day: "Lundi", time: "Fermé" },
  { day: "Mardi", time: "09h00 - 19h00" },
  { day: "Mercredi", time: "09h00 - 19h00" },
  { day: "Jeudi", time: "09h00 - 19h00" },
  { day: "Vendredi", time: "09h00 - 19h00" },
  { day: "Samedi", time: "09h00 - 18h00" },
  { day: "Dimanche", time: "Fermé" },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-card py-24">
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
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-background p-6 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="font-serif text-2xl font-bold text-primary">
                  {service.price}
                </span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
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
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Google Maps */}
          <div className="relative overflow-hidden rounded-lg border border-border/50">
            <div className="aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.8!2d5.3664!3d43.3284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0b8f8b8b8b8%3A0x0!2s8%20Rue%20de%20Lyon%2C%2013015%20Marseille%2C%20France!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation K.M Barber Chez Elvis"
                className="absolute inset-0"
              />
            </div>
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-primary/20 bg-background/95 p-4 backdrop-blur-sm">
              <p className="text-center text-sm font-medium text-foreground">
                8 Rue de Lyon, 13015 Marseille
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8">
            {/* Address */}
            <div className="flex gap-4 rounded-lg border border-border/50 bg-background p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
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
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
                >
                  Voir sur Google Maps
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 rounded-lg border border-border/50 bg-background p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Horaires
                </h3>
                <ul className="mt-3 space-y-2">
                  {hours.map(({ day, time }) => (
                    <li
                      key={day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-foreground/70">{day}</span>
                      <span
                        className={
                          time === "Fermé"
                            ? "text-foreground/40"
                            : "font-medium text-foreground"
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
            <div className="flex gap-4 rounded-lg border border-primary/30 bg-primary/5 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Rendez-vous
                </h3>
                <p className="mt-1 text-sm text-foreground/60 leading-relaxed">
                  Prenez rendez-vous directement via WhatsApp pour un service rapide.
                </p>
                <a
                  href={getWhatsAppRDVLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Prendre RDV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
