import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const shots = [
  {
    src: "/pico-prototype-desk-side.png",
    alt: "Pico on a desk beside a laptop, plugged in, three-quarter side view",
    caption: "At the desk",
  },
  {
    src: "/pico-prototype-front.png",
    alt: "Pico viewed straight on, showing his blue cap and mouth",
    caption: "Face on",
  },
  {
    src: "/pico-prototype-profile.png",
    alt: "Pico in clean side profile against a plain background",
    caption: "Side profile",
  },
  {
    src: "/pico-prototype-desk-lifestyle.png",
    alt: "Pico on a desk with a laptop and mug softly blurred in the background",
    caption: "In context",
  },
];

export function PrototypeGallery() {
  return (
    <section className="bg-surface py-[70px] md:py-[100px]">
      <Container className="mx-auto max-w-[900px] text-center">
        <Eyebrow className="mx-auto">Prototype</Eyebrow>
        <h2 className="mb-5 text-[28px] md:text-[34px]">
          Early concept renders.
        </h2>
        <p className="mx-auto mb-10 max-w-[560px] text-[17px] text-ink-soft">
          These are early visualizations, not final hardware — we&apos;re
          still exploring form, materials, and how he sits on a desk.
          Nothing here is manufactured or for sale yet.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {shots.map((shot) => (
            <figure
              key={shot.src}
              className="group overflow-hidden rounded-lg bg-peach-soft"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 440px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-4 py-3 text-left text-sm font-medium text-ink-soft">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
