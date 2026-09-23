"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { testimonials, siteConfig } from "@/lib/data"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Função para controlar as setas de navegação manual
  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-light mt-3 text-balance tracking-tight">
            O Que Nossos <span className="font-semibold bg-gradient-to-r from-primary-foreground via-primary-foreground/90 to-primary-foreground/60 bg-clip-text text-transparent">Clientes Dizem</span>
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Histórias reais de quem confiou em nosso trabalho para encontrar o imóvel dos sonhos.
          </p>
        </motion.div>
      </div>

      {/* Container Principal */}
      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-10">
        
        {/* Setas de Navegação Manual */}
        <button
          onClick={() => handleScroll("left")}
          aria-label="Depoimento anterior"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground border border-primary-foreground/20 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 stroke-[1.75]" />
        </button>

        <button
          onClick={() => handleScroll("right")}
          aria-label="Próximo depoimento"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground border border-primary-foreground/20 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-6 h-6 stroke-[1.75]" />
        </button>

        {/* Gradientes Suaves nas Bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-primary via-primary/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-primary via-primary/80 to-transparent z-20 pointer-events-none" />

        {/* Container de Rolagem Sem Barra de Scroll */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth py-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* Framer Motion garantindo o loop contínuo e rápido de 0% a -50% */}
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 12, // Velocidade aumentada (tempo menor = mais rápido)
              repeat: Infinity,
            }}
          >
            {/* Bloco 1 de Depoimentos */}
            <div className="flex shrink-0">
              {testimonials.map((testimonial, index) => (
                <div
                  key={`t1-${index}`}
                  className="w-[300px] sm:w-[360px] lg:w-[380px] px-3 shrink-0"
                >
                  <div className="h-full p-7 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl backdrop-blur-sm flex flex-col justify-between">
                    <div>
                      <Quote className="h-7 w-7 text-accent/60 mb-5" />
                      <p className="text-primary-foreground/80 leading-relaxed text-[15px] mb-6">
                        {`"${testimonial.text}"`}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-accent text-accent"
                          />
                        ))}
                      </div>
                      <div className="pt-5 border-t border-primary-foreground/10">
                        <span className="block font-medium text-primary-foreground">
                          {testimonial.name}
                        </span>
                        <span className="text-sm text-primary-foreground/50">
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bloco 2 de Depoimentos (Réplica para o loop infinito contínuo) */}
            <div className="flex shrink-0">
              {testimonials.map((testimonial, index) => (
                <div
                  key={`t2-${index}`}
                  className="w-[300px] sm:w-[360px] lg:w-[380px] px-3 shrink-0"
                >
                  <div className="h-full p-7 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl backdrop-blur-sm flex flex-col justify-between">
                    <div>
                      <Quote className="h-7 w-7 text-accent/60 mb-5" />
                      <p className="text-primary-foreground/80 leading-relaxed text-[15px] mb-6">
                        {`"${testimonial.text}"`}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-accent text-accent"
                          />
                        ))}
                      </div>
                      <div className="pt-5 border-t border-primary-foreground/10">
                        <span className="block font-medium text-primary-foreground">
                          {testimonial.name}
                        </span>
                        <span className="text-sm text-primary-foreground/50">
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14"
        >
          <Button
            asChild
            variant="outline"
            className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent rounded-lg"
          >
            <a
              href={siteConfig.googleReviewsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no Google
            </a>
          </Button>
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg"
          >
            <a
              href={siteConfig.googleReviewsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deixar Avaliação
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}