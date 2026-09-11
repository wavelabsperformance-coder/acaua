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
} from "lucide-react"
import { Button } from "@/components/ui/button"

// =========================================================================
// IMÓVEIS PARA ALUGAR
// =========================================================================
const imoveisAluguel = [
  // 1. CONDOMÍNIO MR. ROTTERDAM (15 FOTOS - SEM VÍDEO)
  {
    id: "ap-condominio-mr-rotterdam",
    title: "Apartamento Mobiliado no Condomínio Mr. Rotterdam",
    price: "R$ 2.400 / mês (Incluso Condomínio e IPTU)",
    location: "Universitário, Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/2.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "38m²",
    description: `Excelente oportunidade de locação no Condomínio Mr. Rotterdam, situado na Av. Amazonas no Bairro Universitário, em frente ao Hospital Unimed.

Imóvel totalmente mobiliado e decorado, no 4º andar, com posição estratégica voltada para o Sul, garantindo ótima ventilação e iluminação natural.

Configuração do imóvel:
• 1 quarto com armários sob medida e ar-condicionado
• Sala de estar com sofá, TV e mesa de jantar
• Cozinha completa equipada com geladeira, fogão e micro-ondas
• Banheiro social com box blindex e armário planejado
• 1 vaga de garagem coberta

Lazer e comodidades do condomínio:
• Piscina adulto e infantil com deck molhado
• Academia climatizada e equipada
• Salão de festas decorado
• Portaria com segurança 24 horas`,
    videos: [],
    images: [
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/2.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/1.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/3.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/4.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/5.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/6.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/7.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/8.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/9.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/10.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/11.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/12.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/13.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/14.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/15.jpeg",
    ],
    amenities: [
      "100% Mobiliado",
      "4º Andar (Posição Sul)",
      "Piscina com Deck",
      "Academia Equipada",
      "Condomínio e IPTU Inclusos",
      "Portaria 24h",
    ],
  },

  // 2. APARTAMENTO MOBILIADO NO MAURÍCIO DE NASSAU (9 FOTOS - SEM VÍDEO)
  {
    id: "ap-mobiliado-mauricio-de-nassau",
    title: "Apartamento Mobiliado no Maurício de Nassau",
    price: "R$ 1.700 / mês (Incluso Taxas)",
    location: "Maurício de Nassau, Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/1.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "35m²",
    description: `Apartamento mobiliado e prático para locação no bairro Maurício de Nassau. Excelente localização, próximo a clínicas, farmácias, restaurantes e polo médico. Todas as taxas inclusas no pacote.`,
    videos: [],
    images: [
      "/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/1.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/2.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/3.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/4.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/5.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/6.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/7.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/8.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/9.jpeg",
    ],
    amenities: [
      "Mobiliado",
      "Ar-condicionado",
      "Próximo ao Polo Médico",
      "Todas as Taxas Inclusas",
      "1 Vaga de Garagem",
    ],
  },

  // 3. EDIFÍCIO TEREZA RODRIGUES - RECIFE (34 FOTOS - SEM VÍDEO)
  {
    id: "ap-edificio-tereza-rodrigues",
    title: "Apartamento no Edifício Tereza Rodrigues",
    price: "R$ 4.000 / mês (Incluso Condomínio)",
    location: "Boa Viagem, Recife - PE",
    coverImage: "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/1.jpeg",
    bedrooms: 2,
    bathrooms: 3,
    parking: 1,
    area: "64m²",
    description: `Excelente oportunidade de locação no Edifício Tereza Rodrigues, localizado na Rua Ana Camelo da Silva em Boa Viagem.

Apartamento em andar alto com linda vista panorâmica da cidade, excelente iluminação e ventilação cruzada.

Configuração do imóvel:
• 2 quartos, sendo 1 suíte confortável com armários embutidos
• Varanda privativa com tela de proteção
• Sala ampla para 2 ambientes
• Cozinha planejada com armários
• Área de serviço com dependência completa (quarto e banheiro)
• 1 vaga de garagem coberta`,
    videos: [],
    images: [
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/1.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/2.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/3.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/4.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/5.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/6.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/7.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/8.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/9.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/10.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/11.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/12.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/13.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/14.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/15.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/16.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/17.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/18.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/19.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/20.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/21.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/22.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/23.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/24.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/25.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/26.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/27.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/28.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/29.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/30.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/31.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/32.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/33.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/34.jpeg",
    ],
    amenities: [
      "Andar Alto",
      "Varanda Panorâmica",
      "1 Suíte",
      "Dependência Completa de Serviço",
      "Condomínio Incluso no Pacote",
      "Portaria 24h",
    ],
  },

  // 4. EDIFÍCIO JARDIM DOS ALECRINS (33 FOTOS - SEM VÍDEO)
  {
    id: "ap-edificio-jardim-dos-alecrins",
    title: "Apartamento Mobiliado no Edifício Jardim dos Alecrins",
    price: "R$ 2.800 / mês (Incluso Taxas)",
    location: "Universitário, Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/1.jpeg",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "54m²",
    description: `Excelente apartamento totalmente mobiliado e nascente no Edifício Jardim dos Alecrins. Localizado no coração do Bairro Universitário, em frente à ASCES.

Configuração do imóvel:
• 2 quartos completos com camas e armários planejados
• Sala com sofá, TV e bancada de jantar
• Cozinha completa com armários, eletrodomésticos e utensílios
• 1 vaga de garagem coberta

Lazer e estrutura:
• Piscina adulto e infantil
• Salão de festas climatizado
• Portaria com segurança 24h`,
    videos: [],
    images: [
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/1.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/2.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/3.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/4.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/5.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/6.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/7.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/8.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/9.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/10.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/11.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/12.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/13.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/14.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/15.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/16.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/17.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/18.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/19.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/20.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/21.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/22.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/23.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/24.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/25.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/26.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/27.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/28.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/29.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/30.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/31.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/32.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/33.jpeg",
    ],
    amenities: [
      "Totalmente Mobiliado",
      "Posição Nascente",
      "Piscina e Lazer",
      "Em Frente à ASCES",
      "Taxas Inclusas",
      "Portaria 24h",
    ],
  },

  // 5. APARTAMENTO DE ALTO PADRÃO NO MAURÍCIO DE NASSAU (29 FOTOS + 1 VÍDEO)
  {
    id: "ap-studio-alto-padrao-shopping",
    title: "Apartamento de Alto Padrão - Pronto para Morar",
    price: "R$ 4.000 / mês",
    location: "Maurício de Nassau, Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/1.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "38m²",
    description: `Imóvel diferenciado com padrão de acabamento e decoração premium no bairro Maurício de Nassau.

Totalmente planejado com marcenaria sob medida, iluminação arquitetônica e integração direta com complexo de serviços com shopping, restaurantes e coworking.`,
    videos: [
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/19.mp4",
    ],
    images: [
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/1.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/2.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/3.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/4.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/5.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/6.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/7.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/8.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/9.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/10.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/11.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/12.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/13.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/14.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/15.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/16.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/17.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/18.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/20.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/21.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/22.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/23.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/24.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/25.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/26.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/27.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/28.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/29.jpeg",
    ],
    amenities: [
      "Alto Padrão Decorado",
      "Complexo Comercial Integrado",
      "Academia Equipada",
      "Coworking",
      "Segurança e Portaria 24h",
      "1 Vaga de Garagem",
    ],
  },

  // 6. EDIFÍCIO JOÃO SOARES (13 FOTOS - SEM VÍDEO)
  {
    id: "ap-edificio-joao-soares",
    title: "Apartamento de Alto Padrão no Edifício João Soares",
    price: "R$ 4.200 / mês (Incluso Taxas)",
    location: "Maurício de Nassau, Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-alugar/edificio-joao-soares/1.jpeg",
    bedrooms: 2,
    bathrooms: 3,
    parking: 2,
    area: "80m²",
    description: `Apartamento impecável no Edifício João Soares, localizado em uma das áreas mais valorizadas do Bairro Maurício de Nassau.

Configuração do imóvel:
• 2 quartos, todos configurados como suítes privativas
• Móveis planejados Finger em todos os ambientes
• Andar alto com vista livre e excelente ventilação
• Lavabo social
• 2 vagas de garagem cobertas`,
    videos: [],
    images: [
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/1.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/2.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/3.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/4.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/5.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/6.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/7.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/8.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/9.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/10.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/11.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/12.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/13.jpeg",
    ],
    amenities: [
      "2 Suítes Privativas",
      "Móveis Finger de Alto Padrão",
      "Andar Alto",
      "2 Vagas de Garagem Cobertas",
      "Taxas Inclusas no Pacote",
      "Portaria 24h",
    ],
  },

  // 7. CONDOMÍNIO CAMINHO DAS AROEIRAS (10 FOTOS - SEM VÍDEO)
  {
    id: "ap-caminho-das-aroeiras",
    title: "Apartamento Condomínio Caminho das Aroeiras",
    price: "Consulte o valor",
    location: "Indianópolis, Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/7.jpeg",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "52m²",
    description: `Excelente oportunidade de locação ao lado do Caruaru Shopping. 

Apartamento de 2 quartos em condomínio fechado arborizado, com lazer completo, piscina e segurança 24 horas.`,
    videos: [],
    images: [
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/7.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/1.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/2.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/3.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/4.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/5.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/6.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/8.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/9.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/10.jpeg",
    ],
    amenities: [
      "Ao Lado do Caruaru Shopping",
      "Piscina Adulto e Infantil",
      "Salão de Festas",
      "1 Vaga de Garagem",
      "Portaria 24h",
    ],
  },
]

// =========================================================================
// CARD DO IMÓVEL COM LINK DIRETO PARA /imoveis/[id]
// =========================================================================
function PropertyCard({
  property,
}: {
  property: (typeof imoveisAluguel)[0]
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
        <Link href={`/imoveis/${property.id}`} className="block aspect-[4/3] overflow-hidden relative bg-muted cursor-pointer">
          <img
            src={property.images[currentImgIndex] || property.coverImage || "/placeholder.jpg"}
            alt={`${property.title} - foto ${currentImgIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute top-3 left-3 bg-[#b85d19] text-white px-3 py-1 text-xs rounded-full font-medium shadow-sm">
            Locação
          </div>

          {hasVideos && (
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 text-[11px] rounded-full font-medium flex items-center gap-1">
              <Play className="h-3 w-3 fill-white" /> {property.videos.length > 1 ? `${property.videos.length} Vídeos` : "Vídeo"}
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

      <div className="p-5 pt-0">
        <div className="pt-4 border-t border-border flex items-center justify-between">
          <span className="text-sm font-semibold text-[#0d3b2e] line-clamp-1 mr-2">{property.price || "Sob Consulta"}</span>
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

function ImoveisParaAlugarContent() {
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
          <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-semibold block">Categoria</span>
          <h1 className="font-serif text-4xl md:text-5xl font-light mt-2 text-white">Imóveis para Alugar</h1>
          <p className="text-white/75 mt-3 max-w-2xl text-sm md:text-base">
            Apartamentos, flats e studios mobiliados selecionados para locação residencial em localizações privilegiadas.
          </p>
        </div>
      </section>

      {/* Grid de Cards em 4 Colunas no Desktop */}
      <section className="py-16 bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8 border-l-4 border-[#b85d19] pl-3">
            <p className="text-sm font-medium text-foreground">
              Mostrando <span className="font-bold text-[#0d3b2e]">{imoveisAluguel.length}</span> imóveis
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {imoveisAluguel.map((property) => (
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

export default function ImoveisParaAlugarPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ImoveisParaAlugarContent />
    </Suspense>
  )
}