interface CardProps {
  playerName: string;
  innings: number;
  runs: number;
  average: number;
  highscore: number;
  century: number;
  halfCentury: number;
  overs: number;
  wickets: number;
  bowlingAverage: number;
  bowlingEconomy: number;
  bowlingStrikeRate: number;
  catches: number;
}

const Card = ({
  playerName,
  innings,
  runs,
  average,
  highscore,
  century,
  halfCentury,
  overs,
  wickets,
  bowlingAverage,
  bowlingEconomy,
  bowlingStrikeRate,
  catches,
}: CardProps) => {
  return (
    <div className="flex justify-center flex-col gap-3">
      <h1 className="text-xl self-center">{playerName}</h1>
      <div className="grid gap-4 grid-cols-2">
        <div className="grid gap-1 grid-cols-2 ml-3 gap-x-1 border-r-2">
          <h3>Innings</h3> <h5 className="text-center">{innings}</h5>
          <h3>Runs</h3> <h5 className="text-center">{runs}</h5>
          <h3>Average</h3> <h5 className="text-center">{average}</h5>
          <h3>Highscore</h3> <h5 className="text-center">{highscore}</h5>
          <h3>Century</h3> <h5 className="text-center">{century}</h5>
          <h3>halfCentury</h3> <h5 className="text-center">{halfCentury}</h5>
        </div>
        <div className="grid gap-2 grid-cols-2 ml-3">
          <h3>Overs</h3> <h5 className="text-center">{overs}</h5>
          <h3>Wickets</h3> <h5 className="text-center">{wickets}</h5>
          <h3>Bowling Average</h3>{" "}
          <h5 className="text-center">{bowlingAverage}</h5>
          <h3>Bowling Economy</h3>{" "}
          <h5 className="text-center">{bowlingEconomy}</h5>
          <h3>Bowling Strike Rate</h3>{" "}
          <h5 className="text-center">{bowlingStrikeRate}</h5>
          <h3>Catches</h3> <h5 className="text-center">{catches}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
