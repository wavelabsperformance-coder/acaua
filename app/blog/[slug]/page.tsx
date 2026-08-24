import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts, siteConfig } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, User, Share2 } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Artigo não encontrado",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
  }

  const paragraphs = post.content.split("\n\n")

  // Get related posts (excluding current)
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Blog
          </Link>

          <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider bg-secondary text-secondary-foreground mb-6">
            {post.category}
          </span>

          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <button
              className="ml-auto flex items-center gap-2 hover:text-foreground transition-colors"
              aria-label="Compartilhar"
            >
              <Share2 className="h-4 w-4" />
              Compartilhar
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="aspect-[2/1] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-foreground leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-secondary text-center">
            <h3 className="font-serif text-2xl text-foreground mb-4">
              Interessado em saber mais?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para ajudá-lo a encontrar as melhores oportunidades no mercado imobiliário.
            </p>
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

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground mb-12">
              Artigos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="group bg-card">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="aspect-[16/10] overflow-hidden image-hover-zoom">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider bg-secondary text-secondary-foreground mb-3">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
