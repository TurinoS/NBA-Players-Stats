'use client'

import { shade } from "polished";
import { teamInfo } from "./teamsColors/TeamsColors";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

interface PlayersSectionProps {
  colors: string;
  firstName: string;
  lastName: string;
  id: number;
  uuid: string;
}

export default function PlayerSelectionCard({
  colors,
  firstName,
  lastName,
  id,
  uuid,
}: PlayersSectionProps) {

  const { playerSelect } = useContext(AppContext)

  return (
    <div onClick={() => playerSelect(id, uuid, firstName, lastName, colors)}
      className="p-3 border-2 border-solid border-[var(--bg)] rounded-md cursor-pointer transition duration-350 hover:border-[var(--first)]"
      style={{
        background: `linear-gradient(135deg, ${
          teamInfo(colors).colors.colorOne
        } 50%, ${
          teamInfo(colors).colors.colorTwo
        } 50%)`,
      }}
    >
      <p
        className="px-1 rounded text-lg"
        style={{
          background: `linear-gradient(135deg, ${shade(0.6, teamInfo(colors).colors.colorOne)} 50%, ${ shade(0.6, teamInfo(colors).colors.colorTwo)} 50%)`,
        }}
      >
        {firstName} {lastName}
      </p>
    </div>
  );
}
