import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { ScrollToTop } from "@/components/scroll-to-top"

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
    'K.M Barber',
    'Chez Elvis',
    'Barbier Marseille',
    'Coiffeur Homme Marseille',
    'Coiffeur Afro Marseille',
    'Coiffeur Afro Marseille 13015',
    'Coiffeur Afro rue de Lyon Marseille',
    'Coifeur Rue de Lyon Marseille',
    'Coupe Homme 13015',
    'Barber Shop Marseille',
    'Taille de barbe Marseille',
    'Dégradé américain',
  ],
  authors: [{ name: 'K.M Barber' }],
  creator: 'K.M Barber',
  publisher: 'K.M Barber',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.kmbarber-chezelvis.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'K.M Barber Chez Elvis | L\'excellence de la coiffure Afro & Urbaine',
    description: 'Expertise, précision et passion pour votre style. Retrouvez-nous au 8 Rue de Lyon, 13015 Marseille.',
    url: 'https://www.kmbarber-chezelvis.fr',
    siteName: 'K.M Barber Chez Elvis',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/preview.png',
        width: 512,
        height: 512,
        alt: 'K.M Barber Chez Elvis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K.M Barber Chez Elvis | Barbershop Marseille',
    description: 'Le rendez-vous des hommes stylés à Marseille. Coupes, barbes et soins.',
    creator: '@kmbarber',
    images: ['/preview.png'],
  },
  verification: {
    google: '4cU-KW-SsiC_mSkPY0i8T9PQQtl8QtCVn0FSkM7I-Yk',
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
    image: 'https://www.kmbarber-chezelvis.fr/preview.png',
    '@id': 'https://www.kmbarber-chezelvis.fr/#business',
    url: 'https://www.kmbarber-chezelvis.fr',
    telephone: '+33753116215',
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
    hasMap: 'https://maps.google.com/?q=8+Rue+de+Lyon+13015+Marseille+France',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    priceRange: '€€',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Marseille',
    },
  }

  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
