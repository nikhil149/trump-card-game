import client from "@/libs/prismadb";
import { createSession } from "@/libs/session";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const user = await client.user.create({ data: body });

  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  await createSession(user.id);

  return NextResponse.json(user);
}
