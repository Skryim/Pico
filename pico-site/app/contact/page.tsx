import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out about Pico — press, investors, careers, or general questions.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Contact"
          title="Say hello."
          subtitle="Press, investor, careers, or just curious — this goes to a real person, not a queue."
        />

        <section className="bg-surface py-[60px] md:py-[90px]">
          <Container className="mx-auto max-w-[640px]">
            <ContactForm />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
