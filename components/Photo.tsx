import { asset } from "@/lib/asset";

type PhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function Photo({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
}: PhotoProps) {
  return (
    // Native img so GitHub Pages gets /TGarage/... paths. next/image
    // leaves local src unprefixed when images.unoptimized is on.
    <img
      src={asset(src)}
      alt={alt}
      width={width}
      height={height}
      className={className}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}
