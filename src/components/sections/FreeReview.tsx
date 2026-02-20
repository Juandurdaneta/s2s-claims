"use client";

import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { Clock, TrendingUp, AlertCircle } from "lucide-react";

const DISCOVERY_POINTS = [
  {
    icon: Clock,
    title: "Your FULL settlement in 90 days",
    description:
      "Without becoming an insurance policy expert or spending months fighting back and forth",
  },
  {
    icon: TrendingUp,
    title: "The exact process for 100+ homeowners",
    description:
      "From lowball offers (or $0 payouts) to full settlements averaging $35K–$60K more",
  },
  {
    icon: AlertCircle,
    title: "The biggest mistake people make",
    description:
      "That keeps them from getting what they deserve, no matter what else they do right",
  },
];

export function FreeReview() {
  return (
    <section className="relative bg-cream-100 py-24 md:py-32 lg:py-40">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-forest-900 sm:text-4xl md:text-5xl">
            Claim Your <span className="text-gold-600">FREE</span> No-Obligation
            Policy & Claim Review
          </h2>
          <p className="mt-6 text-lg text-forest-800/70">
            During this no-obligation review, our team will examine your specific
            situation and show you exactly how much you&apos;re really owed.
          </p>
        </FadeIn>

        <FadeIn className="mx-auto mt-4 max-w-xl text-center">
          <p className="font-semibold text-forest-900">
            Here&apos;s what you&apos;ll discover:
          </p>
        </FadeIn>

        <StaggerChildren
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
          stagger={0.12}
        >
          {DISCOVERY_POINTS.map((point, i) => (
            <StaggerItem key={i}>
              <div className="relative h-full rounded-2xl border border-cream-300/60 bg-white p-6 shadow-lg shadow-black/5">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 border border-gold-500/20">
                  <point.icon className="h-5 w-5 text-gold-600" />
                </div>
                <h3 className="text-lg font-bold text-forest-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-800/60">
                  {point.description}
                </p>
                <div className="absolute top-4 right-4 font-display text-4xl font-bold text-forest-900/5">
                  {i + 1}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-forest-700/60">
            This is ONLY for homeowners who are serious about getting their full
            settlement.
          </p>
          <CTAButton />
        </FadeIn>
      </Container>
    </section>
  );
}
