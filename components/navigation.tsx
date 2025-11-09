"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary italic font-bold">
              Geuser GmbH
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                {t("nav.home")}
              </Link>
              <Link href="/produkte" className="text-foreground hover:text-primary transition-colors">
                {t("nav.products")}
              </Link>
              <Link href="/ueber-uns" className="text-foreground hover:text-primary transition-colors">
                {t("nav.about")}
              </Link>
              <Link href="/kontakt" className="text-foreground hover:text-primary transition-colors">
                {t("nav.contact")}
              </Link>
              <Link href="/lieferanten" className="text-foreground hover:text-primary transition-colors">
                {t("nav.suppliers")}
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Button asChild>
              <Link href="/kontakt">{t("nav.request")}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/produkte"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.products")}
              </Link>
              <Link
                href="/ueber-uns"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/kontakt"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.contact")}
              </Link>
              <Link
                href="/lieferanten"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.suppliers")}
              </Link>
              <div className="px-3 py-2 flex flex-col gap-2">
                <LanguageSwitcher />
                <Button asChild className="w-full">
                  <Link href="/kontakt" onClick={() => setIsOpen(false)}>
                    {t("nav.request")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
