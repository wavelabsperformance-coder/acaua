"use client"

import { useState } from "react"
import { Instagram, MessageCircle, X } from "lucide-react"
import { brokers, teamContent } from "@/lib/data"

export default function CorretoresPage() {
  const [selected, setSelected] = useState<(typeof brokers)[number] | null>(null)

  return (
    <main>
      {/* 1. CAPA / HERO DO TOPO */}
      <section className="relative flex min-h-[430px] items-end overflow-hidden py-20">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=2000&q=85"
          alt="Arquitetura residencial sofisticada"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
            Acauã Imóveis
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-5xl text-primary-foreground md:text-6xl">
            Nossos Corretores
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Profissionais preparados para encontrar as melhores oportunidades para você.
          </p>
        </div>
      </section>

      {/* 2. NOSSA EQUIPE (TÍTULO + IMAGEM HORIZONTAL RESPONSIVA) */}
      <section className="pt-20 lg:pt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-accent">
              {teamContent.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl text-foreground">
              {teamContent.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {teamContent.description}
            </p>
          </div>

          <div className="w-full overflow-hidden bg-neutral-950 flex items-center justify-center rounded-sm">
            <img
              src={teamContent.image}
              alt="Equipe Acauã Imóveis"
              className="w-full h-auto max-h-[600px] object-contain md:object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 3. ATENDIMENTO PRÓXIMO + GRID DOS CORRETORES */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-accent">
              Atendimento próximo
            </p>
            <h2 className="mt-3 font-serif text-4xl text-foreground">
              Experiência para orientar cada escolha
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Conheça quem está por trás de uma curadoria cuidadosa e de um atendimento feito para acompanhar o seu momento.
            </p>
          </div>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {brokers.map((broker) => (
              <button
                key={broker.id}
                type="button"
                onClick={() => setSelected(broker)}
                className="group text-left"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={broker.image}
                    alt={broker.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 border-b border-border pb-4">
                  <h3 className="font-serif text-2xl text-foreground">
                    {broker.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {broker.creci}
                  </p>
                  <p className="mt-3 text-sm text-accent">Ver apresentação</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DE APRESENTAÇÃO */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Apresentação de ${selected.name}`}
          className="fixed inset-0 z-50 grid place-items-center bg-primary/80 p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="grid max-h-[90vh] w-full max-w-3xl overflow-auto bg-background md:grid-cols-2"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-[330px]">
              <img
                src={selected.image}
                alt={selected.name}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                aria-label="Fechar apresentação"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center bg-background text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-8 md:p-10">
              <p className="text-xs uppercase tracking-widest text-accent">
                {selected.creci}
              </p>
              <h2 className="mt-3 font-serif text-4xl text-foreground">
                {selected.name}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {selected.role}
              </p>
              <p className="mt-8 leading-relaxed text-muted-foreground">
                {selected.bio}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 bg-primary px-4 py-3 text-sm text-primary-foreground"
                  href={`https://wa.me/${selected.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  className="inline-flex items-center gap-2 border border-border px-4 py-3 text-sm text-foreground"
                  href={selected.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}