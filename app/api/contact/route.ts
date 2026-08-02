import { NextRequest, NextResponse } from "next/server";
import { appendRowToSheet, EMAIL_PATTERN } from "@/lib/sheets";

export async function POST(request: NextRequest) {
  let name: string | undefined;
  let email: string | undefined;
  let reason: string | undefined;
  let message: string | undefined;

  try {
    const body = await request.json();
    name = typeof body?.name === "string" ? body.name.trim() : undefined;
    email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : undefined;
    reason = typeof body?.reason === "string" ? body.reason.trim() : "General";
    message = typeof body?.message === "string" ? body.message.trim() : undefined;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!name) {
    return NextResponse.json({ error: "Enter your name." }, { status: 400 });
  }
  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (!message || message.length < 5) {
    return NextResponse.json({ error: "Say a little more in your message." }, { status: 400 });
  }

  try {
    await appendRowToSheet("Contact", [
      new Date().toISOString(),
      name,
      email,
      reason ?? "General",
      message,
    ]);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to append to Google Sheet:", error);
    return NextResponse.json(
      { error: "Couldn't send your message. Try again in a moment." },
      { status: 502 }
    );
  }
}
