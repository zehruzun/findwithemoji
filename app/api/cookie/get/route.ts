import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies(); // senkron
  const cookie = (await cookieStore).get("userAnswer");

  return NextResponse.json({ value: cookie?.value || null });
}
