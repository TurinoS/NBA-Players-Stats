import { useContext } from "react";
import SelectedPlayerCard from "./SelectedPlayerCard";
import { AppContext } from "@/context/AppContext";

interface PlayersSectionProps {
  
}

export default function SelectedPlayersList() {
  const { selectedPlayers } = useContext(AppContext)
  return (
    <section className="flex flex-col items-center gap-6 p-14 pb-4">
      <h2 className="px-8 text-2xl font-bold pb-3 border-b-2 border-[var(--second)]">
        Your selected players
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {selectedPlayers.map((player, index) => (
          <SelectedPlayerCard key={index} colors={player.colors} firstName={player.first_name} lastName={player.last_name} />
        ))}
        
      </div>
    </section>
  );
}
