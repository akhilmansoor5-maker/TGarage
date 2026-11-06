"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const titleId = useId();
  const solid = scrolled || open;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-[60]" data-solid={solid ? "true" : "false"}>
      <div className="wrap flex h-16 items-center justify-between gap-3 sm:h-[4.4rem]">
        <Link href="/" aria-label="T Garage home" className="shrink-0">
          <Logo className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12" />
        </Link>

        <nav className="site-nav hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            if (item.label === "Home") return null;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="text-[0.95rem] font-medium hover:text-blue"
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact/" className="btn btn-blue h-11 px-4 text-[0.9rem]">
            Book a slot
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/contact/" className="btn btn-blue h-10 min-w-[4.5rem] px-3 text-[0.82rem]">
            Book
          </Link>
          <button
            type="button"
            className="inline-flex h-11 min-w-11 items-center justify-center px-2 text-[0.95rem] font-semibold"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="min-h-[calc(100dvh-4rem)] border-t border-line bg-white pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <p id={titleId} className="sr-only">
            Site menu
          </p>
          <nav className="wrap flex flex-col py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-4 font-display text-[1.85rem] font-semibold tracking-tight"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact/" className="btn btn-blue mt-8 w-full">
              Book a slot
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
