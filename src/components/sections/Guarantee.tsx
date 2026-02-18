"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { ShieldCheck } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: "01",
    title: "FREE Claim Review",
    description: "We review your situation at no cost to see if we can help.",
  },
  {
    number: "02",
    title: "We Handle Everything",
    description:
      "If we take your case, we manage every aspect from start to finish.",
  },
  {
    number: "03",
    title: "Paid From ADDITIONAL Money Only",
    description:
      "We only get paid a percentage of the additional money we get you.",
  },
  {
    number: "04",
    title: "No Increase = $0",
    description:
      "If your settlement doesn't increase, you pay us absolutely nothing.",
  },
];

export function Guarantee() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !lineRef.current) return;

      gsap.fromTo(
        lineRef.current,
        { attr: { y2: "0%" } },
        {
          attr: { y2: "100%" },
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current?.querySelector(".guarantee-steps"),
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative bg-forest-950 py-24 md:py-32 lg:py-40">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          {/* Shield Badge */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gold-500/10 border border-gold-500/20">
            <ShieldCheck className="h-10 w-10 text-gold-400" />
          </div>

          <h2 className="font-display text-3xl font-bold leading-tight text-cream-50 sm:text-4xl md:text-5xl">
            Our Rock-Solid <span className="text-gold-400">&ldquo;You Only Pay If We Win&rdquo;</span> Guarantee
          </h2>
          <p className="mt-6 text-lg text-cream-200/60">
            You don&apos;t pay us anything upfront. Not a single dollar. We only get
            paid when we increase your settlement.
          </p>
        </FadeIn>

        {/* Steps Timeline */}
        <div className="guarantee-steps relative mx-auto mt-16 max-w-2xl">
          {/* Vertical line (SVG for animation) */}
          <div className="absolute left-6 top-0 bottom-0 hidden w-px md:block">
            <svg className="h-full w-full" preserveAspectRatio="none">
              {/* Background line */}
              <line
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                stroke="currentColor"
                className="text-forest-700/30"
                strokeWidth="2"
              />
              {/* Animated fill line */}
              <line
                ref={lineRef}
                x1="50%"
                y1="0%"
                x2="50%"
                y2={reducedMotion ? "100%" : "0%"}
                stroke="currentColor"
                className="text-gold-500"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="space-y-8">
            {STEPS.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="flex items-start gap-6 md:pl-16">
                  {/* Step number circle */}
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-800 border-2 border-gold-500/30 md:absolute md:left-0 md:flex">
                    <span className="text-sm font-bold text-gold-400">
                      {step.number}
                    </span>
                  </div>

                  <div className="flex-1 rounded-2xl border border-forest-600/20 bg-forest-800/40 p-6">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-gold-400 md:hidden">
                        {step.number}
                      </span>
                      <h3 className="text-lg font-bold text-cream-100">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-cream-200/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.4} className="mx-auto mt-12 max-w-2xl text-center">
          <div className="rounded-2xl bg-gold-500/10 border border-gold-500/20 p-6">
            <p className="text-xl font-bold text-gold-400">
              Our success is 100% tied to YOUR success.
            </p>
            <p className="mt-2 text-cream-200/60">
              We&apos;re incentivized to maximize your settlement, not minimize it.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
