import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog",
  description: "Updates on building Pico, from concept to desk.",
};

// Add real posts here as they're written. Each post should get its own
// route under app/blog/[slug]/page.tsx once there's real content —
// this index just lists them.
type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

const posts: Post[] = [];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PageHero
          eyebrow="Blog"
          title="Building Pico, in the open."
          subtitle="Notes on decisions, progress, and what we're learning as Pico goes from concept to desk."
        />

        <section className="bg-surface py-[70px] md:py-[100px]">
          <Container>
            {posts.length === 0 ? (
              <div className="mx-auto max-w-[520px] rounded-lg bg-peach-soft p-12 text-center">
                <h2 className="mb-3 text-xl">Nothing here yet.</h2>
                <p className="mb-7 text-[15px] text-ink-soft">
                  We're still early — the first posts will cover how Pico's
                  form took shape and what we're hearing from the waitlist.
                  Join it and you'll see new posts before anyone else does.
                </p>
                <Button href="/#signup">Join the waitlist</Button>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {posts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="rounded-md border border-ink/[0.06] bg-cream p-7"
                  >
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink-faint">
                      {post.date}
                    </span>
                    <h3 className="mb-2.5 text-lg">{post.title}</h3>
                    <p className="text-[14.5px] text-ink-soft">{post.excerpt}</p>
                  </a>
                ))}
              </div>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
