"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/nav-links";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full text-ink"
      >
        <Menu size={22} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] bg-cream">
          <div className="flex items-center justify-between px-6 py-[18px]">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 font-display text-xl font-bold text-blue-dark"
            >
              <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
                <ellipse cx="13" cy="15" rx="11" ry="8" fill="#2E8FD1" />
                <ellipse cx="20" cy="9" rx="4" ry="3" fill="#E86A52" transform="rotate(25 20 9)" />
              </svg>
              Pico
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink"
            >
              <X size={22} />
            </button>
          </div>

          <nav aria-label="Primary" className="flex flex-col gap-1 px-6 pt-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/[0.08] py-4 font-display text-xl text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#signup"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-blue px-6 py-3.5 text-center font-display font-semibold text-white"
            >
              Join the waitlist
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
