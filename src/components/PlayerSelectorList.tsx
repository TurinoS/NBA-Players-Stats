import PlayerSelectorCard from "./PlayerSelectorCard";

interface PlayersSectionProps {
  color1: string;
  color2: string;
}

export default function PlayerSelectorList({
  color1,
  color2,
}: PlayersSectionProps) {
  return (
    <section className="flex min-h-screen flex-col items-center gap-8 p-16">
      <h2 className="px-8 text-2xl font-bold pb-3 border-b-2 border-[var(--second)]">
        Select a player to see their stats
      </h2>
      <PlayerSelectorCard color1={color1} color2={color2} />
      <div className="p-3 border-2 border-solid border-[var(--second)] rounded-md cursor-pointer transition duration-350 hover:border-[var(--third)] hover:text-[var(--third)]">
        Clear Search
      </div>
    </section>
  );
}
