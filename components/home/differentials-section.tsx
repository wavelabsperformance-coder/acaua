"use client"

import { motion } from "framer-motion"
import { differentials } from "@/lib/data"
import { User, Building2, BarChart3, Handshake } from "lucide-react" // Substituted Shield for Handshake (or Headset)

const iconMap = {
  user: User,
  building: Building2,
  chart: BarChart3,
  shield: Handshake, // Mapeia a propriedade 'shield' para o ícone Handshake (ou troque por Headset se preferir)
}

// Configuração dos fundos alternados (Laranja / Verde)
const cardVariants = [
  {
    // 1º e 3º Cards: Laranja / Terracota
    cardBg: "bg-[#b85d19] text-white hover:bg-[#a24f13]",
    iconBg: "bg-white/15 text-white border-white/20",
    descriptionColor: "text-white/85",
  },
  {
    // 2º e 4º Cards: Verde Escuro
    cardBg: "bg-[#0d3b2e] text-white hover:bg-[#08281f]",
    iconBg: "bg-white/15 text-white border-white/20",
    descriptionColor: "text-white/85",
  },
]

export function DifferentialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#faf7f2]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#b85d19] font-bold">
            Por que escolher a Acauã
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-[#0d3b2e] mt-3 font-serif text-balance">
            Diferenciais que Fazem a Diferença
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Handshake
            // Alterna entre Laranja (0) e Verde (1)
            const style = cardVariants[index % 2]

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group text-center p-8 rounded-3xl transition-all duration-300 shadow-md hover:shadow-2xl ${style.cardBg}`}
              >
                {/* Ícone Minimalista */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl border mb-6 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 ${style.iconBg}`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Título Branco Clean */}
                <h3 className="text-xl font-semibold mb-3 font-serif text-white tracking-wide">
                  {item.title}
                </h3>

                {/* Descrição Leve */}
                <p className={`text-sm leading-relaxed ${style.descriptionColor}`}>
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}