"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { AlertTriangle, Clock, DollarSign } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: DollarSign,
    title: "Lowball Offers",
    description:
      "Insurance adjusters are trained to give you the bare minimum. Their guidelines are deliberately written to pay bottom dollar.",
  },
  {
    icon: Clock,
    title: "Deliberate Delays",
    description:
      "They drag out the process for months, hoping you'll get frustrated and accept whatever they offer just to be done with it.",
  },
  {
    icon: AlertTriangle,
    title: "Denied Claims",
    description:
      "Claims are designed to fail the policyholder. Adjusters look for reasons to deny or minimize — it's literally their job.",
  },
];

export function PainPoints() {
  return (
    <section className="relative bg-forest-950 py-24 md:py-32 lg:py-40">
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-cream-100 to-forest-950" />

      <Container className="relative z-10">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-cream-50 sm:text-4xl md:text-5xl">
            Avoid Years Of Fighting, Lowball Offers & Leaving Money On The Table!
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream-200/60">
            Here&apos;s the truth: Your insurance adjuster works for the insurance
            company, not for you.<br />
            Their job is to save the company money.
          </p>
        </FadeIn>

        <StaggerChildren
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
          stagger={0.12}
        >
          {PAIN_POINTS.map((point) => (
            <StaggerItem key={point.title}>
              <Card variant="glass" className="h-full text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/10 border border-gold-500/20">
                  <point.icon className="h-6 w-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-bold text-cream-100">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-200/60">
                  {point.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.3} className="mx-auto mt-16 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-cream-200/80">
            We&apos;ve done all the hard work for you. All you need to do is follow
            our step-by-step blueprint and you&apos;ll get the settlement you
            deserve.{" "}
            <span className="font-semibold text-gold-400">
              When you work with someone who knows how insurance companies
              operate from the inside, you get drastically better results.
            </span>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
