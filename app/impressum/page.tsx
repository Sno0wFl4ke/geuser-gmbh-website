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
              <p className="text-xl text-muted-foreground">Angaben gemäß § 5 DDG</p>
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
                  <h3 className=" font-semibold text-foreground mb-3">Firmenname</h3>
                  <p className="text-muted-foreground">
                    Geuser GmbH
                    <br />
                    Gewerbegebiet Westerweide
                    <br/>
                    Wasserbank 5
                    <br />
                    58456 Witten
                    <br />
                    Deutschland
                  </p>
                </div>

                <div>
                  <h3 className=" font-semibold text-foreground mb-3">Kontakt</h3>
                  <p className="text-muted-foreground">
                    Telefon: 02302 77797
                    <br />
                    E-Mail: info@geuser-pappen.de
                    <br />
                    Website: www.geuser-pappen.de
                  </p>
                </div>

                <div>
                  <h3 className=" font-semibold text-foreground mb-3">Geschäftsführung</h3>
                  <p className="text-muted-foreground">Axel Langenbrink</p>
                </div>

                <div>
                  <h3 className=" font-semibold text-foreground mb-3">Registereintrag</h3>
                  <p className="text-muted-foreground">
                    Registergericht: Amtsgericht Witten
                    <br />
                    Registernummer: HRB 742
                  </p>
                </div>

                <div>
                  <h3 className=" font-semibold text-foreground mb-3">Umsatzsteuer-ID</h3>
                  <p className="text-muted-foreground">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                    <br />
                    DE 811 249 568
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
