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
      <section className="relative isolate min-h-dvh overflow-hidden bg-night">
        <Photo
          {...media.hero}
          priority
          className="hero-zoom absolute inset-0 h-full w-full object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.42)_0%,rgba(7,17,31,0.12)_40%,rgba(7,17,31,0.78)_100%)]" />
        <div className="wrap relative flex min-h-dvh items-end pb-28 pt-28 sm:pb-24 sm:pt-32">
          <div className="max-w-5xl text-white">
            <p className="text-sm font-medium text-white/75">Kizhakethala · Manjeri · Since {site.since}</p>
            <h1 className="mt-3 font-display text-[1.7rem] font-semibold leading-[1.14] tracking-tight sm:mt-4 sm:text-[2.35rem] md:text-[clamp(2.35rem,5.2vw,4.85rem)] md:leading-[1.08]">
              Car wash, detailing and
              <br /> coating in Manjeri.
            </h1>
            <p className="mt-4 max-w-lg text-base text-white/85 sm:mt-5 sm:text-lg">
              Foam in the covered bay. Interiors, water spots, ceramic, graphene, borophene and glass coating — booked as their own jobs.
            </p>
            <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
              <a href={defaultWhatsApp} className="btn btn-blue w-full sm:w-auto">
                Book on WhatsApp
              </a>
              <Link href="/gallery/" className="btn btn-ghost w-full sm:w-auto">
                See the work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue text-white">
        <div className="wrap grid gap-6 py-7 sm:gap-8 sm:py-8 md:grid-cols-3 md:py-10">
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

      <section className="py-12 sm:py-16 md:py-24">
        <div className="wrap mb-6 flex items-end justify-between gap-4 sm:mb-8">
          <div>
            <p className="text-sm font-medium text-blue">The menu</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Wash. Detail. Coat.
            </h2>
          </div>
          <Link href="/services/" className="hidden text-sm font-semibold text-blue md:inline">
            All services
          </Link>
        </div>
        <div className="wrap grid gap-3 sm:gap-4 md:grid-cols-12">
          {featured.map((item, index) => (
            <Link
              key={item.key}
              href={item.href}
              className={`group relative isolate min-h-[16.5rem] overflow-hidden sm:min-h-[22rem] md:min-h-[32rem] ${
                index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-12 md:min-h-[22rem]"
              }`}
            >
              <Photo
                {...item.image}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={index === 0 ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 42vw, 100vw"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6 md:p-8">
                <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">{item.title}</h3>
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
        <div className="wrap grid items-center gap-8 py-12 sm:gap-12 sm:py-16 md:grid-cols-[0.95fr_1.05fr] md:py-24">
          <div>
            <p className="text-sm font-medium text-blue">The workshop</p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl md:leading-[1.08]">
              Next to Korambayil Hospital, since {site.since}.
            </h2>
            <p className="mt-5 max-w-md text-muted">
              T Garage is in Kizhakethala. Foam wash happens under the covered roof. Coatings are booked as their own day — ceramic, graphene, borophene and glass.
            </p>
            <Link href="/about/" className="btn btn-blue mt-6 w-full sm:mt-8 sm:w-auto">
              About T Garage
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <Photo {...media.dusk} className="h-52 w-full object-cover sm:h-[22rem] md:h-[30rem]" sizes="40vw" />
            <Photo {...media.suv} className="mt-6 h-52 w-full object-cover sm:mt-8 sm:h-[22rem] md:mt-12 md:h-[30rem]" sizes="40vw" />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="wrap flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-blue">Gallery</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">From the bay</h2>
          </div>
          <Link href="/gallery/" className="shrink-0 text-sm font-semibold text-blue">
            Full gallery
          </Link>
        </div>
        <div className="snap-row mt-6 px-[max(1rem,calc(50%-590px))] pb-4 sm:mt-8">
          {photos.slice(0, 8).map((photo) => (
            <figure key={photo.src} className="w-[min(78vw,20rem)] shrink-0 snap-start">
              <Photo {...photo} className="h-72 w-full object-cover sm:h-[26rem]" sizes="320px" />
              <figcaption className="mt-3 text-sm text-muted">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
