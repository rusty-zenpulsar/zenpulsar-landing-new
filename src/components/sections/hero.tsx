import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/common/fade-in-section";

interface HeroProps {
  onDemoClick: () => void;
}

export function Hero({ onDemoClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
      <div className="max-w-5xl mx-auto text-center">
        <FadeInSection>
          <div className="mb-12">
            <Image
              src="/logo.png"
              alt="ZENPULSAR"
              width={192}
              height={96}
              className="h-18 md:h-24 w-auto mx-auto mb-8"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-zp-dark leading-tight">
              THE AI-BRAIN FOR GLOBAL MARKETS
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-zp-gray mb-12 max-w-4xl mx-auto leading-relaxed">
            Zenpulsar turns overwhelming market noise into explainable, backtestable signals — helping hedge funds, asset managers, and commodity traders move faster, with confidence.
          </p>

          {/* Pain Points */}
          <div className="mb-16 max-w-3xl mx-auto">
            <ul className="space-y-3 text-left">
              <li className="flex items-start text-zp-gray">
                <span className="text-zp-dark mr-3">•</span>
                <span>Only <strong className="text-zp-dark">13% of funds</strong> outperformed the S&P 500 in the last 5 years.</span>
              </li>
              <li className="flex items-start text-zp-gray">
                <span className="text-zp-dark mr-3">•</span>
                <span>Alpha now decays in <em>hours</em>.</span>
              </li>
              <li className="flex items-start text-zp-gray">
                <span className="text-zp-dark mr-3">•</span>
                <span>Analysts drown in <em>millions of datapoints</em>.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onDemoClick}
              size="lg"
              className="shadow-card hover:shadow-lg"
            >
              Request a Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="shadow-card hover:shadow-lg"
              onClick={() => document.getElementById('offerings')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Signals
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
} 