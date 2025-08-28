import { NextResponse } from "next/server";
import { prismadb } from "@/lib/db";

export async function GET() {
    try {
        const emojis = await prismadb.emojiList.findMany();

        return NextResponse.json(emojis);
    } catch (error) {
        console.error("Error fetching hotels:", error);
        return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
    }
}