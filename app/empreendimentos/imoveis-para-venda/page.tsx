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
  Play,
  Home,
  Building2,
  Building,
  LayoutGrid,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { saleProperties } from "@/lib/data"
import { FeaturedCarousel } from "@/components/featured-carousel"

// =========================================================================
// IMÓVEIS PARA VENDA (CASAS E APARTAMENTOS COM ATRIBUTO 'type')
// =========================================================================

export interface ImovelVenda {
  id: string
  title: string
  type: "casa" | "apartamento"
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

const imoveisVenda: ImovelVenda[] = [
  // 1. EDIFÍCIO ILHA DE PONZA - CASA FORTE
  {
    id: "ap-edificio-ilha-de-ponza-casa-forte",
    title: "Apartamento no Edifício Ilha de Ponza",
    type: "apartamento",
    price: "R$ 600.000",
    location: "Casa Forte, Recife - PE",
    coverImage:
      "/imoveis/apartamentos-para-venda/edificio-ilha-de-ponza/1.jpeg",
    bedrooms: 4,
    bathrooms: 2,
    parking: 1,
    area: "103m²",
    description: `APARTAMENTO À VENDA NO CORAÇÃO DE CASA FORTE!

EDIFÍCIO ILHA DE PONZA | AO LADO DA PRAÇA DE CASA FORTE

Se você procura espaço, ventilação, localização privileged e praticidade, esta é uma excelente oportunidade para morar em uma das regiões mais tradicionais e valorizadas da Zona Norte do Recife.

Localização privilegiada
Ao lado da Praça de Casa Forte, com fácil acesso a supermercados, escolas, restaurantes, farmácias, serviços e toda a conveniência que o bairro oferece.

SOBRE O APARTAMENTO
• 103 m² de área
• 4 quartos
• Sala ampla
• Cozinha
• 1 banheiro social
• Área de serviço
• 1 banheiro de serviço
• Varanda super ventilada
• Posição frente Sul
• Vista privilegiada
• 1 vaga de garagem coberta

Um apartamento com planta generosa e ambientes amplos, ideal para quem não abre mão de espaço e conforto para toda a família.

SOBRE O EDIFÍCIO
O Edifício Ilha de Ponza está localizado na Rua Edson Álvares, em um dos pontos mais desejados de Casa Forte.

Estrutura e Lazer do Condomínio:
• Piscina
• Salão de festas
• Playground
• Guarita e sistema de segurança
• Elevadores
• Área externa e pilotis
• Poço artesiano
• Bicicletário
• Portão eletrônico

Pode ser financiado!`,
    videos: [],
    images: Array.from(
      { length: 27 },
      (_, i) =>
        `/imoveis/apartamentos-para-venda/edificio-ilha-de-ponza/${i + 1}.jpeg`
    ),
    amenities: [
      "4 Quartos",
      "Varanda Ventilada (Frente Sul)",
      "Ao Lado da Praça de Casa Forte",
      "Piscina",
      "Salão de Festas",
      "Playground",
      "Poço Artesiano",
      "Bicicletário",
      "Portaria e Segurança 24h",
      "1 Vaga Coberta",
      "Aceita Financiamento",
    ],
  },

  // 2. VIVER BEM INDIANÓPOLIS - TORRE 1 APTO 908
  {
    id: "ap-viver-bem-indianopolis-908",
    title: "Apartamento no Viver Bem Indianópolis",
    type: "apartamento",
    price: "Consulte o valor",
    location: "Indianópolis, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/1.jpeg",
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    area: "63,25m²",
    description: `Excelente oportunidade de compra no condomínio Viver Bem Indianópolis. Apartamento de 63,25 m², localizado na Torre 1 – apartamento 908, com uma planta moderna, funcional e bem distribuída.

O imóvel conta com 3 quartos, sendo 1 suíte, sala para 2 ambientes, varanda, banheiro social e cozinha integrada à área de serviço, proporcionando praticidade e conforto para o dia a dia.

Estrutura completa de lazer, bem-estar e conveniência:
• Piscina com raia semiolímpica e piscina infantil
• Espaço churrasco e Espaço Gourmet
• Salão de festas
• Academia completa e equipada
• Sala multifuncional
• Coworking estruturado
• Espaço Box e bicicletário
• Ponto de carregamento para veículo elétrico

Um empreendimento pensado para oferecer qualidade de vida, praticidade e lazer completo, ideal para quem busca morar bem em um apartamento moderno e funcional.`,
    videos: [
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/1.mp4",
    ],
    images: Array.from(
      { length: 38 },
      (_, i) =>
        `/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/${i + 1}.jpeg`
    ),
    amenities: [
      "1 Suíte",
      "Varanda",
      "Planta de 63,25m² (Torre 1 - Apto 908)",
      "Piscina com Raia Semiolímpica e Infantil",
      "Espaço Churrasco e Gourmet",
      "Academia Equipada",
      "Coworking",
      "Espaço Box e Bicicletário",
      "Ponto para Veículo Elétrico",
      "Salão de Festas",
    ],
  },

  // 3. MANSÃO NO CONDOMÍNIO MONTE CASTELO
  {
    id: "casa-monte-castelo-gravata",
    title: "Mansão de Alto Padrão no Condomínio Monte Castelo",
    type: "casa",
    price: "R$ 2.400.000",
    location: "Condomínio Monte Castelo, Gravatá - PE",
    coverImage:
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/5.jpeg",
    bedrooms: 6,
    bathrooms: 7,
    parking: 6,
    area: "1.000m² terreno (com lote anexo)",
    description: `Exclusiva mansão de alto padrão no prestigiado Condomínio Monte Castelo em Gravatá - PE. Imóvel e lote totalmente escriturados.

Projeto de arquitetura moderna integrando madeira nobre, vidro e concreto aparente, com pé-direito duplo e teto integralmente revestido em madeira.

Configuração do imóvel:
• 6 quartos amplos, todos configurados como suítes privativas
• Sala de estar ampla e moderna mobiliada com sofá de couro de alta qualidade
• Varanda panorâmica com 2 balanços modernos e vista deslumbrante para as colinas
• Cozinha 100% equipada com eletrodomésticos e móveis planejados
• Sala de jantar com mesa maciça em madeira para 12 lugares
• Área gourmet privativa com churrasqueira e chuveirão
• Projeto paisagístico com ampla jardinagem integrada
• Garagem com capacidade para até 6 veículos

Lote Adicional Incluso:
• Terreno anexo medindo 20 x 50 metros (1.000 m²), possibilitando a construção de uma segunda casa, quadras ou uma ampla área de lazer com piscina privativa.

Contato direto com o corretor responsável:
Gleydson Tabosa - (81) 99547-7776`,
    videos: [
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/1.mp4",
    ],
    images: [
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/5.jpeg",
      ...Array.from(
        { length: 18 },
        (_, i) =>
          `/imoveis/casas-para-venda/casa-monte-castelo-gravata/${i + 2}.jpeg`
      ),
    ],
    amenities: [
      "6 Suítes Privativas",
      "Lote Adicional 20x50m Incluso",
      "Casa e Lote Escriturados",
      "Pé-direito Alto Revestido em Madeira",
      "Varanda Panorâmica",
      "Espaço Gourmet com Churrasqueira",
      "Cozinha Completa Equipada",
      "Garagem para 6 Veículos",
      "Condomínio Fechado de Alto Padrão",
      "Segurança e Portaria 24h",
    ],
  },

  // 4. CASA MODERNA COM QUINTAL
  {
    id: "casa-moderna-com-quintal",
    title: "Casa Moderna com Quintal e Excelente Padrão",
    type: "casa",
    price: "Consulte o valor",
    location: "Caruaru - PE",
    coverImage:
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/1.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "56m²",
    description: `Excelente oportunidade de casa à venda com ótimo padrão de acabamento e aproveitamento inteligente de espaços. 

Imóvel construído em terreno medindo 7 x 22 metros, totalizando 154 m² de terreno e 56 m² de área construída coberta, oferecendo conforto, funcionalidade e grande potencial de ampliação.

Configuração do imóvel:
• Área frontal de 5 x 7 metros com garagem para 1 carro
• Sala de estar e jantar integradas, proporcionando amplitude e aconchego
• Cozinha planejada com móveis sob medida e bancada em mármore
• 2 quartos bem ventilados (sendo 1 suíte)
• Banheiros completos com bancadas em mármore, móveis planejados e projeto de luminárias
• Quintal amplo nos fundos medindo 5 x 7 metros, com estrutura e espaço para construção de um terceiro quarto ou área de lazer privativa

Imóvel ideal para quem busca modernidade, excelente distribuição de cômodos e possibilidade futura de expansão.`,
    videos: [],
    images: Array.from(
      { length: 10 },
      (_, i) =>
        `/imoveis/casas-para-venda/casa-moderna-com-quintal/${i + 1}.jpeg`
    ),
    amenities: [
      "1 Suíte",
      "Cozinha Planejada com Mármore",
      "Móveis Planejados nos Banheiros",
      "Salas de Estar e Jantar Integradas",
      "Quintal Amplo (5x7m)",
      "Espaço para 3º Quarto",
      "Área Frontal com Garagem",
      "Projeto Luminotécnico",
    ],
  },

  // 5. THE HOUSE CLUB
  {
    id: "casa-the-house-club-caruaru",
    title: "Casa em Condomínio Fechado no The House Club",
    type: "casa",
    price: "R$ 870.000",
    location: "Luiz Gonzaga, Caruaru - PE",
    coverImage:
      "/imoveis/casas-para-venda/casa-the-house-club/1.jpeg",
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    area: "123m²",
    description: `Excelente oportunidade de compra no condomínio fechado The House Club, localizado no bairro Luiz Gonzaga em Caruaru - PE. 

Um imóvel projetado para oferecer conforto, segurança e uma estrutura de lazer completa para toda a família. Aceita financiamento bancário.

Metragens:
• Área construída: 123 m²
• Área total do terreno: 190 m²

Configuração do imóvel:
• 3 suítes amplas (sendo 1 suíte master com closet)
• Sala para 2 ambientes (estar e jantar)
• Cozinha funcional integrada
• Banheiro social / lavabo
• Área de serviço privativa
• Espaço gourmet com churrasqueira
• Espaço preparado para instalação de jacuzzi
• 2 vagas de garagem cobertas

Lazer e infraestrutura do condomínio:
• Piscina adulto e infantil
• Academia completa equipada
• Salão de festas
• Quadra poliesportiva
• Playground infantil e áreas de convivência arborizadas
• Portaria com segurança e controle de acesso 24 horas`,
    videos: [],
    images: Array.from(
      { length: 18 },
      (_, i) =>
        `/imoveis/casas-para-venda/casa-the-house-club/${i + 1}.jpeg`
    ),
    amenities: [
      "3 Suítes (1 Master com Closet)",
      "Espaço Gourmet com Churrasqueira",
      "Ponto para Instalação de Jacuzzi",
      "Aceita Financiamento Bancário",
      "Condomínio Fechado com Portaria 24h",
      "Piscina Adulto e Infantil",
      "Academia Equipada",
      "Quadra Poliesportiva",
      "Salão de Festas e Playground",
      "2 Vagas Cobertas",
    ],
  },

  // 6. VOG VILLE NORTE (1º ANDAR)
  {
    id: "ap-vog-ville-norte",
    title: "Apartamento Pronto para Morar no Condomínio Vog Ville Norte",
    type: "apartamento",
    price: "R$ 290.000",
    location: "Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/3.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "52m²",
    description: `Excelente oportunidade de compra no condomínio Vog Ville Norte. Apartamento completo, pronto para morar, com móveis planejados, conforto e praticidade.

Configuração do imóvel:
• 1º andar com varanda integrada
• 2 quartos (sendo 1 suíte)
• Ambos os quartos equipados com ar-condicionado
• Banheiro social completo
• Cozinha planejada com móveis sob medida, forno embutido, cooktop e coifa
• 1 vaga de garagem descoberta

Estrutura e lazer do condomínio:
• Piscina adulto e infantil
• Academia equipada
• Mercadinho interno de conveniência
• Lavanderia compartilhada OMO
• Bicicletário e pista de cooper
• Salão de festas
• Portaria com segurança 24 horas`,
    videos: [
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/1.mp4",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/2.mp4",
    ],
    images: Array.from(
      { length: 20 },
      (_, i) =>
        `/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/${i + 3}.jpeg`
    ),
    amenities: [
      "1 Suíte",
      "Ar-condicionado nos Quartos",
      "Cozinha Planejada com Fogão e Forno",
      "Piscina Adulto e Infantil",
      "Academia Equipada",
      "Lavanderia OMO",
      "Mercadinho Interno",
      "Pista de Cooper e Bicicletário",
      "Portaria 24h",
      "1 Vaga de Garagem",
    ],
  },

  // 7. VOG VILLE NORTE (TÉRREO DE ESQUINA)
  {
    id: "ap-vog-ville-norte-terreo",
    title: "Apartamento Térreo de Esquina no Condomínio Vog Ville Norte",
    type: "apartamento",
    price: "R$ 310.000",
    location: "Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-venda/vog-ville-norte-terreo/1.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "52m²",
    description: `Oportunidade exclusiva no Condomínio Vog Ville Norte!

Apartamento térreo de esquina, com posição privilegiada e vista aberta para todo o condomínio. Oferece a máxima privacidade: o único vizinho direto é o do andar superior. Localizado em uma rua tranquila, em um bloco com arquitetura rústica e charmosa estilo bangalô.

Diferenciais do Imóvel:
• Unidade térrea de esquina
• Vista panorâmica para todo o condomínio
• Maior privacidade (apenas um vizinho no andar de cima)
• Localização em rua tranquila
• Arquitetura única estilo bangalô

Estrutura de Lazer e Condomínio:
• Complexo aquático com 3 piscinas integradas
• 3 Áreas Gourmet com churrasqueiras
• Academia completa e equipada
• Salão de Festas e Salão de Jogos
• Quadra Poliesportiva e Quadra de Areia
• Área Pet privativa
• 2 Parques Infantis / Playgrounds
• Conveniência com Mini Mercado interno
• Lavanderia OMO compartilhada
• Bicicletário
• Energia Solar na área comum (garantindo condomínio mais econômico)
• 1 Vaga de garagem para automóvel

O Vog Ville Norte destaca-se como o condomínio mais completo e valorizado da região, oferecendo infraestrutura superior, lazer de clube e eficiência energética.`,
    videos: [],
    images: Array.from(
      { length: 24 },
      (_, i) =>
        `/imoveis/apartamentos-para-venda/vog-ville-norte-terreo/${i + 1}.jpeg`
    ),
    amenities: [
      "Térreo de Esquina",
      "Vista para todo o Condomínio",
      "Estilo Bangalô",
      "3 Piscinas Integradas",
      "3 Áreas Gourmet",
      "Academia e Salão de Jogos",
      "Quadra Poliesportiva e de Areia",
      "Área Pet Privativa",
      "Energia Solar na Área Comum",
      "Mini Mercado Interno",
      "1 Vaga de Garagem",
    ],
  },

  // 8. EDIFÍCIO SANTA MARIA
  {
    id: "ap-edificio-santa-maria-boa-viagem",
    title: "Apartamento de Alto Padrão no Edifício Santa Maria",
    type: "apartamento",
    price: "R$ 1.980.000",
    location: "Boa Viagem, Recife - PE",
    coverImage:
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/1.jpeg",
    bedrooms: 4,
    bathrooms: 6,
    parking: 3,
    area: "180m²",
    description: `Exclusivo apartamento de alto padrão no Edifício Santa Maria, situado em localização privilegiada no bairro de Boa Viagem, entre o Colégio Santa Maria e o Colégio Boa Viagem, a apenas 500 metros da praia.

Imóvel amplo, sofisticado e com vista definitiva para o mar. Documentação 100% regular (quitado, escriturado, registrado e sem débitos, livre para venda imediata).

Configuração do imóvel:
• Área privativa: 180 m²
• 4 suítes amplas e confortáveis
• Sala integrada para 4 ambientes
• Vista aberta e definitiva para o mar
• Lavabo social
• Despensa funcional
• Dependência completa de serviço (quarto e WC)
• 3 excelentes vagas de garagem

Estrutura do condomínio:
• 3 elevadores modernos
• 2 estações de recarga para carros elétricos
• Piscina adulto e infantil
• Espaço gourmet com churrasqueira
• Sauna e salão de festas

Informações financeiras:
• Valor de venda: R$ 2.200.000,00
• Taxa condominial: R$ 1.680,00 (água e gás inclusos)
• IPTU mensal: R$ 691,00`,
    videos: [],
    images: Array.from(
      { length: 29 },
      (_, i) =>
        `/imoveis/apartamentos-para-venda/edificio-santa-maria/${i + 1}.jpeg`
    ),
    amenities: [
      "4 Suítes Amplas",
      "Vista Definitiva para o Mar",
      "3 Vagas de Garagem",
      "2 Estações para Carros Elétricos",
      "Piscina e Sauna",
      "Espaço Gourmet e Salão de Festas",
      "3 Elevadores",
      "Apenas 500m da Praia de Boa Viagem",
      "Documentação 100% Regular",
    ],
  },

  // 9. BEACH CLASS CONVENTION BY MAI
  {
    id: "ap-beach-class-convention-by-mai",
    title: "Apartamento no Beach Class Convention by MAI",
    type: "apartamento",
    price: "R$ 380.000",
    location: "Boa Viagem, Recife - PE",
    coverImage:
      "/imoveis/apartamentos-para-venda/beach-class-convention-by-mai/1.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "Studio / Flat",
    description: `APARTAMENTO À VENDA | BEACH CLASS CONVENTION BY MAI

R$ 380.000,00

Boa Viagem | Recife/PE

1 QUARTO | SUÍTE | ANDAR ALTO

Uma excelente oportunidade para quem busca investir em um dos endereços mais estratégicos de Boa Viagem.

Este apartamento no Beach Class Convention by MAI reúne localização, praticidade e estrutura de empreendimento voltado também ao público executivo e de negócios.

DESTAQUES DO IMÓVEL
• 1 quarto sendo suíte
• Andar alto
• Excelente localização em Boa Viagem
• Imóvel escriturado
• Pronto para financiamento
• Excelente opção para investimento
• Potencial para geração de renda
• Empreendimento com estrutura completa

ESTRUTURA DO EMPREENDIMENTO
• Piscina
• Academia
• Sauna
• Restaurante
• Recepção
• Lavanderia
• Business Center
• Salas para eventos e reuniões
• Elevadores
• Estacionamento
• Estrutura de conveniência e serviços

LOCALIZAÇÃO PRIVILEGIADA
Na Rua Maria Carolina, em Boa Viagem, próximo ao Shopping Recife, praia, restaurantes, serviços e importantes vias de acesso da Zona Sul.

UMA OPORTUNIDADE PARA QUEM PENSA EM PATRIMÔNIO E RENTABILIDADE
Um imóvel compacto, em localização estratégica e dentro de um empreendimento consolidado, ideal para quem procura uma alternativa de investimento imobiliário em Recife.

ESCRITURADO • FINANCIÁVEL • ANDAR ALTO • 1 SUÍTE`,
    videos: [],
    images: Array.from(
      { length: 19 },
      (_, i) =>
        `/imoveis/apartamentos-para-venda/beach-class-convention-by-mai/${i + 1}.jpeg`
    ),
    amenities: [
      "1 Suíte",
      "Andar Alto",
      "Piscina",
      "Academia",
      "Sauna",
      "Restaurante no Prédio",
      "Recepção e Segurança",
      "Lavanderia",
      "Business Center",
      "Próximo ao Shopping Recife",
      "Escriturado e Financiável",
    ],
  },
]

// =========================================================================
// COMPONENTE DO CARD
// =========================================================================

function PropertyCard({ property }: { property: ImovelVenda }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const totalImages = property.images.length
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
    <article className="group bg-white rounded-2xl overflow-hidden border border-border/80 hover:border-[#b85d19]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        <Link
          href={`/imoveis/${property.id}`}
          className="block aspect-[4/3] overflow-hidden relative bg-muted cursor-pointer"
        >
          <img
            src={
              property.images[currentImgIndex] ||
              property.coverImage ||
              "/placeholder.jpg"
            }
            alt={`${property.title} - foto ${currentImgIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* TAG DO TIPO */}
          <div className="absolute top-3 left-3 bg-[#0d3b2e] text-white px-3 py-1 text-xs rounded-full font-medium shadow-sm flex items-center gap-1.5">
            {property.type === "casa" ? (
              <>
                <Home className="h-3 w-3" />
                Casa
              </>
            ) : (
              <>
                <Building2 className="h-3 w-3" />
                Apartamento
              </>
            )}
          </div>

          {/* VÍDEO */}
          {hasVideos && (
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 text-[11px] rounded-full font-medium flex items-center gap-1">
              <Play className="h-3 w-3 fill-white" />

              {property.videos.length > 1
                ? `${property.videos.length} Vídeos`
                : "Vídeo"}
            </div>
          )}

          {/* CONTADOR DE FOTOS */}
          {totalImages > 1 && (
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded-md">
              {currentImgIndex + 1} / {totalImages}
            </div>
          )}

          {/* SETAS */}
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

          <Link
            href={`/imoveis/${property.id}`}
            className="block"
          >
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

      {/* PREÇO + BOTÃO */}
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

// =========================================================================
// CONTEÚDO DA PÁGINA
// =========================================================================

function ImoveisParaVendaContent() {
  const [filterType, setFilterType] = useState<
    "todos" | "casa" | "apartamento"
  >("todos")

  const filteredProperties = imoveisVenda.filter((property) => {
    if (filterType === "todos") return true

    return property.type === filterType
  })

  const casasCount = imoveisVenda.filter(
    (p) => p.type === "casa"
  ).length

  const aptosCount = imoveisVenda.filter(
    (p) => p.type === "apartamento"
  ).length

  return (
    <>
      {/* HERO */}
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
            Imóveis para Venda
          </h1>

          <p className="text-white/75 mt-3 max-w-2xl text-sm md:text-base">
            Casas, apartamentos e empreendimentos selecionados para compra residencial em localizações privilegiadas.
          </p>
        </div>
      </section>

      {/* CARROSSEL */}
      <FeaturedCarousel
        properties={saleProperties}
        title="Imóveis em Destaque para Venda"
        subtitle="Destaques de Venda"
        type="venda"
      />

      {/* FILTROS + GRID */}
      <section className="py-12 bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <p className="text-sm text-muted-foreground">
              Exibindo <span className="font-semibold text-foreground">{filteredProperties.length}</span> imóveis para venda
            </p>

            {/* BOTÕES DE FILTRO */}
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant={filterType === "todos" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterType("todos")}
                className={
                  filterType === "todos"
                    ? "bg-[#0d3b2e] hover:bg-[#092920] text-white"
                    : "border-border hover:bg-white"
                }
              >
                <LayoutGrid className="mr-1.5 h-3.5 w-3.5" />
                Todos ({imoveisVenda.length})
              </Button>

              <Button
                variant={filterType === "apartamento" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterType("apartamento")}
                className={
                  filterType === "apartamento"
                    ? "bg-[#0d3b2e] hover:bg-[#092920] text-white"
                    : "border-border hover:bg-white"
                }
              >
                <Building className="mr-1.5 h-3.5 w-3.5" />
                Apartamentos ({aptosCount})
              </Button>

              <Button
                variant={filterType === "casa" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterType("casa")}
                className={
                  filterType === "casa"
                    ? "bg-[#0d3b2e] hover:bg-[#092920] text-white"
                    : "border-border hover:bg-white"
                }
              >
                <Home className="mr-1.5 h-3.5 w-3.5" />
                Casas ({casasCount})
              </Button>
            </div>
          </div>

          {/* GRID DE IMÓVEIS (Ajustado para 4 por fila) */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProperties.map((imovel) => (
                <PropertyCard key={imovel.id} property={imovel} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-border">
              <p className="text-muted-foreground text-lg">
                Nenhum imóvel encontrado nessa categoria.
              </p>
              <Button
                onClick={() => setFilterType("todos")}
                className="mt-4 bg-[#0d3b2e] hover:bg-[#092920] text-white"
              >
                Ver todos os imóveis
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default function ImoveisParaVendaPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#faf7f2] pt-28 text-center">Carregando imóveis...</div>}>
      <ImoveisParaVendaContent />
    </Suspense>
  )
}