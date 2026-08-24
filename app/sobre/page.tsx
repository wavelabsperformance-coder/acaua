import { Metadata } from "next"
import { aboutContent, siteConfig, differentials } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ArrowRight, User, Building2, BarChart3, Shield, CheckCircle, Users, Award, TrendingUp, Home } from "lucide-react"
import { BrokersCarousel } from "@/components/brokers-carousel"

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: "Conheça a história da Acauã Imóveis. Mais de 15 anos de experiência em imóveis de alto padrão em Recife.",
}

const iconMap = {
  user: User,
  building: Building2,
  chart: BarChart3,
  shield: Shield,
}

export default function SobrePage() {
  const paragraphs = aboutContent.fullHistory.split("\n\n")
  const yearsOfExperience = new Date().getFullYear() - siteConfig.foundedYear

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
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-medium">
              Nossa História
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mt-4">
              Sobre a Acauã
            </h1>
            <p className="text-lg text-white/70 mt-6 leading-relaxed">
              {aboutContent.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
                Desde {siteConfig.foundedYear}
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mt-4">
                Nossa Trajetória
              </h2>
              <div className="mt-8 space-y-5">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                  alt="Equipe Acauã Imóveis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 right-8 bg-primary text-primary-foreground px-8 py-5 rounded-xl shadow-xl">
                <span className="block text-4xl font-light">+{yearsOfExperience}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">
                  Anos de História
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-card rounded-xl border border-border">
              <h3 className="text-xl font-medium text-foreground mb-4">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                {aboutContent.mission}
              </p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border">
              <h3 className="text-xl font-medium text-foreground mb-4">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                {aboutContent.vision}
              </p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border">
              <h3 className="text-xl font-medium text-foreground mb-4">Valores</h3>
              <ul className="space-y-2.5">
                {aboutContent.values.slice(0, 4).map((value, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground text-sm">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers - Redesigned */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary-foreground/50 font-medium">
              Resultados
            </span>
            <h2 className="text-3xl md:text-4xl font-light mt-4">
              Números que Contam Nossa História
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Home className="h-6 w-6 text-accent" />
              </div>
              <span className="block text-4xl lg:text-5xl font-light">+500</span>
              <span className="text-sm text-primary-foreground/60 mt-2 block">
                Imóveis negociados com sucesso
              </span>
            </div>
            <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <span className="block text-4xl lg:text-5xl font-light">+{yearsOfExperience}</span>
              <span className="text-sm text-primary-foreground/60 mt-2 block">
                Anos de experiência no mercado
              </span>
            </div>
            <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <span className="block text-4xl lg:text-5xl font-light">98%</span>
              <span className="text-sm text-primary-foreground/60 mt-2 block">
                Índice de satisfação dos clientes
              </span>
            </div>
            <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-6 w-6 text-accent" />
              </div>
              <span className="block text-4xl lg:text-5xl font-light">+200</span>
              <span className="text-sm text-primary-foreground/60 mt-2 block">
                Imóveis disponíveis no portfólio
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo - Single Image */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
                Nossa Equipe
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mt-4">
                Profissionais Dedicados ao Seu Sonho
              </h2>
              <p className="text-muted-foreground leading-relaxed mt-6">
                Nossa equipe é formada por profissionais apaixonados pelo mercado imobiliário, com vasta experiência e comprometimento em oferecer o melhor atendimento.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Cada membro da nossa equipe é treinado para entender suas necessidades e encontrar a solução perfeita para você, seja na compra, venda ou locação de imóveis.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="rounded-lg">
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com Nossa Equipe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            {/* Single Team Photo */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Equipe completa da Acauã Imóveis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrokersCarousel compact />

      {/* Differentials */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
              Por que nos escolher
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mt-4">
              Nossos Diferenciais
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              return (
                <div key={item.title} className="text-center group p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/5 border border-primary/10 mb-5 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-3">
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
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Pronto para Encontrar Seu Imóvel?
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Nossa equipe está pronta para ajudá-lo a encontrar a propriedade perfeita. Entre em contato e descubra como podemos transformar seu sonho em realidade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button asChild size="lg" className="rounded-lg">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar pelo WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg">
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
