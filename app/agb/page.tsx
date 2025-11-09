import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AGBPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-card py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-card-foreground mb-6">
                Allgemeine Geschäftsbedingungen
              </h1>
              <p className="text-xl text-muted-foreground">Gültig für alle Geschäftsbeziehungen mit der Geuser GmbH</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>§ 1 Geltungsbereich</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Diese Allgemeinen Geschäftsbedingungen gelten für alle Lieferungen und Leistungen der Geuser GmbH.
                    Abweichende Bedingungen des Kunden werden nur wirksam, wenn sie von uns ausdrücklich schriftlich
                    anerkannt werden.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>§ 2 Angebote und Vertragsschluss</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Unsere Angebote sind freibleibend und unverbindlich. Der Vertrag kommt durch unsere schriftliche
                    Auftragsbestätigung oder durch Lieferung der Ware zustande. Änderungen und Ergänzungen bedürfen der
                    Schriftform.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>§ 3 Preise und Zahlungsbedingungen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Bei Neukunden: 100% Vorauszahlung</li>
                    <li>Bei Bestandskunden: 30 Tage netto nach Rechnungsdatum</li>
                    <li>Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9% über dem Basiszinssatz berechnet</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>§ 4 Lieferung und Lieferzeit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Lieferzeiten sind unverbindlich, sofern nicht ausdrücklich als verbindlich bezeichnet. Die Lieferung
                    erfolgt ab Werk. Teillieferungen sind zulässig. Bei Annahmeverzug des Kunden sind wir berechtigt,
                    die Ware auf dessen Kosten und Gefahr einzulagern.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>§ 5 Gewährleistung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Wir gewährleisten, dass unsere Produkte frei von Material- und Herstellungsfehlern sind. Die
                    Gewährleistungsfrist beträgt 12 Monate ab Lieferung. Bei berechtigten Beanstandungen leisten wir
                    nach unserer Wahl Nachbesserung oder Ersatzlieferung.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>§ 6 Haftung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Unsere Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Dies gilt nicht für Schäden aus
                    der Verletzung des Lebens, des Körpers oder der Gesundheit sowie für die Verletzung wesentlicher
                    Vertragspflichten.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>§ 7 Gerichtsstand und anwendbares Recht</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Gerichtsstand für alle Streitigkeiten ist Musterstadt. Es gilt deutsches Recht unter Ausschluss des
                    UN-Kaufrechts.
                  </p>
                </CardContent>
              </Card>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">Hinweis</h3>
                <p className="text-sm text-muted-foreground">
                  Dies ist eine vereinfachte Vorlage für Allgemeine Geschäftsbedingungen. Für vollständige und
                  rechtskonforme AGB konsultieren Sie bitte einen Rechtsanwalt, da die Anforderungen je nach
                  Geschäftstätigkeit und Kundenkreis variieren können.
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
