"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-background border-t border-border shadow-lg animate-in slide-in-from-bottom duration-500">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-8">
            <p className="text-sm text-foreground">
              Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa{" "}
              <Link
                href="/politica-de-cookies"
                className="text-accent underline underline-offset-2 hover:text-accent/80"
              >
                Política de Cookies
              </Link>{" "}
              e{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-accent underline underline-offset-2 hover:text-accent/80"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="text-xs"
            >
              Recusar
            </Button>
            <Button size="sm" onClick={acceptCookies} className="text-xs">
              Aceitar Cookies
            </Button>
          </div>
          <button
            onClick={declineCookies}
            className="absolute top-4 right-4 md:hidden text-muted-foreground hover:text-foreground"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
