import { Photo } from "@/components/Photo";

type PageHeroProps = {
  kicker: string;
  title: string;
  text: string;
  image: { src: string; alt: string; width: number; height: number };
};

export function PageHero({ kicker, title, text, image }: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[70svh] overflow-hidden bg-night md:min-h-[82vh]">
      <Photo
        {...image}
        priority
        className="hero-zoom absolute inset-0 h-full w-full object-cover object-[center_35%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.5)_0%,rgba(7,17,31,0.18)_42%,rgba(7,17,31,0.84)_100%)]" />
      <div className="wrap relative flex min-h-[70svh] items-end pb-16 pt-28 md:min-h-[82vh] md:pb-14 md:pt-32">
        <div className="max-w-3xl text-white">
          <p className="text-sm font-medium text-white/70">{kicker}</p>
          <h1 className="mt-3 font-display text-[1.75rem] font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-7xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/82 sm:mt-5 sm:text-lg">{text}</p>
        </div>
      </div>
    </section>
  );
}
