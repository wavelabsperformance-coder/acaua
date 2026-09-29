"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, Calculator, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"

interface BancoSimulacao {
  id: string
  nome: string
  logo: string
  link: string
  corHover: string
}

const bancos: BancoSimulacao[] = [
  {
    id: "caixa",
    nome: "Caixa Econômica Federal",
    logo: "/bancos/caixa.webp",
    link: "https://www8.caixa.gov.br/siopioperatorweb/simulaOperacaoPessoaFisica.do?method=inicializarCasoUso",
    corHover: "hover:border-blue-600",
  },
  {
    id: "bb",
    nome: "Banco do Brasil",
    logo: "/bancos/bb.webp",
    link: "https://www.bb.com.br/site/pra-voce/credito-imobiliario/",
    corHover: "hover:border-yellow-500",
  },
  {
    id: "bradesco",
    nome: "Bradesco",
    logo: "/bancos/bradesco.webp",
    link: "https://banco.bradesco/html/classic/produtos-servicos/emprestimo-e-financiamento/encontre-seu-imovel/index.shtm",
    corHover: "hover:border-red-600",
  },
  {
    id: "santander",
    nome: "Santander",
    logo: "/bancos/santander.webp",
    link: "https://www.santander.com.br/credito-financiamento/simulador-financiamento-imobiliario",
    corHover: "hover:border-red-500",
  },
  {
    id: "itau",
    nome: "Itaú",
    logo: "/bancos/itau.webp",
    link: "https://www.itau.com.br/creditos-financiamentos/imobiliario/simulador/",
    corHover: "hover:border-orange-500",
  },
  {
    id: "banrisul",
    nome: "Banrisul",
    logo: "/bancos/banrisul.webp",
    link: "https://www.banrisul.com.br/bob/link/bobw12cz_simulador_credito_imobiliario.aspx",
    corHover: "hover:border-blue-500",
  },
]

export default function FinanciePage() {
  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* 1. HERO HEADER COM A IMAGEM DE CAPA DA CONTATO/EMPREENDIMENTOS */}
      <section className="relative flex min-h-[460px] items-end overflow-hidden pt-36 pb-16 bg-[#0d3b2e]">
        {/* IMAGEM DE FUNDO */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85"
          alt="Capa Financie Imóveis"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* OVERLAY ESCURO / MASCARA DE DEGRADÊ PARA LEITURA */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b2e]/95 via-[#0d3b2e]/85 to-[#0d3b2e]/70 backdrop-blur-[1px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Início
          </Link>

          <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-semibold block">
            Simulação de Crédito
          </span>

          <h1 className="font-serif text-4xl md:text-5xl font-light mt-2 text-white">
            Financie Seu Imóvel
          </h1>

          <p className="text-white/80 mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
            Simule o financiamento do seu futuro imóvel diretamente no portal do seu banco de preferência e escolha a melhor taxa para o seu orçamento.
          </p>
        </div>
      </section>

      {/* 2. GRID DOS BANCOS */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
              Escolha uma Instituição Financeira
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              Você será redirecionado para o simulador oficial do banco selecionado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bancos.map((banco) => (
              <div
                key={banco.id}
                className={`group bg-white rounded-2xl p-8 border border-border/80 ${banco.corHover} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between text-center relative overflow-hidden`}
              >
                {/* Linha Decorativa no Topo */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0d3b2e] to-[#b85d19]" />

                <div className="my-6 h-16 flex items-center justify-center w-full px-4">
                  <img
                    src={banco.logo}
                    alt={`Logo ${banco.nome}`}
                    className="max-h-12 max-w-[180px] object-contain filter group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLElement
                      target.style.display = "none"
                      if (target.nextElementSibling) {
                        ;(target.nextElementSibling as HTMLElement).style.display = "block"
                      }
                    }}
                  />
                  <span className="hidden font-serif font-bold text-xl text-[#0d3b2e]">
                    {banco.nome}
                  </span>
                </div>

                <Button
                  asChild
                  className="w-full bg-[#0d3b2e] hover:bg-[#b85d19] text-white transition-colors duration-300 h-12 rounded-xl mt-4"
                >
                  <a
                    href={banco.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm font-medium"
                  >
                    Simular Agora
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* 3. BANNER DE ASSESSORIA DE CRÉDITO */}
          <div className="mt-16 bg-white border border-[#b85d19]/30 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0d3b2e]/10 text-[#0d3b2e]">
                <Calculator className="h-3.5 w-3.5 text-[#b85d19]" />
                Assessoria Imobiliária Completa
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Prefere que a gente faça a simulação para você?
              </h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                Nossa equipe cuida de todo o processo de aprovação de crédito bancário, buscando as melhores taxas sem que você precise se preocupar com burocracia.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-[#0d3b2e] hover:bg-[#092920] text-white px-8 h-14 rounded-xl shadow-md shrink-0 w-full sm:w-auto"
            >
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5 text-emerald-400 fill-emerald-400/20" />
                Falar com Correspondente
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}