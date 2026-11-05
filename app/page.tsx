import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";
import { defaultWhatsApp, groups, media, photos, site } from "@/lib/site";

const featured = [
  { ...groups[0], image: media.hero, tall: true },
  { ...groups[1], image: media.interior, tall: false },
  { ...groups[2], image: media.hands, tall: false },
];

export default function HomePage() {
  return (
    <main id="content">
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-night">
        <Photo {...media.hero} priority className="hero-zoom absolute inset-0 h-full w-full object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.42)_0%,rgba(7,17,31,0.12)_40%,rgba(7,17,31,0.78)_100%)]" />
        <div className="wrap relative flex min-h-[100svh] items-end pb-24 pt-32">
          <div className="max-w-5xl text-white">
            <p className="text-sm font-medium text-white/75">Kizhakethala · Manjeri · Since {site.since}</p>
            <h1 className="mt-4 font-display text-[clamp(2.35rem,5.2vw,4.85rem)] font-semibold leading-[1.08] tracking-tight">
              Car wash, detailing and
              <br />
              coating in Manjeri.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/85">
              Foam in the covered bay. Interiors, water spots, ceramic, graphene, borophene and glass coating — booked as their own jobs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={defaultWhatsApp} className="btn btn-blue">
                Book on WhatsApp
              </a>
              <Link href="/gallery/" className="btn btn-ghost">
                See the work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue text-white">
        <div className="wrap grid gap-8 py-8 md:grid-cols-3 md:py-10">
          <div>
            <p className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{site.since}</p>
            <p className="mt-1 text-sm text-white/75">Looking after cars in Manjeri</p>
          </div>
          <div>
            <p className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Kizhakethala</p>
            <p className="mt-1 text-sm text-white/75">Next to Korambayil Hospital</p>
          </div>
          <div>
            <p className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </p>
            <p className="mt-1 text-sm text-white/75">Call or WhatsApp a slot</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-blue">The menu</p>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">Wash. Detail. Coat.</h2>
          </div>
          <Link href="/services/" className="hidden text-sm font-semibold text-blue md:inline">
            All services
          </Link>
        </div>
        <div className="wrap grid gap-4 md:grid-cols-12">
          {featured.map((item, index) => (
            <Link
              key={item.key}
              href={item.href}
              className={`group relative isolate min-h-[22rem] overflow-hidden md:min-h-[32rem] ${
                index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-12 md:min-h-[22rem]"
              }`}
            >
              <Photo
                {...item.image}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={index === 0 ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 42vw, 100vw"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{item.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-white/80">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="wrap mt-5 md:hidden">
          <Link href="/services/" className="text-sm font-semibold text-blue">
            All services
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap grid items-center gap-12 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-24">
          <div>
            <p className="text-sm font-medium text-blue">The workshop</p>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
              Next to Korambayil Hospital, since {site.since}.
            </h2>
            <p className="mt-5 max-w-md text-muted">
              T Garage is in Kizhakethala. Foam wash happens under the covered roof. Coatings are booked as their own day — ceramic, graphene, borophene and glass.
            </p>
            <Link href="/about/" className="btn btn-blue mt-8">
              About T Garage
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Photo {...media.dusk} className="h-[22rem] w-full object-cover md:h-[30rem]" sizes="40vw" />
            <Photo {...media.suv} className="mt-8 h-[22rem] w-full object-cover md:mt-12 md:h-[30rem]" sizes="40vw" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="wrap flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-blue">Gallery</p>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">From the bay</h2>
          </div>
          <Link href="/gallery/" className="text-sm font-semibold text-blue">
            Full gallery
          </Link>
        </div>
        <div className="mt-8 flex gap-3 overflow-x-auto px-[max(1.25rem,calc(50%-590px))] pb-4">
          {photos.slice(0, 8).map((photo) => (
            <figure key={photo.src} className="w-[min(70vw,20rem)] shrink-0">
              <Photo {...photo} className="h-[26rem] w-full object-cover" sizes="320px" />
              <figcaption className="mt-3 text-sm text-muted">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
