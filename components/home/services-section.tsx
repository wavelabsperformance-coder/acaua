"use client"

import { motion } from "framer-motion"
import { Building, ShieldCheck, Compass } from "lucide-react"

const services = [
  {
    icon: Compass,
    title: "Consultoria & Curadoria Imobiliária",
    description:
      "Acompanhamento estratégico para mapear as melhores oportunidades do mercado de alto padrão, alinhadas ao seu perfil de investimento.",
    bgColor: "bg-[#bd5319]", // Terracota / Caramelo
  },
  {
    icon: ShieldCheck,
    title: "Gestão de Ativos & Locação",
    description:
      "Tranquilidade absoluta para proprietários com gestão completa, rigorosa análise cadastral e preservação de patrimônio.",
    bgColor: "bg-[#0d3b2e]", // Verde Escuro
  },
  {
    icon: Building,
    title: "Intermediação de Venda de Alto Padrão",
    description:
      "Apresentação diferenciada com fotos profissionais, tour virtual e canal direto com investidores qualificados.",
    bgColor: "bg-[#bd5319]", // Terracota / Caramelo
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#faf7f2] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Bloco de Título Arquitetônico Reformulado */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 border-b border-[#0d3b2e]/10 pb-8"
        >
          <div className="pl-5 border-l-2 border-[#bd5319]">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-[#bd5319]">
                Excelência em Serviços
              </span>
              <span className="w-8 h-[1px] bg-[#bd5319]/40" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-[#0d3b2e] tracking-tight">
              Soluções Imobiliárias Integradas
            </h2>

            <p className="mt-3 max-w-2xl text-[#0d3b2e]/70 text-base font-light leading-relaxed">
              Experiência personalizada e inteligência de mercado para guiar cada etapa do seu investimento.
            </p>
          </div>
        </motion.div>

        {/* Grid de Serviços Intercalados (3 no Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <div
                  className={`h-full rounded-2xl ${service.bgColor} p-8 text-white text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-start`}
                >
                  {/* Ícone Estilizado Centralizado */}
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-8 backdrop-blur-sm shadow-inner">
                    <Icon className="w-7 h-7 text-white/90" />
                  </div>

                  {/* Título do Card */}
                  <h3 className="font-serif text-xl font-normal text-white mb-4 leading-snug">
                    {service.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-white/80 text-sm font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ServicesSection