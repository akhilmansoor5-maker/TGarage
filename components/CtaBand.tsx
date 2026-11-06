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
      <div className="wrap relative flex flex-col items-start justify-between gap-6 py-12 text-white sm:gap-8 sm:py-16 md:flex-row md:items-end md:py-20">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
          <p className="mt-3 max-w-md text-white/88">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
          <a href={defaultWhatsApp} className="btn btn-white w-full sm:w-auto">
            Book on WhatsApp
          </a>
          <a href={`tel:${site.phoneTel}`} className="btn btn-ghost w-full sm:w-auto">
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
