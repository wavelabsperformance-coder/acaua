"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Bath,
  Maximize,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// =========================================================================
// PONTOS COMERCIAIS (SALAS, LOJAS E PONTOS)
// =========================================================================
const pontosComerciais = [
  // 1. PONTO COMERCIAL - AV. AGAMENON MAGALHÃES (4 FOTOS)
  {
    id: "ponto-comercial-agamenon-magalhaes",
    title: "Ponto Comercial na Avenida Agamenon Magalhães",
    price: "R$ 4.500 / mês",
    location: "Av. Agamenon Magalhães, Caruaru - PE",
    coverImage: "/imoveis/pontos-comerciais/ponto-comercial-agamenon-magalhaes/1.jpeg",
    bathrooms: 1,
    parking: 0,
    area: "25m² (5m x 5m)",
    description: `Excelente ponto comercial para locação localizado no principal e mais valorizado corredor comercial de Caruaru: Avenida Agamenon Magalhães.

Localização de altíssimo fluxo diário de pedestres e veículos, garantindo máxima visibilidade e conveniência para o seu negócio ou franquia.

Configuração do imóvel:
• Dimensões: 5 metros de frente por 5 metros de fundo (25 m² de área útil)
• 1 banheiro social privativo
• Ponto versátil para diversos segmentos comerciais ou de serviços
• Fachada com ótima exposição visual`,
    videos: [],
    images: [
      "/imoveis/pontos-comerciais/ponto-comercial-agamenon-magalhaes/1.jpeg",
      "/imoveis/pontos-comerciais/ponto-comercial-agamenon-magalhaes/2.jpeg",
      "/imoveis/pontos-comerciais/ponto-comercial-agamenon-magalhaes/3.jpeg",
      "/imoveis/pontos-comerciais/ponto-comercial-agamenon-magalhaes/4.jpeg",
    ],
    amenities: [
      "Principal Avenida Comercial de Caruaru",
      "Excelente Visibilidade e Vitrine",
      "Dimensão 5m x 5m",
      "1 Banheiro Privativo",
      "Alto Fluxo de Pedestres e Veículos",
      "Pronto para Instalação",
    ],
  },
]

// Componente do Card Comercial
function PropertyCard({
  property,
}: {
  property: (typeof pontosComerciais)[0]
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const totalImages = property.images.length
  const hasVideos = property.videos && property.videos.length > 0

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

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-border/80 hover:border-[#b85d19]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        <Link
          href={`/imoveis/${property.id}`}
          className="block aspect-[4/3] overflow-hidden relative bg-muted cursor-pointer"
        >
          <img
            src={property.images[currentImgIndex] || property.coverImage || "/placeholder.jpg"}
            alt={`${property.title} - foto ${currentImgIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute top-3 left-3 bg-[#b85d19] text-white px-3 py-1 text-xs rounded-full font-medium shadow-sm">
            Comercial
          </div>

          {hasVideos && (
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 text-[11px] rounded-full font-medium flex items-center gap-1">
              <Play className="h-3 w-3 fill-white" /> Vídeo
            </div>
          )}

          {totalImages > 1 && (
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded-md">
              {currentImgIndex + 1} / {totalImages}
            </div>
          )}

          {totalImages > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Imagem anterior"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md hover:scale-105"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Próxima imagem"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md hover:scale-105"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </Link>

        <div className="p-5">
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1 font-medium">
            <MapPin className="h-3.5 w-3.5 text-[#b85d19]" /> {property.location}
          </span>
          <Link href={`/imoveis/${property.id}`} className="block">
            <h3 className="text-base font-semibold text-foreground group-hover:text-[#b85d19] transition-colors mt-2 line-clamp-1 font-serif">
              {property.title}
            </h3>
          </Link>

          <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Bath className="h-3.5 w-3.5 text-[#0d3b2e]" /> {property.bathrooms}{" "}
              {property.bathrooms === 1 ? "Banheiro" : "Banheiros"}
            </span>
            {property.area && (
              <span className="flex items-center gap-1">
                <Maximize className="h-3.5 w-3.5 text-[#0d3b2e]" /> {property.area}
              </span>
            )}
          </div>
        </div>
      </div>

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
            <Link href={`/imoveis/${property.id}`}>Ver Detalhes</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

function PontosComerciaisContent() {
  return (
    <>
      {/* Hero Header */}
      <section className="pt-28 pb-10 bg-[#0d3b2e] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/empreendimentos"
            className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Categorias
          </Link>
          <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-semibold block">
            Categoria
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-light mt-2 text-white">
            Pontos Comerciais
          </h1>
          <p className="text-white/75 mt-3 max-w-2xl text-sm md:text-base">
            Salas, lojas e estruturas corporativas em localizações estratégicas para o seu negócio.
          </p>
        </div>
      </section>

      {/* Grid de Cards dos Pontos Comerciais */}
      <section className="py-16 bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8 border-l-4 border-[#b85d19] pl-3">
            <p className="text-sm font-medium text-foreground">
              Mostrando <span className="font-bold text-[#0d3b2e]">{pontosComerciais.length}</span>{" "}
              {pontosComerciais.length === 1 ? "imóvel comercial" : "imóveis comerciais"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pontosComerciais.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default function PontosComerciaisPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <PontosComerciaisContent />
    </Suspense>
  )
}