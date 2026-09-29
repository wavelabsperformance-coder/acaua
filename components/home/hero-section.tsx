"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { siteConfig, heroContent } from "@/lib/data"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pb-10">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Imagem para Celulares (Mobile) */}
        <img
          src="/og-image-mobile.png"
          alt="Acauã Imóveis Mobile"
          className="block md:hidden w-full h-full object-cover object-[center_top]"
        />

        {/* Imagem para Desktop / Notebooks — Alinhada mais à direita (70%) */}
        <img
          src="/capa-acaua.png"
          alt="Acauã Imóveis Desktop"
          className="hidden md:block w-full h-full object-cover object-[70%_top]"
        />

        {/* Overlay leve para garantir contraste */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content — pt-80 no mobile para descer os botões e md:pt-52 no desktop */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 pt-80 md:pt-52 mb-12">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* BOTÃO WHATSAPP */}
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 h-14 text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
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
              className="h-14 rounded-lg border-emerald-950 bg-emerald-950 px-8 text-base text-white shadow-lg hover:bg-emerald-900 hover:text-white w-full sm:w-auto"
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3 text-white/60">
          <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}