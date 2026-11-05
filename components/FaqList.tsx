import type { Faq } from "@/lib/site";

export function FaqList({ faqs, title = "Questions" }: { faqs: Faq[]; title?: string }) {
  return (
    <section className="wrap py-16 md:py-20">
      <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      <div className="mt-6 border-t border-line">
        {faqs.map((faq) => (
          <details key={faq.q} className="border-b border-line">
            <summary className="py-4 pr-10 text-lg font-medium">{faq.q}</summary>
            <p className="max-w-2xl pb-5 text-muted">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
