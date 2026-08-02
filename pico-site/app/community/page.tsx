import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Lightbulb, Bell } from "lucide-react";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Pico is being built in the open, with the people who'll actually use him. Here's how to be part of shaping him.",
};

const ways = [
  {
    icon: Lightbulb,
    title: "Shape the roadmap",
    body: "Early feedback goes directly into what Pico automates first and how he expresses himself. Built with our users isn't a slogan — it's the actual process.",
  },
  {
    icon: MessageCircle,
    title: "Follow the build",
    body: "As decisions get made — from hardware form to what his light-face states mean — waitlist members hear about it first, before anything is public.",
  },
  {
    icon: Bell,
    title: "First access",
    body: "When Pico is ready to leave the concept stage, the community that helped shape him gets the first invitations.",
  },
];

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Community"
          title="Built with our users, from day one."
          subtitle="Pico doesn't exist yet as a shipping product — which means right now is the moment where your feedback actually changes what gets built."
        />

        <section className="bg-surface py-[70px] md:py-[100px]">
          <Container>
            <div className="grid gap-6 md:grid-cols-3">
              {ways.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-md border border-ink/[0.06] bg-cream p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue">
                    <Icon size={20} color="white" strokeWidth={2.4} />
                  </div>
                  <h3 className="mb-2.5 text-lg">{title}</h3>
                  <p className="text-[14.5px] text-ink-soft">{body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-[70px] md:py-[100px]">
          <Container className="mx-auto max-w-[680px] text-center">
            <Eyebrow className="mx-auto">Where we are right now</Eyebrow>
            <h2 className="mb-5 text-[28px] md:text-[32px]">
              No app, no Discord, no forum yet — on purpose.
            </h2>
            <p className="text-lg text-ink-soft">
              We'd rather open community channels once there's a real
              product decision worth discussing together, instead of
              building a crowd around nothing yet. The waitlist is the one
              real channel right now, and it's the one we'll use to invite
              people into whatever comes next.
            </p>
          </Container>
        </section>

        <section className="bg-peach py-[70px] text-center md:py-[100px]">
          <Container className="mx-auto max-w-[560px]">
            <h2 className="mb-5 text-[28px] md:text-[32px]">
              Start here.
            </h2>
            <p className="mb-8 text-lg text-ink-soft">
              Join the waitlist and you're on the list for everything
              above — no separate signup needed.
            </p>
            <Button href="/#signup">Join the waitlist</Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
