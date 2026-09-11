import { Metadata } from "next"
import { aboutContent, siteConfig, differentials } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ArrowRight, User, Building2, BarChart3, Shield, CheckCircle, Users, Award, TrendingUp, Home } from "lucide-react"
import { BrokersCarousel } from "@/components/brokers-carousel"

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: "Conheça a história da Acauã Imóveis. Especialistas em imóveis de alto padrão em Pernambuco.",
}

const iconMap = {
  user: User,
  building: Building2,
  chart: BarChart3,
  shield: Shield,
}

export default function SobrePage() {
  const paragraphs = aboutContent.fullHistory.split("\n\n")

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Escritório Acauã Imóveis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0d3b2e]/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#b85d19] font-semibold">
              Nossa História
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mt-4 font-serif">
              Sobre a Acauã
            </h1>
            <p className="text-lg text-white/80 mt-6 leading-relaxed">
              {aboutContent.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* History (Trajetória com a imagem única e sem a caixa de anos) */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#b85d19] font-semibold">
                Nossa Trajetória
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mt-4 font-serif">
                Tradição e Excelência
              </h2>
              <div className="mt-8 space-y-5">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Imagem Institucional Única sem a caixinha de anos */}
            <div className="relative">
              <div className="aspect-[4/3] md:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl border border-border/80 bg-muted">
                <img
                  src="/sobre/institucional.png"
                  alt="Acauã Imóveis - Sede e Atendimento"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 lg:py-28 bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-white rounded-2xl border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-[#0d3b2e] mb-4 font-serif">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                {aboutContent.mission}
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-[#0d3b2e] mb-4 font-serif">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                {aboutContent.vision}
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-border shadow-sm">
              <h3 className="text-xl font-semibold text-[#0d3b2e] mb-4 font-serif">Valores</h3>
              <ul className="space-y-2.5">
                {aboutContent.values.slice(0, 4).map((value, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground text-sm">
                    <CheckCircle className="h-4 w-4 text-[#b85d19] flex-shrink-0" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20 lg:py-28 bg-[#0d3b2e] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#b85d19] font-semibold">
              Resultados
            </span>
            <h2 className="text-3xl md:text-4xl font-light mt-4 font-serif text-white">
              Números que Contam Nossa História
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#b85d19]/20 flex items-center justify-center mx-auto mb-4">
                <Home className="h-6 w-6 text-[#b85d19]" />
              </div>
              <span className="block text-4xl lg:text-5xl font-light text-white">+500</span>
              <span className="text-sm text-white/70 mt-2 block">
                Imóveis negociados com sucesso
              </span>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#b85d19]/20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-[#b85d19]" />
              </div>
              <span className="block text-4xl lg:text-5xl font-light text-white">100%</span>
              <span className="text-sm text-white/70 mt-2 block">
                Foco e dedicação ao cliente
              </span>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#b85d19]/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-[#b85d19]" />
              </div>
              <span className="block text-4xl lg:text-5xl font-light text-white">98%</span>
              <span className="text-sm text-white/70 mt-2 block">
                Índice de satisfação dos clientes
              </span>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#b85d19]/20 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-6 w-6 text-[#b85d19]" />
              </div>
              <span className="block text-4xl lg:text-5xl font-light text-white">+200</span>
              <span className="text-sm text-white/70 mt-2 block">
                Imóveis disponíveis no portfólio
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#b85d19] font-semibold">
                Nossa Equipe
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-[#0d3b2e] mt-4 font-serif">
                Profissionais Dedicados ao Seu Sonho
              </h2>
              <p className="text-muted-foreground leading-relaxed mt-6">
                Nossa equipe é formada por profissionais apaixonados pelo mercado imobiliário, com vasta experiência e comprometimento em oferecer o melhor atendimento.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Cada membro da nossa equipe é treinado para entender suas necessidades e encontrar a solução perfeita para você, seja na compra, venda ou locação de imóveis.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="rounded-xl bg-[#0d3b2e] hover:bg-[#092920] text-white">
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com Nossa Equipe
                    <ArrowRight className="ml-2 h-4 w-4 text-[#b85d19]" />
                  </a>
                </Button>
              </div>
            </div>
            {/* Single Team Photo */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-border">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Equipe completa da Acauã Imóveis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#b85d19] rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrokersCarousel compact />

      {/* Differentials */}
      <section className="py-20 lg:py-28 bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#b85d19] font-semibold">
              Por que nos escolher
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#0d3b2e] mt-4 font-serif">
              Nossos Diferenciais
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              return (
                <div key={item.title} className="text-center group p-6 bg-white rounded-2xl border border-border hover:border-[#b85d19]/40 hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0d3b2e]/5 border border-[#0d3b2e]/10 mb-5 group-hover:bg-[#b85d19]/10 group-hover:border-[#b85d19]/30 transition-all duration-300">
                    <Icon className="h-6 w-6 text-[#0d3b2e] group-hover:text-[#b85d19] transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0d3b2e] mb-3 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0d3b2e] font-serif">
            Pronto para Encontrar Seu Imóvel?
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Nossa equipe está pronta para ajudá-lo a encontrar a propriedade perfeita. Entre em contato e descubra como podemos transformar seu sonho em realidade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button asChild size="lg" className="rounded-xl bg-[#0d3b2e] hover:bg-[#092920] text-white px-8">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar pelo WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 text-[#b85d19]" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl border-[#0d3b2e] text-[#0d3b2e] hover:bg-[#0d3b2e] hover:text-white px-8">
              <a href="/contato">
                Ver Contatos
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}