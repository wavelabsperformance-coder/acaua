"use client"

import { motion } from "framer-motion"
import { testimonials, siteConfig } from "@/lib/data"
import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  // Duplicamos os depoimentos para criar o efeito infinito
  const duplicatedTestimonials = [...testimonials, ...testimonials]

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
          <span className="text-[11px] uppercase tracking-[0.3em] text-primary-foreground/50 font-medium">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-light mt-4 text-balance">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto">
            Histórias reais de quem confiou em nosso trabalho para encontrar o imóvel dos sonhos.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling Container */}
        <div className="flex animate-scroll-infinite">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-[380px] px-3"
            >
              <div className="h-full p-7 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl backdrop-blur-sm">
                <Quote className="h-7 w-7 text-accent/60 mb-5" />
                <p className="text-primary-foreground/80 leading-relaxed text-[15px] mb-6">
                  {`"${testimonial.text}"`}
                </p>
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
          ))}
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
