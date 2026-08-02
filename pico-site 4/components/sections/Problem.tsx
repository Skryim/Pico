import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Problem() {
  return (
    <section className="bg-surface py-[70px] md:py-[110px]">
      <Container className="mx-auto max-w-[760px] text-center">
        <Eyebrow className="mx-auto">The problem</Eyebrow>
        <h2 className="mb-5 text-[28px] leading-tight md:text-[34px]">
          Overtime workers don&apos;t always need
          <br className="hidden md:block" /> another productivity tool.
        </h2>
        <p className="text-lg text-ink-soft">
          Sometimes they need someone who stays with them while they work.
          Most software only measures what you produce — nothing notices
          how you&apos;re doing while you produce it.
        </p>
      </Container>
    </section>
  );
}
