"use client"

import Image from "next/image"
import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

const galleryImages = [
  {
    src: "/images/gallery/haircut-1.jpg",
    alt: "Dégradé afro moderne",
    category: "Coupe",
  },
  {
    src: "/images/gallery/afro-waves.jpg",
    alt: "Waves 360 avec lineup",
    category: "Waves",
  },
  {
    src: "/images/gallery/haircut-3.jpg",
    alt: "Coupe afro avec lineup",
    category: "Coupe",
  },
  {
    src: "/images/gallery/beautiful-woman-getting-her-hair.jpg",
    alt: " une femme en train de se faire un coup de coiffure dans un salon de coiffure beautique",
    category: "Tresses africaines",
  },
  {
    src: "/images/gallery/afro-twists.jpg",
    alt: "Twists vanilles",
    category: "Twists",
  },
  {
    src: "/images/gallery/afro-braids.jpg",
    alt: "Tresses cornrows",
    category: "Tresses",
  },
  {
    src: "/images/gallery/afro-dreads.jpg",
    alt: "Dreadlocks courtes",
    category: "Locks",
  },
  {
    src: "/images/gallery/afro-highflat.jpg",
    alt: "Flat top afro",
    category: "Coupe",
  },
  {
    src: "/images/gallery/afro-tapered.jpg",
    alt: "Afro tapered fade",
    category: "Coupe",
  },
  {
    src: "/images/gallery/afro-freeform.jpg",
    alt: "Freeform locs",
    category: "Locks",
  },
  {
    src: "/images/gallery/afro-mohawk.jpg",
    alt: "Mohawk afro",
    category: "Coupe",
  },
  {
    src: "/images/gallery/haircut-4.jpg",
    alt: "Taille de barbe soignée",
    category: "Barbe",
  },
  {
    src: "/images/gallery/haircut-6.jpg",
    alt: "Design capillaire artistique",
    category: "Design",
  },
  {
    src: "/images/gallery/afro-kids.jpeg",
    alt: "Coupe afro pour enfants et adolescents",
    category: "Design",
  },
  {
    src: "/images/gallery/afro-man-braids.jpeg",
    alt: "Tresses pour homme",
    category: "Tresses",
  },
  {
    src: "/images/gallery/degradé.jpeg",
    alt: "Dégradé afro moderne",
    category: "Coupe",
  },
]

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartXRef = useRef<number | null>(null)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    )
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    )
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, goToNext, goToPrevious])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [lightboxOpen])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const startX = touchStartXRef.current
    touchStartXRef.current = null
    if (startX == null) return
    const endX = e.changedTouches[0]?.clientX
    if (endX == null) return

    const deltaX = endX - startX
    const threshold = 50
    if (deltaX > threshold) {
      goToPrevious()
    } else if (deltaX < -threshold) {
      goToNext()
    }
  }

  return (
    <section id="galerie" className="bg-secondary py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Nos <span className="text-primary">Réalisations</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Découvrez le savoir-faire de notre équipe à travers nos créations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-muted"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                <div className="rounded-full bg-primary/90 p-3 text-primary-foreground backdrop-blur-sm">
                  <ZoomIn className="h-6 w-6" />
                </div>
                <span className="font-medium text-white text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Controls */}
          <div className="absolute right-4 top-4 z-50 flex gap-2">
            <button
              onClick={closeLightbox}
              className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 backdrop-blur-sm"
              aria-label="Fermer"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 z-50 hidden rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 backdrop-blur-sm md:block"
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 z-50 hidden rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 backdrop-blur-sm md:block"
            aria-label="Image suivante"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Main Image Container */}
          <div
            className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-center">
              <h3 className="text-xl font-bold text-white">
                {galleryImages[currentIndex].alt}
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                {currentIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="absolute bottom-20 flex w-full justify-between px-4 md:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="rounded-full bg-white/10 p-3 text-white backdrop-blur-sm"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="rounded-full bg-white/10 p-3 text-white backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
