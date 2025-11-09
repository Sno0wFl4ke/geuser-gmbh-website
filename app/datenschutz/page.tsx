import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-card py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-card-foreground mb-6">Datenschutzerklärung</h1>
              <p className="text-xl text-muted-foreground">
                Informationen zur Verarbeitung Ihrer personenbezogenen Daten
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Verantwortlicher</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
                    <br />
                    <br />
                    Geuser GmbH
                    <br />
                    Wasserbank 5
                    <br />
                    58456 Witten
                    <br />
                    Deutschland
                    <br />
                    <br />
                    Telefon: +49 2302 77797
                    <br />
                    E-Mail: info@geuser-pappen.de
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Erhebung und Speicherung personenbezogener Daten</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese
                    Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete
                    Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches.
                  </p>
                  <p className="text-muted-foreground">
                    Bei der Nutzung unseres Kontaktformulars erheben wir folgende Daten:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Vor- und Nachname</li>
                    <li>E-Mail-Adresse</li>
                    <li>Telefonnummer (optional)</li>
                    <li>Unternehmen (optional)</li>
                    <li>Nachrichteninhalt</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Verwendung der Daten</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Die erhobenen Daten verwenden wir ausschließlich zur Bearbeitung Ihrer Anfragen und zur
                    Bereitstellung unserer Dienstleistungen. Eine Weitergabe an Dritte erfolgt nicht, es sei denn, dies
                    ist zur Vertragserfüllung erforderlich oder gesetzlich vorgeschrieben.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Ihre Rechte</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Sie haben das Recht auf:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Auskunft über Ihre bei uns gespeicherten Daten</li>
                    <li>Berichtigung unrichtiger Daten</li>
                    <li>Löschung Ihrer Daten</li>
                    <li>Einschränkung der Datenverarbeitung</li>
                    <li>Datenübertragbarkeit</li>
                    <li>Widerspruch gegen die Verarbeitung</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Kontakt</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Bei Fragen zum Datenschutz wenden Sie sich bitte an:
                    <br />
                    E-Mail: info@geuser-pappen.de
                    <br />
                    Telefon: +49 2302 77797
                  </p>
                </CardContent>
              </Card>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">Hinweis</h3>
                <p className="text-sm text-muted-foreground">
                  Dies ist eine vereinfachte Vorlage für eine Datenschutzerklärung. Für eine vollständige und
                  rechtskonforme Datenschutzerklärung konsultieren Sie bitte einen Rechtsanwalt oder
                  Datenschutzexperten, da die Anforderungen je nach Art der Datenverarbeitung variieren können.
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
