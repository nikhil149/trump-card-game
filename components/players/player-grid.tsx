import Link from "next/link";

const PlayerGrid = ({ players }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {players.map((player: any) => (
        <div
          key={player.name}
          className="p-4 border border-gray-200 rounded shadow-md"
        >
          <h3 className="text-lg font-medium">{player.name}</h3>
          <p className="text-gray-600">Age: {player.age}</p>
          <p className="text-gray-600">Country: {player.country}</p>
          <Link
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            href={`/players/${player.id}`}
          >
            Edit
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PlayerGrid;
