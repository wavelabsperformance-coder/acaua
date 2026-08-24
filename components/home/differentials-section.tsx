"use client"

import { motion } from "framer-motion"
import { differentials } from "@/lib/data"
import { User, Building2, BarChart3, Shield } from "lucide-react"

const iconMap = {
  user: User,
  building: Building2,
  chart: BarChart3,
  shield: Shield,
}

export function DifferentialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
            Por que escolher a Acauã
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mt-4 text-balance">
            Diferenciais que Fazem a Diferença
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center p-7 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/5 border border-primary/10 mb-5 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
