"use client"

import Link from "next/link"
import { Bed, Bath, Car, Maximize, MapPin, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { featuredProperties, type Property } from "@/lib/data"

function PropertyCardSlide({ property, uniqueKey }: { property: Property; uniqueKey: string }) {
  // Monta o link direto para a página e passa o ID na URL para abrir o painel de detalhes
  const targetUrl = `/empreendimentos/${property.category}?id=${property.id}#detalhes`
  const isLocacao = property.category?.includes("alugar")

  return (
    <div key={uniqueKey} className="flex-shrink-0 w-[300px] sm:w-[320px] md:w-[340px] px-3">
      <article className="group bg-white rounded-2xl overflow-hidden border border-border/80 hover:border-[#b85d19]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
        <div>
          {/* Foto de Capa + Badges */}
          <Link href={targetUrl} className="block aspect-[4/3] overflow-hidden relative cursor-pointer bg-muted">
            <img
              src={property.images?.[0] || "/placeholder.jpg"}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Badge de Locação (Laranja) ou Venda (Verde) */}
            <div
              className={`absolute top-3 left-3 text-white px-3 py-1 text-xs rounded-full font-medium shadow-sm ${
                isLocacao ? "bg-[#b85d19]" : "bg-[#0d3b2e]"
              }`}
            >
              {isLocacao ? "Locação" : "Venda"}
            </div>

            {/* Badge de Vídeo se existir */}
            {property.video && (
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 text-[11px] rounded-full font-medium flex items-center gap-1">
                <Play className="h-3 w-3 fill-white" /> Vídeo
              </div>
            )}
          </Link>

          {/* Conteúdo textual */}
          <div className="p-5">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1 font-medium">
              <MapPin className="h-3.5 w-3.5 text-[#b85d19]" /> {property.location}
            </span>

            <Link href={targetUrl}>
              <h3 className="text-base font-semibold text-foreground group-hover:text-[#b85d19] transition-colors mt-2 line-clamp-1 cursor-pointer font-serif">
                {property.title}
              </h3>
            </Link>

            {/* Características com ícones */}
            <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Bed className="h-3.5 w-3.5 text-[#0d3b2e]" /> {property.bedrooms} {property.bedrooms === 1 ? "Quarto" : "Quartos"}
              </span>
              <span className="flex items-center gap-1">
                <Bath className="h-3.5 w-3.5 text-[#0d3b2e]" /> {property.bathrooms} {property.bathrooms === 1 ? "Banheiro" : "Banheiros"}
              </span>
              <span className="flex items-center gap-1">
                <Car className="h-3.5 w-3.5 text-[#0d3b2e]" /> {property.parking} {property.parking === 1 ? "Vaga" : "Vagas"}
              </span>
              {property.area && (
                <span className="flex items-center gap-1">
                  <Maximize className="h-3.5 w-3.5 text-[#0d3b2e]" /> {property.area}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Rodapé: Preço e Botão Ver Detalhes */}
        <div className="p-5 pt-0">
          <div className="pt-4 border-t border-border flex items-center justify-between">
            <span className="text-sm font-semibold text-[#0d3b2e] line-clamp-1 mr-2">
              {property.price || "Sob Consulta"}
            </span>
            <Button
              asChild
              size="sm"
              className="bg-[#0d3b2e] hover:bg-[#092920] text-white transition-colors shrink-0"
            >
              <Link href={targetUrl}>
                Ver Detalhes
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}

export function FeaturedCarousel() {
  if (!featuredProperties || featuredProperties.length === 0) return null

  // Cria repetição para a animação contínua da esteira
  const baseList = [...featuredProperties, ...featuredProperties]

  return (
    <section className="py-16 bg-[#faf7f2] overflow-hidden border-b border-border/60">
      <style jsx>{`
        @keyframes scrollMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .carousel-track {
          display: flex;
          flex-shrink: 0;
          animation: scrollMarquee 45s linear infinite;
        }
        .carousel-container:hover .carousel-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
        <div className="border-l-4 border-[#b85d19] pl-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#b85d19] font-bold block">
            Destaques
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0d3b2e] font-semibold mt-1">
            Imóveis em Destaque
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden carousel-container">
        {/* Degradês nas laterais */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#faf7f2] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#faf7f2] to-transparent z-10 pointer-events-none" />

        {/* Trilha do Carrossel */}
        <div className="flex w-max">
          <div className="carousel-track">
            {baseList.map((property, idx) => (
              <PropertyCardSlide
                key={`track1-${property.id}-${idx}`}
                uniqueKey={`track1-${property.id}-${idx}`}
                property={property}
              />
            ))}
          </div>
          <div className="carousel-track" aria-hidden="true">
            {baseList.map((property, idx) => (
              <PropertyCardSlide
                key={`track2-${property.id}-${idx}`}
                uniqueKey={`track2-${property.id}-${idx}`}
                property={property}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}