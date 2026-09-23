"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { rentalProperties, saleProperties } from "@/lib/data"
import { PropertyGalleryCard } from "@/components/property-gallery-card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function FeaturedPropertiesSection() {
  return (
    <div className="py-20 lg:py-28 bg-[#faf7f2] space-y-20 relative overflow-hidden">
      
      {/* BLOCO 1: ALUGUEL */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end border-b border-[#0d3b2e]/10 pb-8"
          >
            {/* Bloco de Título Arquitetônico */}
            <div className="pl-5 border-l-2 border-[#b85d19]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#b85d19]">
                  Aluguel & Locação
                </span>
                <span className="w-8 h-[1px] bg-[#b85d19]/40" />
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-[#0d3b2e] tracking-tight">
                Empreendimentos para Alugar
              </h2>
              
              <p className="mt-3 max-w-xl text-[#0d3b2e]/70 text-base font-light leading-relaxed">
                Endereços selecionados para quem busca viver com conforto, elegância e segurança.
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group rounded-xl border border-[#0d3b2e]/30 bg-white text-[#0d3b2e] hover:bg-[#0d3b2e] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md px-6 py-6"
            >
              <Link href="/empreendimentos/imoveis-para-alugar" className="flex items-center gap-2 font-medium">
                Ver todos de aluguel
                <ArrowUpRight className="h-4 w-4 text-[#b85d19] group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </motion.div>

          {/* Grid de Propriedades */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {rentalProperties && rentalProperties.slice(0, 4).map((property) => (
              <div key={property.id} className="relative group transition-all duration-500 hover:-translate-y-1.5">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-[#b85d19]/30 to-[#0d3b2e]/40 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden bg-[#0d3b2e] border border-[#0d3b2e]/20 text-white shadow-md group-hover:shadow-2xl transition-all duration-500">
                  <PropertyGalleryCard property={property} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DIVISOR SUTIL ENTRE SEÇÕES */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#0d3b2e]/15 to-transparent" />
      </div>

      {/* BLOCO 2: VENDA */}
      <section className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end border-b border-[#0d3b2e]/10 pb-8"
          >
            {/* Bloco de Título Arquitetônico */}
            <div className="pl-5 border-l-2 border-[#b85d19]">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#b85d19]">
                  Vendas & Aquisições
                </span>
                <span className="w-8 h-[1px] bg-[#b85d19]/40" />
              </div>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-[#0d3b2e] tracking-tight">
                Empreendimentos à Venda
              </h2>

              <p className="mt-3 max-w-xl text-[#0d3b2e]/70 text-base font-light leading-relaxed">
                Oportunidades únicas de investimento patrimonial e projetos de alto padrão.
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group rounded-xl border border-[#0d3b2e]/30 bg-white text-[#0d3b2e] hover:bg-[#0d3b2e] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md px-6 py-6"
            >
              <Link href="/empreendimentos/imoveis-para-venda" className="flex items-center gap-2 font-medium">
                Ver todos de venda
                <ArrowUpRight className="h-4 w-4 text-[#b85d19] group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </motion.div>

          {/* Grid de Propriedades */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {saleProperties && saleProperties.slice(0, 4).map((property) => (
              <div key={property.id} className="relative group transition-all duration-500 hover:-translate-y-1.5">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-[#b85d19]/30 to-[#0d3b2e]/40 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden bg-[#0d3b2e] border border-[#0d3b2e]/20 text-white shadow-md group-hover:shadow-2xl transition-all duration-500">
                  <PropertyGalleryCard property={property} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FeaturedPropertiesSection