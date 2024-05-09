import client from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  if (!email) return { error: "Please provide an Email" };
  const user = await client.user.findUnique({
    where: { email: email },
  });
  if (!user) {
    return null;
  }
  return NextResponse.json(user);
}
