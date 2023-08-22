'use client'

import { useContext } from "react";
import PlayerSelectionCard from "./PlayerSelectionCard";
import { AppContext } from "@/context/AppContext";

export default function PlayerSelectionList() {
  const {searched, playersData, setSearched, setSearch} = useContext(AppContext)

  return (
    <section className="flex flex-col items-center gap-6 p-14 pb-4">
      <h2 className="px-8 text-2xl font-bold pb-3 border-b-2 border-[var(--second)]">
        Select a player to see their stats
      </h2>
      <div className="flex flex-wrap justify-center gap-2">
        {searched ? playersData.map((player) => (
          <PlayerSelectionCard key={player.id} id={player.id} firstName={player.first_name} lastName={player.last_name} colors={player.team.abbreviation} />
        )) : null}
      </div>
      <div onClick={() => {setSearched(false); setSearch('')}} className="p-3 border-2 border-solid border-[var(--second)] rounded-md cursor-pointer transition duration-350 hover:border-[var(--third)] hover:text-[var(--third)]">
        Clear Search
      </div>
    </section>
  );
}
