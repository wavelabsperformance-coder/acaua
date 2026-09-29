"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Play,
  Building2,
  Maximize,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export interface ImovelComercial {
  id: string
  title: string
  price: string
  location: string
  coverImage: string
  bathrooms: number
  area: string
  description: string
  videos?: string[]
  images: string[]
  amenities: string[]
}

const pontosComerciais: ImovelComercial[] = [
  // 1. SALA COMERCIAL GALERIA AVENIDA CENTER (NOVA UNIDADE)
  {
    id: "sala-comercial-galeria-avenida-center",
    title: "Sala Comercial na Galeria Avenida Center",
    price: "R$ 1.800 / mês (Incluso Condomínio e IPTU)",
    location: "Av. Agamenon Magalhães, Maurício de Nassau, Caruaru - PE",
    coverImage:
      "/imoveis/pontos-comerciais/sala-galeria-avenida-center/6.jpeg",
    bathrooms: 6,
    area: "30m²",
    description: `OPORTUNIDADE DE ALUGUEL — SALA COMERCIAL NA AGAMENON MAGALHÃES!

Excelente oportunidade para instalar ou expandir o seu negócio no coração de Caruaru!

Localização Privilegiada: Galeria Avenida Center (no mesmo prédio onde funciona a Claro)
Endereço: Av. Agamenon Magalhães, 297 - Maurício de Nassau, Caruaru - PE

Valor: R$ 1.800,00/mês
TUDO INCLUSO: Condomínio e IPTU já estão inclusos no valor do aluguel! Sem surpresas no fim do mês.

Destaques:
• Ponto de altíssima visibilidade e grande fluxo na principal avenida da cidade
• Bairro nobre e estratégico (Maurício de Nassau)
• Perfeito para escritórios, consultórios, estética ou prestação de serviços`,
    videos: ["/imoveis/pontos-comerciais/sala-galeria-avenida-center/1.mp4"],
    images: Array.from(
      { length: 9 },
      (_, i) =>
        `/imoveis/pontos-comerciais/sala-galeria-avenida-center/${i + 1}.jpeg`
    ),
    amenities: [
      "Galeria Avenida Center",
      "Av. Agamenon Magalhães",
      "Condomínio e IPTU Inclusos",
      "Bairro Maurício de Nassau",
      "Grande Fluxo de Pedestres e Veículos",
      "Ideal para Consultórios e Escritórios",
    ],
  },

  // 2. PONTO COMERCIAL AGAMENON MAGALHÃES
  {
    id: "ponto-comercial-agamenon-magalhaes",
    title: "Ponto Comercial na Avenida Agamenon Magalhães",
    price: "R$ 4.500 / mês",
    location: "Av. Agamenon Magalhães, Caruaru - PE",
    coverImage:
      "/imoveis/pontos-comerciais/ponto-comercial-agamenon-magalhaes/.jpeg",
    bathrooms: 1,
    area: "25m² (5m x 5m)",
    description: `Ponto comercial na principal avenida de Caruaru: Av. Agamenon Magalhães. Alto fluxo de pedestres e carros.`,
    videos: [],
    images: Array.from(
      { length: 4 },
      (_, i) =>
        `/imoveis/pontos-comerciais/ponto-comercial-agamenon-magalhaes/${i + 1}.jpeg`
    ),
    amenities: [
      "Avenida Principal",
      "Excelente Visibilidade",
      "1 Banheiro",
      "Alto Fluxo",
    ],
  },
]

function PropertyCard({ property }: { property: ImovelComercial }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const images =
    property.images && property.images.length > 0
      ? property.images
      : [property.coverImage]

  const totalImages = images.length
  const hasVideos = property.videos && property.videos.length > 0

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setCurrentImgIndex((prev) =>
      prev === 0 ? totalImages - 1 : prev - 1
    )
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setCurrentImgIndex((prev) =>
      prev === totalImages - 1 ? 0 : prev + 1
    )
  }

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-border/80 hover:border-[#b85d19]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative">
      <div>
        <Link
          href={`/imoveis/${property.id}`}
          className="block aspect-[4/3] overflow-hidden relative bg-muted cursor-pointer"
        >
          <img
            src={images[currentImgIndex] || "/placeholder.jpg"}
            alt={`${property.title} - foto ${currentImgIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute top-3 left-3 bg-[#0d3b2e] text-white px-3 py-1 text-xs rounded-full font-medium shadow-sm">
            Comercial
          </div>

          {hasVideos && (
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 text-[11px] rounded-full font-medium flex items-center gap-1">
              <Play className="h-3 w-3 fill-white" />
              {property.videos && property.videos.length > 1
                ? `${property.videos.length} Vídeos`
                : "Vídeo"}
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
            <MapPin className="h-3.5 w-3.5 text-[#b85d19]" />
            {property.location}
          </span>

          <Link href={`/imoveis/${property.id}`} className="block">
            <h3 className="text-base font-semibold text-foreground group-hover:text-[#b85d19] transition-colors mt-2 line-clamp-1 font-serif">
              {property.title}
            </h3>
          </Link>

          <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Building2 className="h-3.5 w-3.5 text-[#0d3b2e]" />
              Ponto Comercial
            </span>

            {property.area && (
              <span className="flex items-center gap-1">
                <Maximize className="h-3.5 w-3.5 text-[#0d3b2e]" />
                {property.area}
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
            <Link href={`/imoveis/${property.id}`}>
              Ver Detalhes
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

function PontosComerciaisContent() {
  return (
    <>
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
            Salas, lojas e espaços comerciais estratégicos para o crescimento do seu negócio.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 border-l-4 border-[#b85d19] pl-3">
              <p className="text-sm font-medium text-foreground">
                Mostrando{" "}
                <span className="font-bold text-[#0d3b2e]">
                  {pontosComerciais.length}
                </span>{" "}
                pontos comerciais
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pontosComerciais.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default function PontosComerciaisPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Carregando pontos comerciais...</div>}>
      <PontosComerciaisContent />
    </Suspense>
  )
}