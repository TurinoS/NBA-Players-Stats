import { shade } from "polished";
import { teamInfo } from "./teamsColors/TeamsColors";
import { ChangeEvent, useContext } from "react";
import { AppContext } from "@/context/AppContext";
interface PlayersSectionProps {
  colors: string
  firstName: string
  lastName: string
  playerId: number
  uuid: string
}

export default function SelectedPlayerCard({
  colors,
  firstName,
  lastName,
  playerId,
  uuid,
}: PlayersSectionProps) {
  const { removePlayer, setSeason, season, getAverages } = useContext(AppContext)

  let date = new Date();
  let year = date.getFullYear() - 1;
  let NBASeasons = [];
  for (year; year > 1978; year--) {
    NBASeasons.push(year);
  }

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSeason(e.target.value)
    getAverages(playerId.toString(), season, firstName, lastName)
  }

  return (
    <div className="relative flex border-2 border-solid border-[var(--second)] rounded-md">
      <button
        className="absolute text-sm top-0 right-0 px-1 text-[var(--second)] border-l-2 border-b-2 border-[var(--second)] border-[var(--second)] rounded-tr-md hover:bg-[var(--third)] hover:text-[var(--bg)] hover:font-bold transition duration-500"
        onClick={() => removePlayer(uuid)}
      >
        X
      </button>
        <div
          className="px-16 py-8 flex items-center"
          style={{
            background: `linear-gradient(135deg, ${
              teamInfo(colors).colors.colorOne
            } 50%, ${
              teamInfo(colors).colors.colorTwo
            } 50%)`,
          }}
        >
          <p
            className="px-1 rounded text-2xl font-bold"
            style={{
              backgroundImage: `linear-gradient(135deg, ${
                shade(0.5, teamInfo(colors).colors.colorOne)
              } 50%, ${
                shade(0.5, teamInfo(colors).colors.colorTwo)
              } 50%)`,
            }}
          >
            {colors}
          </p>
        </div>
        <div className="px-6 py-4">
          <p className="text-lg mb-2">{firstName} {lastName}</p>
          <span className="text-sm">Season: </span>
          <select onChange={(e) => handleOnChange(e)} defaultValue='Select' name="select" className="text-[var(--second)] bg-[var(--bg)] border rounded hover:text-[var(--first)] font-bold">
            <option disabled>Select</option>
            {NBASeasons.map((season) => (
              <option key={season} value={season}>{season}</option>
            ))}
          </select>
        </div>
      </div>
  );
}
