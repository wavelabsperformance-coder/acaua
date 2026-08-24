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
    return () => { if (animationRef.current) window.cancelAnimationFrame(animationRef.current) }
  }, [])

  const nudge = (direction: number) => {
    offsetRef.current = Math.max(0, offsetRef.current + direction * 280)
  }

  return <section className={compact ? "py-16" : "bg-secondary py-20 lg:py-28"}>
    <div className="mx-auto max-w-7xl overflow-hidden px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between gap-5">
        <div><span className="text-[11px] uppercase tracking-[0.3em] text-accent">Nossa equipe</span><h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">Quem cuida dos seus planos</h2></div>
        <div className="flex items-center gap-2"><Link href="/corretores" className="mr-2 hidden text-sm font-semibold text-accent hover:underline sm:inline">Ver todos</Link><button type="button" aria-label="Corretores anteriores" onClick={() => nudge(-1)} className="grid h-10 w-10 place-items-center border border-border bg-background hover:bg-primary hover:text-primary-foreground"><ChevronLeft className="h-4 w-4" /></button><button type="button" aria-label="Próximos corretores" onClick={() => nudge(1)} className="grid h-10 w-10 place-items-center border border-border bg-background hover:bg-primary hover:text-primary-foreground"><ChevronRight className="h-4 w-4" /></button></div>
      </div>
      <Link href="/corretores" className="mb-6 inline-block text-sm font-semibold text-accent hover:underline sm:hidden">Ver todos</Link>
      <div className="overflow-hidden" onMouseEnter={() => { pausedRef.current = true }} onMouseLeave={() => { pausedRef.current = false }} onFocus={() => { pausedRef.current = true }} onBlur={() => { pausedRef.current = false }}>
        <div ref={trackRef} className="flex w-max gap-5 will-change-transform">
          {items.map((broker, index) => <button type="button" key={`${broker.id}-${index}`} onClick={() => setSelected(broker)} className="group w-[220px] shrink-0 text-left sm:w-[245px]"><div className="aspect-[4/5] overflow-hidden bg-muted"><img src={broker.image} alt={broker.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><div className="border-b border-border bg-background p-4"><h3 className="font-serif text-xl text-foreground">{broker.name}</h3><p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{broker.creci}</p></div></button>)}
        </div>
      </div>
    </div>
    {selected && <div role="dialog" aria-modal="true" aria-label={`Perfil de ${selected.name}`} className="fixed inset-0 z-[70] grid place-items-center bg-primary/70 p-5" onClick={() => setSelected(null)}><div className="relative grid w-full max-w-2xl overflow-hidden rounded-lg bg-background shadow-2xl sm:grid-cols-[.8fr_1.2fr]" onClick={(event) => event.stopPropagation()}><button type="button" aria-label="Fechar perfil" onClick={() => setSelected(null)} className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-foreground"><X className="h-4 w-4" /></button><img src={selected.image} alt={selected.name} className="h-72 w-full object-cover sm:h-full" /><div className="p-7"><p className="text-xs uppercase tracking-[0.2em] text-accent">{selected.creci}</p><h2 className="mt-3 font-serif text-3xl">{selected.name}</h2><p className="mt-2 text-sm font-medium text-muted-foreground">{selected.role}</p><p className="mt-6 text-sm leading-6 text-muted-foreground">{selected.bio}</p><div className="mt-7 flex flex-wrap gap-3"><a href={`https://wa.me/${selected.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-semibold text-white"><MessageCircle className="h-4 w-4" /> WhatsApp</a><a href={selected.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold"><Instagram className="h-4 w-4" /> Instagram</a></div></div></div></div>}
  </section>
}

export function BrokersPhoneLink() { return <a href={`tel:${siteConfig.phone}`} className="text-sm">{siteConfig.phone}</a> }
