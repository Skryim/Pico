import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const steps = [
  {
    num: "01",
    title: "Plug in like any mouse",
    body: "Pico works immediately as your pointer — nothing to configure before you start using him normally.",
  },
  {
    num: "02",
    title: "He watches your patterns",
    body: "Over the first few sessions, Pico learns which repeated actions are safe to take off your plate.",
  },
  {
    num: "03",
    title: "He starts carrying some of it",
    body: "Small tasks quietly shift onto Pico. You keep full control, and he keeps getting better with every update.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-[70px] md:py-[110px]">
      <Container>
        <div className="mb-14 max-w-[600px]">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="text-[28px] md:text-[34px]">
            Set him down. He learns from there.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num}>
              <div className="mb-3.5 font-display text-sm font-bold tracking-[0.04em] text-coral">
                {step.num}
              </div>
              <h3 className="mb-2.5 text-[19px]">{step.title}</h3>
              <p className="text-[14.5px] text-ink-soft">{step.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
