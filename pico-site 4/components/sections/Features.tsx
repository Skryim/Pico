import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CheckCircle2, Gauge, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Automates the busywork",
    body: "Repetitive clicks, forms, and handoffs happen quietly in the background, so your hours go toward the work only you can do.",
  },
  {
    icon: Gauge,
    title: "Keeps you motivated",
    body: "A gentle presence through long stretches — a nudge to stretch, a beat of encouragement before a hard task, nothing intrusive.",
  },
  {
    icon: HeartHandshake,
    title: "Makes work feel less alone",
    body: "Not a chatbot pretending to care — a companion that's simply, reliably there, session after session.",
  },
];

export function Features() {
  return (
    <section className="bg-surface py-[70px] md:py-[110px]">
      <Container>
        <div className="mb-14 max-w-[600px]">
          <Eyebrow>What he does</Eyebrow>
          <h2 className="text-[28px] md:text-[34px]">
            One small coworker, three jobs.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-md border border-ink/[0.06] bg-cream p-7"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue">
                <Icon size={20} color="white" strokeWidth={2.4} />
              </div>
              <h3 className="mb-2.5 text-lg">{title}</h3>
              <p className="text-[14.5px] text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
