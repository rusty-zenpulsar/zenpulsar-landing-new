"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Overview } from "@/components/sections/overview";
import { Offerings } from "@/components/sections/offerings";
import { WhyItMatters } from "@/components/sections/why-it-matters";
import { Solutions } from "@/components/sections/solutions";
import { About } from "@/components/sections/about";
import { CTA } from "@/components/sections/cta";
import { Partners } from "@/components/sections/partners";
import { SectionDivider } from "@/components/common/section-divider";
import { FloatingDemoButton } from "@/components/common/floating-demo-button";
import { FormModal } from "@/components/forms/form-modal";
import { SuccessModal } from "@/components/forms/success-modal";
import { DemoFormData } from "@/lib/types";

export default function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState<string>("");

  const handleDemoSubmit = async (data: DemoFormData) => {
    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit demo request");
      }

      // Store email and show success modal
      setSubmittedEmail(data.email);
      setIsDemoModalOpen(false);
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error("Demo submission error:", error);
      alert("Failed to send demo request. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-zp-dark">
      <Header onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <Hero onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <SectionDivider />
      <Overview />
      
      <SectionDivider />
      <Offerings />
      
      <SectionDivider />
      <WhyItMatters />

      <SectionDivider />
      <Solutions />

      <SectionDivider />
      <About />

      <SectionDivider />
      <CTA onDemoClick={() => setIsDemoModalOpen(true)} />

      <Partners />

      <Footer onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <FloatingDemoButton onClick={() => setIsDemoModalOpen(true)} />

      <FormModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        type="demo"
        onDemoSubmit={handleDemoSubmit}
      />

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        userEmail={submittedEmail}
      />
    </main>
  );
}
