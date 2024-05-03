import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const email = request.url.split("?")[1].split("=")[1].toLocaleLowerCase();
  const user = await client.user.findUnique({
    where: { email: "nikhilrachawar100@gmail.com" },
  });
  if (!user) {
    return null;
  }
  return NextResponse.json(user);
}
