"use client";

import axios from "axios";
import { FormEvent, useReducer } from "react";

interface PlayerFormProps {
  playerStats:
    | {
        id: string;
        playerId: string;
        format: string;
        matches: number;
        innings: number;
        runs: number;
        average: number;
        centuries: number;
        highScore: number;
        halfcenturies: number;
        overs: number;
        wickets: number;
        bowlingAverage: number;
        bowlingEconomy: number;
        bowlingStrikeRate: number;
        catches: number;
      }
    | null
    | undefined;
}

const reducer = (
  state: any,
  action: { type: string; payload: number | string }
) => {
  switch (action.type) {
    case "runs":
      return { ...state, runs: +action.payload };
    case "matches":
      return { ...state, matches: +action.payload };
    case "innings":
      return { ...state, innings: +action.payload };
    case "format":
      return { ...state, format: action.payload };
    case "average":
      return { ...state, average: +action.payload };
    case "centuries":
      return { ...state, centuries: +action.payload };
    case "highScore":
      return { ...state, highScore: +action.payload };
    case "halfcenturies":
      return { ...state, halfcenturies: +action.payload };
    case "overs":
      return { ...state, overs: +action.payload };
    case "wickets":
      return { ...state, wickets: +action.payload };
    case "bowlingAverage":
      return { ...state, bowlingAverage: +action.payload };
    case "bowlingEconomy":
      return { ...state, bowlingEconomy: +action.payload };
    case "bowlingStrikeRate":
      return { ...state, bowlingStrikeRate: +action.payload };
    case "catches":
      return { ...state, catches: +action.payload };

    default:
      return state;
  }
};

const PlayerForm: React.FC<PlayerFormProps> = ({ playerStats }) => {
  const [state, dispatch] = useReducer(reducer, playerStats);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("STATS", state);
    const stats = await axios.post(
      `/api/update-stats/${playerStats?.playerId}`,
      state
    );
    console.log("STATS", stats);
  };
  const handleChange = (e: any, type: string) => {
    dispatch({ type: type, payload: e.target.value });
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col mb-4">
          <label htmlFor="runs" className="mb-2 text-lg">
            Runs:
          </label>
          <input
            type="number"
            id="runs"
            name="runs"
            value={state.runs}
            onChange={(e) => handleChange(e, "runs")}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <label htmlFor="innings" className="mb-2 text-lg">
            Innings:
          </label>
          <input
            type="number"
            id="innings"
            name="innings"
            value={state.innings}
            onChange={(e) => handleChange(e, "innings")}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <label htmlFor="format" className="mb-2 text-lg">
            Format:
          </label>
          <input
            type="text"
            id="format"
            name="format"
            value={state.format}
            onChange={(e) => handleChange(e, "format")}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <label htmlFor="matches" className="mb-2 text-lg">
            Matches:
          </label>
          <input
            type="number"
            id="matches"
            name="matches"
            value={state.matches}
            onChange={(e) => handleChange(e, "matches")}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <label htmlFor="average" className="mb-2 text-lg">
            Average:
          </label>
          <input
            type="number"
            id="average"
            name="average"
            value={state.average}
            onChange={(e) => handleChange(e, "average")}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <label htmlFor="centuries" className="mb-2 text-lg">
            Centuries:
          </label>
          <input
            type="number"
            id="centuries"
            name="centuries"
            value={state.centuries}
            onChange={(e) => handleChange(e, "centuries")}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <label htmlFor="highScore" className="mb-2 text-lg">
            High Score:
          </label>
          <input
            type="number"
            id="highScore"
            name="highScore"
            value={state.highScore}
            onChange={(e) => handleChange(e, "highScore")}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <label htmlFor="halfcenturies" className="mb-2 text-lg">
            Half Centuries:
          </label>
          <input
            type="number"
            id="halfcenturies"
            name="halfcenturies"
            value={state.halfcenturies}
            onChange={(e) => handleChange(e, "halfcenturies")}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <label htmlFor="overs" className="mb-2 text-lg">
            Overs:
          </label>
          <input
            type="number"
            id="overs"
            name="overs"
            value={state.overs}
            onChange={(e) => handleChange(e, "overs")}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <label htmlFor="wickets" className="mb-2 text-lg">
            Wickets:
          </label>
          <input
            type="number"
            id="wickets"
            name="wickets"
            value={state.wickets}
            onChange={(e) => handleChange(e, "wickets")}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <label htmlFor="bowlingAverage" className="mb-2 text-lg">
            Bowling Average:
          </label>
          <input
            type="number"
            id="bowlingAverage"
            name="bowlingAverage"
            value={state.bowlingAverage}
            onChange={(e) => handleChange(e, "bowlingAverage")}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <label htmlFor="bowlingEconomy" className="mb-2 text-lg">
            Bowling Economy:
          </label>
          <input
            type="number"
            id="bowlingEconomy"
            name="bowlingEconomy"
            value={state.bowlingEconomy}
            onChange={(e) => handleChange(e, "bowlingEconomy")}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <label htmlFor="bowlingStrikeRate" className="mb-2 text-lg">
            Bowling Strike Rate:
          </label>
          <input
            type="number"
            id="bowlingStrikeRate"
            name="bowlingStrikeRate"
            value={state.bowlingStrikeRate}
            onChange={(e) => handleChange(e, "bowlingStrikeRate")}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <label htmlFor="catches" className="mb-2 text-lg">
            Catches:
          </label>
          <input
            type="number"
            id="catches"
            name="catches"
            value={state.catches}
            onChange={(e) => handleChange(e, "catches")}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        {/* Add input fields for other stats as needed */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Update Stats
        </button>
      </form>
    </div>
  );
};

export default PlayerForm;
