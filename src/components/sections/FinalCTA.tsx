"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CTAButton } from "@/components/ui/CTAButton";
import { FadeIn } from "@/components/animations/FadeIn";
import { Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="relative bg-forest-900 py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-forest-600/10 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold leading-tight text-cream-50 sm:text-4xl md:text-5xl lg:text-6xl">
              Ready To Get Your{" "}
              <span className="text-gold-400">Full Settlement</span>?
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg text-cream-200/60">
              Stop fighting the insurance company alone. Let our insider experts
              handle everything while you focus on getting your life back to
              normal.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CTAButton />
              <Button
                href={PHONE_HREF}
                variant="ghost"
                size="lg"
                showArrow={false}
              >
                <Phone className="h-4 w-4" />
                Call Us: {PHONE_NUMBER}
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
