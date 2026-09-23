"use client"

import { useState } from "react"
import { Instagram, X, ArrowUpRight } from "lucide-react"
import { brokers } from "@/lib/data"

export default function CorretoresPage() {
  const [selected, setSelected] = useState<(typeof brokers)[number] | null>(null)

  return (
    <main className="bg-[#faf7f2]">
      {/* 1. HERO DO TOPO COM IMAGEM DE CAPA */}
      <section className="relative flex min-h-[460px] items-end overflow-hidden pt-36 pb-16 bg-[#0d3b2e]">
        {/* IMAGEM DE FUNDO DA PÁGINA DE CONTATO */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85"
          alt="Capa Corretores"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* OVERLAY DEGRADÊ PREMIUM */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061e17] via-[#0d3b2e]/85 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(#b85d19_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

        {/* CONTEÚDO DO HERO COM CARD GLASSMORPHISM */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl rounded-3xl bg-black/30 backdrop-blur-md p-8 md:p-10 border border-white/10 shadow-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-bold block">
              Acauã Imóveis
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light mt-2 text-white leading-tight">
              Nossos Corretores
            </h1>
            <p className="text-white/80 mt-4 max-w-xl text-base md:text-lg font-light leading-relaxed">
              Profissionais especializados e preparados para encontrar as melhores oportunidades para você.
            </p>
          </div>
        </div>
      </section>

      {/* 2. GRID DOS CORRETORES */}
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
                className="group relative h-[360px] sm:h-[390px] w-full text-left rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 focus:outline-none"
              >
                {/* FOTO DE FUNDO COMPLETA */}
                <img
                  src={broker.image}
                  alt={broker.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* OVERLAY PRETO NEUTRO */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300" />

                {/* BADGE CRECI (TOPO ESQUERDA) */}
                <div className="absolute top-3.5 left-3.5 bg-black/50 backdrop-blur-md border border-white/10 text-white/90 px-2.5 py-1 rounded-full text-[10px] uppercase font-medium tracking-wider">
                  {broker.creci}
                </div>

                {/* ÍCONE INTERATIVO (TOPO DIREITA) */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:bg-[#b85d19] group-hover:border-[#b85d19] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* INFORMAÇÕES DO CORRETOR (BASE) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <p className="text-xs font-semibold text-[#b85d19] uppercase tracking-wider mb-0.5">
                    {broker.role}
                  </p>
                  <h3 className="font-serif text-xl text-white font-semibold group-hover:text-[#b85d19] transition-colors line-clamp-1">
                    {broker.name}
                  </h3>

                  {/* BARRA DESTAQUE DISCRETA NO HOVER */}
                  <div className="mt-3 h-0.5 w-8 bg-[#b85d19] rounded-full transition-all duration-300 group-hover:w-full" />
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
          className="fixed inset-0 z-50 grid place-items-center bg-black/75 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative grid max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-[0.9fr_1.1fr] border border-border"
            onClick={(event) => event.stopPropagation()}
          >
            {/* BOTÃO DE FECHAR */}
            <button
              type="button"
              aria-label="Fechar apresentação"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {/* IMAGEM DO MODAL */}
            <div className="relative min-h-[280px] md:min-h-[440px] bg-muted">
              <img
                src={selected.image}
                alt={selected.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* CONTEÚDO DO MODAL */}
            <div className="p-7 md:p-8 flex flex-col justify-between overflow-y-auto">
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
                <p className="mt-5 leading-relaxed text-sm text-muted-foreground whitespace-pre-line">
                  {selected.bio}
                </p>
              </div>

              {/* BOTÕES DE REDES / CONTATO */}
              <div className="mt-8 pt-5 border-t border-border flex flex-wrap gap-3">
                {/* BOTÃO WHATSAPP */}
                <a
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all active:scale-95"
                  href={`https://wa.me/${selected.whatsapp}?text=Olá ${selected.name}! Gostaria de atendimento para compra ou locação.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  WhatsApp
                </a>

                {/* BOTÃO INSTAGRAM COM GRADIENTE OFICIAL */}
                {selected.instagram && (
                  <a
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all active:scale-95"
                    href={selected.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram className="h-4 w-4 text-white" /> Instagram
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