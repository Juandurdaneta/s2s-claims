import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Free Claim Review",
  description:
    "Schedule your free, no-obligation insurance claim review. Fill out the form and our licensed public adjusters will assess your situation and show you exactly how much you're owed.",
};

export default function ContactPage() {
  return <ContactContent />;
}
