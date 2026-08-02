import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pico was born from one simple belief: work feels less lonely when someone is there with you. Learn our mission, vision, and values.",
};

const values = [
  {
    title: "Human first",
    body: "We create AI companions that support people's wellbeing, not just productivity.",
  },
  {
    title: "Always there",
    body: "Reliable companionship whenever users need support.",
  },
  {
    title: "Continuous evolution",
    body: "Constant AI improvements through updates and smarter interactions.",
  },
  {
    title: "Built with our users",
    body: "Customer feedback continuously shapes Pico.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="About Pico"
          title="Work shouldn't feel like something you do alone."
          subtitle="Pico was born from a simple observation about how modern work actually feels — and one belief about what would make it better."
        />

        <section className="bg-surface py-[70px] md:py-[100px]">
          <Container className="mx-auto max-w-[720px]">
            <Eyebrow>The story</Eyebrow>
            <h2 className="mb-6 text-[28px] md:text-[32px]">
              We empathize with workers who struggle to maintain a healthy
              work-life balance.
            </h2>
            <div className="space-y-5 text-lg text-ink-soft">
              <p>
                The journey from starting a job to building a successful
                career can be lonely and stressful. Many workplaces focus
                only on performance, leaving employees without emotional
                support.
              </p>
              <p>
                Over time, pressure accumulates, increasing burnout,
                disengagement, and staff turnover.
              </p>
              <p className="font-display text-xl font-semibold text-ink">
                Pico was born from one simple belief: work feels less
                lonely when someone is there with you.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-[70px] md:py-[100px]">
          <Container className="grid gap-10 md:grid-cols-2">
            <div className="rounded-lg bg-peach-soft p-9 md:p-10">
              <Eyebrow>Mission</Eyebrow>
              <p className="font-display text-2xl leading-snug text-ink">
                To redefine the workplace by making AI a trusted companion
                that helps people work better and feel less alone.
              </p>
            </div>
            <div className="rounded-lg bg-blue-deep p-9 text-white md:p-10">
              <span className="mb-3.5 block font-display text-[13px] font-semibold uppercase tracking-[0.06em] text-peach-soft">
                Vision
              </span>
              <p className="font-display text-2xl leading-snug text-white">
                A world where AI companions become trusted coworkers,
                supporting people through both productivity and emotional
                connection.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-surface py-[70px] md:py-[100px]">
          <Container>
            <div className="mb-14 max-w-[600px]">
              <Eyebrow>What we stand for</Eyebrow>
              <h2 className="text-[28px] md:text-[34px]">Core values</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-md border border-ink/[0.06] bg-cream p-7">
                  <h3 className="mb-2.5 text-lg">{value.title}</h3>
                  <p className="text-[14.5px] text-ink-soft">{value.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-[70px] text-center md:py-[100px]">
          <Container className="mx-auto max-w-[560px]">
            <h2 className="mb-5 text-[28px] md:text-[32px]">
              We&apos;re building this with the people who&apos;ll use it.
            </h2>
            <p className="mb-8 text-lg text-ink-soft">
              Join the waitlist to follow along as Pico goes from concept to
              desk, and have a say in what he becomes.
            </p>
            <Button href="/#signup">Join the waitlist</Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
