"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Package, Shield, Truck, Users } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image";

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-card to-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-card-foreground mb-6">{t("home.hero.title")}</h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{t("home.hero.subtitle")}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/kontakt">{t("home.hero.cta1")}</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/produkte">{t("home.hero.cta2")}</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.png"
                  alt="Präzise Kartonagen-Stanzung bei Geuser GmbH"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t("home.features.title")}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("home.features.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{t("home.feature1.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t("home.feature1.desc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{t("home.feature2.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t("home.feature2.desc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{t("home.feature3.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t("home.feature3.desc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{t("home.feature4.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t("home.feature4.desc")}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Products Preview Section */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-4">{t("home.products.title")}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("home.products.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.png"
                    alt="Wellpappe-Stanzungen"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardTitle>{t("home.product1.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t("home.product1.desc")}</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.png"
                    alt="Individuelle Stanzformen"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardTitle>{t("home.product2.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t("home.product2.desc")}</CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.png"
                    alt="Industrie-Stanzungen"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardTitle>{t("home.product3.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{t("home.product3.desc")}</CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link href="/produkte">{t("home.products.cta")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">{t("home.cta.title")}</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">{t("home.cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontakt">{t("home.cta.button1")}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="tel:+49123456789">{t("home.cta.button2")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
