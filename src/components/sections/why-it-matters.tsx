import { Card } from "@/components/ui/card";
import { FadeInSection } from "@/components/common/fade-in-section";

const features = [
  {
    title: "Institutional-Grade by Design",
    description: "Performance, reliability, compliance.",
  },
  {
    title: "Explainable AI",
    description: "Every signal traced to its source, scored, auditable.",
  },
  {
    title: "Proven ROI",
    description: "Clients report significant ROI uplift and 80% less research time.",
  },
  {
    title: "Validated by Market",
    description: "Institutional customers in Europe, US and Middle East",
  },
  {
    title: "Extensible",
    description: "Integrates with your datasets, research, and feeds.",
  },
];

export function WhyItMatters() {
  return (
    <section id="why-it-matters" className="py-24 px-6 bg-zp-bg-blue">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zp-dark mb-6">Why Zenpulsar</h2>
          <p className="text-lg text-zp-gray max-w-2xl mx-auto">
            Built for Institutions. Proven in Markets.
          </p>
        </FadeInSection>

        <FadeInSection className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 text-center shadow-subtle hover:shadow-card transition-all duration-300 border border-zp-border"
            >
              <div className="w-4 h-4 bg-zp-dark rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-zp-dark mb-3">{feature.title}</h3>
              <p className="text-sm text-zp-gray leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </FadeInSection>
      </div>
    </section>
  );
} 