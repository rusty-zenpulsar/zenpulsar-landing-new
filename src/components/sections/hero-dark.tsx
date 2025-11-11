import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroDarkProps {
  onDemoClick: () => void;
}

export function HeroDark({ onDemoClick }: HeroDarkProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Scanline effect */}
      <div className="scanline absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center z-10 relative">
        <div className="mb-20 animate-fadeIn">
          <Image
            src="/logo.png"
            alt="ZENPULSAR"
            width={280}
            height={140}
            className="h-24 md:h-32 w-auto mx-auto mb-16 pixelated glow-gradient"
            priority
          />

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground leading-none mb-10 tracking-tighter">
            <span className="block mb-2">THE AI-BRAIN</span>
            <span className="block mb-2">FOR</span>
            <span className="block text-zp-gradient glow-fuchsia">GLOBAL MARKETS</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-20 max-w-4xl mx-auto leading-relaxed">
            Multi-Agent investment research AI platform for next gen asset managers
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={onDemoClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-bold uppercase tracking-wider border-0 glow-fuchsia transition-all duration-300 hover:scale-105"
            >
              Request Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-12 py-6 text-lg font-bold uppercase tracking-wider glow-blue transition-all duration-300 hover:scale-105"
              onClick={() => {
                const offerings = document.getElementById('offerings');
                if (offerings) {
                  offerings.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Signals
            </Button>
          </div>
        </div>

        {/* Trusted Partners */}
        <div className="mt-32 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-xs font-bold text-muted-foreground tracking-widest mb-8 uppercase">
            Trusted Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40 hover:opacity-70 transition-opacity duration-300">
            {['Bloomberg', 'Neudata', 'Daterade', 'Eagle Alpha', 'Snowflake', 'Crypto Valley', 'CTC'].map(
              (partner, index) => (
                <div
                  key={index}
                  className="h-12 flex items-center pixelated"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-muted-foreground text-sm md:text-base font-medium uppercase tracking-wider">
                    {partner}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Pixel grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(201, 38, 212, 0.3) 1px, transparent 1px),
            linear-gradient(rgba(201, 38, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </section>
  );
}
