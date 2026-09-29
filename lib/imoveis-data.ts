// lib/imoveis-data.ts

export type ImovelCompleto = {
  id: string
  title: string
  price: string
  location: string
  type: "venda" | "aluguel" | "comercial"
  category: "apartamento" | "casa" | "ponto"
  featured?: boolean // Define se aparece no Carrossel da Home
  coverImage: string
  bedrooms?: number
  bathrooms: number
  parking: number
  area: string
  description: string
  videos?: string[]
  images: string[]
  amenities: string[]
  backUrl: string
  backLabel: string
}

export const todosImoveis: ImovelCompleto[] = [
  // =========================================================================
  // --- VENDA ---
  // =========================================================================
  {
    id: "casa-condominio-green-garden-residence",
    title: "Casa no Condomínio Green Garden Residence",
    price: "R$ 900.000",
    location: "Caruaru - PE",
    type: "venda",
    category: "casa",
    featured: true,
    coverImage: "/imoveis/casas-para-venda/casa-green-garden-residence/1.jpeg",
    bedrooms: 3,
    bathrooms: 3,
    parking: 4,
    area: "115m²",
    description: `CASA À VENDA NO CONDOMÍNIO GREEN GARDEN RESIDENCE

Excelente oportunidade para morar com conforto, segurança 24 horas e infraestrutura completa em condomínio fechado.

DESCRIÇÃO DO IMÓVEL:
• Área construída de 115 m²
• Garagem para 4 carros
• 3 dormitórios, sendo 2 suítes
• Banheiro social
• Sala ampla para ambientes de estar e jantar
• Cozinha tipo americana
• Escada de acesso ao 1º andar em madeira com estilo rústico
• Varanda
• Quintal

Condomínio com portaria e segurança 24h e estrutura completa de lazer.

VALOR DE VENDA: R$ 900.000,00`,
    images: Array.from({ length: 2 }, (_, i) => `/imoveis/casas-para-venda/casa-green-garden-residence/${i + 1}.jpeg`),
    amenities: [
      "2 Suítes",
      "Garagem para 4 Carros",
      "Cozinha Americana",
      "Escada Rústica em Madeira",
      "Varanda e Quintal",
      "Portaria e Segurança 24h",
      "Infraestrutura Completa de Condomínio",
    ],
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "casa-mauricio-de-nassau-acqua-home-clube",
    title: "Casa de Alto Padrão no Bairro Maurício de Nassau",
    price: "R$ 1.500.000",
    location: "Maurício de Nassau, Caruaru - PE",
    type: "venda",
    category: "casa",
    featured: true,
    coverImage: "/imoveis/casas-para-venda/casa-mauricio-de-nassau-acqua/1.jpeg",
    bedrooms: 8,
    bathrooms: 6,
    parking: 4,
    area: "520m²",
    description: `CASA À VENDA NO BAIRRO MAURÍCIO DE NASSAU

Ao lado do Edifício Acqua Home Clube!

Uma residência fantástica com excelente espaço interno e área construída de 520 m² em um terreno de 12x27m no coração do Bairro Maurício de Nassau.

DESCRIÇÃO DO IMÓVEL:

Área Construída: 520 m²
Área do Terreno: 12x27m

PAVIMENTO TÉRREO:
• Garagem para 4 vagas
• Terraço
• Sala ampla para 2 ambientes
• 2 quartos de hóspedes
• Banheiro social
• Cozinha ampla
• Área de serviço
• Quintal
• Cozinha de apoio + despensa
• Dependência completa de serviço + banheiro
• 2 quartos de hóspedes na área de serviço
• Jardim de inverno

1º ANDAR:
• Escada de acesso
• Varanda privativa
• Escritório
• Sala ampla de TV
• 3 suítes master com hidromassagem
• Salão para área gourmet
• 1 quarto adicional
• Banheiro social

VALOR DE VENDA: R$ 1.500.000,00

Localização nobre, ao lado do Edifício Acqua Home Clube, próxima a polos de saúde, educação e principais avenidas da cidade.`,
    images: Array.from({ length: 20 }, (_, i) => `/imoveis/casas-para-venda/casa-mauricio-de-nassau-acqua/${i + 1}.jpeg`),
    amenities: [
      "3 Suítes Master com Hidromassagem",
      "520m² de Área Construída",
      "Garagem para 4 Veículos",
      "Escritório",
      "Salão para Área Gourmet",
      "Cozinha de Apoio + Despensa",
      "Jardim de Inverno",
      "Quintal",
      "Varanda",
      "Ao Lado do Acqua Home Clube",
    ],
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "ap-edificio-cely-miranda-universitario",
    title: "Apartamento no Edifício Cely Miranda",
    price: "R$ 1.750.000",
    location: "Universitário, Caruaru - PE",
    type: "venda",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-venda/edificio-cely-miranda/1.jpeg",
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    area: "172m²",
    description: `UM DOS APARTAMENTOS MAIS EXCLUSIVOS DE CARUARU

EDIFÍCIO CELY MIRANDA | UNIVERSITÁRIO

Uma residência diferenciada para quem procura amplitude, sofisticação, localização privilegiada e praticidade, em um dos endereços mais desejados de Caruaru.

Av. Amazonas, nº 1017 a 1203 – Universitário, Caruaru/PE
172 m²
4 suítes
3 vagas de garagem cobertas
100% reformado
Porteira fechada
Escriturado e regularizado
Aceita financiamento

UM APARTAMENTO PRONTO PARA MORAR

Você não precisa enfrentar obra, reforma ou período de espera.

O imóvel foi completamente reformado e será comercializado porteira fechada, proporcionando uma experiência de compra diferenciada: você adquire um apartamento pronto, completo e cuidadosamente preparado para morar.

ESTRUTURA DO EDIFÍCIO CELY MIRANDA

Um condomínio pensado para oferecer conforto, lazer e segurança:

• Piscinas adulto e infantil
• Piscina com raia
• Academia / fitness
• Salão de festas
• Espaço gourmet
• Brinquedoteca
• Área esportiva
• Área de lazer
• Elevadores sociais e de serviço
• Portaria 24 horas

LOCALIZAÇÃO PRIVILEGIADA

Morar no Universitário significa estar cercado por uma das estruturas mais completas da cidade.

No entorno estão importantes pontos de saúde, educação, serviços, gastronomia, comércio e conveniência, incluindo:

• Polo Médico / Centro Médico do Agreste
• Hospital da Unimed
• Hospital Santa Águeda
• Polo Jurídico de Caruaru
• Fórum Estadual
• Fórum Federal
• ASCES-UNITA
• Wyden / instituições de ensino
• Supermercados e conveniências
• Farmácias
• Academias
• Colégios e escolas
• Restaurantes e serviços

A região ainda oferece acesso estratégico às principais vias de Caruaru, conectando o Universitário a Maurício de Nassau, Indianópolis, Centro e às principais rodovias de acesso à cidade.

É uma localização que combina qualidade de vida para morar e praticidade para trabalhar, especialmente para profissionais das áreas médica, jurídica e empresarial.

VALOR DE VENDA

R$ 1.750.000,00

Imóvel escriturado e regularizado
Aceita financiamento bancário

Um imóvel diferenciado, em um endereço diferenciado, para quem não abre mão de exclusividade.

Visitas exclusivamente mediante agendamento.`,
    images: Array.from({ length: 40 }, (_, i) => `/imoveis/apartamentos-para-venda/edificio-cely-miranda/${i + 1}.jpeg`),
    amenities: [
      "4 Suítes Privativas",
      "100% Reformado",
      "Porteira Fechada",
      "3 Vagas Cobertas",
      "Piscina com Raia",
      "Academia / Fitness",
      "Espaço Gourmet",
      "Salão de Festas",
      "Brinquedoteca",
      "Portaria 24h",
      "Escriturado e Financiável",
    ],
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "ap-edificio-ilha-de-ponza-casa-forte",
    title: "Apartamento no Edifício Ilha de Ponza",
    price: "R$ 600.000",
    location: "Casa Forte, Recife - PE",
    type: "venda",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-venda/edificio-ilha-de-ponza/1.jpeg",
    bedrooms: 4,
    bathrooms: 2,
    parking: 1,
    area: "103m²",
    description: `APARTAMENTO À VENDA NO CORAÇÃO DE CASA FORTE!

EDIFÍCIO ILHA DE PONZA | AO LADO DA PRAÇA DE CASA FORTE

Se você procura espaço, ventilação, localização privilegiada e praticidade, esta é uma excelente oportunidade para morar em uma das regiões mais tradicionais e valorizadas da Zona Norte do Recife.

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
    images: Array.from({ length: 27 }, (_, i) => `/imoveis/apartamentos-para-venda/edificio-ilha-de-ponza/${i + 1}.jpeg`),
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
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "ap-viver-bem-indianopolis-908",
    title: "Apartamento no Viver Bem Indianópolis",
    price: "Consulte o valor",
    location: "Indianópolis, Caruaru - PE",
    type: "venda",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/1.jpeg",
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    area: "63,25m²",
    description: `Excelente apartamento de 63,25 m², localizado na Torre 1 – apartamento 908, com uma planta moderna, funcional e bem distribuída.

O imóvel conta com 3 quartos, sendo 1 suíte, sala para 2 ambientes, varanda, banheiro social e cozinha integrada à área de serviço, proporcionando praticidade e conforto para o dia a dia.

Estrutura completa de lazer, bem-estar e conveniência:
• Piscina com raia semiolímpica e piscina infantil
• Espaço churrasco e Espaço Gourmet
• Salão de festas
• Academia equipada
• Sala multifuncional
• Coworking
• Espaço Box e bicicletário
• Ponto de carregamento para veículo elétrico`,
    videos: ["/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/1.mp4"],
    images: Array.from({ length: 38 }, (_, i) => `/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/${i + 1}.jpeg`),
    amenities: [
      "1 Suíte",
      "Varanda",
      "Piscina com Raia Semiolímpica",
      "Piscina Infantil",
      "Academia Equipada",
      "Espaço Gourmet e Churrasqueira",
      "Coworking",
      "Ponto para Veículo Elétrico",
      "Bicicletário",
      "Salão de Festas",
    ],
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "casa-monte-castelo-gravata",
    title: "Mansão de Alto Padrão no Condomínio Monte Castelo",
    price: "R$ 2.400.000",
    location: "Condomínio Monte Castelo, Gravatá - PE",
    type: "venda",
    category: "casa",
    featured: true,
    coverImage: "/imoveis/casas-para-venda/casa-monte-castelo-gravata/5.jpeg",
    bedrooms: 6,
    bathrooms: 7,
    parking: 6,
    area: "1.000m² terreno (com lote anexo)",
    description: `Exclusiva mansão de alto padrão no prestigiado Condomínio Monte Castelo em Gravatá - PE. Imóvel e lote totalmente escriturados. Projeto de arquitetura moderna integrando madeira nobre, vidro e concreto aparente.`,
    videos: ["/imoveis/casas-para-venda/casa-monte-castelo-gravata/1.mp4"],
    images: [
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/5.jpeg",
      ...Array.from({ length: 18 }, (_, i) => `/imoveis/casas-para-venda/casa-monte-castelo-gravata/${i + 2}.jpeg`),
    ],
    amenities: ["6 Suítes Privativas", "Lote Anexo 20x50m Incluso", "Varanda Panorâmica", "Espaço Gourmet", "Garagem para 6 Veículos", "Portaria 24h"],
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "casa-moderna-com-quintal",
    title: "Casa Moderna com Quintal e Excelente Padrão",
    price: "Consulte o valor",
    location: "Caruaru - PE",
    type: "venda",
    category: "casa",
    featured: false,
    coverImage: "/imoveis/casas-para-venda/casa-moderna-com-quintal/1.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "56m²",
    description: `Excelente oportunidade de casa à venda com ótimo padrão de acabamento e quintal amplo nos fundos de 5x7m com potencial de expansão.`,
    images: Array.from({ length: 10 }, (_, i) => `/imoveis/casas-para-venda/casa-moderna-com-quintal/${i + 1}.jpeg`),
    amenities: ["1 Suíte", "Cozinha Planejada", "Quintal Amplo (5x7m)", "Garagem Privativa", "Projeto Luminotécnico"],
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "casa-the-house-club-caruaru",
    title: "Casa em Condomínio Fechado no The House Club",
    price: "R$ 870.000",
    location: "Luiz Gonzaga, Caruaru - PE",
    type: "venda",
    category: "casa",
    featured: true,
    coverImage: "/imoveis/casas-para-venda/casa-the-house-club/1.jpeg",
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    area: "123m²",
    description: `Excelente casa em condomínio fechado com 3 suítes, espaço gourmet, preparação para jacuzzi e área de lazer completa. Aceita financiamento.`,
    images: Array.from({ length: 18 }, (_, i) => `/imoveis/casas-para-venda/casa-the-house-club/${i + 1}.jpeg`),
    amenities: ["3 Suítes", "Espaço Gourmet", "Preparação para Jacuzzi", "Piscina e Academia", "Portaria 24h"],
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "ap-vog-ville-norte",
    title: "Apartamento Pronto para Morar no Vog Ville Norte",
    price: "R$ 290.000",
    location: "Caruaru - PE",
    type: "venda",
    category: "apartamento",
    featured: false,
    coverImage: "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/3.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "52m²",
    description: `Apartamento completo, pronto para morar, com móveis planejados, ar-condicionado e lazer com piscina e academia.`,
    videos: [
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/1.mp4",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/2.mp4",
    ],
    images: Array.from({ length: 20 }, (_, i) => `/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/${i + 3}.jpeg`),
    amenities: ["1 Suíte", "Ar-condicionado", "Móveis Planejados", "Piscina Adulto e Infantil", "Academia Equipada"],
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "ap-vog-ville-norte-terreo",
    title: "Apartamento Térreo de Esquina no Condomínio Vog Ville Norte",
    price: "R$ 310.000",
    location: "Caruaru - PE",
    type: "venda",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-venda/vog-ville-norte-terreo/1.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "52m²",
    description: `Oportunidade exclusiva no Condomínio Vog Ville Norte!

Apartamento térreo de esquina, com posição privilegiada e vista aberta para todo o condomínio. Oferece a máxima privacidade: o único vizinho direto é o do andar superior. Localizado em uma rua tranquila, em um bloco com arquitetura rústica e charmosa estilo bangalô.`,
    images: Array.from({ length: 24 }, (_, i) => `/imoveis/apartamentos-para-venda/vog-ville-norte-terreo/${i + 1}.jpeg`),
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
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "ap-edificio-santa-maria-boa-viagem",
    title: "Apartamento de Alto Padrão no Edifício Santa Maria",
    price: "R$ 1.980.000",
    location: "Boa Viagem, Recife - PE",
    type: "venda",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-venda/edificio-santa-maria/1.jpeg",
    bedrooms: 4,
    bathrooms: 6,
    parking: 3,
    area: "180m²",
    description: `Apartamento amplo de alto padrão com vista definitiva para o mar em Boa Viagem, 4 suítes, 3 vagas e lazer completo.`,
    images: Array.from({ length: 29 }, (_, i) => `/imoveis/apartamentos-para-venda/edificio-santa-maria/${i + 1}.jpeg`),
    amenities: ["4 Suítes", "Vista para o Mar", "3 Vagas de Garagem", "Estação de Carro Elétrico", "Piscina e Sauna"],
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "ap-beach-class-convention-by-mai",
    title: "Apartamento no Beach Class Convention by MAI",
    price: "R$ 380.000",
    location: "Boa Viagem, Recife - PE",
    type: "venda",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-venda/beach-class-convention-by-mai/1.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "Studio / Flat",
    description: `APARTAMENTO À VENDA | BEACH CLASS CONVENTION BY MAI

R$ 380.000,00 

Boa Viagem | Recife/PE

1 QUARTO | SUÍTE | ANDAR ALTO

Uma excelente oportunidade para quem busca investir em um dos endereços mais estratégicos de Boa Viagem.`,
    images: Array.from({ length: 19 }, (_, i) => `/imoveis/apartamentos-para-venda/beach-class-convention-by-mai/${i + 1}.jpeg`),
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
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },

  // =========================================================================
  // --- LOCAÇÃO ---
  // =========================================================================
  {
    id: "ap-beach-class-residence-santa-maria",
    title: "Apartamento no Beach Class Residence Santa Maria",
    price: "R$ 3.800 / mês (Água e Gás inclusos)",
    location: "Boa Viagem, Recife - PE",
    type: "aluguel",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-alugar/beach-class-residence-santa-maria/1.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "50m²",
    description: `EXCELENTE OPORTUNIDADE DE LOCAÇÃO EM BOA VIAGEM!

BEACH CLASS RESIDENCE SANTA MARIA

Se você busca conforto, praticidade e excelente localização em Recife, este apartamento é uma ótima opção para morar em Boa Viagem!

CARACTERÍSTICAS DO IMÓVEL:
• 2 quartos, sendo 1 suíte
• Armários planejados nos quartos, cozinha e banheiro
• Ar-condicionado instalado nos dois quartos
• Varanda aconchegante
• Apartamento arejado, ventilado e com excelente iluminação natural
• 1 vaga de garagem rotativa

ESTRUTURA E LAZER DO CONDOMÍNIO:
• Piscina na cobertura, com vista privilegiada e mini bar
• Espaço gourmet com churrasqueira
• Mini market no condomínio
• Lavanderia OMO no prédio

LOCALIZAÇÃO PRIVILEGIADA:
Rua Dr. Pedro de Melo Cahú, 201 – Boa Viagem, Recife/PE.
Uma localização estratégica, próxima a escolas, hotéis, farmácias, serviços e às principais conveniências do bairro.
• Praia de Boa Viagem: aproximadamente 400 metros
• Aeroporto Internacional do Recife: aproximadamente 4,5 km`,
    videos: [
      "/imoveis/apartamentos-para-alugar/beach-class-residence-santa-maria/22.mp4",
      "/imoveis/apartamentos-para-alugar/beach-class-residence-santa-maria/23.mp4",
      "/imoveis/apartamentos-para-alugar/beach-class-residence-santa-maria/24.mp4",
    ],
    images: Array.from(
      { length: 21 },
      (_, i) => `/imoveis/apartamentos-para-alugar/beach-class-residence-santa-maria/${i + 1}.jpeg`
    ),
    amenities: [
      "1 Suíte",
      "Armários Planejados",
      "Ar-condicionado nos Quartos",
      "Varanda",
      "Piscina na Cobertura com Mini Bar",
      "Espaço Gourmet com Churrasqueira",
      "Mini Market no Condomínio",
      "Lavanderia OMO",
      "Água e Gás Inclusos",
      "400m da Praia de Boa Viagem",
      "Garagem Rotativa",
    ],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-condominio-mr-rotterdam",
    title: "Apartamento Mobiliado no Condomínio Mr. Rotterdam",
    price: "R$ 2.400 / mês (Incluso Condomínio e IPTU)",
    location: "Universitário, Caruaru - PE",
    type: "aluguel",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/2.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "38m²",
    description: `Apartamento mobiliado e completo no Condomínio Mr. Rotterdam na Av. Amazonas no Bairro Universitário. Vista Sul, 4º andar, piscina e academia.`,
    images: [
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/2.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/1.jpeg",
      ...Array.from({ length: 13 }, (_, i) => `/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/${i + 3}.jpeg`),
    ],
    amenities: ["100% Mobiliado", "4º Andar (Vista Sul)", "Piscina Adulto e Infantil", "Academia", "Portaria 24h"],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-mobiliado-mauricio-de-nassau",
    title: "Apartamento Mobiliado no Maurício de Nassau",
    price: "R$ 1.700 / mês (Incluso Taxas)",
    location: "Maurício de Nassau, Caruaru - PE",
    type: "aluguel",
    category: "apartamento",
    featured: false,
    coverImage: "/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/1.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "35m²",
    description: `Apartamento mobiliado no bairro Maurício de Nassau, próximo ao polo médico e jurídico. Taxas inclusas.`,
    images: Array.from({ length: 9 }, (_, i) => `/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/${i + 1}.jpeg`),
    amenities: ["Mobiliado", "Ar-condicionado", "Próximo ao Polo Médico", "Taxas Inclusas"],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-edificio-tereza-rodrigues",
    title: "Apartamento no Edifício Tereza Rodrigues",
    price: "R$ 4.000 / mês (Incluso Condomínio)",
    location: "Boa Viagem, Recife - PE",
    type: "aluguel",
    category: "apartamento",
    featured: false,
    coverImage: "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/1.jpeg",
    bedrooms: 2,
    bathrooms: 3,
    parking: 1,
    area: "64m²",
    description: `Excelente oportunidade no Edifício Tereza Rodrigues em Boa Viagem. Andar alto com vista aberta e 1 suíte.`,
    images: Array.from({ length: 34 }, (_, i) => `/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/${i + 1}.jpeg`),
    amenities: ["Andar Alto", "Varanda", "1 Suíte", "Dependência Completa", "Condomínio Incluso"],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-edificio-jardim-dos-alecrins",
    title: "Apartamento Mobiliado no Edifício Jardim dos Alecrins",
    price: "R$ 2.800 / mês (Incluso Taxas)",
    location: "Universitário, Caruaru - PE",
    type: "aluguel",
    category: "apartamento",
    featured: false,
    coverImage: "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/1.jpeg",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "54m²",
    description: `Apartamento nascente e mobiliado no Edifício Jardim dos Alecrins, próximo à ASCES no Bairro Universitário.`,
    images: Array.from({ length: 33 }, (_, i) => `/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/${i + 1}.jpeg`),
    amenities: ["Totalmente Mobiliado", "Nascente", "Piscina e Salão de Festas", "Portaria 24h", "Taxas Inclusas"],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-studio-alto-padrao-shopping",
    title: "Apartamento de Alto Padrão - Pronto para Morar",
    price: "R$ 4.000 / mês",
    location: "Maurício de Nassau, Caruaru - PE",
    type: "aluguel",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/1.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "38m²",
    description: `Apartamento alto padrão decorado e mobiliado em complexo comercial no Maurício de Nassau.`,
    videos: ["/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/19.mp4"],
    images: Array.from({ length: 29 }, (_, i) => `/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/${i + 1}.jpeg`),
    amenities: ["Mobiliado e Decorado", "Complexo com Shopping", "Academia e Coworking", "Portaria 24h"],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-edificio-joao-soares",
    title: "Apartamento de Alto Padrão no Edifício João Soares",
    price: "R$ 4.200 / mês (Incluso Taxas)",
    location: "Maurício de Nassau, Caruaru - PE",
    type: "aluguel",
    category: "apartamento",
    featured: false,
    coverImage: "/imoveis/apartamentos-para-alugar/edificio-joao-soares/1.jpeg",
    bedrooms: 2,
    bathrooms: 3,
    parking: 2,
    area: "80m²",
    description: `Apartamento com móveis Finger de alto padrão, andar alto, 2 suítes e 2 vagas de garagem cobertas no Maurício de Nassau.`,
    images: Array.from({ length: 13 }, (_, i) => `/imoveis/apartamentos-para-alugar/edificio-joao-soares/${i + 1}.jpeg`),
    amenities: ["Móveis Planejados Finger", "2 Suítes", "2 Vagas Cobertas", "Portaria 24h", "Taxas Inclusas"],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-caminho-das-aroeiras",
    title: "Apartamento Condomínio Caminho das Aroeiras",
    price: "Consulte o valor",
    location: "Indianópolis, Caruaru - PE",
    type: "aluguel",
    category: "apartamento",
    featured: false,
    coverImage: "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/7.jpeg",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "52m²",
    description: `Apartamento ventilado ao lado do Caruaru Shopping com lazer completo e segurança 24 horas.`,
    images: Array.from({ length: 10 }, (_, i) => `/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/${i + 1}.jpeg`),
    amenities: ["Próximo ao Caruaru Shopping", "Piscina e Salão de Festas", "Portaria 24h", "Vaga Privativa"],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "casa-residencial-mauricio-de-nassau",
    title: "Casa Residencial com Quintal no Maurício de Nassau",
    price: "R$ 3.800 / mês",
    location: "Maurício de Nassau, Caruaru - PE",
    type: "aluguel",
    category: "casa",
    featured: true,
    coverImage: "/imoveis/casas-para-venda/casa-moderna-com-quintal/1.jpeg",
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    area: "140m²",
    description: `Excelente casa residencial disponível para locação no bairro Maurício de Nassau. Cômodos amplos, 1 suíte, garagem para 2 carros e quintal nos fundos.`,
    images: Array.from({ length: 10 }, (_, i) => `/imoveis/casas-para-venda/casa-moderna-com-quintal/${i + 1}.jpeg`),
    amenities: ["1 Suíte", "Garagem para 2 Carros", "Quintal Amplo", "Cozinha Integrada", "Ótima Localização"],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-jardim-das-orquideas-indianopolis",
    title: "Apartamento no Res. Jardim das Orquídeas",
    price: "R$ 1.500 / mês (Incluso Condomínio, IPTU e Gás)",
    location: "Indianópolis, Caruaru - PE",
    type: "aluguel",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-alugar/jardim-das-orquideas/1.jpeg",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "42m²",
    description: `APARTAMENTO PARA LOCAÇÃO | JARDIM DAS ORQUÍDEAS — CARUARU

Indianópolis | Próximo ao Caruaru Shopping

Se você procura praticidade, conforto e uma localização estratégica em Caruaru, essa pode ser a oportunidade ideal!

Posição Norte - 2º andar 
• Aproximadamente 42 m² de área privativa
• 02 quartos
• Sala de estar
• Cozinha
• Área de serviço
• Banheiro social
• 01 vaga de garagem descoberta
• Condomínio residencial com estrutura de lazer e segurança

Localização privilegiada, em Indianópolis, com fácil acesso ao Caruaru Shopping e a diversos serviços, comércio e conveniências da região.

ALUGUEL: R$ 1.500,00

E o melhor: já estão inclusos no valor:
- Condomínio
- IPTU
- Gás

Condições para locação:
• 1 aluguel + 1 caução
Obs.: Necessário estar com o nome limpo!

Agende sua visita e venha conhecer!`,
    images: Array.from(
      { length: 13 },
      (_, i) => `/imoveis/apartamentos-para-alugar/jardim-das-orquideas/${i + 1}.jpeg`
    ),
    amenities: [
      "Posição Norte",
      "2º Andar",
      "Próximo ao Caruaru Shopping",
      "Condomínio, IPTU e Gás Inclusos",
      "Estrutura de Lazer e Segurança",
      "1 Vaga Descoberta",
    ],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-puerto-balata-boa-viagem",
    title: "Apartamento no Edifício Puerto Balata (Indisponível)",
    price: "R$ 10.000 / mês (Incluso água, gás e IPTU)",
    location: "Avenida Navegantes, Boa Viagem, Recife - PE",
    type: "aluguel",
    category: "apartamento",
    featured: false,
    coverImage: "/imoveis/apartamentos-para-alugar/puerto-balata/1.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "72m²",
    description: `EXCLUSIVIDADE EDIFÍCIO PUERTO BALATA

Avenida Navegantes
Próximo ao Quiosque 13
A poucos passos do mar

Apartamento no 2º andar | 100% mobiliado | Vista mar em todos os ambientes

72m² muito bem distribuídos
02 quartos, sendo 01 suíte
Varanda integrada
Sala ampla e moderna
Projeto de iluminação sofisticado
TV na sala e nos quartos
Ar-condicionado na sala e nos 02 quartos
01 vaga de garagem coberta

Diferencial de conforto:
Camas baú com colchões King Koil — marca americana reconhecida internacionalmente e presente em hotéis 5 estrelas como Nanai e Summerville

Todos os ambientes com vista para o mar — quartos e sala trazendo sensação única de conforto, sofisticação e bem-estar.

Valor da locação: R$ 10.000,00
Incluso água e gás e IPTU 

Um apartamento moderno, elegante e pronto para morar no melhor da Avenida Navegantes.

[Imóvel Indisponível / Alugado]`,
    images: Array.from({ length: 19 }, (_, i) => `/imoveis/apartamentos-para-alugar/puerto-balata/${i + 1}.jpeg`),
    amenities: [
      "Indisponível / Alugado",
      "2 Quartos (1 Suíte)",
      "100% Mobiliado",
      "Vista Mar em Todos os Ambientes",
      "Varanda Integrada",
      "Ar-condicionado na Sala e Quartos",
      "Colchões King Koil 5 Estrelas",
      "Água, Gás e IPTU Inclusos",
      "1 Vaga Coberta",
    ],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },

  // =========================================================================
  // --- COMERCIAL ---
  // =========================================================================
  {
    id: "sala-comercial-galeria-avenida-center",
    title: "Sala Comercial na Galeria Avenida Center",
    price: "R$ 1.800 / mês (Incluso Condomínio e IPTU)",
    location: "Av. Agamenon Magalhães, Maurício de Nassau, Caruaru - PE",
    type: "comercial",
    category: "ponto",
    featured: true,
    coverImage: "/imoveis/pontos-comerciais/sala-galeria-avenida-center/1.jpeg",
    bedrooms: 0,
    bathrooms: 1,
    parking: 0,
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
    images: Array.from({ length: 9 }, (_, i) => `/imoveis/pontos-comerciais/sala-galeria-avenida-center/${i + 1}.jpeg`),
    amenities: [
      "Galeria Avenida Center",
      "Av. Agamenon Magalhães",
      "Condomínio e IPTU Inclusos",
      "Bairro Maurício de Nassau",
      "Grande Fluxo de Pedestres e Veículos",
      "Ideal para Consultórios e Escritórios",
    ],
    backUrl: "/empreendimentos/pontos-comerciais",
    backLabel: "Voltar para Pontos Comerciais",
  },
  {
    id: "ponto-comercial-agamenon-magalhaes",
    title: "Ponto Comercial na Avenida Agamenon Magalhães",
    price: "R$ 4.500 / mês",
    location: "Av. Agamenon Magalhães, Caruaru - PE",
    type: "comercial",
    category: "ponto",
    featured: true,
    coverImage: "/imoveis/pontos-comerciais/ponto-comercial-agamenon-magalhaes/1.jpeg",
    bedrooms: 0,
    bathrooms: 1,
    parking: 0,
    area: "25m² (5m x 5m)",
    description: `Ponto comercial na principal avenida de Caruaru: Av. Agamenon Magalhães. Alto fluxo de pedestres e carros.`,
    images: Array.from({ length: 4 }, (_, i) => `/imoveis/pontos-comerciais/ponto-comercial-agamenon-magalhaes/${i + 1}.jpeg`),
    amenities: ["Avenida Principal", "Excelente Visibilidade", "1 Banheiro", "Alto Fluxo"],
    backUrl: "/empreendimentos/pontos-comerciais",
    backLabel: "Voltar para Pontos Comerciais",
  },
]