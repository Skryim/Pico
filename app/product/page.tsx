import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PicoCharacter } from "@/components/pico/PicoCharacter";
import { PrototypeGallery } from "@/components/sections/PrototypeGallery";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Pico is a mouse-shaped AI companion — automating repetitive work and offering quiet companionship, right from under your hand.",
};

const comparisons = [
  {
    title: "Productivity tools",
    body: "Automate tasks. Track output. Never notice how you're actually doing.",
  },
  {
    title: "Companionship apps",
    body: "Offer conversation and comfort, but do nothing to lighten your workload.",
  },
  {
    title: "Pico",
    body: "Automates the repetitive parts of your day and stays with you through the rest, in one small object.",
    highlight: true,
  },
];

const expressions = [
  { name: "Focused", body: "A relaxed, steady mouth while you're deep in work." },
  { name: "Idle", body: "A softer, quieter curve when you've stepped away for a while." },
  { name: "Encouraging", body: "A brief, warmer smile before a task you've been putting off." },
];

export default function ProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="pb-[50px] pt-[70px] md:pb-[70px] md:pt-[90px]">
          <Container className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Eyebrow>The product</Eyebrow>
              <h1 className="mb-5 text-[34px] leading-tight md:text-[48px]">
                A mouse.
                <br />
                And also, somehow, not just a mouse.
              </h1>
              <p className="mb-8 max-w-[460px] text-lg text-ink-soft">
                Pico works exactly like the mouse you already use — same
                clicks, same scroll, same feel under your hand. The
                difference is what he does with the parts of your day you
                don&apos;t want to do yourself.
              </p>
              <Button href="/#signup">Join the waitlist</Button>
            </div>
            <div className="flex min-h-[360px] items-center justify-center rounded-lg bg-peach-soft p-10">
              <PicoCharacter size={240} />
            </div>
          </Container>
        </section>

        <section className="bg-surface py-[70px] md:py-[100px]">
          <Container>
            <div className="mb-14 max-w-[600px]">
              <Eyebrow>Why he's different</Eyebrow>
              <h2 className="text-[28px] md:text-[34px]">
                Most tools pick one job. Pico does both.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {comparisons.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-md p-7 ${
                    item.highlight
                      ? "border-2 border-blue bg-cream"
                      : "border border-ink/[0.06] bg-cream"
                  }`}
                >
                  {item.highlight && (
                    <span className="mb-3 inline-block rounded-full bg-blue px-3 py-1 text-xs font-semibold text-white">
                      Pico
                    </span>
                  )}
                  {!item.highlight && <h3 className="mb-2.5 text-lg">{item.title}</h3>}
                  <p className="text-[14.5px] text-ink-soft">{item.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-[70px] md:py-[100px]">
          <Container className="grid items-center gap-[60px] md:grid-cols-[0.9fr_1.1fr]">
            <div className="flex items-center justify-center rounded-lg bg-peach p-10">
              <PicoCharacter size={200} />
            </div>
            <div>
              <Eyebrow>The face</Eyebrow>
              <h2 className="mb-5 text-[28px] md:text-[34px]">
                A mouth, not a screen.
              </h2>
              <p className="mb-8 max-w-[480px] text-[17px] text-ink-soft">
                Pico doesn&apos;t have a display to check or notifications
                to manage. There&apos;s no pair of eyes tracking you, either
                — his whole expressive range lives in the curve of one
                small mouth. Enough to feel present, never enough to
                demand your attention.
              </p>
              <div className="space-y-5">
                {expressions.map((expr) => (
                  <div key={expr.name} className="flex gap-4 border-t border-ink/[0.08] pt-4">
                    <span className="w-28 flex-shrink-0 font-display text-sm font-semibold text-blue-dark">
                      {expr.name}
                    </span>
                    <span className="text-sm text-ink-soft">{expr.body}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <PrototypeGallery />

        <section className="bg-blue-deep py-[70px] text-white md:py-[100px]">
          <Container className="mx-auto max-w-[640px] text-center">
            <Eyebrow className="mx-auto text-peach-soft">Stage</Eyebrow>
            <h2 className="mb-5 text-[28px] text-white md:text-[32px]">
              Pico is a concept today.
            </h2>
            <p className="mb-8 text-lg text-white/75">
              We're not selling hardware yet — we're building it in the
              open, with the people who'll actually use it. Software
              updates and support are planned as an ongoing subscription
              once Pico ships.
            </p>
            <Button href="/#signup">Get notified at launch</Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
