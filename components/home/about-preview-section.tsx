"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { siteConfig, aboutContent } from "@/lib/data"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutPreviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagem Única */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] md:aspect-[16/11] w-full rounded-2xl overflow-hidden shadow-xl border border-border/80 bg-muted">
              <img
                src="/sobre/institucional.png"
                alt="Sobre a Acauã Imóveis"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
              Sobre a Acauã
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mt-4 text-balance font-serif">
              Tradição e Excelência no Mercado Imobiliário
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              {aboutContent.shortDescription}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-xl bg-[#0d3b2e] hover:bg-[#092920] text-white">
                <Link href="/sobre">
                  Conheça Nossa História
                  <ArrowRight className="ml-2 h-4 w-4 text-[#b85d19]" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl border-[#0d3b2e] text-[#0d3b2e] hover:bg-[#0d3b2e] hover:text-white">
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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