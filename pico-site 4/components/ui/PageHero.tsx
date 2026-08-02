import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pb-[50px] pt-[70px] md:pb-[70px] md:pt-[90px]">
      <Container className="mx-auto max-w-[760px] text-center">
        <Eyebrow className="mx-auto">{eyebrow}</Eyebrow>
        <h1 className="mb-5 text-[34px] leading-tight md:text-[48px]">{title}</h1>
        {subtitle && (
          <p className="mx-auto max-w-[560px] text-lg text-ink-soft">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}
