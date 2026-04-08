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
    'K.M Barber Chez Elvis',
    'Barbershop Marseille',
    'Barbier Marseille',
    'Barbier Marseille 13015',
    'Coiffeur homme Marseille',
    'Coiffeur afro Marseille',
    'Coiffeur afro Marseille 13015',
    'Barber shop Marseille 13015',
    'Salon de coiffure Marseille 13015',
    '8 Rue de Lyon 13015 Marseille',
    'Coiffeur Rue de Lyon Marseille',
    'Coupe homme Marseille',
    'Coupe afro Marseille',
    'Dégradé américain Marseille',
    'Dégradé afro Marseille',
    'Waves 360 Marseille',
    'Taille de barbe Marseille',
    'Barbe Marseille 13015',
    'Tresses cornrows Marseille',
    'Twists vanilles Marseille',
    'Dreadlocks Marseille',
    'Freeform locs Marseille',
    'Sans rendez-vous Marseille',
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
  const siteUrl = 'https://www.kmbarber-chezelvis.fr'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'K.M Barber Chez Elvis',
        inLanguage: 'fr-FR',
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: 'K.M Barber Chez Elvis | Barbershop Marseille 13015',
        isPartOf: { '@id': `${siteUrl}/#website` },
        inLanguage: 'fr-FR',
        about: { '@id': `${siteUrl}/#business` },
      },
      {
        '@type': 'HairSalon',
        '@id': `${siteUrl}/#business`,
        name: 'K.M Barber Chez Elvis',
        url: siteUrl,
        telephone: '+33753116215',
        image: `${siteUrl}/preview.png`,
        logo: `${siteUrl}/icon.png`,
        mainEntityOfPage: { '@id': `${siteUrl}/#webpage` },
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
        sameAs: [
          'https://www.tiktok.com/@elvis13001',
        ],
      },
    ],
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
