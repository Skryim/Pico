import { Container } from "@/components/ui/Container";

const stats = [
  { num: "1", label: "Companion per desk, not per license seat" },
  { num: "0", label: "Apps to install for your team to feel it" },
  { num: "24/7", label: "Reliable presence, not just office hours" },
  { num: "∞", label: "Continuous updates through subscription" },
];

export function Benefits() {
  return (
    <section className="bg-blue-deep py-[70px] text-white md:py-[110px]">
      <Container>
        <span className="mb-3.5 block font-display text-[13px] font-semibold uppercase tracking-[0.06em] text-peach-soft">
          For teams and studios
        </span>
        <h2 className="mb-4 text-[28px] leading-tight text-white md:text-[34px]">
          Happier employees build
          <br className="hidden md:block" /> stronger studios.
        </h2>
        <p className="mb-[50px] max-w-[560px] text-lg text-white/75">
          Pico was designed for the people who spend the most hours at a
          screen — creative agencies, game studios, and design teams who
          already know that culture is a retention strategy, not a poster on
          the wall.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-t-[1.5px] border-white/20 pt-[18px]">
              <div className="font-display text-[30px] font-bold text-peach-soft">
                {stat.num}
              </div>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
