import getPlayerById from "@/app/actions/getPlayerById";

interface IParams {
  playerSlug?: string;
}

const PlayerDetails = async ({ params }: { params: IParams }) => {
  const playerId = params.playerSlug;
  if (!playerId) {
    return;
  }

  const playerStats = await getPlayerById(playerId);

  return (
    <div className="container mx-auto mt-10 px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Update Player Stats</h1>
    </div>
  );
};

export default PlayerDetails;
