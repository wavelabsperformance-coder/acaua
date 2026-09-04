"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
  ArrowLeft,
  Bath,
  Maximize,
  MapPin,
  MessageCircle,
  Phone,
  ChevronLeft,
  ChevronRight,
  Play,
  Film,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Lightbox } from "@/components/lightbox"
import { siteConfig } from "@/lib/data"

// =========================================================================
// PONTOS COMERCIAIS (SALAS, LOJAS E PONTOS)
// EDITE OU ADICIONE SEUS PONTOS COMERCIAIS AQUI
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
  onSelect,
}: {
  property: (typeof pontosComerciais)[0]
  onSelect: () => void
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const totalImages = property.images.length
  const hasVideos = property.videos && property.videos.length > 0

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1))
  }

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-border/80 hover:border-[#b85d19]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        <div
          className="aspect-[4/3] overflow-hidden relative cursor-pointer bg-muted"
          onClick={onSelect}
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
        </div>

        <div className="p-5">
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1 font-medium">
            <MapPin className="h-3.5 w-3.5 text-[#b85d19]" /> {property.location}
          </span>
          <h3
            className="text-base font-semibold text-foreground group-hover:text-[#b85d19] transition-colors mt-2 line-clamp-1 cursor-pointer font-serif"
            onClick={onSelect}
          >
            {property.title}
          </h3>

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
            size="sm"
            onClick={onSelect}
            className="bg-[#0d3b2e] hover:bg-[#092920] text-white transition-colors shrink-0"
          >
            Ver Detalhes
          </Button>
        </div>
      </div>
    </article>
  )
}

function PontosComerciaisContent() {
  const searchParams = useSearchParams()
  const initialId = searchParams.get("id")

  const [selectedId, setSelectedId] = useState<string | null>(initialId)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    if (initialId) {
      setSelectedId(initialId)
      setTimeout(() => {
        const el = document.getElementById("detalhes")
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }, 150)
    }
  }, [initialId])

  const activeProperty = pontosComerciais.find((p) => p.id === selectedId)

  const mediaItems = activeProperty
    ? [
        ...activeProperty.images.map((src) => ({
          type: "image" as const,
          src,
          alt: activeProperty.title,
        })),
        ...(activeProperty.videos?.map((src) => ({ type: "video" as const, src })) || []),
      ]
    : []

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const handleSelectProperty = (id: string) => {
    setSelectedId(id)
    const el = document.getElementById("detalhes")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

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

      {/* Painel de Detalhes do Ponto Comercial Selecionado */}
      {activeProperty && (
        <section className="py-12 bg-white border-b border-border scroll-mt-20" id="detalhes">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <button
              onClick={() => setSelectedId(null)}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-[#b85d19] mb-6 font-medium cursor-pointer transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Fechar detalhes
            </button>

            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1 text-sm text-[#b85d19] font-medium mb-2">
                  <MapPin className="h-4 w-4" /> {activeProperty.location}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0d3b2e]">
                  {activeProperty.title}
                </h2>
              </div>

              {activeProperty.videos && activeProperty.videos.length > 0 && (
                <Button
                  onClick={() => openLightbox(activeProperty.images.length)}
                  variant="outline"
                  className="border-[#b85d19] text-[#b85d19] hover:bg-[#b85d19] hover:text-white transition-colors gap-2 w-fit"
                >
                  <Play className="h-4 w-4 fill-current" /> Assistir Vídeos em Tela Cheia
                </Button>
              )}
            </div>

            {/* Galeria de Fotos */}
            <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div
                className="aspect-[4/3] lg:aspect-auto lg:row-span-2 overflow-hidden cursor-pointer group rounded-2xl bg-muted relative"
                onClick={() => openLightbox(0)}
              >
                <img
                  src={activeProperty.coverImage || activeProperty.images[0] || "/placeholder.jpg"}
                  alt={activeProperty.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {activeProperty.videos && activeProperty.videos.length > 0 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      openLightbox(activeProperty.images.length)
                    }}
                    className="absolute bottom-4 left-4 bg-black/70 hover:bg-black/85 backdrop-blur-md text-white text-xs px-3.5 py-2 rounded-full flex items-center gap-2 transition-all shadow-lg hover:scale-105"
                  >
                    <Play className="h-3.5 w-3.5 fill-white text-white" /> Ver vídeos completos
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {activeProperty.images.slice(1, 4).map((image, index) => (
                  <div
                    key={index}
                    className="aspect-[4/3] overflow-hidden cursor-pointer group rounded-xl bg-muted relative"
                    onClick={() => openLightbox(index + 1)}
                  >
                    <img
                      src={image}
                      alt={`${activeProperty.title} - ${index + 2}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Bath className="h-5 w-5 text-[#0d3b2e]" />{" "}
                    <span className="font-medium text-foreground">
                      {activeProperty.bathrooms}
                    </span>{" "}
                    {activeProperty.bathrooms === 1 ? "Banheiro" : "Banheiros"}
                  </div>
                  {activeProperty.area && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Maximize className="h-5 w-5 text-[#0d3b2e]" />{" "}
                      <span className="font-medium text-foreground">
                        {activeProperty.area}
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#0d3b2e] font-serif">
                    Sobre o Ponto Comercial
                  </h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {activeProperty.description}
                  </p>
                </div>

                {activeProperty.amenities && activeProperty.amenities.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#0d3b2e] font-serif">
                      Diferenciais e Estrutura
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {activeProperty.amenities.map((item, idx) => (
                        <span
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#b85d19]" /> {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-28 bg-[#faf7f2] p-6 rounded-2xl border border-border shadow-sm">
                  <span className="text-xs uppercase text-[#b85d19] font-semibold tracking-wider">
                    Condições Comerciais
                  </span>
                  <p className="font-serif text-2xl md:text-3xl text-[#0d3b2e] font-bold my-2">
                    {activeProperty.price || "Sob Consulta"}
                  </p>

                  <div className="space-y-3 mt-6">
                    <Button
                      asChild
                      className="w-full bg-[#0d3b2e] hover:bg-[#092920] text-white"
                      size="lg"
                    >
                      <a
                        href={`${siteConfig.whatsappLink}?text=Olá! Gostaria de mais informações sobre o ponto comercial na Av. Agamenon Magalhães: ${activeProperty.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-5 w-5 text-[#b85d19]" /> Negociar via
                        WhatsApp
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#0d3b2e] text-[#0d3b2e] hover:bg-[#0d3b2e] hover:text-white"
                      size="lg"
                    >
                      <a href={`tel:${siteConfig.phone}`}>
                        <Phone className="mr-2 h-5 w-5 text-[#b85d19]" /> Ligar Agora
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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
                onSelect={() => handleSelectProperty(property.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        items={mediaItems}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
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