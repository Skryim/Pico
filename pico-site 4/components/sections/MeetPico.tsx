import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PicoCharacter } from "@/components/pico/PicoCharacter";

const facts = [
  "Automates the repetitive parts of your workflow in the background.",
  "A simple light-based face that reacts to you, not a screen to manage.",
  "No app to open. He's already where your hand already is.",
];

export function MeetPico() {
  return (
    <section id="meet" className="bg-peach py-[70px] md:py-[110px]">
      <Container className="grid items-center gap-[60px] md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex items-center justify-center">
          <PicoCharacter size={220} />
        </div>
        <div>
          <Eyebrow>Meet Pico</Eyebrow>
          <h2 className="mb-[18px] text-[28px] leading-tight md:text-[38px]">
            He looks like a mouse.
            <br />
            He thinks like a coworker.
          </h2>
          <p className="mb-4 max-w-[460px] text-[17px] text-ink-soft">
            Pico sits under your hand exactly where a mouse would — because
            he is one. Every click and scroll works the way you&apos;re used
            to. What&apos;s different is what&apos;s happening underneath.
          </p>
          <div className="mt-[26px] flex flex-col gap-3.5">
            {facts.map((fact) => (
              <div key={fact} className="flex items-start gap-3 text-[15px] text-ink">
                <span className="mt-[7px] h-2 w-2 flex-shrink-0 rounded-full bg-coral" />
                {fact}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
