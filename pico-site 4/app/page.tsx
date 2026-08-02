import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Why } from "@/components/sections/Why";
import { MeetPico } from "@/components/sections/MeetPico";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { Community } from "@/components/sections/Community";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Problem />
        <Why />
        <MeetPico />
        <Features />
        <HowItWorks />
        <Benefits />
        <Community />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
