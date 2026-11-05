import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { groups, media, services, type Group } from "@/lib/site";

export const metadata: Metadata = {
  title: "Car Wash and Coating Services in Manjeri",
  description:
    "T Garage services in Kizhakethala, Manjeri: foam wash, wax wash, deep cleaning, dry clean, water spots, glass polish, engine bay, underbody, ceramic, graphene, borophene and glass coating.",
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Car Wash and Coating Services in Manjeri · T Garage",
    description: "Wash, detailing and coating — each booked as its own job.",
    url: "/services/",
  },
};

const ids: Record<Group, string> = {
  Wash: "wash",
  Detailing: "detailing",
  Coating: "coating",
};

const groupShot: Record<Group, (typeof media)[keyof typeof media]> = {
  Wash: media.foam,
  Detailing: media.wheel,
  Coating: media.hands,
};

export default function ServicesPage() {
  return (
    <main id="content">
      <PageHero
        kicker="Services"
        title="Every job on the menu, booked on its own."
        text="Foam wash, interiors, water spots, and ceramic, graphene, borophene and glass coating."
        image={media.overhead}
      />

      {groups.map((group) => (
        <section key={group.key} id={ids[group.key]}>
          <div className="relative isolate min-h-[38vh] overflow-hidden bg-night">
            <Photo {...groupShot[group.key]} className="absolute inset-0 h-full w-full object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/45 to-night/20" />
            <div className="wrap relative flex min-h-[38vh] items-end pb-10 pt-16">
              <div className="max-w-2xl text-white">
                <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{group.title}</h2>
                <p className="mt-3 max-w-xl text-white/80">{group.text}</p>
              </div>
            </div>
          </div>
          <div className="wrap grid gap-5 py-12 sm:grid-cols-2">
            {services
              .filter((service) => service.group === group.key)
              .map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}/`} className="group overflow-hidden bg-white">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Photo
                      src={service.image}
                      alt=""
                      width={1280}
                      height={720}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{service.name}</h3>
                    <p className="mt-2 text-sm text-muted">{service.summary}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      ))}

      <CtaBand title="Name the job." text="Foam wash, dry clean, water spots, or a coating — send the car and we will confirm the slot." />
    </main>
  );
}
