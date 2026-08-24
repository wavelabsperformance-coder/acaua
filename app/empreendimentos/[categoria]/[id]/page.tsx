"use client"

import { useState, use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { propertyCategories, generatePropertiesForCategory, featuredProperties, siteConfig } from "@/lib/data"
import { Lightbox } from "@/components/lightbox"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Bed, Bath, Car, Maximize, MapPin, MessageCircle, Phone, Share2, Heart, Play } from "lucide-react"

interface Props {
  params: Promise<{ categoria: string; id: string }>
}

function findProperty(categoria: string, id: string) {
  // First check featured properties
  const featured = featuredProperties.find((p) => p.id === id)
  if (featured) return featured

  // Then check generated properties
  const category = propertyCategories.find((c) => c.slug === categoria)
  if (!category) return null

  const properties = generatePropertiesForCategory(categoria)
  return properties.find((p) => p.id === id) || null
}

export default function PropertyPage({ params }: Props) {
  const { categoria, id } = use(params)
  const property = findProperty(categoria, id)

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  if (!property) {
    notFound()
  }

  const category = propertyCategories.find((c) => c.slug === categoria)

  // Prepare media items for lightbox
  const mediaItems = [
    ...property.images.map((src) => ({ type: "image" as const, src, alt: property.title })),
    ...(property.video ? [{ type: "video" as const, src: property.video }] : []),
  ]

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href={`/empreendimentos/${categoria}`}
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para {category?.name || "Empreendimentos"}
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Main image */}
            <div
              className="aspect-[4/3] lg:aspect-auto lg:row-span-2 overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(0)}
            >
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Secondary images */}
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(1, 5).map((image, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] overflow-hidden cursor-pointer group relative"
                  onClick={() => openLightbox(index + 1)}
                >
                  <img
                    src={image}
                    alt={`${property.title} - Imagem ${index + 2}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {index === 3 && property.images.length > 5 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white text-lg font-medium">
                        +{property.images.length - 5} fotos
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Video thumbnail if available */}
            {property.video && (
              <div
                className="col-span-full aspect-video overflow-hidden cursor-pointer group relative"
                onClick={() => openLightbox(property.images.length)}
              >
                <img
                  src={property.images[0]}
                  alt="Vídeo do imóvel"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Play className="h-10 w-10 text-white fill-white" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Gallery button */}
          <button
            onClick={() => openLightbox(0)}
            className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
          >
            Ver todas as {mediaItems.length} fotos e vídeos
          </button>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    {property.location}
                  </span>
                  <h1 className="font-serif text-3xl md:text-4xl text-foreground">
                    {property.title}
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="p-3 border border-border hover:bg-secondary transition-colors"
                    aria-label="Favoritar"
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                  <button
                    className="p-3 border border-border hover:bg-secondary transition-colors"
                    aria-label="Compartilhar"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap items-center gap-6 mt-8 py-6 border-y border-border">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground font-medium">{property.bedrooms}</span>
                  <span className="text-muted-foreground">Quartos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground font-medium">{property.bathrooms}</span>
                  <span className="text-muted-foreground">Banheiros</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground font-medium">{property.parking}</span>
                  <span className="text-muted-foreground">Vagas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground font-medium">{property.area}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Sobre o Imóvel
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Este imóvel exclusivo oferece uma combinação perfeita de conforto, sofisticação e localização privilegiada. Com acabamentos de primeira linha e projeto arquitetônico diferenciado, é ideal para quem busca qualidade de vida e um espaço que reflita seu estilo.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  A propriedade conta com amplos ambientes integrados, iluminação natural abundante e uma infraestrutura completa de lazer e segurança. Cada detalhe foi pensado para proporcionar bem-estar e praticidade no dia a dia.
                </p>
              </div>

              {/* Amenities */}
              <div className="mt-12">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Características e Comodidades
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Ar condicionado",
                    "Piscina privativa",
                    "Churrasqueira",
                    "Varanda gourmet",
                    "Closet",
                    "Home office",
                    "Jardim",
                    "Segurança 24h",
                    "Academia",
                    "Salão de festas",
                    "Playground",
                    "Pet friendly",
                  ].map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-secondary p-8">
                <div className="mb-6">
                  <span className="text-sm text-muted-foreground">Valor</span>
                  <p className="font-serif text-4xl text-foreground mt-1">
                    {property.price}
                  </p>
                </div>

                <div className="space-y-4">
                  <Button asChild size="lg" className="w-full">
                    <a
                      href={`${siteConfig.whatsappLink}?text=Olá! Tenho interesse no imóvel: ${property.title} (${property.price})`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Falar pelo WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <a href={`tel:${siteConfig.phone}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Ligar Agora
                    </a>
                  </Button>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-4">
                    Agende uma Visita
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Conheça este imóvel pessoalmente. Nossa equipe está pronta para recebê-lo e apresentar todos os detalhes.
                  </p>
                  <Button asChild className="w-full">
                    <a
                      href={`${siteConfig.whatsappLink}?text=Olá! Gostaria de agendar uma visita ao imóvel: ${property.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agendar Visita
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        items={mediaItems}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
