import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From plugging Pico in to him quietly taking on your repetitive work — here's how the relationship actually builds over time.",
};

const steps = [
  {
    num: "01",
    title: "Plug in like any mouse",
    body: "No setup wizard, no account required to start. Pico works immediately as your pointer — you can use him exactly as you would any mouse from the first minute.",
  },
  {
    num: "02",
    title: "He watches your patterns",
    body: "Over your first sessions, Pico notices which actions you repeat — the same clicks, the same handoffs between tools, the same small chores that eat minutes without needing real judgment.",
  },
  {
    num: "03",
    title: "He asks before he acts",
    body: "Pico surfaces what he's noticed and asks whether to take it on. Nothing happens on your behalf without your say — you're always the one deciding what gets handed over.",
  },
  {
    num: "04",
    title: "He starts carrying some of it",
    body: "Approved tasks shift quietly onto Pico. You keep working the same way you always have; there's just slightly less of the repetitive part left for you to do.",
  },
  {
    num: "05",
    title: "He keeps getting better",
    body: "Software updates arrive over time, refining what Pico can take on and how well he reads the moments you actually want company rather than silence.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="How it works"
          title="Set him down. He learns from there."
          subtitle="Pico doesn't ask you to change how you work. He adapts to it, one small step at a time."
        />

        <section className="bg-surface py-[70px] md:py-[100px]">
          <Container className="mx-auto max-w-[760px]">
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-6 border-t border-ink/[0.08] pt-8 first:border-t-0 first:pt-0">
                  <div className="font-display text-2xl font-bold text-coral">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl">{step.title}</h3>
                    <p className="text-[15px] text-ink-soft">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-[70px] md:py-[100px]">
          <Container className="mx-auto max-w-[720px] text-center">
            <Eyebrow className="mx-auto">A note on control</Eyebrow>
            <h2 className="mb-5 text-[28px] md:text-[32px]">
              You approve everything Pico automates.
            </h2>
            <p className="text-lg text-ink-soft">
              Pico is built to earn trust gradually, not to assume it. He
              suggests, you decide, and you can hand tasks back to yourself
              at any time.
            </p>
          </Container>
        </section>

        <section className="bg-peach py-[70px] text-center md:py-[100px]">
          <Container className="mx-auto max-w-[560px]">
            <h2 className="mb-5 text-[28px] md:text-[32px]">
              Want to be there when he first ships?
            </h2>
            <p className="mb-8 text-lg text-ink-soft">
              Join the waitlist and we'll let you know the moment Pico is
              ready to leave the concept stage.
            </p>
            <Button href="/#signup">Join the waitlist</Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
