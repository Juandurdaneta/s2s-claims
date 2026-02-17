import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { PainPoints } from "@/components/sections/PainPoints";
import { About } from "@/components/sections/About";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { FreeReview } from "@/components/sections/FreeReview";
import { Guarantee } from "@/components/sections/Guarantee";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <PainPoints />
      <About />
      <WhatYouGet />
      <FreeReview />
      <Guarantee />
      <Testimonials />
      <WhyChooseUs />
      <div id="faq">
        <FAQ />
      </div>
      <FinalCTA />
    </>
  );
}
