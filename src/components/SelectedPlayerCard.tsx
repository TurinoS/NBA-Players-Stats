import { shade } from "polished";
import { teamInfo } from "./teamsColors/TeamsColors";
import { ChangeEvent, useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
interface PlayersSectionProps {
  colors: string;
  firstName: string;
  lastName: string;
  playerId: number;
  uuid: string;
}

export default function SelectedPlayerCard({
  colors,
  firstName,
  lastName,
  playerId,
  uuid,
}: PlayersSectionProps) {
  const { removePlayer, setSeason, season, getAverages } =
    useContext(AppContext);
  const [selectedSeason, setSelectedSeason] = useState(false);

  let date = new Date();
  let year = date.getFullYear() - 1;
  let NBASeasons = [];
  for (year; year > 1978; year--) {
    NBASeasons.push(year);
  }

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSeason(e.target.value);
    setSelectedSeason(true);
  };

  return (
    <div className="relative flex border-2 border-solid border-[var(--second)] rounded-md">
      <button
        className="absolute text-sm top-0 right-0 px-1 text-[var(--second)] border-l-2 border-b-2 border-[var(--second)] border-[var(--second)] rounded-tr-md hover:bg-[var(--third)] hover:text-[var(--bg)] hover:font-bold transition duration-500"
        onClick={() => removePlayer(uuid)}
      >
        X
      </button>
      <div
        className="px-6 flex items-center"
        style={{
          background: `linear-gradient(135deg, ${
            teamInfo(colors).colors.colorOne
          } 50%, ${teamInfo(colors).colors.colorTwo} 50%)`,
        }}
      >
        <p
          className="px-1 rounded text-2xl font-bold text-center"
          style={{
            backgroundImage: `linear-gradient(135deg, ${shade(
              0.5,
              teamInfo(colors).colors.colorOne
            )} 50%, ${shade(0.5, teamInfo(colors).colors.colorTwo)} 50%)`,
            whiteSpace: "pre-line",
          }}
        >
          {firstName}
          {"\n"}
          {lastName}
        </p>
      </div>
      <div className="pl-2 pr-8 pt-4 pb-4 flex flex-col items-center gap-4">
        <div>
          <span className="text-sm">Season: </span>
          <select
            onChange={(e) => handleOnChange(e)}
            defaultValue="Select"
            name="select"
            className="text-[var(--second)] bg-[var(--bg)] border rounded hover:text-[var(--first)] font-bold"
          >
            <option disabled>Select</option>
            {NBASeasons.map((season) => (
              <option key={season} value={season}>
                {season}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() =>
            getAverages(playerId.toString(), season, firstName, lastName, uuid)
          }
          disabled={!selectedSeason}
          className={`text-lg ml-5 border-2 rounded p-1 ${selectedSeason ? "text-[var(--first)] hover:bg-[var(--second)] hover:border-[var(--first)]" : "text-[var(--third)]"} transition duration-500`}
        >
          Add to table
        </button>
      </div>
    </div>
  );
}
