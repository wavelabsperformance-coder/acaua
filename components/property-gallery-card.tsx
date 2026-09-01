"use client"

import { useState } from "react"
import Link from "next/link"
import { Bed, Bath, Car, Maximize, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Property } from "@/lib/data"

interface PropertyGalleryCardProps {
  property: Property
}

export function PropertyGalleryCard({ property }: PropertyGalleryCardProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const totalImages = property.images?.length || 0

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1))
  }

  const isRental = property.category.includes("alugar")
  // Direciona para a página da categoria já passando o ID do imóvel e a âncora de detalhes:
  const targetUrl = `/empreendimentos/${property.category}?id=${property.id}#detalhes`

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-border/80 hover:border-[#b85d19]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        {/* Carrossel de Imagens */}
        <div className="aspect-[4/3] overflow-hidden relative bg-muted">
          <Link href={targetUrl} className="block w-full h-full">
            <img
              src={property.images?.[currentImgIndex] || "/placeholder.jpg"}
              alt={`${property.title} - foto ${currentImgIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Badge Locação / Venda */}
          <div className="absolute top-3 left-3 bg-[#b85d19] text-white px-3 py-1 text-xs rounded-full font-medium shadow-sm pointer-events-none">
            {isRental ? "Locação" : "Venda"}
          </div>

          {/* Badge Contador */}
          {totalImages > 1 && (
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded-md pointer-events-none">
              {currentImgIndex + 1} / {totalImages}
            </div>
          )}

          {/* Setas de Navegação */}
          {totalImages > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Imagem anterior"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md hover:scale-105 z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Próxima imagem"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md hover:scale-105 z-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* Informações */}
        <div className="p-5">
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1 font-medium">
            <MapPin className="h-3.5 w-3.5 text-[#b85d19]" /> {property.location}
          </span>
          <Link href={targetUrl} className="block">
            <h3 className="text-base font-semibold text-foreground group-hover:text-[#b85d19] transition-colors mt-2 line-clamp-1 font-serif">
              {property.title}
            </h3>
          </Link>

          <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Bed className="h-3.5 w-3.5 text-[#0d3b2e]" /> {property.bedrooms}
            </span>
            <span className="flex items-center gap-1">
              <Bath className="h-3.5 w-3.5 text-[#0d3b2e]" /> {property.bathrooms}
            </span>
            <span className="flex items-center gap-1">
              <Car className="h-3.5 w-3.5 text-[#0d3b2e]" /> {property.parking}
            </span>
            {property.area && (
              <span className="flex items-center gap-1">
                <Maximize className="h-3.5 w-3.5 text-[#0d3b2e]" /> {property.area}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Rodapé do Card */}
      <div className="p-5 pt-0">
        <div className="pt-4 border-t border-border flex items-center justify-between">
          <span className="text-sm font-semibold text-[#0d3b2e] line-clamp-1 mr-2">
            {property.price || "Sob Consulta"}
          </span>
          <Button asChild size="sm" className="bg-[#0d3b2e] hover:bg-[#092920] text-white transition-colors shrink-0">
            <Link href={targetUrl}>Ver Detalhes</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}