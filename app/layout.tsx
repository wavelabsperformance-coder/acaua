import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CookieBanner } from "@/components/cookie-banner"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  // Atualizado para o seu novo domínio oficial
  metadataBase: new URL("https://www.acauaimoveis.com"),
  title: {
    default: "Acauã Imóveis | Recife, Caruaru e Litoral",
    template: "%s | Acauã Imóveis",
  },
  description:
    "Sua imobiliária de confiança em Caruaru, Recife e Litoral. Encontre casas, apartamentos, pontos comerciais e empreendimentos com atendimento exclusivo.",
  keywords: [
    "imobiliária caruaru",
    "imobiliária recife",
    "imóveis no litoral pernambucano",
    "apartamentos boa viagem",
    "casas em caruaru",
    "imóveis pernambuco",
    "acauã imóveis",
  ],
  authors: [{ name: "Acauã Imóveis" }],
  creator: "Acauã Imóveis",
  publisher: "Acauã Imóveis",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.acauaimoveis.com",
    siteName: "Acauã Imóveis",
    title: "Acauã Imóveis | Recife, Caruaru e Litoral",
    description:
      "Sua imobiliária de confiança em Caruaru, Recife e Litoral. Encontre o imóvel ideal com atendimento exclusivo.",
    images: [
      {
        url: "https://www.acauaimoveis.com/og-image.jpeg", // URL completa e absoluta com o novo domínio
        width: 1200,
        height: 630,
        alt: "Acauã Imóveis - Recife | Caruaru | Litoral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acauã Imóveis | Recife, Caruaru e Litoral",
    description: "Sua imobiliária de confiança em Caruaru, Recife e Litoral.",
    images: ["https://www.acauaimoveis.com/og-image.jpeg"],
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