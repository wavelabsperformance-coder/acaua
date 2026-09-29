"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Building2,
  Send,
  CheckCircle2,
  MessageCircle,
  Upload,
  Image as ImageIcon,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"

export default function NegociePage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoNegocio: "venda",
    tipoImovel: "apartamento",
    cidadeBairro: "",
    valorPretendido: "",
    descricao: "",
  })

  const [fotos, setFotos] = useState<File[]>([])
  const [enviado, setEnviado] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      setFotos((prev) => [...prev, ...selectedFiles])
    }
  }

  const handleRemoveFoto = (index: number) => {
    setFotos((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()

    const qtdFotosTexto =
      fotos.length > 0
        ? `${fotos.length} foto(s) selecionada(s) para envio`
        : "Nenhuma foto anexada no site"

    // Formata a mensagem detalhada para o WhatsApp do corretor
    const mensagem = `
*NOVO IMÓVEL PARA NEGOCIAR / CADASTRAR*

*Dados do Proprietário:*
• *Nome:* ${formData.nome}
• *Telefone:* ${formData.telefone}
• *E-mail:* ${formData.email || "Não informado"}

*Informações do Imóvel:*
• *Finalidade:* ${formData.tipoNegocio === "venda" ? "Venda" : "Aluguel"}
• *Tipo de Imóvel:* ${formData.tipoImovel.toUpperCase()}
• *Localização (Bairro/Cidade):* ${formData.cidadeBairro}
• *Valor Pretendido:* R$ ${formData.valorPretendido || "A combinar"}

*Mídias / Fotos:*
• ${qtdFotosTexto}

*Descrição / Diferenciais:*
${formData.descricao || "Sem observações adicionais."}
    `.trim()

    const urlEncoded = encodeURIComponent(mensagem)
    const phoneClean = siteConfig.whatsappLink.replace(/\D/g, "")
    const whatsappUrl = `https://wa.me/${phoneClean}?text=${urlEncoded}`

    setEnviado(true)
    window.open(whatsappUrl, "_blank")
  }

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* 1. HERO HEADER COM A IMAGEM DE CAPA */}
      <section className="relative flex min-h-[460px] items-end overflow-hidden pt-36 pb-16 bg-[#0d3b2e]">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85"
          alt="Negocie seu Imóvel"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b2e]/95 via-[#0d3b2e]/85 to-[#0d3b2e]/70 backdrop-blur-[1px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Início
          </Link>

          <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-semibold block">
            Anuncie Conosco
          </span>

          <h1 className="font-serif text-4xl md:text-5xl font-light mt-2 text-white">
            Negocie seu Imóvel
          </h1>

          <p className="text-white/80 mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
            Quer vender ou alugar o seu imóvel com rapidez e segurança? Preencha os dados e envie as fotos diretamente para o nosso atendimento no WhatsApp.
          </p>
        </div>
      </section>

      {/* 2. FORMULÁRIO DE CAPTAÇÃO */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-border/80 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0d3b2e] to-[#b85d19]" />

            {enviado ? (
              <div className="text-center py-12 space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Solicitação Encaminhada!
                </h2>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  Sua mensagem com os dados do imóvel foi direcionada para o nosso WhatsApp. Um de nossos corretores já vai te atender!
                </p>
                <Button
                  onClick={() => setEnviado(false)}
                  className="bg-[#0d3b2e] hover:bg-[#092920] text-white mt-6 rounded-xl"
                >
                  Enviar Outro Imóvel
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmitWhatsApp} className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-[#b85d19]" />
                    Informações do Imóvel e Proprietário
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    Preencha os detalhes e anexe as fotos do seu imóvel abaixo.
                  </p>
                </div>

                {/* Dados Pessoais */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-[#0d3b2e] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(81) 99999-9999"
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-[#0d3b2e] transition-colors"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu.email@exemplo.com"
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-[#0d3b2e] transition-colors"
                    />
                  </div>
                </div>

                <hr className="border-border/60" />

                {/* Opções do Imóvel */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Finalidade *
                    </label>
                    <select
                      name="tipoNegocio"
                      value={formData.tipoNegocio}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-[#0d3b2e] transition-colors"
                    >
                      <option value="venda">Quero Vender</option>
                      <option value="aluguel">Quero Alugar</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Tipo de Imóvel *
                    </label>
                    <select
                      name="tipoImovel"
                      value={formData.tipoImovel}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-[#0d3b2e] transition-colors"
                    >
                      <option value="apartamento">Apartamento</option>
                      <option value="casa">Casa</option>
                      <option value="casa_condominio">Casa em Condomínio</option>
                      <option value="ponto_comercial">Ponto / Sala Comercial</option>
                      <option value="terreno">Terreno / Lote</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Bairro e Cidade *
                    </label>
                    <input
                      type="text"
                      name="cidadeBairro"
                      required
                      value={formData.cidadeBairro}
                      onChange={handleChange}
                      placeholder="Ex: Maurício de Nassau, Caruaru"
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-[#0d3b2e] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Valor Pretendido (R$)
                    </label>
                    <input
                      type="text"
                      name="valorPretendido"
                      value={formData.valorPretendido}
                      onChange={handleChange}
                      placeholder="Ex: 500.000 ou 2.500/mês"
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-[#0d3b2e] transition-colors"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                      Descrição do Imóvel / Diferenciais
                    </label>
                    <textarea
                      name="descricao"
                      rows={4}
                      value={formData.descricao}
                      onChange={handleChange}
                      placeholder="Informe detalhes sobre o imóvel (número de quartos, banheiros, vagas, área privativa, se aceita financiamento, etc.)"
                      className="w-full p-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:border-[#0d3b2e] transition-colors resize-none"
                    />
                  </div>
                </div>

                <hr className="border-border/60" />

                {/* Área de Upload de Fotos do Imóvel */}
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                      <ImageIcon className="h-4 w-4 text-[#b85d19]" />
                      Fotos do Imóvel
                    </label>
                    <p className="text-xs text-muted-foreground mt-1">
                      Selecione as fotos do imóvel no seu computador ou celular.
                    </p>
                  </div>

                  <div className="border-2 border-dashed border-border hover:border-[#0d3b2e] transition-colors rounded-2xl p-6 text-center bg-[#faf7f2]/50 relative cursor-pointer">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFotoChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Upload className="mx-auto h-8 w-8 text-[#b85d19] mb-2" />
                    <p className="text-sm font-medium text-foreground">
                      Clique aqui para selecionar fotos do seu imóvel
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Você pode selecionar múltiplos arquivos de imagem
                    </p>
                  </div>

                  {/* Pré-visualização das Fotos Selecionadas */}
                  {fotos.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-semibold text-[#0d3b2e]">
                        {fotos.length} foto(s) selecionada(s):
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {fotos.map((file, idx) => (
                          <div
                            key={idx}
                            className="relative group rounded-xl overflow-hidden border border-border bg-muted aspect-video flex items-center justify-center"
                          >
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Foto ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => handleRemoveFoto(idx)}
                              className="absolute top-1 right-1 bg-black/70 text-white rounded-full p-1 opacity-90 hover:opacity-100 transition-opacity"
                              title="Remover foto"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                            <span className="absolute bottom-1 left-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded">
                              Foto {idx + 1}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#0d3b2e] hover:bg-[#b85d19] text-white h-14 rounded-xl font-medium text-base shadow-md transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5 text-emerald-400 fill-emerald-400/20" />
                  Enviar Dados e Fotos via WhatsApp
                  <Send className="h-4 w-4 ml-1" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}