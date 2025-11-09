"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Target, Lightbulb, Shield, Handshake, Users, Award, TrendingUp, Heart } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-card to-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-card-foreground mb-6">{t("about.hero.title")}</h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t("about.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Story & Mission Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">{t("about.story.title")}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t("about.story.content")}</p>

                <h3 className="text-2xl font-bold text-foreground mb-4">{t("about.mission.title")}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{t("about.mission.content")}</p>
              </div>
              <div className="relative">
                <img src="/placeholder.png" alt="Geuser GmbH Facility" className="rounded-lg shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-4">{t("about.values.title")}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{t("about.value1.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{t("about.value1.desc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{t("about.value2.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{t("about.value2.desc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{t("about.value3.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{t("about.value3.desc")}</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Handshake className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{t("about.value4.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{t("about.value4.desc")}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-card-foreground mb-4">{t("about.stats.title")}</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-card-foreground mb-2">{t("about.stat1.number")}</div>
                <div className="text-muted-foreground">{t("about.stat1.label")}</div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-card-foreground mb-2">{t("about.stat2.number")}</div>
                <div className="text-muted-foreground">{t("about.stat2.label")}</div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-card-foreground mb-2">{t("about.stat3.number")}</div>
                <div className="text-muted-foreground">{t("about.stat3.label")}</div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-card-foreground mb-2">{t("about.stat4.number")}</div>
                <div className="text-muted-foreground">{t("about.stat4.label")}</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">{t("about.cta.title")}</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">{t("about.cta.subtitle")}</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/kontakt">{t("about.cta.button")}</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
