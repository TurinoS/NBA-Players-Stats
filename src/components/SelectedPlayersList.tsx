import SelectedPlayerCard from "./SelectedPlayerCard";

interface PlayersSectionProps {
  color1: string;
  color2: string;
}

export default function SelectedPlayersList({
  color1,
  color2,
}: PlayersSectionProps) {
  return (
    <section className="flex flex-col items-center gap-6 p-14 pb-4">
      <h2 className="px-8 text-2xl font-bold pb-3 border-b-2 border-[var(--second)]">
        Your selected players
      </h2>
      <div className="flex gap-2">
        <SelectedPlayerCard color1={color1} color2={color2} />
        <SelectedPlayerCard color1={color1} color2={color2} />
      </div>
    </section>
  );
}
