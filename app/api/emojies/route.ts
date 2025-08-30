import { NextResponse } from "next/server";
import { prismadb } from "@/lib/db";

export async function GET() {
  try {
    const emojis = await prismadb.emojiList.findMany();
    return NextResponse.json(emojis);
  } catch (error: unknown) {
    // Hata tipini kontrol et ve console'a yazdır
    if (error instanceof Error) {
      console.error("Error fetching emojis:", error.message);
      console.error(error); // stack trace de yazsın
      return NextResponse.json(
        { error: "Something went wrong!", details: error.message },
        { status: 500 }
      );
    } else {
      console.error("Unknown error:", error);
      return NextResponse.json(
        { error: "Something went wrong!", details: "Unknown error type" },
        { status: 500 }
      );
    }
  }
}
