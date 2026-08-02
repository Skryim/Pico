import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PicoCharacter } from "@/components/pico/PicoCharacter";

export function Hero() {
  return (
    <section className="pb-[60px] pt-[70px] md:pt-[90px]">
      <Container className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="mb-3.5 block font-display text-[13px] font-semibold uppercase tracking-[0.06em] text-blue-dark">
            The first physical AI coworker
          </span>
          <h1 className="mb-[22px] text-[38px] leading-[1.1] md:text-[56px] md:leading-[1.08]">
            You&apos;re not
            <br />
            working <span className="text-blue">alone.</span>
          </h1>
          <p className="mb-[34px] max-w-[440px] text-lg text-ink-soft">
            Pico is a tiny AI companion that lives on your desk, works the
            repetitive parts of your day, and stays with you while you do
            the rest.
          </p>
          <div className="mb-[18px] flex flex-wrap gap-3.5">
            <Button href="/#signup">Join the waitlist</Button>
            <Button href="/#meet" variant="ghost">
              Meet Pico
            </Button>
          </div>
          <span className="text-[13px] text-ink-faint">
            Concept stage — no purchase, just an early look.
          </span>
        </div>

        <div className="relative flex min-h-[420px] items-center justify-center rounded-lg bg-peach-soft p-10 md:p-[50px]">
          <div className="pointer-events-none absolute inset-[18px] rounded-[18px] border-[1.5px] border-dashed border-ink/[0.12]" />
          <PicoCharacter size={260} interactive className="relative z-10" />
        </div>
      </Container>
    </section>
  );
}
