import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function ProductsSection() {
  return (
    <section id="produits" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Boutique
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Nos Produits
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
            {"Une sélection premium de produits pour l'entretien de votre barbe et de vos cheveux. Commandez directement via WhatsApp."}
          </p>
        </div>

        {/* Product grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
