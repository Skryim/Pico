import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Community() {
  return (
    <section id="community" className="bg-surface py-[70px] md:py-[110px]">
      <Container>
        <div className="mb-14 max-w-[600px]">
          <Eyebrow>Join in</Eyebrow>
          <h2 className="text-[28px] md:text-[34px]">
            Built with our users, from day one.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-md bg-peach-soft p-9">
            <h3 className="mb-2.5 text-xl">Community</h3>
            <p className="mb-5 text-[14.5px] text-ink-soft">
              Follow along as Pico goes from concept to desk — early builds,
              decisions, and a say in what he becomes.
            </p>
            <Link href="/community" className="text-sm font-semibold text-blue-dark">
              Join the community →
            </Link>
          </div>
          <div className="rounded-md bg-peach-soft p-9">
            <h3 className="mb-2.5 text-xl">Questions</h3>
            <p className="mb-5 text-[14.5px] text-ink-soft">
              Wondering how Pico handles privacy, hardware, or pricing down
              the line? We&apos;ve written out the honest answers.
            </p>
            <Link href="/faq" className="text-sm font-semibold text-blue-dark">
              Read the FAQ →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
