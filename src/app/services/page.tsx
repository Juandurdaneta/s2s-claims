import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Services — How We Help You Get Your Full Settlement",
  description:
    "Learn about our proven 5-step process that takes homeowners from lowball offers to full settlements. Comprehensive damage assessment, expert negotiation, and insider knowledge.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
