import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Why() {
  return (
    <section className="py-[70px] md:py-[110px]">
      <Container className="mx-auto max-w-[720px] text-center">
        <Eyebrow className="mx-auto">Why Pico exists</Eyebrow>
        <h2 className="mb-5 text-[28px] leading-tight md:text-[34px]">
          Work feels less lonely
          <br className="hidden md:block" /> when someone is there with you.
        </h2>
        <p className="mb-3.5 text-lg text-ink-soft">
          The journey from starting a job to building a career can be quiet
          and isolating. Pressure builds. Focus turns into distance from the
          people around you. We built Pico from one simple belief — you
          shouldn&apos;t have to choose between getting things done and
          feeling okay while you do it.
        </p>
        <p className="mt-9 font-display text-xl font-semibold text-blue-dark md:text-[22px]">
          Your AI coworker is here.
        </p>
      </Container>
    </section>
  );
}
