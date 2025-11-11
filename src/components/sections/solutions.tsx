import { Card } from "@/components/ui/card";
import { FadeInSection } from "@/components/common/fade-in-section";

const solutions = [
  {
    title: "Portfolio Managers & Analysts",
    description: "Accelerate alpha discovery. Find high-conviction trades in minutes.",
  },
  {
    title: "Commodity & Macro Traders",
    description: "Spot supply shocks, sanctions, weather moves before they hit prices.",
  },
  {
    title: "Quant Researchers",
    description: "Ingest structured sentiment/event data to sharpen models.",
  },
  {
    title: "Risk & Strategy Teams",
    description: "Stress-test portfolios with real-time geopolitical + macro matrices.",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 px-6 bg-zp-bg-light">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zp-dark mb-6">Solutions / Use Cases</h2>
        </FadeInSection>

        <FadeInSection className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="p-8 shadow-subtle hover:shadow-card transition-all duration-300 border border-zp-border"
            >
              <h3 className="text-xl font-semibold text-zp-dark mb-3">{solution.title}</h3>
              <p className="text-zp-gray leading-relaxed">{solution.description}</p>
            </Card>
          ))}
        </FadeInSection>
      </div>
    </section>
  );
}
