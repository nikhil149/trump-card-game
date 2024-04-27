import client from "@/libs/prismadb";

export default async function getPlayerById(playerId: string) {
  try {
    const player = await client.stats.findFirst({
      where: { playerId: playerId },
    });
    return player;
  } catch (error) {
    console.log("Unable to fetch player");
  }
}
