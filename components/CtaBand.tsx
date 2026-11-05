import { Photo } from "@/components/Photo";
import { defaultWhatsApp, media, site } from "@/lib/site";

export function CtaBand({
  title = "Book the next slot.",
  text = "WhatsApp or call. Tell us the car and whether you need a wash, an interior, or a named coating.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <Photo {...media.coating} className="absolute inset-0 h-full w-full object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-blue/88" />
      <div className="wrap relative flex flex-col items-start justify-between gap-8 py-16 text-white md:flex-row md:items-end md:py-20">
        <div>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
          <p className="mt-3 max-w-md text-white/88">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={defaultWhatsApp} className="btn btn-white">
            Book on WhatsApp
          </a>
          <a href={`tel:${site.phoneTel}`} className="btn btn-ghost">
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
