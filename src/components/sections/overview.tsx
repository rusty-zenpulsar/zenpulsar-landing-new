import { FadeInSection } from "@/components/common/fade-in-section";

export function Overview() {
  return (
    <section id="overview" className="py-24 px-6 bg-zp-bg-light">
      <div className="max-w-5xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zp-dark mb-6">
            Products
          </h2>
          <p className="text-lg text-zp-gray max-w-3xl mx-auto">
            Two ways to plug Zenpulsar into your workflow — from SaaS dashboards to quant-ready APIs.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
} 