export interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
}

const KM_PRODUCT_COUNT = 24

export const products: Product[] = Array.from({ length: KM_PRODUCT_COUNT }, (_, index) => {
  const number = String(index + 1).padStart(2, "0")
  const filename = `km-product-${number}.jpeg`

  return {
    id: index + 1,
    name: `Produit KM N°${number}`,
    price: 0,
    description: "",
    image: `/images/products/${filename}`,
  }
})

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "33753116215"

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://km-barber.vercel.app").replace(/\/$/, "")

export function getWhatsAppLink(product: Product): string {
  const imageUrl = `${SITE_URL}${product.image}`
  const message = encodeURIComponent(
    `Bonjour, je souhaite commander ${product.name}.\n${imageUrl}`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

export function getWhatsAppRDVLink(): string {
  const message = encodeURIComponent(
    "Bonjour, je souhaite prendre rendez-vous au salon K.M Barber Chez Elvis. Merci !"
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}
