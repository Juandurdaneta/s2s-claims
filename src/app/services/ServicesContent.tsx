"use client";

import { useRef, Fragment } from "react";
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
/*  Step Panel Content (shared between GSAP and reduced-motion modes)  */
/* ------------------------------------------------------------------ */

type ProcessStep = (typeof PROCESS_STEPS)[number];

function StepPanel({ step }: { step: ProcessStep }) {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-2 md:mb-3 lg:mb-4">
        <div
          className={`flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl ${
            step.dark
              ? "bg-gold-500/10 border border-gold-500/20"
              : "bg-forest-900/5 border border-forest-900/10"
          }`}
        >
          <step.icon
            className={`h-4 w-4 md:h-5 md:w-5 ${step.dark ? "text-gold-400" : "text-forest-700"}`}
          />
        </div>
        <span
          className={`font-display text-xs md:text-sm font-bold uppercase tracking-wider ${
            step.dark ? "text-gold-500/60" : "text-gold-600/60"
          }`}
        >
          Step {step.number}
        </span>
      </div>

      {/* Title */}
      <h2
        className={`font-display text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl ${
          step.dark ? "text-cream-50" : "text-forest-900"
        }`}
      >
        {step.title}
      </h2>

      {/* Description */}
      <p
        className={`mt-2 md:mt-4 lg:mt-6 text-sm md:text-lg lg:text-xl ${
          step.dark ? "text-cream-200/60" : "text-forest-800/70"
        }`}
      >
        {step.description}
      </p>

      {/* Points list */}
      <div className="mt-3 md:mt-6 lg:mt-8 inline-flex flex-col space-y-1.5 md:space-y-3 lg:space-y-4">
        {step.points.map((point, j) => (
          <div key={j} className="flex items-start gap-2 md:gap-3">
            <div
              className={`mt-0.5 flex h-4 w-4 md:h-5 md:w-5 shrink-0 items-center justify-center rounded-full ${
                step.dark
                  ? "bg-gold-500/15 border border-gold-500/30"
                  : "bg-forest-700/10 border border-forest-700/20"
              }`}
            >
              <Check
                className={`h-2.5 w-2.5 md:h-3 md:w-3 ${step.dark ? "text-gold-400" : "text-forest-700"}`}
              />
            </div>
            <p
              className={`text-xs md:text-sm lg:text-base leading-relaxed ${
                step.dark ? "text-cream-200/70" : "text-forest-800/70"
              }`}
            >
              {point}
            </p>
          </div>
        ))}
      </div>

      {/* Highlight */}
      {"highlight" in step && step.highlight && (
        <div
          className={`mt-3 md:mt-6 lg:mt-8 rounded-xl p-3 md:p-4 lg:p-5 ${
            step.dark
              ? "bg-gold-500/5 border border-gold-500/15"
              : "bg-gold-500/5 border border-gold-600/15"
          }`}
        >
          <p
            className={`text-xs md:text-sm lg:text-base font-semibold ${
              step.dark ? "text-gold-400" : "text-gold-600"
            }`}
          >
            {step.highlight}
          </p>
        </div>
      )}

      {/* Comparison block (Step 2) */}
      {"comparison" in step && step.comparison && (
        <div className="mt-3 md:mt-6 lg:mt-8 grid gap-3 md:gap-4 lg:gap-5 md:grid-cols-2">
          <div className="rounded-xl md:rounded-2xl border border-red-500/20 bg-red-500/5 p-3 md:p-5">
            <p className="mb-1 md:mb-2 text-xs font-bold uppercase tracking-wider text-red-400/80">
              Their Approach
            </p>
            <p
              className={`text-xs md:text-sm lg:text-base ${
                step.dark ? "text-cream-200/60" : "text-forest-800/60"
              }`}
            >
              {step.comparison.them}
            </p>
          </div>
          <div
            className={`rounded-xl md:rounded-2xl border p-3 md:p-5 ${
              step.dark
                ? "border-gold-500/20 bg-gold-500/5"
                : "border-gold-600/20 bg-gold-500/5"
            }`}
          >
            <p className="mb-1 md:mb-2 text-xs font-bold uppercase tracking-wider text-gold-500">
              Our Approach
            </p>
            <p
              className={`text-xs md:text-sm lg:text-base ${
                step.dark ? "text-cream-200/60" : "text-forest-800/60"
              }`}
            >
              {step.comparison.us}
            </p>
          </div>
        </div>
      )}

      {/* Note */}
      {"note" in step && step.note && (
        <p
          className={`mt-3 md:mt-4 lg:mt-6 text-xs md:text-sm lg:text-base italic ${
            step.dark ? "text-cream-200/40" : "text-forest-700/50"
          }`}
        >
          {step.note}
        </p>
      )}

      {/* CTA */}
      {"cta" in step && step.cta && (
        <div className="mt-4 md:mt-8 lg:mt-10">
          <CTAButton />
        </div>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ServicesContent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const connectorRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !sectionRef.current || !bgRef.current) return;

      const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];
      const dots = dotRefs.current.filter(Boolean) as HTMLDivElement[];
      const connectors = connectorRefs.current.filter(
        Boolean
      ) as HTMLDivElement[];

      if (panels.length !== 5) return;

      // Initial states
      gsap.set(bgRef.current, {
        backgroundColor: PROCESS_STEPS[0].dark ? "#0A1A12" : "#F8F6F1",
      });

      panels.forEach((panel, i) => {
        gsap.set(panel, { autoAlpha: i === 0 ? 1 : 0, y: i === 0 ? 0 : 40 });
      });

      dots.forEach((dot, i) => {
        gsap.set(dot, {
          scale: i === 0 ? 1 : 0.85,
          opacity: i === 0 ? 1 : 0.35,
        });
      });

      connectors.forEach((connector) => {
        gsap.set(connector, { scaleX: 0 });
      });

      // Pinned scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end: "+=1200vh",
          scrub: 1,
          snap: {
            snapTo: 1 / 4,
            duration: { min: 0.3, max: 0.8 },
            ease: "power1.inOut",
          },
        },
      });

      // 4 transitions between 5 steps
      for (let i = 0; i < 4; i++) {
        const start = i;
        const nextStep = PROCESS_STEPS[i + 1];
        const toBg = nextStep.dark ? "#0A1A12" : "#F8F6F1";

        // Background color
        tl.to(
          bgRef.current,
          { backgroundColor: toBg, duration: 1, ease: "power2.inOut" },
          start
        );

        // Outgoing panel: fade out + slide up
        tl.to(
          panels[i],
          { autoAlpha: 0, y: -40, duration: 0.5, ease: "power2.in" },
          start
        );

        // Incoming panel: fade in + slide up into place
        tl.to(
          panels[i + 1],
          { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
          start + 0.35
        );

        // Step indicator: dim previous dot
        tl.to(
          dots[i],
          { scale: 0.85, opacity: 0.35, duration: 0.4 },
          start
        );

        // Step indicator: activate next dot
        tl.to(
          dots[i + 1],
          { scale: 1, opacity: 1, duration: 0.4 },
          start + 0.1
        );

        // Connector fill
        tl.to(connectors[i], { scaleX: 1, duration: 0.6 }, start);
      }
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
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
      {reducedMotion ? (
        /* Reduced motion: static stacked sections */
        <div id="process">
          {PROCESS_STEPS.map((step) => (
            <section
              key={step.number}
              className={
                step.dark
                  ? "bg-forest-950 py-20 md:py-28"
                  : "bg-cream-100 py-20 md:py-28"
              }
            >
              <Container>
                <div className="mx-auto max-w-4xl text-center">
                  <StepPanel step={step} />
                </div>
              </Container>
            </section>
          ))}
        </div>
      ) : (
        /* Animated: GSAP pinned scroll-reveal */
        <div ref={sectionRef} id="process" className="relative z-10">
          {/* Background layer for color transitions */}
          <div
            ref={bgRef}
            className="absolute inset-0"
            style={{ backgroundColor: "#F8F6F1" }}
          />

          {/* Content layer */}
          <div className="relative flex h-screen flex-col justify-center py-24">
            <Container>
              <div className="mx-auto max-w-4xl text-center">
                {/* Step Indicator */}
                <div className="mb-4 flex items-center justify-center md:mb-8">
                  {PROCESS_STEPS.map((step, i) => (
                    <Fragment key={step.number}>
                      <div
                        ref={(el) => {
                          dotRefs.current[i] = el;
                        }}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-xs font-bold text-forest-950 md:h-10 md:w-10 md:text-sm"
                      >
                        {step.number}
                      </div>
                      {i < 4 && (
                        <div className="relative mx-1 h-0.5 w-6 bg-gold-500/20 md:mx-2 md:w-10">
                          <div
                            ref={(el) => {
                              connectorRefs.current[i] = el;
                            }}
                            className="absolute inset-0 origin-left scale-x-0 bg-gold-500"
                          />
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>

                {/* Panel Stack — grid stacking so tallest panel sizes the container */}
                <div className="grid">
                  {PROCESS_STEPS.map((step, i) => (
                    <div
                      key={step.number}
                      ref={(el) => {
                        panelRefs.current[i] = el;
                      }}
                      className="flex flex-col justify-center"
                      style={{ gridArea: "1 / 1" }}
                    >
                      <StepPanel step={step} />
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        </div>
      )}

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
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/10 border border-gold-500/20">
                    <reason.icon className="h-6 w-6 text-gold-600" />
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
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-forest-600/20 bg-forest-800/30 px-6 py-5 text-center transition-colors hover:border-gold-500/20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/10 border border-gold-500/20">
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

          <FadeIn delay={0.3} className="mt-12 text-center">
            <CTAButton />
          </FadeIn>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
