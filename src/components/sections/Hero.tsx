"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { Check } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const TRUST_ITEMS = [
  "100+ Claims Handled",
  "$35K–$60K Average Increase",
  "You Only Pay If We Win",
];

const HEADLINE_LINES = [
  {
    segments: [
      { text: "Get The " },
      { text: "FULL", highlight: true },
      { text: " Insurance Settlement" },
    ],
  },
  {
    segments: [{ text: "You're Actually Owed Without" }],
  },
  {
    segments: [{ text: "Years Of Fighting or Confusion" }],
  },
];

// Seeded pseudo-random for deterministic SSR/client output
function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

// Floating gold particles for ambient post-reveal atmosphere
function GoldParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => {
    const r1 = seededRandom(i * 7 + 1);
    const r2 = seededRandom(i * 13 + 2);
    const r3 = seededRandom(i * 19 + 3);
    const r4 = seededRandom(i * 31 + 4);
    const r5 = seededRandom(i * 43 + 5);
    const r6 = seededRandom(i * 59 + 6);
    return {
      id: i,
      size: r1 * 3 + 1,
      left: `${r2 * 100}%`,
      top: `${r3 * 100}%`,
      delay: r4 * 6,
      duration: r5 * 8 + 10,
      opacity: r6 * 0.3 + 0.05,
    };
  });

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="hero-particle absolute rounded-full bg-gold-400"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            opacity: 0,
            animation: `particle-drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;

      const section = sectionRef.current;
      if (!section) return;

      const goldLine = section.querySelector(".hero-gold-line");
      const goldGlow = section.querySelector(".hero-gold-glow");
      const curtainTop = section.querySelector(".hero-curtain-top");
      const curtainBottom = section.querySelector(".hero-curtain-bottom");
      const bgElements = section.querySelector(".hero-bg");
      const badge = section.querySelector(".hero-badge");
      const headlineLines = section.querySelectorAll(".hero-headline-inner");
      const shimmer = section.querySelector(".hero-shimmer");
      const sub = section.querySelector(".hero-sub");
      const cta = section.querySelector(".hero-cta");
      const trustItems = section.querySelectorAll(".hero-trust-item");
      const vignette = section.querySelector(".hero-vignette");
      const particles = section.querySelectorAll(".hero-particle");

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Phase 1: Gold line expands from center (0 - 0.6s)
      tl.fromTo(
        goldLine,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.7, ease: "power2.inOut" }
      )
        .fromTo(
          goldGlow,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.7, ease: "power2.inOut" },
          0
        )

        // Phase 2: Curtain splits (0.4 - 1.1s)
        .to(
          curtainTop,
          { yPercent: -100, duration: 0.8, ease: "power3.inOut" },
          0.45
        )
        .to(
          curtainBottom,
          { yPercent: 100, duration: 0.8, ease: "power3.inOut" },
          0.45
        )

        // Gold line fades as curtains open
        .to(goldLine, { opacity: 0, duration: 0.4 }, 0.6)
        .to(goldGlow, { opacity: 0, duration: 0.4 }, 0.6)

        // Phase 3: Background atmosphere fades in
        .fromTo(
          bgElements,
          { opacity: 0, scale: 1.1 },
          { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
          0.5
        )
        .fromTo(
          vignette,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          0.5
        )

        // Phase 4: Badge drops in with overshoot bounce
        .fromTo(
          badge,
          { opacity: 0, y: -30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          0.8
        )

        // Phase 5: Headline lines rise through clip masks (overlaps with curtain)
        .fromTo(
          headlineLines,
          { yPercent: 120, rotateX: -8, opacity: 0 },
          {
            yPercent: 0,
            rotateX: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.12,
            ease: "power2.out",
            onComplete: () => {
              // Remove will-change and clear GSAP inline styles so CSS doesn't fight
              headlineLines.forEach((el) => {
                gsap.set(el, { clearProps: "all" });
                el.classList.remove("hero-headline-inner");
                el.classList.add("hero-headline-done");
              });
            },
          },
          0.85
        )

        // Phase 6: FULL shimmer sweep
        .fromTo(
          shimmer,
          { x: "-100%" },
          { x: "350%", duration: 0.9, ease: "power2.inOut" },
          1.7
        )

        // Phase 7: Supporting content fades up
        .fromTo(
          sub,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6 },
          1.9
        )
        .fromTo(
          cta,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.4)" },
          2.1
        )
        .fromTo(
          trustItems,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
          2.3
        )

        // Phase 8: Gold particles fade in for ambient state
        .fromTo(
          particles,
          { opacity: 0 },
          {
            opacity: (i: number) => {
              const el = particles[i] as HTMLElement;
              return parseFloat(el.style.opacity) || 0.15;
            },
            duration: 1.5,
            stagger: { amount: 1, from: "random" },
          },
          2.2
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-forest-950 pt-20"
    >
      {/* ── Curtain Overlays ── */}
      {!reducedMotion && (
        <>
          <div className="hero-curtain-top absolute inset-x-0 top-0 h-1/2 bg-forest-950 z-30" />
          <div className="hero-curtain-bottom absolute inset-x-0 bottom-0 h-1/2 bg-forest-950 z-30" />

          {/* Gold line at center */}
          <div
            className="hero-gold-line absolute left-[5%] right-[5%] top-1/2 -translate-y-1/2 h-[2px] z-40 origin-center"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4B96E 20%, #C5A55A 50%, #D4B96E 80%, transparent)",
              opacity: 0,
            }}
          />
          {/* Gold glow behind the line */}
          <div
            className="hero-gold-glow absolute left-[5%] right-[5%] top-1/2 -translate-y-1/2 h-[20px] z-[39] origin-center blur-md"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212, 185, 110, 0.4) 30%, rgba(197, 165, 90, 0.5) 50%, rgba(212, 185, 110, 0.4) 70%, transparent)",
              opacity: 0,
            }}
          />
        </>
      )}

      {/* ── Vignette ── */}
      <div
        className="hero-vignette pointer-events-none absolute inset-0 z-[5]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(10, 26, 18, 0.5) 70%, rgba(10, 26, 18, 0.8) 100%)",
          ...(reducedMotion ? {} : { opacity: 0 }),
        }}
      />

      {/* ── Background Atmosphere ── */}
      <div
        className="hero-bg pointer-events-none absolute inset-0 overflow-hidden"
        style={reducedMotion ? {} : { opacity: 0 }}
      >
        <div className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-forest-600/20 to-gold-500/10 blur-3xl animate-float" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-gold-500/8 to-forest-500/15 blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-forest-700/10 blur-3xl animate-pulse-glow" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Gold particles */}
        <GoldParticles />
      </div>

      {/* ── Main Content ── */}
      <Container className="relative z-10 py-20 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div
            className="hero-badge mb-8 inline-flex"
            style={reducedMotion ? {} : { opacity: 0 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/15 text-gold-400 border border-gold-500/30 px-4 py-1.5 text-sm font-medium">
              <Check className="h-3.5 w-3.5" />
              Licensed Public Adjusters — Texas
            </span>
          </div>

          {/* Headline with line-by-line cinematic reveal */}
          <h1
            className="font-display text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-cream-50 sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ perspective: "800px" }}
          >
            {HEADLINE_LINES.map((line, lineIndex) => (
              <span key={lineIndex} className="block overflow-hidden">
                <span
                  className={`hero-headline-inner block will-change-transform ${
                    reducedMotion ? "!transform-none" : ""
                  }`}
                >
                  {line.segments.map((seg, segIndex) =>
                    seg.highlight ? (
                      <span
                        key={segIndex}
                        className="relative inline-block text-gold-400"
                      >
                        {seg.text}
                        {/* Shimmer sweep */}
                        {!reducedMotion && (
                          <span
                            className="pointer-events-none absolute inset-0 overflow-hidden"
                            aria-hidden="true"
                          >
                            <span
                              className="hero-shimmer absolute inset-y-0 left-0 w-[45%]"
                              style={{
                                background:
                                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 60%, transparent)",
                                transform: "translateX(-100%) skewX(-15deg)",
                              }}
                            />
                          </span>
                        )}
                      </span>
                    ) : (
                      <span key={segIndex}>{seg.text}</span>
                    )
                  )}
                </span>
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p
            className="hero-sub mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream-200/70 md:text-xl"
            style={reducedMotion ? {} : { opacity: 0 }}
          >
            Claim Your FREE Policy & Claim Review To Discover How To Easily
            Maximize Your Settlement (Even If The Insurance Company Already
            Denied You Or Gave You A Lowball Offer)
          </p>

          {/* CTA */}
          <div
            className="hero-cta mt-10"
            style={reducedMotion ? {} : { opacity: 0 }}
          >
            <CTAButton />
          </div>

          {/* Trust Strip */}
          <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            {TRUST_ITEMS.map((item, i) => (
              <div
                key={i}
                className="hero-trust-item flex items-center gap-2 text-sm text-cream-200/50"
                style={reducedMotion ? {} : { opacity: 0 }}
              >
                {i > 0 && (
                  <span className="hidden h-1 w-1 rounded-full bg-cream-200/30 sm:block" />
                )}
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-forest-950 to-transparent z-[6]" />
    </section>
  );
}
