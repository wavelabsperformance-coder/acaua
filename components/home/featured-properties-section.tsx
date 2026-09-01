import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { rentalProperties, saleProperties } from "@/lib/data"
import { PropertyGalleryCard } from "@/components/property-gallery-card"
import { Button } from "@/components/ui/button"

export function FeaturedPropertiesSection() {
  return (
    <div className="space-y-16 py-20 lg:py-28 bg-[#faf7f2]">
      {/* BLOCO 1: ALUGUEL */}
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-semibold">
                Locação
              </span>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl text-[#0d3b2e]">
                Empreendimentos para Alugar
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Endereços escolhidos para viver com conforto, beleza e a tranquilidade de uma boa decisão.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-[#0d3b2e] text-[#0d3b2e] hover:bg-[#0d3b2e] hover:text-white transition-colors"
            >
              <Link href="/empreendimentos/apartamentos-para-alugar">
                Ver todos de aluguel <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rentalProperties && rentalProperties.slice(0, 4).map((property) => (
              <PropertyGalleryCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 2: VENDA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-semibold">
                Venda
              </span>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl text-[#0d3b2e]">
                Empreendimentos à Venda
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Oportunidades exclusivas de investimento e moradia de alto padrão.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-[#0d3b2e] text-[#0d3b2e] hover:bg-[#0d3b2e] hover:text-white transition-colors"
            >
              <Link href="/empreendimentos/apartamentos-para-venda">
                Ver todos de venda <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {saleProperties && saleProperties.slice(0, 4).map((property) => (
              <PropertyGalleryCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturedPropertiesSection