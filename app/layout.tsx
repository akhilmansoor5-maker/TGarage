import type { Metadata, Viewport } from "next";
import { Sora, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsApp } from "@/components/WhatsApp";
import { businessSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1659a8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "T Garage Manjeri | Car Wash, Detailing and Coating",
    template: "%s · T Garage",
  },
  description:
    "T Garage in Kizhakethala, Manjeri. Car wash, detailing and coating since 2003. Ceramic, graphene, borophene and glass coating. Call 79941 75378.",
  applicationName: "T Garage",
  authors: [{ name: "T Garage" }],
  alternates: { canonical: "/" },
  icons: {
    icon: "/brand/logo-192.png",
    apple: "/brand/logo-192.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "T Garage",
    title: "T Garage Manjeri | Car Wash, Detailing and Coating",
    description: "Washing, detailing and protecting in Kizhakethala, Manjeri. Since 2003.",
    images: [
      {
        url: "/images/gen/hero.webp",
        width: 1280,
        height: 720,
        alt: "Foam wash at T Garage, Kizhakethala, Manjeri.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "T Garage Manjeri | Car Wash, Detailing and Coating",
    description: "Car wash, detailing and coating in Kizhakethala, Manjeri.",
    images: ["/images/gen/hero.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`} data-scroll-behavior="smooth">
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-3"
        >
          Skip to content
        </a>
        <JsonLd data={businessSchema()} />
        <Header />
        {children}
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
