"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Geuser GmbH</h3>
            <p className="text-muted-foreground mb-4">{t("footer.description")}</p>
            <p className="text-sm text-muted-foreground">{t("footer.rights")}</p>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">{t("footer.nav.title")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/produkte" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  {t("nav.products")}
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">{t("footer.legal.title")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  {t("footer.legal.imprint")}
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-muted-foreground hover:text-card-foreground transition-colors"
                >
                  {t("footer.legal.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  {t("footer.legal.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
