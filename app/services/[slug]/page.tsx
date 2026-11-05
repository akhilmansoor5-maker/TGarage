import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { defaultWhatsApp, getService, relatedServices, services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const path = `/services/${service.slug}/`;
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: path },
    openGraph: {
      title: `${service.title} · T Garage`,
      description: service.description,
      url: path,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = relatedServices(service);
  const path = `/services/${service.slug}/`;

  return (
    <main id="content">
      <JsonLd
        data={[
          serviceSchema(service),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: service.name, path },
          ]),
        ]}
      />
      <section className="relative isolate min-h-[68vh] overflow-hidden bg-night">
        <Photo
          src={service.image}
          alt=""
          width={1280}
          height={720}
          priority
          className="hero-zoom absolute inset-0 h-full w-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.5)_0%,rgba(7,17,31,0.18)_42%,rgba(7,17,31,0.84)_100%)]" />
        <div className="wrap relative flex min-h-[68vh] items-end pb-14 pt-32">
          <div className="max-w-3xl text-white">
            <nav aria-label="Breadcrumb" className="text-sm text-white/65">
              <Link href="/services/" className="hover:text-white">
                Services
              </Link>
              <span aria-hidden="true"> / </span>
              <span className="text-white">{service.name}</span>
            </nav>
            <p className="mt-6 text-sm font-medium text-white/70">
              {service.group} · Manjeri
            </p>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/82">{service.lead}</p>
            <a href={defaultWhatsApp} className="btn btn-blue mt-8">
              Book {service.name}
            </a>
          </div>
        </div>
      </section>

      <article className="wrap grid gap-12 py-16 md:grid-cols-[1.1fr_0.8fr] md:py-24">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight">What is included</h2>
          <ul className="mt-5 space-y-3">
            {service.includes.map((item, index) => (
              <li key={item} className="flex gap-4 border-t border-line pt-3">
                <span className="font-display text-sm font-semibold text-blue">{String(index + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="bg-white p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight">Need this?</h2>
          <p className="mt-3 text-muted">{service.description}</p>
          <Link href="/contact/" className="btn btn-blue mt-6">
            Contact
          </Link>
        </aside>
      </article>

      <FaqList faqs={service.faqs} title={`About ${service.name}`} />

      {related.length > 0 ? (
        <aside className="wrap pb-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Related</h2>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/services/${item.slug}/`} className="block overflow-hidden bg-white hover:text-blue">
                  <Photo
                    src={item.image}
                    alt=""
                    width={1280}
                    height={720}
                    className="h-40 w-full object-cover"
                    sizes="33vw"
                  />
                  <span className="block p-5">
                    <span className="font-display text-xl font-semibold tracking-tight">{item.name}</span>
                    <span className="mt-2 block text-sm text-muted">{item.summary}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </main>
  );
}
