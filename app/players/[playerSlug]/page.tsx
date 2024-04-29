import getPlayerById from "@/app/actions/getPlayerById";
import PlayerForm from "@/components/players/player-form";
import { ObjectId } from "mongodb";
interface IParams {
  playerSlug?: string;
}

const PlayerDetails = async ({ params }: { params: IParams }) => {
  const playerId = params.playerSlug;
  if (!playerId) {
    return;
  }

  let playerStats = await getPlayerById(playerId);
  if (!playerStats) {
    playerStats = {
      id: new ObjectId().toString(),
      matches: 0,
      playerId: playerId,
      format: "test",
      innings: 0,
      runs: 0,
      average: 0,
      centuries: 0,
      highScore: 0,
      halfcenturies: 0,
      overs: 0,
      wickets: 0,
      bowlingAverage: 0,
      bowlingEconomy: 0,
      bowlingStrikeRate: 0,
      catches: 0,
    };
  }

  return (
    <div className="container mx-auto mt-10 px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Update Player Stats</h1>
      <PlayerForm playerStats={playerStats} />
    </div>
  );
};

export default PlayerDetails;
