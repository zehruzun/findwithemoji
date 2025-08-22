import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const { value } = await req.json();

  const cookieStore = cookies();
  (await cookieStore).set({
    name: "userAnswer",
    value,
    path: "/",
    httpOnly: false,
  });

  return NextResponse.json({ message: "Cookie kaydedildi" });
}
