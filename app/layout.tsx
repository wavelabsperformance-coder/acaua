import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CookieBanner } from "@/components/cookie-banner"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: {
    default: "Acauã Imóveis | Imobiliária de Alto Padrão em Recife",
    template: "%s | Acauã Imóveis",
  },
  description:
    "Imobiliária especializada em imóveis de alto padrão em Recife e região. Casas, apartamentos, coberturas e empreendimentos de luxo. Atendimento exclusivo e personalizado.",
  keywords: [
    "imobiliária alto padrão",
    "imóveis de luxo recife",
    "apartamentos boa viagem",
    "casas casa forte",
    "coberturas recife",
    "imobiliária recife",
    "imóveis premium",
    "acauã imóveis",
  ],
  authors: [{ name: "Acauã Imóveis" }],
  creator: "Acauã Imóveis",
  publisher: "Acauã Imóveis",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Acauã Imóveis",
    title: "Acauã Imóveis | Imobiliária de Alto Padrão em Recife",
    description:
      "Imobiliária especializada em imóveis de alto padrão em Recife. Atendimento exclusivo e personalizado.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acauã Imóveis | Imobiliária de Alto Padrão",
    description: "Imóveis de luxo em Recife com atendimento exclusivo.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1e3a2f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <ScrollToTop />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
