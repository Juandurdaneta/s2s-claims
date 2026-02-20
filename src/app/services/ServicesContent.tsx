"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  ClipboardCheck,
  Search,
  FileText,
  MessageSquare,
  BadgeDollarSign,
  CloudLightning,
  Wind,
  Droplets,
  Flame,
  ShieldAlert,
  Eye,
  Languages,
  Handshake,
  Shield,
  Trophy,
  DollarSign,
  Clock,
  FileCheck,
  Check,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  Process Steps Data                                                 */
/* ------------------------------------------------------------------ */

const PROCESS_STEPS = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Free Policy & Claim Review",
    description:
      "We start with a completely free, no-obligation review of your situation.",
    points: [
      "Examine your insurance policy to understand actual coverage",
      "Review any offers or correspondence from your insurance company",
      "Assess whether you have a valid claim for more money",
      "Give you honest feedback — even if we can't help",
    ],
    cta: "Schedule Your FREE Review",
    note: "If we determine that we cannot help you after you've signed a contract, we simply release you with no money owed, guaranteed.",
    dark: false,
  },
  {
    number: "02",
    icon: Search,
    title: "Comprehensive Damage Assessment",
    description:
      "If we take your case, we immediately conduct a thorough professional assessment of ALL damage.",
    comparison: {
      them: "Insurance adjusters do quick 20–30 minute visual inspections. They miss hidden damage, don't test for structural issues, and don't look in attics, crawl spaces, or behind walls.",
      us: "We do forensic-level assessments documenting EVERYTHING.",
    },
    points: [
      "Visible damage (roof, siding, windows, etc.)",
      "Hidden damage (attic, crawl spaces, interior walls)",
      "Secondary damage (water intrusion, mold, electrical issues)",
      "Code upgrade requirements",
      "Structural integrity issues",
      "HVAC and system impacts",
    ],
    highlight:
      "Most homeowners are owed 3–5X more because the insurance adjuster never saw the full extent of damage.",
    dark: true,
  },
  {
    number: "03",
    icon: FileText,
    title: "Professional Documentation & Estimate",
    description:
      "Insurance companies respond to one thing: bulletproof documentation they can't dismiss.",
    points: [
      "Detailed photographic evidence — hundreds of high-resolution photos with annotations",
      "Comprehensive written damage report documenting all damage and its cause",
      "Accurate repair estimate using industry-standard software (Xactimate)",
      "Policy language analysis with specific coverage provisions",
      "Supporting expert reports from engineers and specialists when needed",
    ],
    dark: false,
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Claim Submission & Negotiation",
    description:
      "This is where our insider knowledge makes the biggest difference.",
    points: [
      "Submit comprehensive claim package that makes denial nearly impossible",
      "Handle all communication — you never talk to the adjuster again",
      "Negotiate using insider tactics and pressure points",
      "Counter lowball offers with evidence they can't refute",
      "Escalate when necessary — supervisors, appraisal clauses, legal pressure",
      "Push for fast resolution — we move aggressively",
    ],
    highlight:
      "Insurance adjusters use confusion, delay, and intimidation to get homeowners to give up. Those tactics don't work on us because we know the playbook.",
    dark: true,
  },
  {
    number: "05",
    icon: BadgeDollarSign,
    title: "Settlement & Recovery",
    description:
      "Once we've negotiated your full settlement, we make sure you receive every dollar.",
    points: [
      "Review settlement agreements for hidden clauses",
      "Verify payment amounts including all line items and code upgrades",
      "Coordinate with trusted contractors (no kickbacks, just vetted pros)",
      "Ensure proper claim closure for future protection",
      "Follow-up support even after settlement",
    ],
    dark: false,
  },
];

/* ------------------------------------------------------------------ */
/*  Claim Types Data                                                   */
/* ------------------------------------------------------------------ */

const CLAIM_TYPES = [
  {
    icon: CloudLightning,
    title: "Storm & Hail Damage",
    items: [
      "Roof damage from hail or wind",
      "Siding and exterior damage",
      "Window and door damage",
      "Gutter and downspout damage",
    ],
  },
  {
    icon: Wind,
    title: "Wind Damage",
    items: [
      "Roof structure damage",
      "Fence and outbuilding damage",
      "Tree damage to structures",
      "Debris impact damage",
    ],
  },
  {
    icon: Droplets,
    title: "Water Damage",
    items: [
      "Burst pipes and plumbing failures",
      "Roof leaks and water intrusion",
      "Foundation water damage",
      "Mold from covered water damage",
    ],
  },
  {
    icon: Flame,
    title: "Fire & Smoke Damage",
    items: [
      "Structural fire damage",
      "Smoke and soot damage",
      "Contents and personal property",
      "Additional living expenses",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Other Covered Losses",
    items: [
      "Vandalism",
      "Theft",
      "Lightning strikes",
      "Fallen trees or objects",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Why Process Works Data                                             */
/* ------------------------------------------------------------------ */

const PROCESS_REASONS = [
  {
    icon: Eye,
    title: "We Find Damage Others Miss",
    description:
      "Insurance adjusters spend 20–30 minutes on your property. We spend hours. We typically find 2–5X more covered damage than their initial assessment.",
  },
  {
    icon: Languages,
    title: "We Speak Their Language",
    description:
      "Insurance policies are written in complex legal language designed to confuse. We speak it fluently — we know which provisions to cite, how to reframe claims, and when they're wrong.",
  },
  {
    icon: Handshake,
    title: "You Only Pay If We Win",
    description:
      "You pay $0 upfront. We only get paid if we increase your settlement. If we don't get you more money, you pay us nothing.",
  },
];

/* ------------------------------------------------------------------ */
/*  Differentiators Data                                               */
/* ------------------------------------------------------------------ */

const DIFFERENTIATORS = [
  { icon: Shield, title: "Former Insurance Industry Insiders", description: "Insider knowledge is your advantage." },
  { icon: Trophy, title: "100+ Successful Claims", description: "Experience with even complex claims." },
  { icon: DollarSign, title: "$35K–$60K Average Increase", description: "3–5X more than initial offers." },
  { icon: Clock, title: "Fast Resolution", description: "Most claims settled in 90 days." },
  { icon: FileCheck, title: "Complete Transparency", description: "No jargon, no surprises, no hidden fees." },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ServicesContent() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !lineRef.current) return;

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 60%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    },
    { scope: timelineRef }
  );

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center bg-forest-950 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-forest-600/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gold-500/8 blur-3xl" />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="gold" className="mb-6">
              <Shield className="h-3.5 w-3.5" />
              Our Proven Process
            </Badge>
            <h1 className="font-display text-4xl font-bold leading-tight text-cream-50 sm:text-5xl md:text-6xl">
              How We Help Homeowners Get The Settlement They Deserve
            </h1>
            <p className="mt-6 text-lg text-cream-200/60">
              Our proven process takes you from lowball offer to full settlement,
              while you focus on getting your life back to normal.
            </p>
          </div>
        </Container>
      </section>

      {/* 5-Step Process */}
      <div ref={timelineRef} id="process">
        {PROCESS_STEPS.map((step, i) => (
          <section
            key={step.number}
            className={step.dark ? "bg-forest-950 py-20 md:py-28" : "bg-cream-100 py-20 md:py-28"}
          >
            <Container>
              <div className="mx-auto max-w-4xl text-center">
                <FadeIn>
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        step.dark
                          ? "bg-gold-500/10 border border-gold-500/20"
                          : "bg-forest-900/5 border border-forest-900/10"
                      }`}
                    >
                      <step.icon
                        className={`h-5 w-5 ${step.dark ? "text-gold-400" : "text-forest-700"}`}
                      />
                    </div>
                    <span
                      className={`font-display text-sm font-bold uppercase tracking-wider ${
                        step.dark ? "text-gold-500/60" : "text-gold-600/60"
                      }`}
                    >
                      Step {step.number}
                    </span>
                  </div>

                  <h2
                    className={`font-display text-3xl font-bold sm:text-4xl ${
                      step.dark ? "text-cream-50" : "text-forest-900"
                    }`}
                  >
                    {step.title}
                  </h2>

                  <p
                    className={`mt-4 text-lg ${
                      step.dark ? "text-cream-200/60" : "text-forest-800/70"
                    }`}
                  >
                    {step.description}
                  </p>
                </FadeIn>

                {/* Points list */}
                <StaggerChildren className="mt-8 inline-flex flex-col space-y-3" stagger={0.06}>
                  {step.points.map((point, j) => (
                    <StaggerItem key={j}>
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            step.dark
                              ? "bg-gold-500/15 border border-gold-500/30"
                              : "bg-forest-700/10 border border-forest-700/20"
                          }`}
                        >
                          <Check
                            className={`h-3 w-3 ${step.dark ? "text-gold-400" : "text-forest-700"}`}
                          />
                        </div>
                        <p
                          className={`text-sm leading-relaxed ${
                            step.dark ? "text-cream-200/70" : "text-forest-800/70"
                          }`}
                        >
                          {point}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>

                {/* Highlight */}
                {step.highlight && (
                  <FadeIn delay={0.2} className="mt-6">
                    <div
                      className={`rounded-xl p-4 ${
                        step.dark
                          ? "bg-gold-500/5 border border-gold-500/15"
                          : "bg-gold-500/5 border border-gold-600/15"
                      }`}
                    >
                      <p className={`text-sm font-semibold ${step.dark ? "text-gold-400" : "text-gold-600"}`}>
                        {step.highlight}
                      </p>
                    </div>
                  </FadeIn>
                )}

                {/* Comparison block (Step 2) */}
                {step.comparison && (
                  <FadeIn delay={0.25} className="mt-8">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
                        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-red-400/80">
                          Their Approach
                        </p>
                        <p className={step.dark ? "text-cream-200/60 text-sm" : "text-forest-800/60 text-sm"}>
                          {step.comparison.them}
                        </p>
                      </div>
                      <div
                        className={`rounded-2xl border p-5 ${
                          step.dark
                            ? "border-gold-500/20 bg-gold-500/5"
                            : "border-gold-600/20 bg-gold-500/5"
                        }`}
                      >
                        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-gold-500">
                          Our Approach
                        </p>
                        <p className={step.dark ? "text-cream-200/60 text-sm" : "text-forest-800/60 text-sm"}>
                          {step.comparison.us}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                )}

                {/* Note */}
                {step.note && (
                  <FadeIn delay={0.15} className="mt-4">
                    <p className={`text-sm italic ${step.dark ? "text-cream-200/40" : "text-forest-700/50"}`}>
                      {step.note}
                    </p>
                  </FadeIn>
                )}

                {/* CTA */}
                {step.cta && (
                  <FadeIn delay={0.2} className="mt-8">
                    <CTAButton />
                  </FadeIn>
                )}
              </div>
            </Container>
          </section>
        ))}
      </div>

      {/* Claim Types */}
      <section className="bg-forest-900 py-24 md:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-cream-50 sm:text-4xl md:text-5xl">
              Types Of Claims We Handle
            </h2>
            <p className="mt-4 text-cream-200/60">
              We specialize in property damage claims for homeowners.
            </p>
          </FadeIn>

          <StaggerChildren
            className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.08}
          >
            {CLAIM_TYPES.map((type) => (
              <StaggerItem key={type.title}>
                <Card variant="glass" className="h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 border border-gold-500/20">
                    <type.icon className="h-5 w-5 text-gold-400" />
                  </div>
                  <h3 className="text-lg font-bold text-cream-100">
                    {type.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {type.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-cream-200/60"
                      >
                        <div className="h-1 w-1 rounded-full bg-gold-500/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn delay={0.3} className="mt-12 text-center">
            <CTAButton />
          </FadeIn>
        </Container>
      </section>

      {/* Why Our Process Works */}
      <section className="bg-cream-100 py-24 md:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-forest-900 sm:text-4xl md:text-5xl">
              Why Our Process Gets Better Results
            </h2>
          </FadeIn>

          <StaggerChildren
            className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
            stagger={0.1}
          >
            {PROCESS_REASONS.map((reason) => (
              <StaggerItem key={reason.title}>
                <Card variant="light" className="h-full text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-900/5 border border-forest-900/10">
                    <reason.icon className="h-6 w-6 text-forest-700" />
                  </div>
                  <h3 className="text-lg font-bold text-forest-900">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-800/60">
                    {reason.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </Container>
      </section>

      {/* What Makes S2S Different */}
      <section className="bg-forest-950 py-24 md:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-cream-50 sm:text-4xl md:text-5xl">
              What Makes S2S Claims Different
            </h2>
          </FadeIn>

          <div className="mx-auto mt-16 max-w-4xl space-y-4">
            {DIFFERENTIATORS.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="flex items-center gap-5 rounded-2xl border border-forest-600/20 bg-forest-800/30 px-6 py-5 transition-colors hover:border-gold-500/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 border border-gold-500/20">
                    <item.icon className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream-100">
                      {item.title}
                    </h3>
                    <p className="text-sm text-cream-200/50">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
