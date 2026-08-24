import { Metadata } from "next"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso do site Acauã Imóveis. Leia atentamente antes de utilizar nossos serviços.",
}

export default function TermosUsoPage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pb-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Legal
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-4">
            Termos de Uso
          </h1>
          <p className="text-muted-foreground mt-4">
            Última atualização: Janeiro de 2024
          </p>

          <div className="mt-12 prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e utilizar o site da {siteConfig.name}, você concorda em cumprir e estar sujeito aos presentes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nosso site ou serviços.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">2. Descrição dos Serviços</h2>
              <p className="text-muted-foreground leading-relaxed">
                A {siteConfig.name} é uma imobiliária especializada em imóveis de alto padrão, oferecendo serviços de intermediação na compra, venda e locação de imóveis. Nosso site disponibiliza informações sobre imóveis, serviços e conteúdo relacionado ao mercado imobiliário.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">3. Uso do Site</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você concorda em utilizar o site apenas para fins legais e de maneira que não infrinja os direitos de terceiros. É proibido:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Reproduzir, copiar ou modificar o conteúdo do site sem autorização</li>
                <li>Utilizar robôs, scrapers ou outros meios automatizados para acessar o site</li>
                <li>Interferir no funcionamento do site ou em suas medidas de segurança</li>
                <li>Transmitir vírus, malware ou qualquer código malicioso</li>
                <li>Realizar atividades que violem leis ou regulamentos aplicáveis</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">4. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo do site, incluindo textos, imagens, logotipos, marcas, gráficos e software, é de propriedade da {siteConfig.name} ou de seus licenciadores e está protegido por leis de propriedade intelectual. Nenhum conteúdo pode ser reproduzido sem autorização prévia por escrito.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">5. Informações dos Imóveis</h2>
              <p className="text-muted-foreground leading-relaxed">
                As informações sobre imóveis disponíveis em nosso site são fornecidas de boa-fé, mas podem conter imprecisões ou estar desatualizadas. Recomendamos que você confirme todas as informações diretamente conosco antes de tomar qualquer decisão.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">6. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                A {siteConfig.name} não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso do site ou da impossibilidade de utilizá-lo. Não garantimos que o site estará sempre disponível ou livre de erros.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">7. Links Externos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nosso site pode conter links para sites de terceiros. Não temos controle sobre o conteúdo desses sites e não nos responsabilizamos por suas políticas de privacidade ou práticas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">8. Alterações nos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entram em vigor imediatamente após a publicação no site. Recomendamos que você revise esta página periodicamente.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">9. Lei Aplicável</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida nos tribunais competentes da cidade de Recife, Pernambuco.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">10. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do e-mail {siteConfig.email} ou pelo telefone {siteConfig.phone}.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
