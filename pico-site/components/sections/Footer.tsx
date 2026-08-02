import Link from "next/link";
import { Container } from "@/components/ui/Container";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Product", href: "/product" },
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Press kit", href: "/press-kit" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Community", href: "/community" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink py-[60px] pb-[30px] text-white/70">
      <Container>
        <div className="mb-[50px] grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-3.5 font-display text-xl font-bold text-peach-soft">
              Pico
            </div>
            <p className="max-w-[260px] text-sm text-white/50">
              The first physical AI coworker, designed for the lonely
              digital workplace.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-4 text-[13px] tracking-[0.03em] text-white/90">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 border-t border-white/[0.12] pt-6 text-[13px] text-white/45 sm:flex-row sm:justify-between">
          <span>© 2026 Pico. Not yet for sale — this is a concept.</span>
          <span>Made for people who stay late.</span>
        </div>
      </Container>
    </footer>
  );
}
