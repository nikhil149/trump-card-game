import client from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchValue = request.nextUrl.searchParams.get("search");
  if (!searchValue) return "no Search Value";
  const users = await client.user.findMany({ where: { name: searchValue } });

  return NextResponse.json(users);
}
