import { FadeInSection } from "@/components/common/fade-in-section";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zp-bg-subtle">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold text-zp-dark mb-8">About Us</h2>
          <p className="text-lg text-zp-gray leading-relaxed">
            Zenpulsar is building the AI brain for global markets. Our team blends Wall Street
            experience (Goldman Sachs, UBS, ADIA) with deep AI research. We&apos;ve lived these problems
            on trading desks — and we&apos;re fixing them.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
}
