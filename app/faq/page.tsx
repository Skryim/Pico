import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Honest answers about what Pico is, what stage he's at, and how he'll work.",
};

const faqs = [
  {
    question: "Is Pico for sale right now?",
    answer:
      "No. Pico is a concept today, not a shipping product. This site exists to share where we're headed and to build the waitlist for when that changes.",
  },
  {
    question: "Does Pico actually work as a real mouse?",
    answer:
      "That's the core idea — Pico functions as your everyday computer mouse, with the AI companionship layered on top rather than replacing anything you already rely on.",
  },
  {
    question: "What kinds of tasks can he automate?",
    answer:
      "The repetitive, low-judgment parts of your workflow — the same clicks and handoffs you find yourself repeating. He learns these from your own patterns rather than arriving pre-programmed for a specific job.",
  },
  {
    question: "Will he always ask before automating something?",
    answer:
      "Yes. Pico surfaces what he's noticed and asks first. Nothing gets automated without your approval, and you can hand any task back to yourself whenever you want.",
  },
  {
    question: "How does the emotional support part actually work?",
    answer:
      "Through presence more than conversation — an expressive mouth that reacts to you, subtle timing around encouragement, and simply being consistently there through long sessions, rather than a chat window you have to open.",
  },
  {
    question: "What will pricing look like?",
    answer:
      "Not decided yet, since the hardware itself is still a concept. The plan is a physical device plus an ongoing subscription for software updates and support, but real numbers will come once we're closer to launch.",
  },
  {
    question: "When will Pico actually launch?",
    answer:
      "We don't have a date yet. Progress and any real timeline updates go to the waitlist first, before anywhere else.",
  },
  {
    question: "How is my data handled?",
    answer:
      "We haven't finalized data handling for a product that doesn't exist yet — but privacy-by-design is one of our starting principles, and we'll publish a real policy well before anything ships.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero eyebrow="FAQ" title="Honest answers, even at concept stage." />

        <section className="bg-surface py-[60px] md:py-[90px]">
          <Container className="mx-auto max-w-[760px]">
            <Accordion items={faqs} />
          </Container>
        </section>

        <section className="py-[70px] text-center md:py-[100px]">
          <Container className="mx-auto max-w-[560px]">
            <h2 className="mb-5 text-[28px] md:text-[32px]">
              Still have a question?
            </h2>
            <p className="mb-8 text-lg text-ink-soft">
              Reach out directly — we read every message ourselves.
            </p>
            <Button href="/contact">Contact us</Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
