import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-card py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-card-foreground mb-6">Impressum</h1>
              <p className="text-xl text-muted-foreground">Angaben gemäß § 5 TMG</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle>Unternehmensangaben</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Firmenname</h3>
                  <p className="text-muted-foreground">
                    Geuser GmbH
                    <br />
                    Industriestraße 123
                    <br />
                    12345 Musterstadt
                    <br />
                    Deutschland
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Kontakt</h3>
                  <p className="text-muted-foreground">
                    Telefon: +49 (0) 123 456 789
                    <br />
                    E-Mail: info@geuser-pappen.de
                    <br />
                    Website: www.geuser-pappen.de
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Geschäftsführung</h3>
                  <p className="text-muted-foreground">[Name des Geschäftsführers]</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Registereintrag</h3>
                  <p className="text-muted-foreground">
                    Handelsregister: [Registergericht]
                    <br />
                    Registernummer: HRB [Nummer]
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Umsatzsteuer-ID</h3>
                  <p className="text-muted-foreground">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                    <br />
                    DE [Umsatzsteuer-ID]
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                  </h3>
                  <p className="text-muted-foreground">
                    [Name]
                    <br />
                    Industriestraße 123
                    <br />
                    12345 Musterstadt
                  </p>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Hinweis</h3>
                  <p className="text-sm text-muted-foreground">
                    Dies ist eine Vorlage für das Impressum. Die Angaben in eckigen Klammern [ ] müssen durch die
                    tatsächlichen Daten des Unternehmens ersetzt werden. Bitte konsultieren Sie einen Rechtsanwalt für
                    die vollständige und rechtskonforme Gestaltung Ihres Impressums.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
