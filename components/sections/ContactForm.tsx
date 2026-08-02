"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

const reasons = ["General", "Press", "Investor", "Careers"];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      reason: formData.get("reason"),
      message: formData.get("message"),
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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

  if (status === "success") {
    return (
      <p className="font-display text-lg font-semibold text-blue-dark">
        Message sent — we'll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-sm border-[1.5px] border-ink/[0.15] bg-surface px-4 py-3 text-[15px] focus:outline-none focus-visible:outline-2 focus-visible:outline-blue"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-sm border-[1.5px] border-ink/[0.15] bg-surface px-4 py-3 text-[15px] focus:outline-none focus-visible:outline-2 focus-visible:outline-blue"
          />
        </div>
      </div>

      <div>
        <label htmlFor="reason" className="mb-1.5 block text-sm font-medium text-ink">
          Reason
        </label>
        <select
          id="reason"
          name="reason"
          defaultValue="General"
          className="w-full rounded-sm border-[1.5px] border-ink/[0.15] bg-surface px-4 py-3 text-[15px] focus:outline-none focus-visible:outline-2 focus-visible:outline-blue"
        >
          {reasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-sm border-[1.5px] border-ink/[0.15] bg-surface px-4 py-3 text-[15px] focus:outline-none focus-visible:outline-2 focus-visible:outline-blue"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-coral">
          {errorMessage}
        </p>
      )}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
