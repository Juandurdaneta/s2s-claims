"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { Trophy, Shield, DollarSign, Handshake, Clock, MapPin } from "lucide-react";

const FEATURES = [
  {
    icon: Trophy,
    title: "100+ Successful Claims",
    description:
      "We've seen almost every scenario and know how to navigate even the most complex claims.",
  },
  {
    icon: Shield,
    title: "Former Insurance Insider",
    description:
      "Paden knows the playbook because he used to be part of the system — now he uses that knowledge for YOU.",
  },
  {
    icon: DollarSign,
    title: "$35K–$60K Average Increase",
    description:
      "Our clients typically get 3–5X more than what the insurance company first offered.",
  },
  {
    icon: Handshake,
    title: "No Upfront Costs",
    description:
      "Zero risk to you. If we don't increase your settlement, you don't pay us.",
  },
  {
    icon: Clock,
    title: "90-Day Resolution",
    description:
      "We move quickly because we know you need this resolved so you can get your life back to normal.",
  },
  {
    icon: MapPin,
    title: "Texas-Based & Focused",
    description:
      "We're not a national call center. When you call, you talk to someone who knows your case.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-cream-100 py-24 md:py-32 lg:py-40">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-forest-900 sm:text-4xl md:text-5xl">
            Why Texas Homeowners Choose S2S Claims
          </h2>
        </FadeIn>

        <StaggerChildren
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title}>
              <Card variant="light" className="h-full">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-900/5 border border-forest-900/10">
                  <feature.icon className="h-5 w-5 text-forest-700" />
                </div>
                <h3 className="text-lg font-bold text-forest-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-800/60">
                  {feature.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
