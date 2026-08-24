import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { rentalProperties } from "@/lib/data"
import { PropertyGalleryCard } from "@/components/property-gallery-card"
import { Button } from "@/components/ui/button"

export function FeaturedPropertiesSection() {
  return <section className="bg-secondary py-20 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><h2 className="mt-3 font-serif text-4xl text-foreground">Empreendimentos para Alugar</h2><p className="mt-4 max-w-xl text-muted-foreground">Endereços escolhidos para viver com conforto, beleza e a tranquilidade de uma boa decisão.</p></div><Button asChild variant="outline"><Link href="/empreendimentos">Ver todos <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div><div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">{rentalProperties.slice(0, 8).map((property) => <PropertyGalleryCard key={property.id} property={property} />)}</div></div></section>
}
