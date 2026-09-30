"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Bed,
  Bath,
  Car,
  Maximize,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Play,
  Home,
  Building,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { rentalProperties } from "@/lib/data"
import { FeaturedCarousel } from "@/components/featured-carousel"

export interface ImovelAluguel {
  id: string
  tipo: "casa" | "apartamento"
  title: string
  price: string
  location: string
  coverImage: string
  bedrooms: number
  bathrooms: number
  parking: number
  area: string
  description: string
  videos: string[]
  images: string[]
  amenities: string[]
}

function parsePrecoAluguel(priceStr: string): number {
  if (!priceStr || priceStr.toLowerCase().includes("consulte")) return 0
  const cleanStr = priceStr.split("/")[0].replace(/[^\d]/g, "")
  return cleanStr ? parseInt(cleanStr, 10) : 0
}

const imoveisAluguel: ImovelAluguel[] = [
  // 1. BEACH CLASS RESIDENCE SANTA MARIA
  {
    id: "ap-beach-class-residence-santa-maria",
    tipo: "apartamento",
    title: "Apartamento no Beach Class Residence Santa Maria",
    price: "R$ 3.800 / mês",
    location: "Boa Viagem, Recife - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/beach-class-residence-santa-maria/1.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "50m²",
    description: `EXCELENTE OPORTUNIDADE DE LOCAÇÃO EM BOA VIAGEM!`,
    videos: [
      "/imoveis/apartamentos-para-alugar/beach-class-residence-santa-maria/22.mp4",
    ],
    images: Array.from(
      { length: 21 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/beach-class-residence-santa-maria/${i + 1}.jpeg`
    ),
    amenities: ["1 Suíte", "Armários Planejados", "Piscina na Cobertura"],
  },

  // 2. CONDOMÍNIO MR. ROTTERDAM
  {
    id: "ap-condominio-mr-rotterdam",
    tipo: "apartamento",
    title: "Apartamento Mobiliado no Condomínio Mr. Rotterdam",
    price: "R$ 2.400 / mês",
    location: "Universitário, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/2.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "38m²",
    description: `Excelente oportunidade de locação no Condomínio Mr. Rotterdam.`,
    videos: [],
    images: Array.from(
      { length: 15 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/${i + 1}.jpeg`
    ),
    amenities: ["100% Mobiliado", "Piscina com Deck", "Academia Equipada"],
  },

  // 3. APARTAMENTO MOBILIADO NO MAURÍCIO DE NASSAU
  {
    id: "ap-mobiliado-mauricio-de-nassau",
    tipo: "apartamento",
    title: "Apartamento Mobiliado no Maurício de Nassau",
    price: "R$ 1.700 / mês",
    location: "Maurício de Nassau, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/1.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "35m²",
    description: "Apartamento mobiliado e prático para locação no bairro Maurício de Nassau.",
    videos: [],
    images: Array.from(
      { length: 9 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/${i + 1}.jpeg`
    ),
    amenities: ["Mobiliado", "Ar-condicionado", "Todas as Taxas Inclusas"],
  },

  // 4. EDIFÍCIO TEREZA RODRIGUES
  {
    id: "ap-edificio-tereza-rodrigues",
    tipo: "apartamento",
    title: "Apartamento no Edifício Tereza Rodrigues",
    price: "R$ 4.000 / mês",
    location: "Boa Viagem, Recife - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/1.jpeg",
    bedrooms: 2,
    bathrooms: 3,
    parking: 1,
    area: "64m²",
    description: `Excelente oportunidade de locação no Edifício Tereza Rodrigues.`,
    videos: [],
    images: Array.from(
      { length: 34 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/${i + 1}.jpeg`
    ),
    amenities: ["Andar Alto", "Varanda Panorâmica", "1 Suíte"],
  },

  // 5. JARDIM DOS ALECRINS
  {
    id: "ap-edificio-jardim-dos-alecrins",
    tipo: "apartamento",
    title: "Apartamento Mobiliado no Edifício Jardim dos Alecrins",
    price: "R$ 2.800 / mês",
    location: "Universitário, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/1.jpeg",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "54m²",
    description: `Excelente apartamento totalmente mobiliado e nascente no Edifício Jardim dos Alecrins.`,
    videos: [],
    images: Array.from(
      { length: 33 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/${i + 1}.jpeg`
    ),
    amenities: ["Totalmente Mobiliado", "Posição Nascente", "Piscina e Lazer"],
  },

  // 6. STUDIO ALTO PADRÃO
  {
    id: "ap-studio-alto-padrao-shopping",
    tipo: "apartamento",
    title: "Apartamento de Alto Padrão - Pronto para Morar",
    price: "R$ 4.000 / mês",
    location: "Maurício de Nassau, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/1.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "38m²",
    description: "Imóvel diferenciado com padrão de acabamento e decoração premium.",
    videos: [
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/19.mp4",
    ],
    images: Array.from(
      { length: 29 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/${i + 1}.jpeg`
    ),
    amenities: ["Alto Padrão Decorado", "Academia Equipada", "Coworking"],
  },

  // 7. EDIFÍCIO JOÃO SOARES
  {
    id: "ap-edificio-joao-soares",
    tipo: "apartamento",
    title: "Apartamento de Alto Padrão no Edifício João Soares",
    price: "R$ 4.200 / mês",
    location: "Maurício de Nassau, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/1.jpeg",
    bedrooms: 2,
    bathrooms: 3,
    parking: 2,
    area: "80m²",
    description: "Apartamento impecável no Edifício João Soares.",
    videos: [],
    images: Array.from(
      { length: 13 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/edificio-joao-soares/${i + 1}.jpeg`
    ),
    amenities: ["2 Suítes Privativas", "Andar Alto", "2 Vagas Cobertas"],
  },

  // 8. CAMINHO DAS AROEIRAS
  {
    id: "ap-caminho-das-aroeiras",
    tipo: "apartamento",
    title: "Apartamento Condomínio Caminho das Aroeiras",
    price: "Consulte o valor",
    location: "Indianópolis, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/7.jpeg",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "52m²",
    description: "Excelente oportunidade de locação ao lado do Caruaru Shopping.",
    videos: [],
    images: Array.from(
      { length: 10 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/${i + 1}.jpeg`
    ),
    amenities: ["Ao Lado do Caruaru Shopping", "Piscina", "Salão de Festas"],
  },

  // 9. JARDIM DAS ORQUÍDEAS
  {
    id: "ap-jardim-das-orquideas-indianopolis",
    tipo: "apartamento",
    title: "Apartamento no Res. Jardim das Orquídeas",
    price: "R$ 1.500 / mês",
    location: "Indianópolis, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/jardim-das-orquideas/1.jpeg",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "42m²",
    description: `APARTAMENTO PARA LOCAÇÃO | JARDIM DAS ORQUÍDEAS — CARUARU`,
    videos: [],
    images: Array.from(
      { length: 13 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/jardim-das-orquideas/${i + 1}.jpeg`
    ),
    amenities: ["Posição Norte", "2º Andar", "Condomínio, IPTU e Gás Inclusos"],
  },

  // 10. PUERTO BALATA (INDISPONÍVEL / ALUGADO)
  {
    id: "ap-puerto-balata-boa-viagem",
    tipo: "apartamento",
    title: "Apartamento no Edifício Puerto Balata (Indisponível)",
    price: "R$ 10.000 / mês",
    location: "Boa Viagem, Recife - PE",
    coverImage: "/imoveis/apartamentos-para-alugar/puerto-balata/1.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "72m²",
    description: `EXCLUSIVIDADE EDIFÍCIO PUERTO BALATA`,
    videos: [],
    images: Array.from(
      { length: 19 },
      (_, i) => `/imoveis/apartamentos-para-alugar/puerto-balata/${i + 1}.jpeg`
    ),
    amenities: ["Indisponível / Alugado", "100% Mobiliado", "Vista Mar"],
  },
]

function PropertyCard({ property }: { property: ImovelAluguel }) {
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
    setCurrentImgIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1))
  }

  const isIndisponivel = property.id === "ap-puerto-balata-boa-viagem"

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
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              isIndisponivel ? "grayscale opacity-75" : ""
            }`}
          />

          <div className="absolute top-3 left-3 bg-[#b85d19] text-white px-3 py-1 text-xs rounded-full font-medium shadow-sm">
            Locação
          </div>

          {isIndisponivel && (
            <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-xs font-bold shadow-sm rounded-full">
              Alugado
            </div>
          )}

          {hasVideos && !isIndisponivel && (
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 text-[11px] rounded-full font-medium flex items-center gap-1">
              <Play className="h-3 w-3 fill-white" />
              {property.videos.length > 1
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
              <Bed className="h-3.5 w-3.5 text-[#0d3b2e]" />
              {property.bedrooms}{" "}
              {property.bedrooms === 1 ? "Quarto" : "Quartos"}
            </span>

            <span className="flex items-center gap-1">
              <Bath className="h-3.5 w-3.5 text-[#0d3b2e]" />
              {property.bathrooms}{" "}
              {property.bathrooms === 1 ? "Banheiro" : "Banheiros"}
            </span>

            <span className="flex items-center gap-1">
              <Car className="h-3.5 w-3.5 text-[#0d3b2e]" />
              {property.parking}{" "}
              {property.parking === 1 ? "Vaga" : "Vagas"}
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

function ImoveisParaAlugarContent() {
  const [tipoFiltro, setTipoFiltro] = useState<
    "todos" | "apartamento" | "casa"
  >("todos")

  const [cidadeFiltro, setCidadeFiltro] = useState<string>("todas")
  const [faixaPrecoFiltro, setFaixaPrecoFiltro] = useState<string>("todas")

  const imoveisFiltrados = imoveisAluguel.filter((imovel) => {
    if (tipoFiltro !== "todos" && imovel.tipo !== tipoFiltro) return false

    if (cidadeFiltro !== "todas") {
      const loc = imovel.location.toLowerCase()
      if (cidadeFiltro === "caruaru" && !loc.includes("caruaru")) return false
      if (cidadeFiltro === "recife" && !loc.includes("recife")) return false
    }

    if (faixaPrecoFiltro !== "todas") {
      const valor = parsePrecoAluguel(imovel.price)
      if (valor > 0) {
        if (faixaPrecoFiltro === "ate_2000" && valor > 2000) return false
        if (faixaPrecoFiltro === "2000_3500" && (valor < 2000 || valor > 3500)) return false
        if (faixaPrecoFiltro === "acima_3500" && valor < 3500) return false
      }
    }

    return true
  })

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
            Imóveis para Alugar
          </h1>

          <p className="text-white/75 mt-3 max-w-2xl text-sm md:text-base">
            Casas e apartamentos selecionados para locação nas regiões mais valorizadas.
          </p>
        </div>
      </section>

      <FeaturedCarousel
        properties={rentalProperties}
        title="Imóveis em Destaque para Alugar"
        subtitle="Destaques de Locação"
        type="aluguel"
      />

      <section className="py-12 bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* BARRA DE FILTROS HIGH-END / ESTILO PORTAL DE LUXO */}
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl shadow-black/5 border border-border/60 mb-12">
            <div className="flex items-center justify-between px-2 mb-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-[#b85d19]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#0d3b2e]">
                  Filtrar Catálogo de Locação
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-muted-foreground">
                  <strong className="text-[#0d3b2e] font-bold">{imoveisFiltrados.length}</strong> {imoveisFiltrados.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}
                </span>

                {(tipoFiltro !== "todos" || cidadeFiltro !== "todas" || faixaPrecoFiltro !== "todas") && (
                  <button
                    type="button"
                    onClick={() => {
                      setTipoFiltro("todos")
                      setCidadeFiltro("todas")
                      setFaixaPrecoFiltro("todas")
                    }}
                    className="text-xs font-semibold text-[#b85d19] hover:text-[#0d3b2e] transition-colors"
                  >
                    Resetar
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#faf8f5] rounded-xl border border-border/80 divide-y md:divide-y-0 md:divide-x divide-border/80 overflow-hidden">
              
              {/* CAMPO 1: TIPO DE IMÓVEL */}
              <div className="relative p-3.5 px-4 hover:bg-white transition-colors duration-200 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0d3b2e]/5 text-[#0d3b2e] shrink-0">
                  <Home className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#b85d19]">
                    Tipo de Imóvel
                  </label>
                  <div className="relative mt-0.5">
                    <select
                      value={tipoFiltro}
                      onChange={(e) => setTipoFiltro(e.target.value as any)}
                      className="w-full bg-transparent text-sm font-semibold text-foreground focus:outline-none appearance-none cursor-pointer pr-6 truncate"
                    >
                      <option value="todos">Todos os Tipos (Casas e Apts)</option>
                      <option value="casa">Casas</option>
                      <option value="apartamento">Apartamentos</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* CAMPO 2: CIDADE / REGIÃO */}
              <div className="relative p-3.5 px-4 hover:bg-white transition-colors duration-200 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0d3b2e]/5 text-[#0d3b2e] shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#b85d19]">
                    Localização
                  </label>
                  <div className="relative mt-0.5">
                    <select
                      value={cidadeFiltro}
                      onChange={(e) => setCidadeFiltro(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-foreground focus:outline-none appearance-none cursor-pointer pr-6 truncate"
                    >
                      <option value="todas">Todas as Cidades</option>
                      <option value="caruaru">Caruaru - PE</option>
                      <option value="recife">Recife - PE</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* CAMPO 3: FAIXA DE PREÇO */}
              <div className="relative p-3.5 px-4 hover:bg-white transition-colors duration-200 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0d3b2e]/5 text-[#0d3b2e] shrink-0">
                  <Building className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#b85d19]">
                    Valor Mensal
                  </label>
                  <div className="relative mt-0.5">
                    <select
                      value={faixaPrecoFiltro}
                      onChange={(e) => setFaixaPrecoFiltro(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-foreground focus:outline-none appearance-none cursor-pointer pr-6 truncate"
                    >
                      <option value="todas">Todas as Faixas de Aluguel</option>
                      <option value="ate_2000">Até R$ 2.000 / mês</option>
                      <option value="2000_3500">R$ 2.000 – R$ 3.500 / mês</option>
                      <option value="acima_3500">Acima de R$ 3.500 / mês</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* GRID DOS IMÓVEIS FILTRADOS (4 COLUNAS) */}
          {imoveisFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {imoveisFiltrados.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-border">
              <p className="text-muted-foreground text-sm">
                Nenhum imóvel encontrado com os filtros selecionados.
              </p>
              <button
                type="button"
                onClick={() => {
                  setTipoFiltro("todos")
                  setCidadeFiltro("todas")
                  setFaixaPrecoFiltro("todas")
                }}
                className="mt-3 text-[#0d3b2e] font-semibold hover:underline text-sm"
              >
                Resetar filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default function ImoveisParaAlugarPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Carregando imóveis para alugar...</div>}>
      <ImoveisParaAlugarContent />
    </Suspense>
  )
}