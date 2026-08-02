"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

export function Newsletter() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (new FormData(form).get("email") as string) ?? "";

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data?.error ?? "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Couldn't reach the server. Check your connection and try again.");
    }
  }

  return (
    <section id="signup" className="bg-peach py-[70px] md:py-[110px]">
      <Container className="mx-auto max-w-[640px] text-center">
        <h2 className="mb-3.5 text-[26px] md:text-[32px]">
          Work smarter. Feel better.
        </h2>
        <p className="mb-[30px] text-base text-ink-soft">
          Be the first to know when Pico is ready to leave the concept stage.
        </p>

        {status === "success" ? (
          <p className="font-display text-lg font-semibold text-blue-dark">
            You&apos;re on the list.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-[420px] flex-col gap-2.5">
            <div className="flex gap-2.5">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="name@company.com"
                disabled={status === "loading"}
                className="flex-1 rounded-full border-[1.5px] border-ink/[0.15] bg-surface px-[18px] py-3.5 text-[15px] focus:outline-none focus-visible:outline-2 focus-visible:outline-blue disabled:opacity-60"
              />
              <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Joining…" : "Join waitlist"}
              </Button>
            </div>
            {status === "error" && (
              <p role="alert" className="text-sm text-coral">
                {errorMessage}
              </p>
            )}
          </form>
        )}
      </Container>
    </section>
  );
}
