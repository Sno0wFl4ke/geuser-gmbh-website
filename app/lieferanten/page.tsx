"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { MapPin, Clock, Phone, Mail, Truck, AlertTriangle, CheckCircle, Car } from "lucide-react"

export default function SuppliersPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t("suppliers.hero.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("suppliers.hero.subtitle")}</p>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("suppliers.directions.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("suppliers.directions.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Schritt-für-Schritt Anfahrt
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">
                    1
                  </Badge>
                  <p className="text-sm">{t("suppliers.step1")}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">
                    2
                  </Badge>
                  <p className="text-sm">{t("suppliers.step2")}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">
                    3
                  </Badge>
                  <p className="text-sm">{t("suppliers.step3")}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">
                    4
                  </Badge>
                  <p className="text-sm">{t("suppliers.step4")}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  {t("suppliers.loading.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {t("suppliers.loading.times.title")}
                  </h4>
                  <div className="space-y-1 text-sm">
                    <p>{t("suppliers.loading.times.weekdays")}</p>
                    <p>{t("suppliers.loading.times.saturday")}</p>
                    <p className="text-muted-foreground">{t("suppliers.loading.times.closed")}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{t("suppliers.loading.specs.title")}</h4>
                  <div className="space-y-1 text-sm">
                    <p>{t("suppliers.loading.specs.height")}</p>
                    <p>{t("suppliers.loading.specs.width")}</p>
                    <p>{t("suppliers.loading.specs.capacity")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Requirements */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  {t("suppliers.contact.title")}
                </CardTitle>
                <CardDescription>{t("suppliers.contact.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{t("suppliers.contact.phone")}</p>
                    <p className="text-sm text-muted-foreground">+49 2302 77797</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{t("suppliers.contact.emergency")}</p>
                    <p className="text-sm text-muted-foreground">+49 2302 77797</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{t("suppliers.contact.email")}</p>
                    <p className="text-sm text-muted-foreground">info@geuser-pappen.de</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {t("suppliers.requirements.title")}
                </CardTitle>
                <CardDescription>{t("suppliers.requirements.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t("suppliers.req1")}</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t("suppliers.req2")}</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t("suppliers.req3")}</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t("suppliers.req4")}</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{t("suppliers.req5")}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Parking Info */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5 text-primary" />
                {t("suppliers.parking.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t("suppliers.parking.desc")}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
