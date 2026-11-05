import Link from "next/link";

export default function NotFound() {
  return (
    <main id="content" className="wrap pb-32 pt-36">
      <p className="text-sm font-medium text-blue">404</p>
      <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight">Page not found.</h1>
      <p className="mt-4 max-w-md text-muted">
        That link is not on the T Garage site. The workshop, services and booking pages are.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-blue">
          Home
        </Link>
        <Link href="/contact/" className="btn btn-line">
          Contact
        </Link>
      </div>
    </main>
  );
}
