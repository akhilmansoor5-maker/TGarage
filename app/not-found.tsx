import Link from "next/link";

export default function NotFound() {
  return (
    <main id="content" className="wrap pb-32 pt-28 sm:pt-36">
      <p className="text-sm font-medium text-blue">404</p>
      <h1 className="mt-3 font-display text-[2rem] font-semibold tracking-tight sm:text-5xl">Page not found.</h1>
      <p className="mt-4 max-w-md text-muted">
        That link is not on the T Garage site. The workshop, services and booking pages are.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href="/" className="btn btn-blue w-full sm:w-auto">
          Home
        </Link>
        <Link href="/contact/" className="btn btn-line w-full sm:w-auto">
          Contact
        </Link>
      </div>
    </main>
  );
}
