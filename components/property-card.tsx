import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"
import { Bed, Bath, Car, Maximize } from "lucide-react"

interface Property {
  id: string
  title: string
  location: string
  price: string
  area: string
  bedrooms: number
  bathrooms: number
  parking: number
  description: string
  category: string
  images: string[]
}

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group bg-card">
      <Link href={`/empreendimentos/${property.category}/${property.id}`}>
        <div className="aspect-[4/3] overflow-hidden image-hover-zoom">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {property.location}
            </span>
          </div>
          <h3 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">
            {property.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {property.description}
          </p>
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              {property.bedrooms}
            </span>
            <span className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              {property.bathrooms}
            </span>
            <span className="flex items-center gap-1">
              <Car className="h-4 w-4" />
              {property.parking}
            </span>
            <span className="flex items-center gap-1">
              <Maximize className="h-4 w-4" />
              {property.area}
            </span>
          </div>
          <div className="mt-4">
            <span className="font-serif text-2xl text-foreground">
              {property.price}
            </span>
          </div>
        </div>
      </Link>
      <div className="px-6 pb-6">
        <Button asChild className="w-full">
          <a
            href={`${siteConfig.whatsappLink}?text=Olá! Tenho interesse no imóvel: ${property.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Visita
          </a>
        </Button>
      </div>
    </article>
  )
}
