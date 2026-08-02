import { NextRequest, NextResponse } from "next/server";
import { appendRowToSheet, EMAIL_PATTERN } from "@/lib/sheets";

export async function POST(request: NextRequest) {
  let email: string | undefined;

  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : undefined;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  try {
    await appendRowToSheet("Waitlist", [
      email,
      new Date().toISOString(),
      request.headers.get("referer") ?? "",
    ]);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to append to Google Sheet:", error);
    return NextResponse.json(
      { error: "Couldn't save your email. Try again in a moment." },
      { status: 502 }
    );
  }
}
