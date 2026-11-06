import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { defaultWhatsApp, media, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About T Garage Manjeri",
  description:
    "T Garage has been looking after cars since 2003. The workshop is in Kizhakethala, Manjeri, near Korambayil Hospital — wash, detailing and coating.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About T Garage Manjeri",
    description: "Car wash, detailing and coating in Kizhakethala since 2003.",
    url: "/about/",
  },
};

export default function AboutPage() {
  return (
    <main id="content">
      <PageHero
        kicker="About T Garage"
        title="A covered bay in Kizhakethala, since 2003."
        text="Car wash, detailing and coating next to Korambayil Hospital, Manjeri."
        image={media.dusk}
      />

      <section className="wrap grid gap-10 py-12 sm:gap-12 sm:py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
        <div>
          <p className="text-sm font-medium text-blue">The workshop</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Where the work happens
          </h2>
          <p className="mt-5 max-w-xl text-muted">
            You will find us in Kizhakethala, next to Korambayil Hospital. The covered bay is where foam wash happens — the same space you see in the stills from our Instagram.
          </p>
          <p className="mt-4 max-w-xl text-muted">
            We take cars that need a wash, an interior, water-spot work, an engine bay, or a coating. Ceramic, graphene, borophene and glass coating are all done here.
          </p>
          <p className="mt-4 max-w-xl text-muted">If you are unsure what to book, send a photo on WhatsApp.</p>
        </div>
        <aside className="self-start bg-white p-6 sm:p-8">
          <p className="font-display text-4xl font-semibold tracking-tight text-blue sm:text-5xl">{site.since}</p>
          <p className="mt-2 text-muted">Opened as T Garage. Same town, same work: wash, detail, coat.</p>
          <p className="mt-6 font-display text-2xl font-semibold tracking-tight">Kizhakethala, Manjeri</p>
          <p className="mt-1 text-sm text-muted">Malappuram · near Korambayil Hospital</p>
        </aside>
      </section>

      <section className="grid md:grid-cols-2">
        <Photo {...media.hero} className="h-64 w-full object-cover sm:h-[28rem] md:h-full" sizes="50vw" />
        <div className="flex flex-col justify-center bg-night px-5 py-12 text-white sm:px-8 sm:py-14 md:px-14">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">How a visit works</h2>
          <ol className="mt-6 space-y-4 text-white/80">
            <li>
              <span className="font-display font-semibold text-white">1. Wash first.</span> Coatings go on paint that has been cleaned and, if needed, corrected.
            </li>
            <li>
              <span className="font-display font-semibold text-white">2. Interiors stay usable.</span> A dry clean, so you can take the car the same day.
            </li>
            <li>
              <span className="font-display font-semibold text-white">3. Book by name.</span> WhatsApp or phone. Name the car and the job.
            </li>
          </ol>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <a href={defaultWhatsApp} className="btn btn-blue w-full sm:w-auto">
              WhatsApp
            </a>
            <Link href="/services/" className="btn btn-ghost w-full sm:w-auto">
              Services
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap grid gap-3 py-12 sm:py-16 md:grid-cols-3">
        <Photo {...media.sign} className="h-56 w-full object-cover sm:h-[22rem] md:h-[28rem]" sizes="33vw" />
        <Photo {...media.bay} className="h-56 w-full object-cover sm:h-[22rem] md:h-[28rem]" sizes="33vw" />
        <Photo {...media.van} className="h-56 w-full object-cover sm:h-[22rem] md:h-[28rem]" sizes="33vw" />
      </section>

      <CtaBand title="Come in with the car." text="Call when you are close and we will bring you into the bay." />
    </main>
  );
}
