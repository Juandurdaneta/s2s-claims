"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 100, suffix: "+", label: "Successful Claims" },
  { prefix: "$", value: 150, suffix: "K+", label: "In Settlements" },
  {
    prefix: "$",
    value: 35,
    suffixParts: [
      { text: "K–$", className: "text-gold-600" },
      { text: "60", className: "text-forest-900" },
      { text: "K", className: "text-gold-600" },
    ],
    label: "Average Increase",
  },
];

export function Problem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;

      const statNumbers = sectionRef.current?.querySelectorAll(".stat-number");
      if (!statNumbers) return;

      statNumbers.forEach((el) => {
        const target = parseInt(el.getAttribute("data-value") || "0", 10);

        gsap.fromTo(
          el,
          { textContent: "0" },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative bg-cream-100 py-24 md:py-32 lg:py-40">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold leading-tight text-forest-900 sm:text-4xl md:text-5xl">
              Finally, A Streamlined & Easy Way For You To Get Your{" "}
              <span className="text-gold-600">FULL</span> Insurance Settlement!
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-forest-800/70">
              Are you looking for a way to get the settlement you actually
              deserve without spending months trying to find the right solution?
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-forest-800/70">
              At S2S Claims, we help homeowners get their FULL settlements,
              often 3–5X more than<br />
              the insurance company&apos;s initial offer.
            </p>
          </FadeIn>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.1}>
              <div className="text-center">
                <div className="font-display text-5xl font-bold text-forest-900 whitespace-nowrap md:text-6xl">
                  <span className="text-gold-600">{stat.prefix}</span>
                  <span
                    className="stat-number"
                    data-value={stat.value}
                  >
                    {reducedMotion ? stat.value : 0}
                  </span>
                  {"suffixParts" in stat && stat.suffixParts ? (
                    stat.suffixParts.map((part, j) => (
                      <span key={j} className={part.className}>{part.text}</span>
                    ))
                  ) : (
                    <span className="text-gold-600">{stat.suffix}</span>
                  )}
                </div>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-forest-700/60">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-12 text-center">
          <Button href="/contact">
            Claim Your FREE Policy Review
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
