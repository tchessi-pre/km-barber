"use client"

import { MapPin, Clock, Phone, Scissors, Sparkles } from "lucide-react"
import { getWhatsAppRDVLink } from "@/lib/products"
import { motion } from "framer-motion"
import { useState } from "react"

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
  { day: "Lundi", time: "09h00 - 19h00" },
  { day: "Mardi", time: "09h00 - 19h00" },
  { day: "Mercredi", time: "09h00 - 19h00" },
  { day: "Jeudi", time: "09h00 - 19h00" },
  { day: "Vendredi", time: "09h00 - 19h00" },
  { day: "Samedi", time: "09h00 - 18h00" },
  { day: "Dimanche", time: "09h00 - 19h00" },
]

export function ServicesSection() {
  const [showMap, setShowMap] = useState(false)

  return (
    <section id="services" className="bg-card py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-sm uppercase tracking-[0.3em] text-primary"
          >
            Nos Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl font-bold text-foreground md:text-5xl"
          >
            <span className="text-balance">Coiffure Africaine</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-foreground/60"
          >
            Spécialistes de la coiffure africaine et masculine. Des coupes classiques aux styles les plus tendances.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-background p-6 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20 group-hover:scale-110 duration-300">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="font-serif text-2xl font-bold text-primary">
                  {service.price}
                </span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 bg-border" />
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary">
            <MapPin className="h-4 w-4" />
          </div>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        {/* Location section */}
        <div className="rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-sm lg:p-10">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-xl border border-border/50 shadow-2xl"
            >
              <div className="aspect-[4/3] w-full">
                {showMap ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.8!2d5.3664!3d43.3284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0b8f8b8b8b8%3A0x0!2s8%20Rue%20de%20Lyon%2C%2013015%20Marseille%2C%20France!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation K.M Barber Chez Elvis"
                    className="absolute inset-0 h-full w-full grayscale transition-all duration-500 hover:grayscale-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/20 text-center backdrop-blur-[2px]">
                    <button
                      onClick={() => setShowMap(true)}
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                    >
                      <MapPin className="h-4 w-4" />
                      <span>Charger la carte</span>
                    </button>
                    <p className="mt-4 max-w-[200px] text-xs text-foreground/40">
                      Cliquez pour activer la carte interactive Google Maps
                    </p>
                  </div>
                )}
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
            </motion.div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              <div className="mb-2">
                <h3 className="font-serif text-3xl font-bold text-foreground">Nous trouver</h3>
                <p className="mt-2 text-foreground/60">
                  Situé au cœur de Marseille, notre salon est facilement accessible. Venez profiter d'une ambiance détendue et professionnelle.
                </p>
              </div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group flex gap-4 rounded-xl border border-border/50 bg-background p-5 transition-all hover:border-primary/30 hover:shadow-md hover:bg-primary/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
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
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80 group-hover:underline"
                  >
                    Itinéraire
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group flex gap-4 rounded-xl border border-border/50 bg-background p-5 transition-all hover:border-primary/30 hover:shadow-md hover:bg-primary/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-foreground">
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
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href={getWhatsAppRDVLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-white shadow-lg transition-all hover:bg-[#128C7E] hover:shadow-xl hover:scale-[1.02]"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold">Prendre RDV sur WhatsApp</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
