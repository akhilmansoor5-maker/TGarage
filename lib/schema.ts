import { addressLine, homeFaqs, services, site, type Faq, type Service } from "@/lib/site";

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    name: site.name,
    alternateName: site.mark,
    description:
      "Car wash, detailing and coating in Kizhakethala, Manjeri. Foam wash, wax wash, deep cleaning, dry clean, water spots, glass polish, engine bay, underbody, ceramic, graphene, borophene and glass coating.",
    url: site.url,
    telephone: site.phoneTel,
    image: `${site.url}/images/gen/hero.webp`,
    foundingDate: site.since,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: [
      { "@type": "City", name: "Manjeri" },
      { "@type": "AdministrativeArea", name: "Malappuram" },
    ],
    sameAs: [site.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Wash, detailing and coating",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: `${site.url}/services/${service.slug}/`,
          areaServed: "Manjeri",
        },
      })),
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: `${site.url}/services/${service.slug}/`,
    areaServed: { "@type": "City", name: "Manjeri" },
    provider: {
      "@type": "AutoWash",
      name: site.name,
      telephone: site.phoneTel,
      address: addressLine,
      url: site.url,
    },
  };
}

export { homeFaqs };
