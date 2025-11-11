import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/common/fade-in-section";

interface HeroProps {
  onDemoClick: () => void;
}

export function Hero({ onDemoClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
      <div className="max-w-6xl mx-auto text-center">
        <FadeInSection>
          <div className="mb-16">
            <Image
              src="/logo.png"
              alt="ZENPULSAR"
              width={240}
              height={120}
              className="h-20 md:h-28 w-auto mx-auto mb-12"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-zp-dark leading-tight mb-8 tracking-tight">
              THE AI-BRAIN FOR GLOBAL MARKETS
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-zp-dark mb-16">
              Multi-Agent investment research AI platform for next gen asset managers
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
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

          {/* Trusted Partners */}
          <div className="mt-24">
            <h3 className="text-sm font-semibold text-zp-gray tracking-widest mb-8 uppercase">
              Trusted Partners
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              {/* Partner logos will be added here */}
              <div className="h-12 flex items-center">
                <span className="text-zp-gray text-sm">Bloomberg</span>
              </div>
              <div className="h-12 flex items-center">
                <span className="text-zp-gray text-sm">Neudata</span>
              </div>
              <div className="h-12 flex items-center">
                <span className="text-zp-gray text-sm">Daterade</span>
              </div>
              <div className="h-12 flex items-center">
                <span className="text-zp-gray text-sm">Eagle Alpha</span>
              </div>
              <div className="h-12 flex items-center">
                <span className="text-zp-gray text-sm">Snowflake</span>
              </div>
              <div className="h-12 flex items-center">
                <span className="text-zp-gray text-sm">Crypto Valley</span>
              </div>
              <div className="h-12 flex items-center">
                <span className="text-zp-gray text-sm">Commodity Trading Club</span>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
} 