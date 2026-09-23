"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { siteConfig, aboutContent } from "@/lib/data"
import { ArrowUpRight, Sparkles, Compass } from "lucide-react"
import Link from "next/link"

export function AboutPreviewSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#051813] text-white relative overflow-hidden">
      {/* Luzes de Fundo Futurísticas (Glow Ambient) */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-[500px] h-[500px] bg-[#b85d19]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 translate-x-1/3 w-[600px] h-[600px] bg-[#0d5c46]/30 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Pattern Cyber de Fundo */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Imagem Futurística com Moldura Tech / Neon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            {/* Moldura Neon Externa */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#b85d19] via-[#0d5c46] to-transparent opacity-40 blur-md group-hover:opacity-100 transition duration-1000" />

            {/* Container da Imagem com Glassmorphism */}
            <div className="relative aspect-[4/3] md:aspect-[16/11] w-full rounded-3xl overflow-hidden border border-white/10 bg-[#08221b]/80 backdrop-blur-xl shadow-2xl">
              <img
                src="/sobre/institucional.png"
                alt="Sobre a Acauã Imóveis"
                className="w-full h-full object-cover opacity-90 transition-all duration-700 hover:scale-105 hover:opacity-100"
              />

              {/* Tag Flutuante Tech */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#051813]/80 border border-white/10 text-[10px] uppercase tracking-widest text-[#b85d19] backdrop-blur-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#b85d19] animate-pulse" />
                Inovação Imobiliária
              </div>
            </div>
          </motion.div>

          {/* Lado Direito: Conteúdo Futurístico */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            {/* Badge Neon Superior */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b85d19]/10 border border-[#b85d19]/30 text-[#b85d19] text-xs uppercase tracking-[0.25em] font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>O Futuro da Acauã</span>
            </div>

            {/* Título com Gradiente Vibrante */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif leading-tight bg-gradient-to-r from-white via-[#e2e8f0] to-[#b85d19] bg-clip-text text-transparent">
              Tradição Reinventada para uma Nova Era
            </h2>

            {/* Texto Descritivo com Alto Contraste */}
            <p className="text-emerald-100/70 mt-6 leading-relaxed text-base md:text-lg font-light">
              {aboutContent.shortDescription}
            </p>

            {/* Botões Futurísticos (Glow + Glass) */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-[#b85d19] hover:bg-[#d46d20] text-white px-8 py-6 text-base font-medium shadow-[0_0_25px_rgba(184,93,25,0.35)] hover:shadow-[0_0_35px_rgba(184,93,25,0.6)] transition-all duration-300 border border-white/20"
              >
                <Link href="/sobre" className="flex items-center gap-2">
                  Conheça Nossa História
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl bg-white/5 hover:bg-white/10 text-white border-white/15 hover:border-white/30 backdrop-blur-md px-8 py-6 text-base font-medium transition-all duration-300"
              >
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Compass className="h-5 w-5 text-[#b85d19]" />
                  Falar com a Equipe
                </a>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}