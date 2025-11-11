import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeInSection } from "@/components/common/fade-in-section";

const offerings = [
  {
    title: "Multi-Agent Co-Pilot",
    features: [
      "Your AI analyst team, 24/7",
      "Research 80% faster",
      "Automate data gathering & financial modelling",
      "Backtest trade ideas with quant-grade rigour",
      "Generate audit-ready reports",
    ],
  },
  {
    title: "Signal Data Feeds",
    features: [
      "Machine-readable signals for systematic strategies",
      "Sentiment & event-driven data from 3M+ articles, filings, social posts daily",
      "Custom taxonomies for assets, regions, and risks",
      "Intraday/daily sentiment indices with proven market correlation",
    ],
  },
];

export function Offerings() {
  return (
    <section id="offerings" className="py-24 px-6 bg-zp-bg-subtle">
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {offerings.map((offering, index) => (
            <Card
              key={index}
              className="shadow-card border border-zp-border p-10 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="h-full flex flex-col">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-2xl font-bold text-zp-dark leading-tight">
                    {offering.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <ul className="space-y-4 text-zp-gray">
                    {offering.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          ))}
        </FadeInSection>
      </div>
    </section>
  );
} 