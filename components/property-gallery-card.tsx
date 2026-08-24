"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import type { featuredProperties } from "@/lib/data"

type Property = (typeof featuredProperties)[number]

export function PropertyGalleryCard({ property }: { property: Property }) {
  const [index, setIndex] = useState(0)
  const next = (event: React.MouseEvent) => { event.preventDefault(); event.stopPropagation(); setIndex((value) => (value + 1) % property.images.length) }
  const previous = (event: React.MouseEvent) => { event.preventDefault(); event.stopPropagation(); setIndex((value) => (value - 1 + property.images.length) % property.images.length) }
  return (
    <article className="group bg-card border border-border overflow-hidden">
      <Link href={`/empreendimentos/${property.category}/${property.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={property.images[index]} alt={`${property.title} — imagem ${index + 1}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          <button type="button" aria-label="Imagem anterior" onClick={previous} className="absolute left-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center bg-background/90 text-foreground opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"><ChevronLeft className="h-4 w-4" /></button>
          <button type="button" aria-label="Próxima imagem" onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center bg-background/90 text-foreground opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"><ChevronRight className="h-4 w-4" /></button>
          <span className="absolute bottom-3 left-3 bg-primary px-2 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">{index + 1} / {property.images.length}</span>
        </div>
        <div className="p-5"><p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{property.location}</p><div className="mt-2 flex items-start justify-between gap-3"><h3 className="font-serif text-xl text-foreground">{property.title}</h3><ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-accent" /></div><p className="mt-4 text-sm text-muted-foreground">{property.area} · {property.bedrooms} quartos · {property.parking} vagas</p><p className="mt-4 text-lg text-foreground">{property.price}</p></div>
      </Link>
    </article>
  )
}
