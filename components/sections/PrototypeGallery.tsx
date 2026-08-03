import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PrototypeGallery() {
  return (
    <section className="bg-surface py-[70px] md:py-[100px]">
      <Container className="mx-auto max-w-[900px] text-center">
        <Eyebrow className="mx-auto">Prototype</Eyebrow>
        <h2 className="mb-5 text-[28px] md:text-[34px]">
          Early concept renders.
        </h2>
        <p className="mx-auto mb-10 max-w-[560px] text-[17px] text-ink-soft">
          These are early visualizations, not final hardware — we're still
          exploring form, materials, and how he sits on a desk. Nothing
          here is manufactured or for sale yet.
        </p>
        <div className="overflow-hidden rounded-lg bg-peach-soft">
          <Image
            src="/prototype-concepts.png"
            alt="A grid of ten early concept renders of Pico, exploring his form on a desk, in a carrying pouch, in hand, and on a wireless charging pad"
            width={1402}
            height={1122}
            className="h-auto w-full"
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
      </Container>
    </section>
  );
}
