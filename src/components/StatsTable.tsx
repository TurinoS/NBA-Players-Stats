"use client";

import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export default function StatsTable() {
  const { selectedPlayersData } = useContext(AppContext);

  return (
    <table className="border-collapse w-full table-fixed break-word">
      <thead>
        <tr className="bg-[var(--second)] text-[var(--bg)]">
          <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-24 py-1 cursor-pointer">
            Name
          </th>
          <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-14 py-1 cursor-pointer">
            Season
          </th>
          <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-12 py-1 cursor-pointer">
            Min
          </th>
          <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-10 py-1 cursor-pointer">
            GP
          </th>
          <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-10 py-1 cursor-pointer">
            PTS
          </th>
          <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-10 py-1 cursor-pointer">
            AST
          </th>
          <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-10 py-1 cursor-pointer">
            3P%
          </th>
          <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-10 py-1 cursor-pointer">
            FT%
          </th>
          <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-10 py-1 cursor-pointer">
            FG%
          </th>
          <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-10 py-1 cursor-pointer">
            BLK
          </th>
          <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-10 py-1 cursor-pointer">
            REB
          </th>
        </tr>
      </thead>
      <tbody className="text-center">
        {selectedPlayersData.map((player, index) => (
          <tr key={index} className="bg-[var(--bg)] even:bg-[var(--first)]">
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {player.firstName} {player.lastName}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {player.season}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
            {player.min != '0' ? player.min : 0}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {player.games_played}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {player.pts > 0 ? player.pts : 0}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {player.ast > 0 ? player.ast : 0}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {(player.fg3_pct * 100).toFixed(1) != '0' ? (player.fg3_pct * 100).toFixed(1) : 0}%
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {(player.ft_pct * 100).toFixed(1) != '0' ? (player.ft_pct * 100).toFixed(1) : 0}%
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {(player.fg_pct * 100).toFixed(1) != '0' ? (player.fg_pct * 100).toFixed(1) : 0}%
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {player.blk > 0 ? player.blk : 0}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {player.reb > 0 ? player.reb : 0}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
