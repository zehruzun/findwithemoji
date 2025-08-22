import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  (await cookieStore).set({
    name: "userAnswer",
    value: "",
    path: "/",
    expires: new Date(0), // geçmiş tarih ile sil
  });

  return NextResponse.json({ message: "Cookie silindi" });
}
