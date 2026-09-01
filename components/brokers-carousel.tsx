"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Instagram, MessageCircle, X } from "lucide-react"
import { brokers, siteConfig, type Broker } from "@/lib/data"

export function BrokersCarousel({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState<Broker | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const pausedRef = useRef(false)
  const offsetRef = useRef(0)
  const speed = 0.45
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
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-white text-[#0d3b2e] hover:bg-[#0d3b2e] hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Próximos corretores"
              onClick={() => nudge(1)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-white text-[#0d3b2e] hover:bg-[#0d3b2e] hover:text-white transition-all shadow-sm"
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
        <div
          className="overflow-hidden py-2"
          onMouseEnter={() => { pausedRef.current = true }}
          onMouseLeave={() => { pausedRef.current = false }}
          onFocus={() => { pausedRef.current = true }}
          onBlur={() => { pausedRef.current = false }}
        >
          <div ref={trackRef} className="flex w-max gap-5 will-change-transform">
            {items.map((broker, index) => (
              <button
                type="button"
                key={`${broker.id}-${index}`}
                onClick={() => setSelected(broker)}
                className="group w-[220px] shrink-0 text-left sm:w-[245px] bg-white rounded-2xl overflow-hidden border border-border/80 hover:border-[#b85d19]/40 hover:shadow-xl transition-all duration-300 p-3"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                  <img
                    src={broker.image}
                    alt={broker.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 pb-1">
                  <h3 className="font-serif text-lg text-[#0d3b2e] font-semibold group-hover:text-[#b85d19] transition-colors line-clamp-1">
                    {broker.name}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                    {broker.creci}
                  </p>
                  <p className="text-xs text-[#0d3b2e]/70 mt-0.5">
                    {broker.role}
                  </p>
                </div>
              </button>
            ))}
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
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0d3b2e] hover:bg-[#092920] px-5 py-2.5 text-sm font-medium text-white transition-colors"
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