import type { Metadata } from "next";
import { BookForm } from "@/components/BookForm";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqSchema } from "@/lib/schema";
import { addressLine, homeFaqs, media, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact T Garage in Kizhakethala, Manjeri",
  description:
    "Visit T Garage at Kizhakethala, near Korambayil Hospital, Manjeri. Call or WhatsApp 79941 75378 to book a wash, detail or coating.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact T Garage in Kizhakethala, Manjeri",
    description: "Kizhakethala, near Korambayil Hospital. Call 79941 75378.",
    url: "/contact/",
  },
};

export default function ContactPage() {
  return (
    <main id="content">
      <JsonLd data={faqSchema(homeFaqs)} />
      <PageHero
        kicker="Contact"
        title="Kizhakethala, next to Korambayil Hospital."
        text="Call when you are close and we will bring you in."
        image={media.glass}
      />

      <section className="wrap grid gap-10 py-12 sm:gap-12 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div>
          <p className="text-sm font-medium text-blue">Visit</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">The workshop</h2>
          <address className="mt-5 text-lg not-italic leading-relaxed">
            {site.name}
            <br />
            {addressLine}
          </address>
          <p className="mt-6">
            <a className="font-display text-[1.85rem] font-semibold tracking-tight text-blue sm:text-3xl" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>
              <a className="underline decoration-line underline-offset-4" href={site.maps}>
                Open in Google Maps
              </a>
            </li>
            <li>
              <a className="underline decoration-line underline-offset-4" href={site.instagram}>
                Instagram {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white p-5 sm:p-6 md:p-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Book a slot</h2>
          <p className="mt-3 text-muted">The form opens WhatsApp on {site.phoneDisplay}.</p>
          <div className="mt-6">
            <BookForm />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap py-10">
          <iframe
            title="Map of T Garage near Korambayil Hospital, Manjeri"
            src={site.mapsEmbed}
            className="h-64 w-full border-0 sm:h-[22rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <FaqList faqs={homeFaqs} title="Before you drive in" />
    </main>
  );
}
