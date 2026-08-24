import { Metadata } from "next"
import { siteConfig } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "LGPD - Proteção de Dados",
  description: "Saiba como a Acauã Imóveis trata seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados.",
}

export default function LGPDPage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pb-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Legal
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-4">
            LGPD - Lei Geral de Proteção de Dados
          </h1>
          <p className="text-muted-foreground mt-4">
            Última atualização: Janeiro de 2024
          </p>

          <div className="mt-12 prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">O que é a LGPD?</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) é a legislação brasileira que regula as atividades de tratamento de dados pessoais. Ela estabelece regras claras sobre coleta, armazenamento, tratamento e compartilhamento de dados pessoais, impondo um padrão mais elevado de proteção e penalidades significativas para o não cumprimento.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">Nosso Compromisso</h2>
              <p className="text-muted-foreground leading-relaxed">
                A {siteConfig.name} está comprometida com a proteção dos dados pessoais de seus clientes, parceiros e visitantes. Implementamos medidas técnicas e organizacionais para garantir a segurança, transparência e privacidade no tratamento de dados pessoais, em conformidade com a LGPD.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">Seus Direitos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Como titular de dados, você possui os seguintes direitos garantidos pela LGPD:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-secondary">
                  <h3 className="font-semibold text-foreground mb-2">Confirmação e Acesso</h3>
                  <p className="text-sm text-muted-foreground">
                    Confirmar a existência de tratamento e acessar seus dados pessoais.
                  </p>
                </div>
                <div className="p-4 bg-secondary">
                  <h3 className="font-semibold text-foreground mb-2">Correção</h3>
                  <p className="text-sm text-muted-foreground">
                    Solicitar a correção de dados incompletos, inexatos ou desatualizados.
                  </p>
                </div>
                <div className="p-4 bg-secondary">
                  <h3 className="font-semibold text-foreground mb-2">Eliminação</h3>
                  <p className="text-sm text-muted-foreground">
                    Solicitar a eliminação dos dados tratados com base no seu consentimento.
                  </p>
                </div>
                <div className="p-4 bg-secondary">
                  <h3 className="font-semibold text-foreground mb-2">Portabilidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Solicitar a portabilidade dos dados a outro fornecedor de serviço.
                  </p>
                </div>
                <div className="p-4 bg-secondary">
                  <h3 className="font-semibold text-foreground mb-2">Informação</h3>
                  <p className="text-sm text-muted-foreground">
                    Ser informado sobre entidades com as quais compartilhamos seus dados.
                  </p>
                </div>
                <div className="p-4 bg-secondary">
                  <h3 className="font-semibold text-foreground mb-2">Revogação</h3>
                  <p className="text-sm text-muted-foreground">
                    Revogar o consentimento a qualquer momento.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">Como Exercer Seus Direitos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para exercer qualquer um dos seus direitos, você pode entrar em contato conosco através dos seguintes canais:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>E-mail: {siteConfig.email}</li>
                <li>Telefone: {siteConfig.phone}</li>
                <li>WhatsApp: clique no botão abaixo</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Responderemos à sua solicitação no prazo de 15 dias, conforme estabelecido pela legislação.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">Encarregado de Proteção de Dados (DPO)</h2>
              <p className="text-muted-foreground leading-relaxed">
                A {siteConfig.name} designou um Encarregado de Proteção de Dados (Data Protection Officer - DPO) responsável por receber comunicações dos titulares de dados e da Autoridade Nacional de Proteção de Dados (ANPD). Para entrar em contato com nosso DPO, envie um e-mail para {siteConfig.email}.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">Medidas de Segurança</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Implementamos diversas medidas para proteger seus dados pessoais:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Controle de acesso restrito a funcionários autorizados</li>
                <li>Monitoramento contínuo de sistemas e redes</li>
                <li>Treinamento regular de funcionários sobre proteção de dados</li>
                <li>Políticas e procedimentos de segurança da informação</li>
                <li>Backup regular e planos de recuperação de desastres</li>
              </ul>
            </section>

            <section className="p-8 bg-secondary">
              <h2 className="font-serif text-2xl text-foreground mb-4">Precisa de Ajuda?</h2>
              <p className="text-muted-foreground mb-6">
                Se você tiver dúvidas sobre como tratamos seus dados pessoais ou quiser exercer algum de seus direitos, entre em contato conosco. Estamos à disposição para ajudá-lo.
              </p>
              <Button asChild size="lg">
                <a
                  href={`${siteConfig.whatsappLink}?text=Olá! Gostaria de saber mais sobre como meus dados são tratados pela Acauã Imóveis.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar sobre LGPD
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
