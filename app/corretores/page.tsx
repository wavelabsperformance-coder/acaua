"use client"

import { useState } from "react"
import { Instagram, MessageCircle, X } from "lucide-react"
import { brokers, teamContent } from "@/lib/data"

export default function CorretoresPage() {
  const [selected, setSelected] = useState<(typeof brokers)[number] | null>(null)

  return (
    <main className="bg-[#faf7f2]">
      {/* 1. HERO DO TOPO */}
      <section className="relative flex min-h-[420px] items-end overflow-hidden pt-32 pb-16 bg-[#0d3b2e]">
        <div className="absolute inset-0 bg-[radial-gradient(#b85d19_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-semibold">
            Acauã Imóveis
          </p>
          <h1 className="mt-2 max-w-2xl font-serif text-4xl text-white md:text-5xl lg:text-6xl font-light">
            Nossos Corretores
          </h1>
          <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed text-white/80 font-light">
            Profissionais especializados e preparados para encontrar as melhores oportunidades para você.
          </p>
        </div>
      </section>

      {/* 2. NOSSA EQUIPE (FOTO HORIZONTAL) */}
      <section className="pt-20 lg:pt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-3xl border-l-4 border-[#b85d19] pl-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[#b85d19] font-bold">
              {teamContent.eyebrow}
            </p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl text-[#0d3b2e] font-semibold">
              {teamContent.title}
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {teamContent.description}
            </p>
          </div>

          <div className="w-full overflow-hidden bg-white shadow-lg border border-border/80 rounded-2xl flex items-center justify-center p-2">
            <img
              src={teamContent.image}
              alt="Equipe Acauã Imóveis"
              className="w-full h-auto max-h-[600px] object-contain md:object-cover object-center rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* 3. GRID DOS CORRETORES */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl border-l-4 border-[#b85d19] pl-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[#b85d19] font-bold">
              Atendimento próximo
            </p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl text-[#0d3b2e] font-semibold">
              Experiência para orientar cada escolha
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Conheça quem está por trás de uma curadoria cuidadosa e de um atendimento feito para acompanhar o seu momento.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {brokers.map((broker) => (
              <button
                key={broker.id}
                type="button"
                onClick={() => setSelected(broker)}
                className="group text-left bg-white rounded-2xl overflow-hidden border border-border/80 hover:border-[#b85d19]/40 hover:shadow-xl transition-all duration-300 p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                    <img
                      src={broker.image}
                      alt={broker.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 pb-2">
                    <h3 className="font-serif text-xl text-[#0d3b2e] font-semibold group-hover:text-[#b85d19] transition-colors line-clamp-1">
                      {broker.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground font-medium">
                      {broker.creci}
                    </p>
                    <p className="text-xs text-[#0d3b2e]/70 mt-0.5">
                      {broker.role}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-border mt-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#b85d19] group-hover:underline">
                    Ver apresentação →
                  </span>
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
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="grid max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2 border border-border"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-[300px] md:min-h-[420px] bg-muted">
              <img
                src={selected.image}
                alt={selected.name}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                aria-label="Fechar apresentação"
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-7 md:p-9 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-[#b85d19]/10 text-[#b85d19]">
                  {selected.creci}
                </span>
                <h2 className="mt-3 font-serif text-3xl text-[#0d3b2e] font-semibold">
                  {selected.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {selected.role}
                </p>
                <p className="mt-6 leading-relaxed text-sm text-muted-foreground whitespace-pre-line">
                  {selected.bio}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 bg-[#0d3b2e] hover:bg-[#092920] px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-colors"
                  href={`https://wa.me/${selected.whatsapp}?text=Olá ${selected.name}! Gostaria de atendimento para compra ou locação.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-4 w-4 text-[#b85d19]" /> WhatsApp
                </a>
                {selected.instagram && (
                  <a
                    className="inline-flex items-center gap-2 border border-border hover:bg-muted px-5 py-2.5 rounded-xl text-sm font-medium text-foreground transition-colors"
                    href={selected.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram className="h-4 w-4 text-[#b85d19]" /> Instagram
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}