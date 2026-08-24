"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"
import { Phone, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Imóvel de luxo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-medium">
            Pronto para começar?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mt-4 leading-tight text-balance">
            Encontre o Imóvel dos Seus Sonhos
          </h2>
          <p className="text-base text-white/65 mt-6 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe de especialistas está pronta para ajudá-lo a encontrar a propriedade perfeita que atenda a todas as suas expectativas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 h-14 rounded-lg shadow-lg"
            >
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar pelo WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent px-8 h-14 rounded-lg"
            >
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                {siteConfig.phone}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
