import client from "@/libs/prismadb";

export default async function getAllPlayers() {
  try {
    const players = await client.player.findMany();
    return players;
  } catch (error) {
    console.log("Unable to fetch players");
  }
}
