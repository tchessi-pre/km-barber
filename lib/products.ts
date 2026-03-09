export interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Huile à Barbe Premium",
    price: 24.90,
    description: "Huile nourrissante pour barbe à base d'argan et de jojoba. Adoucit et discipline la barbe au quotidien.",
    image: "/images/products/beard-oil.jpg",
  },
  {
    id: 2,
    name: "Cire Coiffante Matte",
    price: 18.50,
    description: "Cire à tenue forte et finition matte. Idéale pour les coupes structurées et les styles modernes.",
    image: "/images/products/hair-wax.jpg",
  },
  {
    id: 3,
    name: "Pommade Classique",
    price: 21.00,
    description: "Pommade brillante à tenue moyenne, parfaite pour les looks vintage et les coiffures rétro Elvis.",
    image: "/images/products/pomade.jpg",
  },
  {
    id: 4,
    name: "Tondeuse Pro Gold",
    price: 89.90,
    description: "Tondeuse professionnelle avec lames en acier inoxydable. Précision ultime pour des coupes nettes.",
    image: "/images/products/clipper.jpg",
  },
  {
    id: 5,
    name: "Shampoing Fortifiant",
    price: 16.90,
    description: "Shampoing enrichi en kératine et huile de ricin. Renforce et revitalise les cheveux en profondeur.",
    image: "/images/products/shampoo.jpg",
  },
  {
    id: 6,
    name: "Kit Peigne & Brosse",
    price: 32.00,
    description: "Ensemble peigne en bois de santal et brosse en poils naturels. L'essentiel du gentleman moderne.",
    image: "/images/products/comb.jpg",
  },
  {
    id: 7,
    name: "Baume Après-Rasage",
    price: 19.90,
    description: "Baume apaisant à l'aloe vera et au beurre de karité. Hydrate et calme les irritations après le rasage.",
    image: "/images/products/aftershave.jpg",
  },
  {
    id: 8,
    name: "Sérum Capillaire",
    price: 27.50,
    description: "Sérum concentré aux huiles essentielles pour cheveux afro. Nourrit, protège et fait briller.",
    image: "/images/products/hair-oil.jpg",
  },
]

export const WHATSAPP_NUMBER = "33612345678"

export function getWhatsAppLink(product: Product): string {
  const message = encodeURIComponent(
    `Bonjour, je souhaite commander ${product.name} à ${product.price.toFixed(2)} €. Livraison à Marseille.`
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}

export function getWhatsAppRDVLink(): string {
  const message = encodeURIComponent(
    "Bonjour, je souhaite prendre rendez-vous au salon K.M Barber Chez Elvis. Merci !"
  )
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
}
