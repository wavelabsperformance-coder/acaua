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
// IMÓVEIS PARA VENDA (CASAS E APARTAMENTOS UNIFICADOS)
// =========================================================================
const imoveisVenda = [
  // 1. VIVER BEM INDIANÓPOLIS - TORRE 1 APTO 908 (38 FOTOS + 1 VÍDEO) - PRIMEIRO DA LISTA
  {
    id: "ap-viver-bem-indianopolis-908",
    title: "Apartamento no Viver Bem Indianópolis",
    price: "Consulte o valor",
    location: "Indianópolis, Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/1.jpeg",
    bedrooms: 3,
    bathrooms: 2, // 1 suíte + 1 social
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
    images: [
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/1.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/2.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/3.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/4.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/5.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/6.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/7.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/8.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/9.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/10.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/11.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/12.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/13.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/14.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/15.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/16.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/17.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/18.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/19.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/20.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/21.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/22.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/23.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/24.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/25.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/26.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/27.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/28.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/29.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/30.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/31.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/32.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/33.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/34.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/35.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/36.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/37.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/38.jpeg",
    ],
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

  // 2. MANSÃO NO CONDOMÍNIO MONTE CASTELO - GRAVATÁ (18 FOTOS + 1 VÍDEO)
  {
    id: "casa-monte-castelo-gravata",
    title: "Mansão de Alto Padrão no Condomínio Monte Castelo",
    price: "R$ 2.400.000",
    location: "Condomínio Monte Castelo, Gravatá - PE",
    coverImage: "/imoveis/casas-para-venda/casa-monte-castelo-gravata/5.jpeg",
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
    videos: ["/imoveis/casas-para-venda/casa-monte-castelo-gravata/1.mp4"],
    images: [
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/5.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/2.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/3.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/4.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/6.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/7.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/8.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/9.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/10.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/11.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/12.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/13.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/14.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/15.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/16.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/17.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/18.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/19.jpeg",
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

  // 3. CASA MODERNA COM QUINTAL (10 FOTOS - SEM VÍDEO)
  {
    id: "casa-moderna-com-quintal",
    title: "Casa Moderna com Quintal e Excelente Padrão",
    price: "Consulte o valor",
    location: "Caruaru - PE",
    coverImage: "/imoveis/casas-para-venda/casa-moderna-com-quintal/1.jpeg",
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
    images: [
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/1.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/2.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/3.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/4.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/5.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/6.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/7.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/8.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/9.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/10.jpeg",
    ],
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

  // 4. CASA EM CONDOMÍNIO - THE HOUSE CLUB (18 FOTOS - SEM VÍDEO)
  {
    id: "casa-the-house-club-caruaru",
    title: "Casa em Condomínio Fechado no The House Club",
    price: "R$ 870.000",
    location: "Luiz Gonzaga, Caruaru - PE",
    coverImage: "/imoveis/casas-para-venda/casa-the-house-club/1.jpeg",
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
    images: [
      "/imoveis/casas-para-venda/casa-the-house-club/1.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/2.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/3.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/4.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/5.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/6.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/7.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/8.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/9.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/10.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/11.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/12.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/13.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/14.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/15.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/16.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/17.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/18.jpeg",
    ],
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

  // 5. VOG VILLE NORTE (20 FOTOS + 2 VÍDEOS)
  {
    id: "ap-vog-ville-norte",
    title: "Apartamento Pronto para Morar no Condomínio Vog Ville Norte",
    price: "R$ 290.000",
    location: "Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/3.jpeg",
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
    images: [
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/3.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/4.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/5.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/6.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/7.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/8.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/9.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/10.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/11.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/12.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/13.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/14.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/15.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/16.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/17.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/18.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/19.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/20.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/21.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/22.jpeg",
    ],
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

  // 6. EDIFÍCIO SANTA MARIA - BOA VIAGEM (29 FOTOS - SEM VÍDEO)
  {
    id: "ap-edificio-santa-maria-boa-viagem",
    title: "Apartamento de Alto Padrão no Edifício Santa Maria",
    price: "R$ 2.200.000",
    location: "Boa Viagem, Recife - PE",
    coverImage: "/imoveis/apartamentos-para-venda/edificio-santa-maria/1.jpeg",
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
    images: [
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/1.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/2.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/3.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/4.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/5.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/6.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/7.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/8.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/9.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/10.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/11.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/12.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/13.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/14.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/15.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/16.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/17.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/18.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/19.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/20.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/21.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/22.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/23.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/24.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/25.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/26.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/27.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/28.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/29.jpeg",
    ],
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
]

// =========================================================================
// COMPONENTES AUXILIARES
// =========================================================================

function PropertyCard({
  property,
}: {
  property: (typeof imoveisVenda)[0]
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

          <div className="absolute top-3 left-3 bg-[#0d3b2e] text-white px-3 py-1 text-xs rounded-full font-medium shadow-sm">
            Venda
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

function ImoveisParaVendaContent() {
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
          <h1 className="font-serif text-4xl md:text-5xl font-light mt-2 text-white">Imóveis para Venda</h1>
          <p className="text-white/75 mt-3 max-w-2xl text-sm md:text-base">
            Casas exclusivas, condomínios fechados, mansões e apartamentos de alto padrão disponíveis para aquisição.
          </p>
        </div>
      </section>

      {/* Grid de Cards em 4 Colunas no Desktop */}
      <section className="py-16 bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8 border-l-4 border-[#b85d19] pl-3">
            <p className="text-sm font-medium text-foreground">
              Mostrando <span className="font-bold text-[#0d3b2e]">{imoveisVenda.length}</span> imóveis
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {imoveisVenda.map((property) => (
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

export default function ImoveisParaVendaPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ImoveisParaVendaContent />
    </Suspense>
  )
}