import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function KontaktPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-card py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-card-foreground mb-6">Kontakt</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Haben Sie Fragen zu unseren Produkten oder benötigen Sie ein individuelles Angebot? Unser Expertenteam
                steht Ihnen gerne zur Verfügung.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Anfrage senden</CardTitle>
                    <CardDescription>
                      Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen zurück.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="vorname">Vorname *</Label>
                          <Input id="vorname" name="vorname" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="nachname">Nachname *</Label>
                          <Input id="nachname" name="nachname" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="unternehmen">Unternehmen</Label>
                        <Input id="unternehmen" name="unternehmen" />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">E-Mail *</Label>
                          <Input id="email" name="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefon">Telefon</Label>
                          <Input id="telefon" name="telefon" type="tel" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="betreff">Betreff *</Label>
                        <Input id="betreff" name="betreff" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="nachricht">Nachricht *</Label>
                        <Textarea
                          id="nachricht"
                          name="nachricht"
                          rows={6}
                          placeholder="Beschreiben Sie Ihre Anforderungen oder stellen Sie Ihre Frage..."
                          required
                        />
                      </div>

                      <div className="flex items-start space-x-2">
                        <input type="checkbox" id="datenschutz" name="datenschutz" className="mt-1" required />
                        <Label htmlFor="datenschutz" className="text-sm leading-relaxed">
                          Ich habe die{" "}
                          <a href="/datenschutz" className="text-primary hover:underline">
                            Datenschutzerklärung
                          </a>{" "}
                          gelesen und stimme der Verarbeitung meiner Daten zu. *
                        </Label>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Anfrage senden
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Kontaktinformationen</CardTitle>
                    <CardDescription>So erreichen Sie uns direkt</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Adresse</h4>
                        <p className="text-muted-foreground">
                          Geuser GmbH
                          <br />
                          Wasserbank 5
                          <br />
                          58456 Witten
                          <br />
                          Deutschland
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                        <p className="text-muted-foreground">
                          <a href="tel:+490230277797" className="hover:text-primary transition-colors">
                            +49 2302 77797
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">E-Mail</h4>
                        <p className="text-muted-foreground">
                          <a href="mailto:info@geuser-pappen.de" className="hover:text-primary transition-colors">
                            info@geuser-pappen.de
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Öffnungszeiten</h4>
                        <p className="text-muted-foreground">
                          Montag - Freitag: 7:00 - 16:00 Uhr
                          <br />
                          Samstag: Geschlossen
                          <br />
                          Sonntag: Geschlossen
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Schnelle Hilfe</CardTitle>
                    <CardDescription>Für dringende Anfragen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Benötigen Sie schnelle Hilfe oder haben eine dringende Anfrage? Rufen Sie uns direkt an oder
                        senden Sie eine E-Mail.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild className="flex-1">
                          <a href="tel:+490230277797">Jetzt anrufen</a>
                        </Button>
                        <Button variant="outline" asChild className="flex-1 bg-transparent">
                          <a href="mailto:info@geuser-pappen.de">E-Mail senden</a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-card-foreground mb-4">Unser Standort</h2>
              <p className="text-muted-foreground">
                Besuchen Sie uns in unserem modernen Produktionsstandort in Witten.
              </p>
            </div>
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interaktive Karte wird hier angezeigt
                  <br />
                  <span className="text-sm">(Google Maps Integration)</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
