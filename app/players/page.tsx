import PlayerGrid from "@/components/players/player-grid";
import getAllPlayers from "../actions/getAllPlayers";

const PlayersPage = async () => {
  const players = await getAllPlayers();
  return (
    <div>
      <h1>Top test cricketers in the world</h1>
      <PlayerGrid players={players} />
    </div>
  );
};

export default PlayersPage;
