import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Press kit",
  description: "Logo, brand colors, and boilerplate copy for anyone writing about Pico.",
};

const colors = [
  { name: "Pico blue", hex: "#2E8FD1", className: "bg-blue" },
  { name: "Coral", hex: "#E86A52", className: "bg-coral" },
  { name: "Peach", hex: "#F3D3A6", className: "bg-peach" },
  { name: "Cream", hex: "#FBEFDD", className: "bg-cream border border-ink/10" },
  { name: "Ink", hex: "#2B241D", className: "bg-ink" },
];

export default function PressKitPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Press kit"
          title="For anyone writing about Pico."
          subtitle="Logo, brand colors, and boilerplate copy you're free to use when covering us."
        />

        <section className="bg-surface py-[70px] md:py-[100px]">
          <Container className="mx-auto max-w-[760px]">
            <Eyebrow>Logo</Eyebrow>
            <div className="mb-4 flex items-center justify-center rounded-lg bg-peach-soft p-12">
              <Image src="/logo.png" alt="Pico logo" width={220} height={220} />
            </div>
            <a
              href="/logo.png"
              download
              className="text-sm font-semibold text-blue-dark"
            >
              Download logo (PNG) →
            </a>
          </Container>
        </section>

        <section className="py-[70px] md:py-[100px]">
          <Container className="mx-auto max-w-[760px]">
            <Eyebrow>Brand colors</Eyebrow>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
              {colors.map((color) => (
                <div key={color.name}>
                  <div className={`mb-2 h-20 rounded-md ${color.className}`} />
                  <p className="text-sm font-medium text-ink">{color.name}</p>
                  <p className="text-xs text-ink-faint">{color.hex}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-surface py-[70px] md:py-[100px]">
          <Container className="mx-auto max-w-[760px]">
            <Eyebrow>Boilerplate</Eyebrow>
            <p className="text-lg leading-relaxed text-ink-soft">
              Pico creates portable AI workplace companions that automate
              repetitive tasks while providing emotional support. Unlike
              traditional AI software, Pico combines physical presence with
              personalized AI companionship, helping employees work faster
              while feeling less isolated. Pico is currently in concept
              stage.
            </p>
          </Container>
        </section>

        <section className="py-[70px] md:py-[100px]">
          <Container className="mx-auto max-w-[760px]">
            <Eyebrow>Media contact</Eyebrow>
            <p className="text-lg text-ink-soft">
              For interviews, images, or additional information, reach out
              through the{" "}
              <a href="/contact" className="font-semibold text-blue-dark">
                contact page
              </a>{" "}
              and select &quot;Press&quot; as the reason.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
