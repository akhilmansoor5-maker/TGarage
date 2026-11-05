import Link from "next/link";
import { Logo } from "@/components/Logo";
import { addressLine, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo className="h-16 w-16" />
          <p className="mt-5 max-w-sm text-[1.05rem] leading-relaxed text-white/70">
            {site.line}. The workshop in Kizhakethala, Manjeri — next to Korambayil Hospital. Since {site.since}.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-white/45">Pages</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/88 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-white/45">Visit</p>
          <address className="mt-4 text-sm not-italic leading-relaxed text-white/85">
            {addressLine}
            <br />
            <a className="mt-3 inline-block font-display text-xl font-semibold text-white" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </address>
          <a className="mt-3 inline-block text-sm text-white/75 underline underline-offset-4" href={site.instagram}>
            Instagram {site.instagramHandle}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-4 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.name} · {site.address.locality} · {site.phoneDisplay}
          </p>
          <p>
            Made by{" "}
            <a
              className="text-white/75 underline underline-offset-4 hover:text-white"
              href="https://akhilmansoor.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Akhil Mansoor
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
