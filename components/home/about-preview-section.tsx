"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { siteConfig, aboutContent } from "@/lib/data"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function AboutPreviewSection() {
  const yearsOfExperience = new Date().getFullYear() - siteConfig.foundedYear

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                    alt="Interior de alto padrão"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80"
                    alt="Fachada de imóvel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 bg-primary text-primary-foreground px-8 py-5 rounded-xl shadow-xl">
              <span className="block text-4xl font-light">+{yearsOfExperience}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">
                Anos de experiência
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
              Sobre a Acauã
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mt-4 text-balance">
              Tradição e Excelência no Mercado Imobiliário
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              {aboutContent.shortDescription}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-lg">
                <Link href="/sobre">
                  Conheça Nossa História
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-lg">
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
