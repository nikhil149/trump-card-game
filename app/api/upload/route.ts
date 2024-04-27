import { NextResponse } from "next/server";

import client from "@/libs/prismadb";

export async function POST(request: Request) {
  const body = await request.json();

  const user = await client.player.create({
    data: {
      ...body,
    },
  });

  return NextResponse.json(user);
}
