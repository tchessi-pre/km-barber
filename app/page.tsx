import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { GallerySection } from "@/components/gallery-section"
import { ServicesSection } from "@/components/services-section"
import { ProductsSection } from "@/components/products-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GallerySection />
        <ServicesSection />
        <ProductsSection />
      </main>
      <Footer />
    </>
  )
}
