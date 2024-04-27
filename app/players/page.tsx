import PlayerGrid from "@/components/players/player-grid";
import getAllPlayers from "../actions/getAllPlayers";

const PlayersPage = async () => {
  const players = await getAllPlayers();
  if (!players) {
    return <h1>NO Players Available</h1>;
  }
  return (
    <div>
      <h1>Top test cricketers in the world</h1>
      <PlayerGrid players={players} />
    </div>
  );
};

export default PlayersPage;
