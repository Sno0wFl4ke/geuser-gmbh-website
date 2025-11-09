"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "de" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("de")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Translation content
const translations = {
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.products": "Produkte",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    "nav.request": "Anfrage stellen",
    "nav.suppliers": "Für Lieferanten",

    // Homepage
    "home.hero.title": "Präzise Kartonagen-Stanzungen für Ihr Unternehmen",
    "home.hero.subtitle":
      "Geuser GmbH ist Ihr Spezialist für präzise Kartonagen-Stanzungen und Zuschnitte. Mit modernster Stanztechnik und jahrelanger Erfahrung fertigen wir maßgeschneiderte Verpackungslösungen nach Ihren exakten Vorgaben.",
    "home.hero.cta1": "Jetzt Anfrage stellen",
    "home.hero.cta2": "Produkte entdecken",

    "home.features.title": "Warum Geuser GmbH?",
    "home.features.subtitle":
      "Unsere Präzision und Expertise machen uns zum bevorzugten Partner für Kartonagen-Stanzungen in ganz Deutschland.",

    "home.feature1.title": "Präzise Stanzungen",
    "home.feature1.desc":
      "Millimetergenaue Kartonagen-Zuschnitte nach Ihren exakten Spezifikationen und technischen Zeichnungen.",
    "home.feature2.title": "Höchste Qualität",
    "home.feature2.desc":
      "Modernste Stanztechnik und strenge Qualitätskontrollen für perfekte Schnittqualität und Maßhaltigkeit.",
    "home.feature3.title": "Schnelle Lieferung",
    "home.feature3.desc": "Zuverlässige Lieferzeiten und flexible Logistiklösungen deutschlandweit.",
    "home.feature4.title": "Persönlicher Service",
    "home.feature4.desc": "Kompetente Beratung und persönliche Betreuung von der Planung bis zur Lieferung.",

    "home.products.title": "Unsere Stanz- und Schneideleistungen",
    "home.products.subtitle":
      "Von einfachen Zuschnitten bis zu komplexen Stanzformen – wir schneiden und stanzen Kartonagen präzise nach Ihren Anforderungen.",
    "home.products.cta": "Alle Produkte ansehen",

    "home.product1.title": "Wellpappe-Stanzungen",
    "home.product1.desc":
      "Präzise Stanzungen und Zuschnitte von Wellpappe in verschiedenen Stärken. Komplexe Formen und Konturen nach Ihren Vorgaben.",
    "home.product2.title": "Individuelle Stanzformen",
    "home.product2.desc":
      "Maßgeschneiderte Stanzwerkzeuge für Ihre spezifischen Anforderungen. Von der Entwicklung bis zur Serienfertigung.",
    "home.product3.title": "Industrie-Stanzungen",
    "home.product3.desc":
      "Schwerlast-Kartonagen mit präzisen Stanzungen für industrielle Anwendungen. Höchste Stabilität durch perfekte Schnittqualität.",

    "home.cta.title": "Bereit für präzise Kartonagen-Stanzungen?",
    "home.cta.subtitle":
      "Kontaktieren Sie uns noch heute für ein unverbindliches Angebot. Unser Expertenteam berät Sie gerne zu Ihren Stanz- und Schneideanforderungen.",
    "home.cta.button1": "Kostenlose Beratung",
    "home.cta.button2": "Jetzt anrufen",

    // Footer
    "footer.description":
      "Ihr zuverlässiger Partner für hochwertige Kartonagen und Verpackungslösungen. Qualität und Service seit Jahren.",
    "footer.rights": "© 2025 Geuser GmbH. Alle Rechte vorbehalten.",
    "footer.nav.title": "Navigation",
    "footer.legal.title": "Rechtliches",
    "footer.legal.imprint": "Impressum",
    "footer.legal.privacy": "Datenschutz",
    "footer.legal.terms": "AGB",

    // Products Page
    "products.hero.title": "Unsere Stanz- und Schneideleistungen",
    "products.hero.subtitle":
      "Präzise Kartonagen-Stanzungen und Zuschnitte für alle Branchen. Von der Einzelanfertigung bis zur Großserie – wir bieten maßgeschneiderte Lösungen für Ihre Verpackungsanforderungen.",

    "products.category1.title": "Wellpappe-Verarbeitung",
    "products.category1.desc":
      "Spezialisiert auf die präzise Bearbeitung von Wellpappe in allen gängigen Stärken und Qualitäten.",

    "products.category2.title": "Individuelle Stanzformen",
    "products.category2.desc":
      "Entwicklung und Fertigung maßgeschneiderte Stanzwerkzeuge für Ihre spezifischen Anforderungen.",

    "products.category3.title": "Industrie-Lösungen",
    "products.category3.desc":
      "Robuste Verpackungslösungen für industrielle Anwendungen mit höchsten Qualitätsansprüchen.",

    "products.item1.title": "Wellpappe-Zuschnitte",
    "products.item1.desc": "Präzise Zuschnitte in verschiedenen Wellpappe-Qualitäten von 3mm bis 15mm Stärke.",
    "products.item1.features": "Verschiedene Wellpappe-Stärken • Präzise Maßhaltigkeit • Schnelle Lieferzeiten",

    "products.item2.title": "Komplexe Stanzformen",
    "products.item2.desc": "Individuelle Stanzformen für komplexe Geometrien und spezielle Verpackungsanforderungen.",
    "products.item2.features": "Maßgeschneiderte Werkzeuge • Komplexe Geometrien • Prototyping bis Serie",

    "products.item3.title": "Schwerlast-Verpackungen",
    "products.item3.desc": "Stabile Kartonagen für schwere Produkte mit optimaler Schutzfunktion.",
    "products.item3.features": "Hohe Tragkraft • Stoßfeste Konstruktion • Industrielle Qualität",

    "products.item4.title": "Kleinserien & Prototypen",
    "products.item4.desc": "Flexible Fertigung von Kleinserien und Prototypen für Produktentwicklung.",
    "products.item4.features": "Kleine Stückzahlen • Schnelle Umsetzung • Kosteneffizient",

    "products.item5.title": "Spezial-Zuschnitte",
    "products.item5.desc": "Außergewöhnliche Formen und Größen nach Ihren technischen Zeichnungen.",
    "products.item5.features": "Individuelle Formen • Technische Präzision • Sonderanfertigungen",

    "products.item6.title": "Großserien-Produktion",
    "products.item6.desc": "Effiziente Fertigung großer Stückzahlen mit konstanter Qualität.",
    "products.item6.features": "Hohe Stückzahlen • Konstante Qualität • Optimierte Logistik",

    "products.cta.title": "Individuelle Beratung gewünscht?",
    "products.cta.subtitle": "Unsere Experten beraten Sie gerne zu Ihren spezifischen Anforderungen.",
    "products.cta.button": "Jetzt Beratung anfragen",

    // About Us Page
    "about.hero.title": "Über Geuser GmbH",
    "about.hero.subtitle":
      "Seit über 100 Jahren Ihr zuverlässiger Partner für präzise Kartonagen-Stanzungen und maßgeschneiderte Verpackungslösungen.",

    "about.story.title": "Unsere Geschichte",
    "about.story.content":
      "Gegründet 1912 als Familienbetrieb, hat sich Geuser GmbH zu einem führenden Spezialisten für Kartonagen-Stanzungen entwickelt. Was als kleine Werkstatt begann, ist heute ein modernes Unternehmen mit hochqualifizierten Mitarbeitern und modernster Stanztechnik.",

    "about.mission.title": "Unsere Mission",
    "about.mission.content":
      "Wir schaffen präzise Verpackungslösungen, die Ihre Produkte optimal schützen und Ihre Marke stärken. Durch kontinuliche Innovation und höchste Qualitätsstandards sind wir der bevorzugte Partner für Unternehmen in ganz Deutschland.",

    "about.values.title": "Unsere Werte",
    "about.value1.title": "Präzision",
    "about.value1.desc": "Millimetergenaue Fertigung nach höchsten Qualitätsstandards.",
    "about.value2.title": "Innovation",
    "about.value2.desc": "Modernste Technologie für optimale Lösungen.",
    "about.value3.title": "Zuverlässigkeit",
    "about.value3.desc": "Termintreue und konstante Qualität seit über 25 Jahren.",
    "about.value4.title": "Partnerschaft",
    "about.value4.desc": "Langfristige Kundenbeziehungen durch persönlichen Service.",

    "about.team.title": "Unser Team",
    "about.team.subtitle": "Erfahrene Fachkräfte mit Leidenschaft für Präzision",
    "about.team.member1.name": "Axel Langenbrink",
    "about.team.member1.role": "Geschäftsführer",
    "about.team.member1.desc":
      "Über 30 Jahre Erfahrung in der Kartonagen-Industrie. Experte für Stanztechnik und Qualitätsmanagement.",
    "about.team.member2.name": "Tanja Vorberg",
    "about.team.member2.role": "Produktionsleitung",
    "about.team.member2.desc":
      "Verantwortlich für die Produktionsplanung und Qualitätskontrolle. 10 Jahre Erfahrung im Unternehmen.",
    "about.team.member3.name": "Yvonne Aßhauer",
    "about.team.member3.role": "Prokuristin",
    "about.team.member3.desc":
      "Spezialist für Stanzformen-Entwicklung und Maschinentechnik. Ingenieur mit 20 Jahren Branchenerfahrung.",

    "about.stats.title": "Zahlen & Fakten",
    "about.stat1.number": "100+",
    "about.stat1.label": "Jahre Erfahrung",
    "about.stat2.number": "5000+",
    "about.stat2.label": "Zufriedene Kunden",
    "about.stat3.number": "5000+",
    "about.stat3.label": "Projekte realisiert",
    "about.stat4.number": "95%",
    "about.stat4.label": "Kundenzufriedenheit",

    "about.cta.title": "Lernen Sie uns kennen",
    "about.cta.subtitle": "Besuchen Sie uns oder vereinbaren Sie einen Termin für eine persönliche Beratung.",
    "about.cta.button": "Kontakt aufnehmen",

    // Supplier Page
    "suppliers.hero.title": "Informationen für Lieferanten & Spediteure",
    "suppliers.hero.subtitle":
      "Wichtige Hinweise für die Anlieferung an unsere Fertigung in der Wasserbank 5, 58456 Witten, Deutschland.",

    "suppliers.directions.title": "Anfahrt zur Laderampe",
    "suppliers.directions.subtitle": "Folgen Sie diesen Anweisungen für eine reibungslose Anlieferung:",
    "suppliers.step1": "Fahren Sie über die B123 zur Ausfahrt 'Industriegebiet Ost'",
    "suppliers.step2": "Folgen Sie der Industriestraße für ca. 800m",
    "suppliers.step3": "Biegen Sie rechts in die Zufahrt Geuser GmbH ein (große Beschilderung)",
    "suppliers.step4": "Fahren Sie direkt zur Laderampe auf der Rückseite des Gebäudes",

    "suppliers.loading.title": "Laderampe & Anlieferzeiten",
    "suppliers.loading.times.title": "Anlieferzeiten",
    "suppliers.loading.times.weekdays": "Montag - Freitag: 07:00 - 16:00 Uhr",
    "suppliers.loading.times.saturday": "Samstag: 08:00 - 12:00 Uhr",
    "suppliers.loading.times.closed": "Sonntag: Geschlossen",
    "suppliers.loading.specs.title": "Technische Daten",
    "suppliers.loading.specs.height": "Ladehöhe: 1,20m",
    "suppliers.loading.specs.width": "Torbreite: 3,50m",
    "suppliers.loading.specs.capacity": "Max. Fahrzeuggewicht: 40t",

    "suppliers.contact.title": "Kontakt Warenannahme",
    "suppliers.contact.subtitle": "Bei Fragen oder Problemen während der Anlieferung:",
    "suppliers.contact.phone": "Telefon Warenannahme",
    "suppliers.contact.emergency": "Notfall außerhalb der Geschäftszeiten",
    "suppliers.contact.email": "E-Mail für Voranmeldungen",

    "suppliers.requirements.title": "Anlieferungsbestimmungen",
    "suppliers.requirements.subtitle": "Bitte beachten Sie folgende Punkte:",
    "suppliers.req1": "Voranmeldung bei größeren Lieferungen (>5 Paletten) erforderlich",
    "suppliers.req2": "Lieferschein und Begleitpapiere bereithalten",
    "suppliers.req3": "Sicherheitsschuhe und Warnweste auf dem Betriebsgelände Pflicht",
    "suppliers.req4": "Rauchverbot auf dem gesamten Firmengelände",
    "suppliers.req5": "Geschwindigkeitsbegrenzung 10 km/h auf dem Betriebsgelände",

    "suppliers.parking.title": "Parkmöglichkeiten",
    "suppliers.parking.desc":
      "LKW-Parkplätze befinden sich direkt vor der Laderampe. Bei Wartezeiten nutzen Sie bitte den ausgewiesenen Wartebereich.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.request": "Request Quote",
    "nav.suppliers": "For Suppliers",

    // Homepage
    "home.hero.title": "Precision Cardboard Punching for Your Business",
    "home.hero.subtitle":
      "Geuser GmbH is your specialist for precision cardboard punching and cutting. With state-of-the-art punching technology and years of experience, we manufacture custom packaging solutions according to your exact specifications.",
    "home.hero.cta1": "Request Quote Now",
    "home.hero.cta2": "Discover Products",

    "home.features.title": "Why Geuser GmbH?",
    "home.features.subtitle":
      "Our precision and expertise make us the preferred partner for cardboard punching throughout Germany.",

    "home.feature1.title": "Precision Punching",
    "home.feature1.desc":
      "Millimeter-precise cardboard cuts according to your exact specifications and technical drawings.",
    "home.feature2.title": "Highest Quality",
    "home.feature2.desc":
      "State-of-the-art punching technology and strict quality controls for perfect cutting quality and dimensional accuracy.",
    "home.feature3.title": "Fast Delivery",
    "home.feature3.desc": "Reliable delivery times and flexible logistics solutions throughout Germany.",
    "home.feature4.title": "Personal Service",
    "home.feature4.desc": "Expert consultation and personal support from planning to delivery.",

    "home.products.title": "Our Punching and Cutting Services",
    "home.products.subtitle":
      "From simple cuts to complex punching forms – we cut and punch cardboard precisely according to your requirements.",
    "home.products.cta": "View All Products",

    "home.product1.title": "Corrugated Cardboard Punching",
    "home.product1.desc":
      "Precise punching and cutting of corrugated cardboard in various thicknesses. Complex shapes and contours according to your specifications.",
    "home.product1.features": "Various cardboard thicknesses • Precise dimensional accuracy • Fast delivery times",

    "home.product2.title": "Individual Punching Forms",
    "home.product2.desc": "Development and manufacturing of customized punching tools for your specific requirements.",
    "home.product2.features": "Customized tools • Complex geometries • Prototyping to series",

    "home.product3.title": "Industrial Punching",
    "home.product3.desc":
      "Heavy-duty cardboard with precise punching for industrial applications. Maximum stability through perfect cutting quality.",

    "home.cta.title": "Ready for Precision Cardboard Punching?",
    "home.cta.subtitle":
      "Contact us today for a non-binding quote. Our expert team will be happy to advise you on your punching and cutting requirements.",
    "home.cta.button1": "Free Consultation",
    "home.cta.button2": "Call Now",

    // Footer
    "footer.description":
      "Your reliable partner for high-quality cardboard and packaging solutions. Quality and service for years.",
    "footer.rights": "© 2025 Geuser GmbH. All rights reserved.",
    "footer.nav.title": "Navigation",
    "footer.legal.title": "Legal",
    "footer.legal.imprint": "Imprint",
    "footer.legal.privacy": "Privacy Policy",
    "footer.legal.terms": "Terms & Conditions",

    // Products Page
    "products.hero.title": "Our Punching and Cutting Services",
    "products.hero.subtitle":
      "Precise cardboard punching and cutting for all industries. From individual production to large series – we offer customized solutions for your packaging requirements.",

    "products.category1.title": "Corrugated Cardboard Processing",
    "products.category1.desc":
      "Specialized in precise processing of corrugated cardboard in all common thicknesses and qualities.",

    "products.category2.title": "Individual Punching Forms",
    "products.category2.desc":
      "Development and manufacturing of customized punching tools for your specific requirements.",

    "products.category3.title": "Industrial Solutions",
    "products.category3.desc": "Robust packaging solutions for industrial applications with highest quality standards.",

    "products.item1.title": "Corrugated Cardboard Cuts",
    "products.item1.desc": "Precise cuts in various corrugated cardboard qualities from 3mm to 15mm thickness.",
    "products.item1.features": "Various cardboard thicknesses • Precise dimensional accuracy • Fast delivery times",

    "products.item2.title": "Complex Punching Forms",
    "products.item2.desc": "Individual punching forms for complex geometries and special packaging requirements.",
    "products.item2.features": "Customized tools • Complex geometries • Prototyping to series",

    "products.item3.title": "Heavy-Duty Packaging",
    "products.item3.desc": "Stable cardboard for heavy products with optimal protective function.",
    "products.item3.features": "High load capacity • Impact-resistant construction • Industrial quality",

    "products.item4.title": "Small Series & Prototypes",
    "products.item4.desc": "Flexible production of small series and prototypes for product development.",
    "products.item4.features": "Small quantities • Fast implementation • Cost-effective",

    "products.item5.title": "Special Cuts",
    "products.item5.desc": "Extraordinary shapes and sizes according to your technical drawings.",
    "products.item5.features": "Individual shapes • Technical precision • Custom manufacturing",

    "products.item6.title": "Large Series Production",
    "products.item6.desc": "Efficient production of large quantities with consistent quality.",
    "products.item6.features": "High quantities • Consistent quality • Optimized logistics",

    "products.cta.title": "Need Individual Consultation?",
    "products.cta.subtitle": "Our experts will be happy to advise you on your specific requirements.",
    "products.cta.button": "Request Consultation Now",

    // About Us Page
    "about.hero.title": "About Geuser GmbH",
    "about.hero.subtitle":
      "For over 100 years, your reliable partner for precise cardboard punching and customized packaging solutions.",

    "about.story.title": "Our Story",
    "about.story.content":
      "Founded in 1912 as a family business, Geuser GmbH has developed into a leading specialist for cardboard punching. What began as a small workshop is today a modern company with highly qualified employees and state-of-the-art punching technology.",

    "about.mission.title": "Our Mission",
    "about.mission.content":
      "We create precise packaging solutions that optimally protect your products and strengthen your brand. Through continuous innovation and highest quality standards, we are the preferred partner for companies throughout Germany.",

    "about.values.title": "Our Values",
    "about.value1.title": "Precision",
    "about.value1.desc": "Millimeter-precise manufacturing according to highest quality standards.",
    "about.value2.title": "Innovation",
    "about.value2.desc": "State-of-the-art technology for optimal solutions.",
    "about.value3.title": "Reliability",
    "about.value3.desc": "On-time delivery and consistent quality for over 25 years.",
    "about.value4.title": "Partnership",
    "about.value4.desc": "Long-term customer relationships through personal service.",

    "about.team.title": "Our Team",
    "about.team.subtitle": "Experienced professionals with passion for precision",
    "about.team.member1.name": "Axel Langenbrink",
    "about.team.member1.role": "CEO & Founder",
    "about.team.member1.desc":
      "Over 30 years of experience in the cardboard industry. Expert in punching technology and quality management.",
    "about.team.member2.name": "Tanja Vorberg",
    "about.team.member2.role": "Production Manager",
    "about.team.member2.desc":
      "Responsible for production planning and quality control. 15 years of experience in the company.",
    "about.team.member3.name": "Yvonne Aßhauer",
    "about.team.member3.role": "Procurator",
    "about.team.member3.desc":
      "Specialist in punching form development and machine technology. Engineer with 20 years of industry experience.",

    "about.stats.title": "Facts & Figures",
    "about.stat1.number": "100+",
    "about.stat1.label": "Years of Experience",
    "about.stat2.number": "5000+",
    "about.stat2.label": "Satisfied Customers",
    "about.stat3.number": "5000+",
    "about.stat3.label": "Projects Completed",
    "about.stat4.number": "95%",
    "about.stat4.label": "Customer Satisfaction",

    "about.cta.title": "Get to Know Us",
    "about.cta.subtitle": "Visit us or schedule an appointment for personal consultation.",
    "about.cta.button": "Get in Touch",

    // Supplier Page
    "suppliers.hero.title": "Information for Suppliers & Carriers",
    "suppliers.hero.subtitle":
      "Important information for deliveries to our facility at Wasserbank 5, 58456 Witten, Germany.",

    "suppliers.directions.title": "Directions to Loading Bay",
    "suppliers.directions.subtitle": "Follow these instructions for smooth delivery:",
    "suppliers.step1": "Take highway B123 to exit 'Industriegebiet Ost'",
    "suppliers.step2": "Follow Industriestraße for approximately 800m",
    "suppliers.step3": "Turn right into Geuser GmbH entrance (large signage)",
    "suppliers.step4": "Drive directly to the loading bay at the back of the building",

    "suppliers.loading.title": "Loading Bay & Delivery Times",
    "suppliers.loading.times.title": "Delivery Times",
    "suppliers.loading.times.weekdays": "Monday - Friday: 07:00 - 16:00",
    "suppliers.loading.times.saturday": "Saturday: 08:00 - 12:00",
    "suppliers.loading.times.closed": "Sunday: Closed",
    "suppliers.loading.specs.title": "Technical Specifications",
    "suppliers.loading.specs.height": "Loading height: 1.20m",
    "suppliers.loading.specs.width": "Gate width: 3.50m",
    "suppliers.loading.specs.capacity": "Max. vehicle weight: 40t",

    "suppliers.contact.title": "Goods Receipt Contact",
    "suppliers.contact.subtitle": "For questions or problems during delivery:",
    "suppliers.contact.phone": "Goods Receipt Phone",
    "suppliers.contact.emergency": "Emergency outside business hours",
    "suppliers.contact.email": "Email for pre-notifications",

    "suppliers.requirements.title": "Delivery Requirements",
    "suppliers.requirements.subtitle": "Please observe the following points:",
    "suppliers.req1": "Pre-notification required for larger deliveries (>5 pallets)",
    "suppliers.req2": "Keep delivery note and accompanying documents ready",
    "suppliers.req3": "Safety shoes and high-visibility vest mandatory on company premises",
    "suppliers.req4": "Smoking prohibited on entire company premises",
    "suppliers.req5": "Speed limit 10 km/h on company premises",

    "suppliers.parking.title": "Parking Facilities",
    "suppliers.parking.desc":
      "Truck parking spaces are located directly in front of the loading bay. During waiting times, please use the designated waiting area.",
  },
}
