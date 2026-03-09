import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { ScrollToTop } from "@/components/scroll-to-top"
import { Preloader } from "@/components/preloader"

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'K.M Barber Chez Elvis | Barbershop Marseille 13015',
    template: '%s | K.M Barber Chez Elvis',
  },
  description:
    'Salon de coiffure homme et barbier à Marseille 13015. Spécialiste coupe Afro, dégradé américain, taille de barbe et soins. Ambiance urbaine et expertise professionnelle.',
  keywords: [
    'Barbier Marseille',
    'Coiffeur Homme Marseille',
    'Coiffeur Afro Marseille',
    'Coupe Homme 13015',
    'Barber Shop Marseille',
    'Taille de barbe Marseille',
    'Dégradé américain',
    'K.M Barber',
    'Chez Elvis',
  ],
  authors: [{ name: 'K.M Barber' }],
  creator: 'K.M Barber',
  publisher: 'K.M Barber',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://km-barber.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'K.M Barber Chez Elvis | L\'excellence de la coiffure Afro & Urbaine',
    description: 'Expertise, précision et passion pour votre style. Retrouvez-nous au 8 Rue de Lyon, 13015 Marseille.',
    url: 'https://km-barber.fr',
    siteName: 'K.M Barber Chez Elvis',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K.M Barber Chez Elvis | Barbershop Marseille',
    description: 'Le rendez-vous des hommes stylés à Marseille. Coupes, barbes et soins.',
    creator: '@kmbarber',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: 'K.M Barber Chez Elvis',
    image: 'https://km-barber.fr/icon.png',
    '@id': 'https://km-barber.fr',
    url: 'https://km-barber.fr',
    telephone: '+33600000000', // To be updated
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8 Rue de Lyon',
      addressLocality: 'Marseille',
      postalCode: '13015',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.3284,
      longitude: 5.3664,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    priceRange: '€€',
    servesCuisine: 'Coupe homme, Barbe, Soins',
  }

  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
