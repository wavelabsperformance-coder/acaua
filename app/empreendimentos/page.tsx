"use client"

import Link from "next/link"
import { ArrowRight, Building2, Home, Key, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"
import { FeaturedCarousel } from "@/components/featured-carousel"

const categories = [
  {
    id: "apartamentos-para-alugar",
    title: "Apartamentos para Alugar",
    subtitle: "Locação Residencial & Flats",
    description: "Opções mobiliadas e exclusivas nos melhores bairros.",
    slug: "apartamentos-para-alugar",
    count: "5 imóveis disponíveis",
    image: "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/1.jpeg",
    icon: Key,
    tag: "Locação",
  },
  {
    id: "casas-para-venda",
    title: "Casas para Venda",
    subtitle: "Condomínios Fechados & Mansões",
    description: "Propriedades de alto padrão, privacidade e lazer completo.",
    slug: "casas-para-venda",
    count: "3 imóveis disponíveis",
    image: "/imoveis/casas-para-venda/casa-monte-castelo-gravata/5.jpeg",
    icon: Home,
    tag: "Venda",
  },
  {
    id: "apartamentos-para-venda",
    title: "Apartamentos para Venda",
    subtitle: "Alto Padrão & Vista Mar",
    description: "Apartamentos prontos para morar e coberturas exclusivas.",
    slug: "apartamentos-para-venda",
    count: "2 imóveis disponíveis",
    image: "/imoveis/apartamentos-para-venda/edificio-santa-maria/1.jpeg",
    icon: Building2,
    tag: "Venda",
  },
  {
    id: "casas-para-alugar",
    title: "Casas para Alugar",
    subtitle: "Residências para Locação",
    description: "Casas em bairros nobres e condomínios com segurança.",
    slug: "casas-para-alugar",
    count: "Em breve novos imóveis",
    image: "/imoveis/casas-para-venda/casa-the-house-club/1.jpeg",
    icon: Tag,
    tag: "Locação",
  },
]

export default function EmpreendimentosPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="pt-32 pb-14 bg-[#0d3b2e] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#b85d19_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-bold block">
            Portfólio Exclusivo
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light mt-2 text-white">
            Nossos Empreendimentos
          </h1>
          <p className="text-white/80 mt-4 max-w-2xl text-base md:text-lg font-light leading-relaxed">
            Explore nossa seleção exclusiva de casas e apartamentos para compra e locação em Pernambuco.
          </p>
        </div>
      </section>

      {/* Grid com as 4 Categorias Estilizadas */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10 border-l-4 border-[#b85d19] pl-3">
            <h2 className="font-serif text-2xl md:text-3xl text-[#0d3b2e] font-semibold">
              Categorias Principais
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <Link
                  key={cat.id}
                  href={`/empreendimentos/${cat.slug}`}
                  className="group relative h-[360px] sm:h-[400px] rounded-3xl overflow-hidden border border-border/60 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-7 sm:p-9"
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061e17] via-[#0d3b2e]/60 to-black/30 transition-opacity duration-500 group-hover:opacity-90" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#b85d19] text-white shadow-md">
                      {cat.tag}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#b85d19] group-hover:border-[#b85d19] transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <span className="text-xs uppercase tracking-widest text-[#f0a36b] font-medium block mb-1">
                      {cat.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white group-hover:text-[#f8c9a5] transition-colors mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-white/80 text-sm font-light line-clamp-2 mb-4">
                      {cat.description}
                    </p>

                    <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                      <span className="text-xs text-white/70 font-medium">
                        {cat.count}
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#b85d19] bg-white/10 group-hover:bg-white px-4 py-2 rounded-xl backdrop-blur-sm transition-all duration-300">
                        Acessar Categoria
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Carrossel de Destaques Oficial Padronizado */}
      <FeaturedCarousel />

      {/* CTA Final */}
      <section className="py-20 bg-white border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0d3b2e]">
            Não encontrou o que procura?
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Nossa equipe de especialistas está pronta para apresentar oportunidades exclusivas fora do catálogo público.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-[#0d3b2e] hover:bg-[#092920] text-white rounded-xl px-8"
            >
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com Especialista
                <ArrowRight className="ml-2 h-4 w-4 text-[#b85d19]" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}