"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Package, Scissors, Settings, Truck, Zap, Factory } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function ProductsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-card to-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-card-foreground mb-6">{t("products.hero.title")}</h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t("products.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{t("products.category1.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{t("products.category1.desc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{t("products.category2.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{t("products.category2.desc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Factory className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{t("products.category3.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{t("products.category3.desc")}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Scissors className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{t("products.item1.title")}</CardTitle>
                  </div>
                  <img
                    src="/placeholder.png"
                    alt={t("products.item1.title")}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{t("products.item1.desc")}</CardDescription>
                  <div className="space-y-2">
                    {t("products.item1.features")
                      .split(" • ")
                      .map((feature, index) => (
                        <Badge key={index} variant="secondary" className="mr-2">
                          {feature}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Settings className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{t("products.item2.title")}</CardTitle>
                  </div>
                  <img
                    src="/placeholder.png"
                    alt={t("products.item2.title")}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{t("products.item2.desc")}</CardDescription>
                  <div className="space-y-2">
                    {t("products.item2.features")
                      .split(" • ")
                      .map((feature, index) => (
                        <Badge key={index} variant="secondary" className="mr-2">
                          {feature}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{t("products.item3.title")}</CardTitle>
                  </div>
                  <img
                    src="/placeholder.png"
                    alt={t("products.item3.title")}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{t("products.item3.desc")}</CardDescription>
                  <div className="space-y-2">
                    {t("products.item3.features")
                      .split(" • ")
                      .map((feature, index) => (
                        <Badge key={index} variant="secondary" className="mr-2">
                          {feature}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{t("products.item4.title")}</CardTitle>
                  </div>
                  <img
                    src="/placeholder.png"
                    alt={t("products.item4.title")}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{t("products.item4.desc")}</CardDescription>
                  <div className="space-y-2">
                    {t("products.item4.features")
                      .split(" • ")
                      .map((feature, index) => (
                        <Badge key={index} variant="secondary" className="mr-2">
                          {feature}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Scissors className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{t("products.item5.title")}</CardTitle>
                  </div>
                  <img
                    src="/placeholder.png"
                    alt={t("products.item5.title")}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{t("products.item5.desc")}</CardDescription>
                  <div className="space-y-2">
                    {t("products.item5.features")
                      .split(" • ")
                      .map((feature, index) => (
                        <Badge key={index} variant="secondary" className="mr-2">
                          {feature}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{t("products.item6.title")}</CardTitle>
                  </div>
                  <img
                    src="/placeholder.png"
                    alt={t("products.item6.title")}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{t("products.item6.desc")}</CardDescription>
                  <div className="space-y-2">
                    {t("products.item6.features")
                      .split(" • ")
                      .map((feature, index) => (
                        <Badge key={index} variant="secondary" className="mr-2">
                          {feature}
                        </Badge>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">{t("products.cta.title")}</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">{t("products.cta.subtitle")}</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/kontakt">{t("products.cta.button")}</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
