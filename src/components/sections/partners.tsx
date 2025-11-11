import { FadeInSection } from "@/components/common/fade-in-section";

const partners = [
  "Bloomberg",
  "Neudata",
  "Daterade",
  "Eagle Alpha",
  "Snowflake",
  "Crypto Valley",
  "Commodity Trading Club",
  "Content Authenticity Initiative",
];

export function Partners() {
  return (
    <section className="py-12 px-6 bg-white border-t border-zp-border">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale">
            {partners.map((partner, index) => (
              <div key={index} className="h-8 flex items-center">
                <span className="text-zp-gray text-xs md:text-sm font-medium">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
