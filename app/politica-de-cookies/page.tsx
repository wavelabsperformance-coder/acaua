import { Metadata } from "next"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de Cookies da Acauã Imóveis. Saiba como utilizamos cookies em nosso site.",
}

export default function PoliticaCookiesPage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pb-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Legal
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-4">
            Política de Cookies
          </h1>
          <p className="text-muted-foreground mt-4">
            Última atualização: Janeiro de 2024
          </p>

          <div className="mt-12 prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">1. O que são Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, tablet ou celular) quando você visita nosso site. Eles permitem que o site reconheça seu dispositivo e lembre-se de informações sobre sua visita, como suas preferências e configurações.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">2. Tipos de Cookies que Utilizamos</h2>
              
              <h3 className="font-semibold text-foreground mt-6 mb-3">Cookies Essenciais</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                São necessários para o funcionamento básico do site. Sem eles, algumas funcionalidades podem não funcionar corretamente. Não coletam informações sobre você para fins de marketing.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-3">Cookies de Desempenho</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Coletam informações sobre como você usa nosso site, como quais páginas você visita e se encontrou erros. Essas informações são usadas para melhorar o funcionamento do site.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-3">Cookies de Funcionalidade</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permitem que o site lembre suas escolhas, como idioma ou região, para oferecer uma experiência mais personalizada.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-3">Cookies de Marketing</h3>
              <p className="text-muted-foreground leading-relaxed">
                São usados para rastrear visitantes em diferentes sites e exibir anúncios mais relevantes para você. Podem ser utilizados por nossos parceiros de publicidade.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">3. Como Gerenciar Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você pode gerenciar ou desativar cookies através das configurações do seu navegador. A maioria dos navegadores permite:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Ver quais cookies estão armazenados e excluí-los individualmente</li>
                <li>Bloquear cookies de terceiros</li>
                <li>Bloquear cookies de sites específicos</li>
                <li>Bloquear todos os cookies</li>
                <li>Excluir todos os cookies ao fechar o navegador</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Observe que desativar cookies pode afetar a funcionalidade do site e sua experiência de navegação.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">4. Cookies de Terceiros</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos serviços de terceiros que podem instalar cookies em seu dispositivo, como Google Analytics para análise de tráfego e Google Maps para exibição de mapas. Cada um desses serviços possui sua própria política de cookies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">5. Atualizações desta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta política pode ser atualizada periodicamente. Recomendamos que você a revise regularmente para se manter informado sobre como utilizamos cookies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">6. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco através do e-mail {siteConfig.email} ou pelo telefone {siteConfig.phone}.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
