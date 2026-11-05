import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { media, photos, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | Car Detailing in Manjeri",
  description:
    "Photos from the T Garage workshop in Kizhakethala, Manjeri — foam wash, interiors, finished cars and the shop wall.",
  alternates: { canonical: "/gallery/" },
  openGraph: {
    title: "Gallery · T Garage Manjeri",
    description: "Work from the T Garage workshop.",
    url: "/gallery/",
  },
};

export default function GalleryPage() {
  return (
    <main id="content">
      <PageHero
        kicker="Gallery"
        title="Foam, gloss, and the cars that leave the bay."
        text="Workshop stills from Instagram, mixed with the finish we book for — wash, interiors and coating."
        image={media.foam}
      />
      <section className="wrap columns-1 gap-4 py-16 sm:columns-2 lg:columns-3">
        {photos.map((photo) => (
          <figure key={photo.src} className="mb-4 break-inside-avoid">
            <Photo {...photo} className="w-full" sizes="(min-width: 1024px) 33vw, 50vw" />
            <figcaption className="mt-3 text-sm text-muted">{photo.caption}</figcaption>
          </figure>
        ))}
      </section>
      <p className="wrap pb-16 text-sm text-muted">
        More on Instagram{" "}
        <a className="font-medium text-blue underline underline-offset-4" href={site.instagram}>
          {site.instagramHandle}
        </a>
        .
      </p>
    </main>
  );
}
