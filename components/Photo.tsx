import Image from "next/image";

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
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: PhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      sizes={sizes}
    />
  );
}
