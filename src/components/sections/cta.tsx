import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/common/fade-in-section";

interface CTAProps {
  onDemoClick: () => void;
}

export function CTA({ onDemoClick }: CTAProps) {
  return (
    <section id="contact" className="py-24 px-6 bg-zp-bg-light">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-zp-dark mb-8">
            Contact
          </h2>
          <p className="text-xl text-zp-gray mb-12 leading-relaxed max-w-3xl mx-auto">
            Let&apos;s talk about how Zenpulsar can power your strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onDemoClick}
              size="lg"
              className="shadow-card hover:shadow-lg"
            >
              Book a Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="shadow-card hover:shadow-lg"
              onClick={onDemoClick}
            >
              Get in Touch
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
} 