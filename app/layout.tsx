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
  title: 'K.M Barber Chez Elvis | Barbershop Marseille',
  description:
    'Salon de coiffure barbershop pour hommes à Marseille. Coupes classiques, afro, barbe et produits premium. Prenez rendez-vous sur WhatsApp.',
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Preloader />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
