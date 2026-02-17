"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { Check } from "lucide-react";

const BENEFITS = [
  {
    title: "Complete Damage Assessment",
    description: "We find damage the insurance adjuster \"missed\"",
  },
  {
    title: "Professional Documentation",
    description: "That insurance companies can't dismiss",
  },
  {
    title: "Expert Negotiation",
    description: "Using insider knowledge of how adjusters are trained",
  },
  {
    title: "Efficient Resolution",
    description: "Most claims settled in 90 days",
  },
  {
    title: "Maximum Settlement",
    description: "Average increase of $35K–$60K over initial offers",
  },
];

export function WhatYouGet() {
  return (
    <section className="relative bg-forest-900 py-24 md:py-32 lg:py-40">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-cream-50 sm:text-4xl md:text-5xl">
            Save Yourself Months Of Costly Fighting By Using Our{" "}
            <span className="text-gold-400">Proven Blueprint</span>
          </h2>
          <p className="mt-4 text-lg text-cream-200/60">
            You get a MUCH better result when you have an expert who knows
            exactly how insurance companies think.
          </p>
        </FadeIn>

        <StaggerChildren
          className="mx-auto mt-16 max-w-2xl space-y-4"
          stagger={0.1}
        >
          {BENEFITS.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <div className="flex items-start gap-4 rounded-2xl border border-forest-600/20 bg-forest-800/40 p-5 transition-colors hover:border-gold-500/20 hover:bg-forest-800/60">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500/15 border border-gold-500/30">
                  <Check className="h-4 w-4 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-cream-100">
                    {benefit.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-cream-200/60">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Highlight Box */}
        <FadeIn delay={0.3} className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-2xl bg-gradient-to-r from-gold-500/10 to-gold-500/5 border border-gold-500/20 p-6 text-center">
            <p className="text-lg font-semibold text-gold-400">
              And the best part? You don&apos;t pay us a single dollar unless we get
              you more money.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-10 text-center">
          <p className="mb-6 text-cream-200/60">
            Ready to get the settlement you deserve?
          </p>
          <Button href="/contact">Claim Your FREE Policy Review</Button>
        </FadeIn>
      </Container>
    </section>
  );
}
