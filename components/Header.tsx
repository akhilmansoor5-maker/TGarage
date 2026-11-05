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
      setScrolled(window.scrollY > 24);
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
    <header className="site-header fixed inset-x-0 top-0 z-40" data-solid={solid ? "true" : "false"}>
      <div className="wrap flex h-[4.4rem] items-center justify-between gap-4">
        <Link href="/" aria-label="T Garage home" className="shrink-0">
          <Logo className="h-11 w-11 md:h-12 md:w-12" />
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

        <button
          type="button"
          className="inline-flex h-12 items-center px-1 text-[0.95rem] font-semibold lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="min-h-[calc(100svh-4.4rem)] border-t border-line bg-white lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <p id={titleId} className="sr-only">
            Site menu
          </p>
          <nav className="wrap flex flex-col py-6" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-4 font-display text-3xl font-semibold tracking-tight"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact/" className="btn btn-blue mt-8">
              Book a slot
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
