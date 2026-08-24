"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"
import { cn } from "@/lib/utils"

const navigation = [{ name: "Home", href: "/" }, { name: "Sobre", href: "/sobre" }, { name: "Empreendimentos", href: "/empreendimentos" }, { name: "Corretores", href: "/corretores" }, { name: "Blog", href: "/blog" }, { name: "Contato", href: "/contato" }]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => { const handleScroll = () => setIsScrolled(window.scrollY > 20); window.addEventListener("scroll", handleScroll); return () => window.removeEventListener("scroll", handleScroll) }, [])
  return <header className={cn("fixed left-0 right-0 top-0 z-50 transition-all duration-500", isScrolled ? "bg-background/98 py-3 shadow-sm backdrop-blur-md" : "bg-transparent py-5")}><div className="mx-auto max-w-7xl px-6 lg:px-8"><nav className="flex items-center justify-between"><Link href="/" className="shrink-0"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoacua-removebg-preview-Wxpw89Ny4iPxrjr95YdQd4ij4qRUQa.png" alt="Acauã Imóveis" className="h-14 w-auto object-contain" /></Link><div className="hidden items-center gap-7 lg:flex">{navigation.map((item) => <Link key={item.name} href={item.href} className={cn("relative text-sm font-medium tracking-wide transition-colors after:absolute after:bottom-[-7px] after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:text-accent hover:after:w-full", isScrolled ? "text-foreground" : "text-primary-foreground")}>{item.name}</Link>)}</div><div className="hidden items-center gap-3 lg:flex"><Button asChild className="bg-accent px-5 text-accent-foreground hover:bg-accent/90"><a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer">Falar Conosco</a></Button><a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"><Phone className="h-4 w-4" />{siteConfig.phone}</a></div><button onClick={() => setIsOpen(!isOpen)} className={cn("p-2 lg:hidden", isScrolled ? "text-foreground" : "text-primary-foreground")} aria-label="Menu">{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button></nav><div className={cn("overflow-hidden transition-all duration-300 lg:hidden", isOpen ? "mt-4 max-h-[500px] opacity-100" : "max-h-0 opacity-0")}><div className="space-y-1 border border-border bg-card p-5 shadow-xl">{navigation.map((item) => <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block py-3 text-sm font-medium text-foreground">{item.name}</Link>)}<a href={`tel:${siteConfig.phone}`} className="mt-3 flex items-center gap-2 bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"><Phone className="h-4 w-4" />{siteConfig.phone}</a></div></div></div></header>
}
