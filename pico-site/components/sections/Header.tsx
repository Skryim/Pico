import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/sections/MobileNav";
import { navLinks } from "@/lib/nav-links";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/[0.08] bg-cream/85 backdrop-blur-md">
      <Container className="flex items-center justify-between py-[18px]">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold text-blue-dark">
          <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
            <ellipse cx="13" cy="15" rx="11" ry="8" fill="#2E8FD1" />
            <ellipse cx="20" cy="9" rx="4" ry="3" fill="#E86A52" transform="rotate(25 20 9)" />
          </svg>
          Pico
        </Link>

        <nav aria-label="Primary" className="hidden gap-[34px] text-sm font-medium text-ink-soft md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-blue-dark">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/#signup" className="hidden px-5 py-[10px] text-sm md:inline-flex">
            Join the waitlist
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
