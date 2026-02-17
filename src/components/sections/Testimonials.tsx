"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Testimonial coming soon — real client results from a homeowner who received their full settlement.",
    name: "Client Name",
    location: "Texas Homeowner",
    rating: 5,
  },
  {
    quote: "Testimonial coming soon — real client results from a homeowner who had their denied claim reopened.",
    name: "Client Name",
    location: "Texas Homeowner",
    rating: 5,
  },
  {
    quote: "Testimonial coming soon — real client results from a homeowner who received 4X their initial offer.",
    name: "Client Name",
    location: "Texas Homeowner",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-forest-900 py-24 md:py-32 lg:py-40">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-cream-50 sm:text-4xl md:text-5xl">
            Real Results From Texas Homeowners
          </h2>
        </FadeIn>

        <StaggerChildren
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
          stagger={0.1}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={i}>
              <div className="relative h-full rounded-2xl border border-forest-600/20 bg-forest-800/40 p-6 backdrop-blur-sm">
                {/* Quote mark */}
                <Quote className="mb-4 h-8 w-8 text-gold-500/30" />

                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-gold-500 text-gold-500"
                    />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-sm italic leading-relaxed text-cream-200/60">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-forest-700 border border-forest-600/50" />
                  <div>
                    <p className="text-sm font-semibold text-cream-200/40">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-cream-200/30">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
