"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { propertyCategories, featuredProperties, siteConfig } from "@/lib/data"
import { ArrowRight, Bed, Bath, Car, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"

const categoryImages: Record<string, string> = {
  "comprar": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  "alugar": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "alto-padrao": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  "comercial": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  "lancamentos": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  "casas": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  "apartamentos": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  "coberturas": "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
  "terrenos": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
  "frente-mar": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
}

// Banner editável - altere a URL da imagem aqui
const heroBannerImage = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"

export default function EmpreendimentosPage() {
  // Limite de 6 empreendimentos em destaque
  const displayedProperties = featuredProperties.slice(0, 6)
  const duplicatedProperties = [...displayedProperties, ...displayedProperties]

  return (
    <>
      {/* Hero Banner - Editável */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0">
          {/* Imagem do banner - edite a variável heroBannerImage acima */}
          <img
            src={heroBannerImage}
            alt="Empreendimentos Acauã Imóveis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-medium">
              Portfólio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mt-4">
              Empreendimentos
            </h1>
            <p className="text-lg text-white/70 mt-6 leading-relaxed max-w-xl">
              Explore nossa seleção exclusiva de imóveis de alto padrão. Cada propriedade é cuidadosamente selecionada para atender aos mais elevados padrões de qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Properties - Infinite Carousel */}
      <section className="py-20 lg:py-28 bg-secondary overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
                Destaque
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mt-2">
                Imóveis em Destaque
              </h2>
            </div>
          </div>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div className="flex animate-scroll-infinite">
            {duplicatedProperties.map((property, index) => (
              <div
                key={`${property.id}-${index}`}
                className="flex-shrink-0 w-[360px] px-3"
              >
                <article className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300">
                  <Link href={`/empreendimentos/${property.category}/${property.id}`}>
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={property.images[0]}
                        alt={property.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1.5 text-[10px] uppercase tracking-wider bg-accent text-accent-foreground rounded-md font-medium">
                          Destaque
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        {property.location}
                      </span>
                      <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors mt-1.5 line-clamp-1">
                        {property.title}
                      </h3>
                      
                      <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Bed className="h-3.5 w-3.5" />
                          {property.bedrooms}
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath className="h-3.5 w-3.5" />
                          {property.bathrooms}
                        </span>
                        <span className="flex items-center gap-1">
                          <Car className="h-3.5 w-3.5" />
                          {property.parking}
                        </span>
                        <span className="flex items-center gap-1">
                          <Maximize className="h-3.5 w-3.5" />
                          {property.area}
                        </span>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-border">
                        <span className="text-lg font-light text-foreground">
                          {property.price}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
              Explorar
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mt-2">
              Categorias
            </h2>
            <p className="text-muted-foreground mt-3">
              Selecione uma categoria para explorar nossos imóveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {propertyCategories.map((category) => (
              <Link
                key={category.id}
                href={`/empreendimentos/${category.slug}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <img
                  src={categoryImages[category.slug] || categoryImages["comprar"]}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    {category.name}
                  </h3>
                  <p className="text-sm text-white/70 mt-1">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-white/80 group-hover:text-accent transition-colors">
                    Ver Imóveis
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Não encontrou o que procura?
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Nossa equipe de especialistas pode ajudá-lo a encontrar o imóvel ideal para você. Entre em contato e conte-nos suas necessidades.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-lg">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com Especialista
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
