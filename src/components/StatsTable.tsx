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
        {selectedPlayersData.map((player) => (
          <tr key={player.uuid} className="bg-[var(--bg)] even:bg-[var(--first)]">
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {player.firstName} {player.lastName}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {player.season ? player.season : 'Unavailable'}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
            {player.min ? player.min : '-'}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {player.games_played > 0 ? player.games_played : '-'}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {player.pts > 0 ? player.pts : '-'}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {player.ast > 0 ? player.ast : '-'}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {!isNaN(player.fg3_pct) ? `${(player.fg3_pct * 100).toFixed(1)}%` : '-'}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {!isNaN(player.ft_pct) ? `${(player.ft_pct * 100).toFixed(1)}%` : '-'}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {!isNaN(player.fg_pct) ? `${(player.ft_pct * 100).toFixed(1)}%` : '-'}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {player.blk > 0 ? player.blk : '-'}
            </td>
            <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">
              {player.reb > 0 ? player.reb : '-'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
