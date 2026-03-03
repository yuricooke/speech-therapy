import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Base URL - atualize com seu domínio real quando disponível
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.speechtherapyhamburg.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default:
      "Tatiana Cooke Munkes - Multilingual Speech Language Therapist | Hamburg",
    template: "%s | Tatiana Cooke Munkes - Speech Therapy Hamburg",
  },
  description:
    "Professional multilingual speech language therapy services in Hamburg, Germany. Specialized in bilingual and multilingual therapy, assessment, and counseling in German, Portuguese, and English. 30+ years of experience helping families with speech and language development.",
  keywords: [
    // English keywords - Primary
    "speech therapy Hamburg",
    "multilingual speech therapy Hamburg",
    "bilingual speech therapist Hamburg",
    "speech language therapy Germany",
    "Hamburg speech therapist",
    "multilingual language therapy",
    "bilingual assessment Hamburg",
    "speech therapy English German Portuguese",
    "language development therapy Hamburg",
    "speech therapy for children Hamburg",
    "bilingual child speech therapy",
    "multilingual assessment Hamburg",
    "speech therapy counseling Hamburg",
    "language disorders therapy Hamburg",
    "speech therapist Hamburg Germany",
    "trilingual speech therapy",
    "bilingual language development",
    "multilingual child therapy",
    "speech therapy bilingual families",
    "language therapy Hamburg",
    "speech assessment multilingual",
    "late talker therapy Hamburg",
    "workshops for teachers Hamburg",
    // German keywords
    "Logopädie Hamburg",
    "mehrsprachige Logopädie Hamburg",
    "zweisprachige Sprachtherapie Hamburg",
    "Sprachtherapie Hamburg",
    "Logopädin Hamburg",
    "Sprachentwicklung Hamburg",
    "mehrsprachige Kinder Hamburg",
    "zweisprachige Kinder Hamburg",
    "Sprachtherapie für Kinder Hamburg",
    "mehrsprachige Sprachtherapie",
    "Logopädie für mehrsprachige Kinder",
    // Portuguese keywords
    "fonoaudiologia Hamburgo",
    "terapia da fala multilingue Hamburgo",
    "fonoaudióloga Hamburgo",
    "terapia da fala bilíngue Hamburgo",
    "fonoaudiologia para crianças bilíngues",
    "terapia da fala multilingue Alemanha",
    "fonoaudióloga multilingue Hamburgo",
  ],
  authors: [{ name: "Tatiana Cooke Munkes" }],
  creator: "Tatiana Cooke Munkes",
  publisher: "Tatiana Cooke Munkes - Speech Therapy Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pt_BR", "de_DE"],
    url: baseUrl,
    siteName: "Tatiana Cooke Munkes - Speech Therapy",
    title: "Multilingual Speech Language Therapy | Hamburg, Germany",
    description:
      "Professional multilingual speech language therapy services in Hamburg. Specialized in bilingual and multilingual therapy, assessment, and counseling in German, Portuguese, and English. 30+ years of experience.",
    images: [
      {
        url: `${baseUrl}/thumbnail.png.jpg`,
        width: 1200,
        height: 630,
        alt: "Tatiana Cooke Munkes - Multilingual Speech Language Therapist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multilingual Speech Language Therapy | Hamburg",
    description:
      "Professional multilingual speech language therapy services in Hamburg, Germany. Specialized in bilingual and multilingual therapy.",
    images: [`${baseUrl}/thumbnail.png.jpg`],
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      en: `${baseUrl}`,
      pt: `${baseUrl}?lang=pt`,
      de: `${baseUrl}?lang=de`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Adicione seus códigos de verificação quando disponíveis
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "Healthcare",
  classification: "Speech Language Therapy Services",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
  },
  other: {
    "geo.region": "DE-HH",
    "geo.placename": "Hamburg",
    "geo.position": "53.5511;9.9937",
    ICBM: "53.5511, 9.9937",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${baseUrl}#organization`,
    name: "Tatiana Cooke Munkes - Speech Language Therapy",
    alternateName: "Two Languages Are Better Than One",
    description:
      "Professional multilingual speech language therapy services in Hamburg, Germany",
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    image: `${baseUrl}/thumbnail.png.jpg`,
    telephone: "+4915146538687",
    email: "tcmunkes@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gluckstraße 57",
      addressLocality: "Hamburg",
      postalCode: "22081",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "53.5511",
      longitude: "9.9937",
    },
    areaServed: {
      "@type": "City",
      name: "Hamburg",
      "@id": "https://www.wikidata.org/wiki/Q1055",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Speech Therapy Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bilingual and Multilingual Speech Therapy",
            description:
              "Specialized therapy for bilingual and multilingual patients in German, Portuguese, and English",
            serviceType: "Speech Therapy",
            provider: {
              "@type": "Person",
              name: "Tatiana Cooke Munkes",
              jobTitle: "Speech Language Therapist",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Speech and Language Assessment",
            description:
              "Differentiated assessment for bilingual and multilingual patients",
            serviceType: "Speech Assessment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Counseling for Families",
            description:
              "Counseling sessions about bilingual development and speech disorders",
            serviceType: "Counseling",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Workshops for Schools and Teachers",
            description:
              "Training for educators on bilingual development and speech disorders",
            serviceType: "Educational Workshop",
          },
        },
      ],
    },
    sameAs: [
      // Adicione links para redes sociais quando disponíveis
      // "https://www.facebook.com/yourpage",
      // "https://www.linkedin.com/in/yourprofile",
    ],
  };

  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}#person`,
    name: "Tatiana Cooke Munkes",
    jobTitle: "Speech Language Therapist",
    description:
      "Multilingual speech language therapist with 30+ years of experience in Hamburg, Germany",
    knowsLanguage: ["en", "pt", "de"],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Speech Language Therapy",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional License",
      recognizedBy: {
        "@type": "Organization",
        name: "Health Department of Hamburg, Germany",
      },
    },
    worksFor: {
      "@id": `${baseUrl}#organization`,
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Favicon links for better Google compatibility */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Droid+Serif:wght@400;700&family=Bree+Serif&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />

        {/* Hreflang tags for multilingual SEO */}
        <link rel="alternate" hrefLang="en" href={`${baseUrl}`} />
        <link rel="alternate" hrefLang="pt" href={`${baseUrl}?lang=pt`} />
        <link rel="alternate" hrefLang="de" href={`${baseUrl}?lang=de`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}`} />

        {/* Structured Data (JSON-LD) for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
      </head>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
