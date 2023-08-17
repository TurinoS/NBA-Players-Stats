import { shade } from "polished";

interface PlayersSectionProps {
  color1: string;
  color2: string;
}

export default function PlayerSelectionCard({
  color1,
  color2,
}: PlayersSectionProps) {
  return (
    <div
      className="p-3 border-2 border-solid border-[var(--bg)] rounded-md cursor-pointer transition duration-350 hover:border-[var(--first)]"
      style={{
        backgroundImage: `linear-gradient(135deg, ${color1} 50%, ${color2} 50%)`,
      }}
    >
      <p
        className="px-1 rounded text-lg"
        style={{
          backgroundImage: `linear-gradient(135deg, ${shade(
            0.5,
            color1
          )} 50%, ${shade(0.5, color2)} 50%)`,
        }}
      >
        LeBron James
      </p>
    </div>
  );
}
