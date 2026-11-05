import { Photo } from "@/components/Photo";

type PageHeroProps = {
  kicker: string;
  title: string;
  text: string;
  image: { src: string; alt: string; width: number; height: number };
};

export function PageHero({ kicker, title, text, image }: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[82vh] overflow-hidden bg-night">
      <Photo {...image} priority className="hero-zoom absolute inset-0 h-full w-full object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.5)_0%,rgba(7,17,31,0.18)_42%,rgba(7,17,31,0.84)_100%)]" />
      <div className="wrap relative flex min-h-[82vh] items-end pb-14 pt-32">
        <div className="max-w-3xl text-white">
          <p className="text-sm font-medium text-white/70">{kicker}</p>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg text-white/82">{text}</p>
        </div>
      </div>
    </section>
  );
}
