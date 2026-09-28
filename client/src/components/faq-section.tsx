import type { FaqItem } from "@shared/seo-content";

export default function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-[hsl(212,32%,16%)] text-center mb-12 font-display">
          Preguntas frecuentes
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-[hsl(210,20%,96%)] rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-[hsl(212,32%,16%)] text-lg">{faq.question}</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
