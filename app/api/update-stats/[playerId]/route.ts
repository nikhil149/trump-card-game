import client from "@/libs/prismadb";

interface IParams {
  playerId: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  try {
    const playerId = params.playerId;
    const body = await request.json();
    const stats = await client.stats.create({
      data: { ...body, playerId: playerId },
    });
    return stats;
  } catch (error) {
    console.log("Unable to fecth Stats");
  }
}
