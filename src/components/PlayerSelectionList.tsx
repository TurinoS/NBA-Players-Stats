import PlayerSelectionCard from "./PlayerSelectionCard";

interface PlayersSectionProps {
  color1: string;
  color2: string;
}

export default function PlayerSelectionList({
  color1,
  color2,
}: PlayersSectionProps) {
  return (
    <section className="flex flex-col items-center gap-6 p-14 pb-4">
      <h2 className="px-8 text-2xl font-bold pb-3 border-b-2 border-[var(--second)]">
        Select a player to see their stats
      </h2>
      <div className="flex gap-2">
        <PlayerSelectionCard color1={color1} color2={color2} />
        <PlayerSelectionCard color1={color1} color2={color2} />
      </div>
      <div className="p-3 border-2 border-solid border-[var(--second)] rounded-md cursor-pointer transition duration-350 hover:border-[var(--third)] hover:text-[var(--third)]">
        Clear Search
      </div>
    </section>
  );
}
