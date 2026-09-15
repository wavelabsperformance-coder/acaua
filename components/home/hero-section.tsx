"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { siteConfig, heroContent } from "@/lib/data"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/capa-acaua.png"
          alt="Acauã Imóveis"
          className="w-full h-full object-cover"
        />

        {/* Overlay para melhorar a leitura dos botões */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 py-32">
  <div className="flex justify-center pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            {/* BOTÃO WHATSAPP */}
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 h-14 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {heroContent.ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            {/* BOTÃO EMPREENDIMENTOS */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-lg border-emerald-950 bg-emerald-950 px-8 text-base text-white shadow-lg hover:bg-emerald-900 hover:text-white"
            >
              <Link href="/empreendimentos">
                {heroContent.ctaSecondary}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3 text-white/60">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">
            Explorar
          </span>

          <div className="w-px h-14 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}