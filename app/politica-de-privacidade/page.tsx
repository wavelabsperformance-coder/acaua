import { Metadata } from "next"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Acauã Imóveis. Saiba como tratamos seus dados pessoais.",
}

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pb-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Legal
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-4">
            Política de Privacidade
          </h1>
          <p className="text-muted-foreground mt-4">
            Última atualização: Janeiro de 2024
          </p>

          <div className="mt-12 prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A {siteConfig.name} valoriza a privacidade de seus clientes e visitantes. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você utiliza nossos serviços ou acessa nosso site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ao utilizar nossos serviços, você concorda com as práticas descritas nesta política. Recomendamos que leia atentamente este documento.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">2. Dados que Coletamos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Podemos coletar os seguintes tipos de informações:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Dados de identificação pessoal: nome, CPF, RG, data de nascimento</li>
                <li>Dados de contato: endereço, telefone, e-mail</li>
                <li>Dados profissionais: profissão, empresa, cargo</li>
                <li>Dados de navegação: endereço IP, cookies, páginas visitadas</li>
                <li>Dados de preferência: tipos de imóveis de interesse, localização desejada</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">3. Como Utilizamos seus Dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Prestar nossos serviços de intermediação imobiliária</li>
                <li>Enviar comunicações relevantes sobre imóveis e oportunidades</li>
                <li>Melhorar a experiência do usuário em nosso site</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Realizar análises estatísticas e estudos de mercado</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">4. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Seus dados podem ser compartilhados com parceiros comerciais, prestadores de serviços e autoridades públicas quando necessário para a prestação de nossos serviços ou cumprimento de obrigações legais. Não vendemos ou alugamos seus dados pessoais a terceiros.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">5. Segurança dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acessos não autorizados, alterações, divulgação ou destruição. Nossos sistemas são regularmente atualizados e monitorados.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">6. Seus Direitos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados</li>
                <li>Solicitar a portabilidade dos dados</li>
                <li>Revogar o consentimento</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">7. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco através do e-mail {siteConfig.email} ou pelo telefone {siteConfig.phone}.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
