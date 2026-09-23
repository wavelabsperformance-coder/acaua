"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Instagram, MessageCircle, X, ArrowUpRight } from "lucide-react"
import { brokers, siteConfig, type Broker } from "@/lib/data"

export function BrokersCarousel({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState<Broker | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const pausedRef = useRef(false)
  const offsetRef = useRef(0)
  const speed = 0.85
  const items = [...brokers, ...brokers]

  useEffect(() => {
    const animate = () => {
      const track = trackRef.current
      if (track && !pausedRef.current) {
        offsetRef.current += speed
        const loopWidth = track.scrollWidth / 2
        if (offsetRef.current >= loopWidth) offsetRef.current = 0
        track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`
      }
      animationRef.current = window.requestAnimationFrame(animate)
    }
    animationRef.current = window.requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) window.cancelAnimationFrame(animationRef.current)
    }
  }, [])

  const nudge = (direction: number) => {
    offsetRef.current = Math.max(0, offsetRef.current + direction * 280)
  }

  return (
    <section className={compact ? "py-16 bg-[#faf7f2]" : "bg-[#faf7f2] py-20 lg:py-28 border-t border-border/60"}>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 lg:px-8">
        {/* CABEÇALHO */}
        <div className="mb-10 flex items-end justify-between gap-5 border-l-4 border-[#b85d19] pl-3">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#b85d19] font-bold block">
              Nossa equipe
            </span>
            <h2 className="mt-1 font-serif text-3xl md:text-4xl text-[#0d3b2e] font-semibold">
              Quem cuida dos seus planos
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/corretores"
              className="mr-3 hidden text-sm font-semibold text-[#b85d19] hover:underline sm:inline"
            >
              Ver todos →
            </Link>
            <button
              type="button"
              aria-label="Corretores anteriores"
              onClick={() => nudge(-1)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border/80 bg-white/80 text-[#0d3b2e] hover:bg-[#0d3b2e] hover:text-white transition-all shadow-sm backdrop-blur-sm active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Próximos corretores"
              onClick={() => nudge(1)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border/80 bg-white/80 text-[#0d3b2e] hover:bg-[#0d3b2e] hover:text-white transition-all shadow-sm backdrop-blur-sm active:scale-95"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <Link
          href="/corretores"
          className="mb-6 inline-block text-sm font-semibold text-[#b85d19] hover:underline sm:hidden"
        >
          Ver todos →
        </Link>

        {/* Trilha do Carrossel */}
        <div className="relative">
          {/* Suavização de Degradê nas Bordas Laterais */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#faf7f2] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#faf7f2] to-transparent z-10 pointer-events-none" />

          <div
            className="overflow-hidden py-4"
            onMouseEnter={() => { pausedRef.current = true }}
            onMouseLeave={() => { pausedRef.current = false }}
            onFocus={() => { pausedRef.current = true }}
            onBlur={() => { pausedRef.current = false }}
          >
            <div ref={trackRef} className="flex w-max gap-6 will-change-transform">
              {items.map((broker, index) => (
                <button
                  type="button"
                  key={`${broker.id}-${index}`}
                  onClick={() => setSelected(broker)}
                  className="group relative w-[230px] sm:w-[260px] h-[340px] sm:h-[370px] shrink-0 text-left rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 focus:outline-none"
                >
                  {/* FOTO DE FUNDO COMPLETA */}
                  <img
                    src={broker.image}
                    alt={broker.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* OVERLAY PRETO NEUTRO (SEM FUMAÇA VERDE) */}
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
        </div>
      </div>

      {/* Modal de Detalhes do Corretor */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Perfil de ${selected.name}`}
          className="fixed inset-0 z-[70] grid place-items-center bg-black/70 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative grid w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl sm:grid-cols-[.85fr_1.15fr] border border-border"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fechar perfil"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <img
              src={selected.image}
              alt={selected.name}
              className="h-72 w-full object-cover sm:h-full bg-muted"
            />

            <div className="p-7 flex flex-col justify-between">
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
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                  {selected.bio}
                </p>
              </div>

              <div className="mt-7 pt-5 border-t border-border flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${selected.whatsapp}?text=Olá ${selected.name}! Gostaria de atendimento para compra ou locação.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0d3b2e] hover:bg-[#092920] px-5 py-2.5 text-sm font-medium text-white transition-colors shadow-sm"
                >
                  <MessageCircle className="h-4 w-4 text-[#b85d19]" /> WhatsApp
                </a>
                {selected.instagram && (
                  <a
                    href={selected.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border hover:bg-muted px-5 py-2.5 text-sm font-medium text-foreground transition-colors"
                  >
                    <Instagram className="h-4 w-4 text-[#b85d19]" /> Instagram
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export function BrokersPhoneLink() {
  return (
    <a href={`tel:${siteConfig.phone}`} className="text-sm">
      {siteConfig.phone}
    </a>
  )
}