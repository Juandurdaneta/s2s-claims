"use client";

import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { FadeIn } from "@/components/animations/FadeIn";
import { Shield, User } from "lucide-react";

export function About() {
  return (
    <section className="relative bg-cream-100 py-24 md:py-32 lg:py-40">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-forest-900 sm:text-4xl md:text-5xl">
            <span className="text-gold-600">90%</span> Of Homeowners Will Never
            Get Their Full Settlement Without The Right Help
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-forest-800/70">
            Many homeowners will never get what they&apos;re actually owed. It&apos;s
            not their fault — they just haven&apos;t been taught how insurance
            companies really operate or what tactics adjusters use to minimize
            payouts.
          </p>
        </FadeIn>

        {/* Founder Story - Split Layout */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            {/* Left - Text */}
            <FadeIn direction="left">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-gold-500/10 border border-gold-500/20 px-4 py-1.5">
                  <Shield className="h-4 w-4 text-gold-600" />
                  <span className="text-sm font-medium text-gold-600">
                    Former Insurance Insider
                  </span>
                </div>

                <p className="text-lg leading-relaxed text-forest-800/80">
                  Here&apos;s what makes us different: Our founder,{" "}
                  <span className="font-bold text-forest-900">Paden Wright</span>,
                  had director level responsibilities and was a field captain at
                  an insurance adjusting firm.
                </p>

                <p className="text-lg leading-relaxed text-forest-800/80">
                  He saw firsthand how claims are designed to fail the
                  policyholder. How adjusters are trained to find reasons to deny
                  or minimize coverage. How guidelines are written to give you the
                  bottom dollar amount while staying technically &ldquo;legal.&rdquo;
                </p>

                <p className="text-lg leading-relaxed text-forest-800/80">
                  That&apos;s why he became a public adjuster — to fight{" "}
                  <span className="font-bold text-gold-600">FOR</span> homeowners
                  instead of against them.
                </p>

                <p className="mt-2 font-display text-xl italic leading-relaxed text-forest-900/80">
                  &ldquo;He knows exactly how the system works because he was
                  part of it.&rdquo;
                </p>
              </div>
            </FadeIn>

            {/* Right - Visual/Quote */}
            <FadeIn direction="right">
              <div className="relative">
                {/* Profile Card */}
                <div className="rounded-3xl border border-cream-300/60 bg-white p-8 shadow-xl shadow-black/5">
                  {/* Avatar placeholder */}
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-forest-700 to-forest-900">
                    <User className="h-10 w-10 text-gold-400" />
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-forest-900">
                      Paden Wright
                    </h3>
                    <p className="text-sm font-medium text-gold-600">
                      Founder, S2S Claims
                    </p>
                    <p className="mt-1 text-xs text-forest-700/60">
                      Former Director-Level, Insurance Adjusting Firm
                    </p>
                  </div>

                  {/* Mini stats */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-cream-100 p-3 text-center">
                      <div className="font-display text-2xl font-bold text-forest-900">
                        100+
                      </div>
                      <div className="text-xs text-forest-700/60">
                        Clients Helped
                      </div>
                    </div>
                    <div className="rounded-xl bg-cream-100 p-3 text-center">
                      <div className="font-display text-2xl font-bold text-forest-900">
                        3–5X
                      </div>
                      <div className="text-xs text-forest-700/60">
                        More Than Initial
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gold-500/10 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-forest-600/10 blur-2xl" />
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.2} className="mt-16 text-center">
          <CTAButton />
        </FadeIn>
      </Container>
    </section>
  );
}
