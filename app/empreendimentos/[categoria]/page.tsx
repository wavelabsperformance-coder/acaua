import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { propertyCategories, generatePropertiesForCategory, siteConfig } from "@/lib/data"
import { PropertyCard } from "@/components/property-card"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Props {
  params: Promise<{ categoria: string }>
}

export async function generateStaticParams() {
  return propertyCategories.map((category) => ({
    categoria: category.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params
  const category = propertyCategories.find((c) => c.slug === categoria)

  if (!category) {
    return {
      title: "Categoria não encontrada",
    }
  }

  return {
    title: `${category.name} - Empreendimentos`,
    description: `Explore nossos imóveis na categoria ${category.name}. ${category.description} de alto padrão em Recife.`,
  }
}

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params
  const category = propertyCategories.find((c) => c.slug === categoria)

  if (!category) {
    notFound()
  }

  const properties = generatePropertiesForCategory(categoria)

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 lg:py-40 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/empreendimentos"
            className="inline-flex items-center text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Empreendimentos
          </Link>
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60">
              Categoria
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-light mt-4">
              {category.name}
            </h1>
            <p className="text-lg text-primary-foreground/70 mt-6 leading-relaxed">
              {category.description} de alto padrão selecionados especialmente para você. Encontre a propriedade perfeita entre nossas {properties.length} opções exclusivas.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <p className="text-muted-foreground">
              Mostrando <span className="font-medium text-foreground">{properties.length}</span> imóveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
            Precisa de ajuda para escolher?
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Nossos consultores especializados estão prontos para ajudá-lo a encontrar o imóvel ideal de acordo com suas preferências e necessidades.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com Especialista
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
