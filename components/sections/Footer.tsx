import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Instagram, Facebook } from "lucide-react";

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

// X's logo isn't in lucide-react, so it's drawn inline to match icon sizing.
function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7l-5.5-7.2L4.5 22H1.4l8.1-9.3L1 2h7.2l5 6.6L18.9 2Zm-1.2 18h1.7L7.4 4h-1.8l12.1 16Z" />
    </svg>
  );
}

const socials = [
  {
    name: "Instagram",
    handle: "@zhenhuigao2001",
    href: "https://www.instagram.com/zhenhuigao2001?igsh=cTRrMHBxY2NzeWRv&utm_source=qr",
    icon: Instagram,
  },
  {
    name: "X",
    handle: "@mooncak51893394",
    href: "https://x.com/mooncak51893394?s=11",
    icon: XIcon,
  },
  {
    name: "Facebook",
    handle: "Facebook",
    href: "https://www.facebook.com/share/1BAokACWZr/?mibextid=wwXIfr",
    icon: Facebook,
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
            <p className="mb-6 max-w-[260px] text-sm text-white/50">
              The first physical AI coworker, designed for the lonely
              digital workplace.
            </p>
            <div className="flex flex-col gap-3">
              {socials.map(({ name, handle, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white"
                >
                  <Icon size={18} />
                  <span>{handle}</span>
                </a>
              ))}
            </div>
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
