import { asset } from "@/lib/asset";

export function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <img
      src={asset("/brand/logo.png")}
      alt="T Garage"
      width={192}
      height={192}
      className={`rounded-full shadow-[0_0_0_3px_rgba(255,255,255,0.12)] ${className}`}
      decoding="async"
    />
  );
}
