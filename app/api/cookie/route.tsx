import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();


  // Cookie ayarlamak
  const response = NextResponse.json(
    { message: "Cookie set!" }, // mutlaka JSON
    { status: 200 }
  );
  response.cookies.set("myCookie", JSON.stringify(data), { path: "/" });

  return response;
}
