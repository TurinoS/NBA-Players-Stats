import { shade } from "polished";

interface PlayersSectionProps {
  color1: string;
  color2: string;
}

export default function SelectedPlayerCard({
  color1,
  color2,
}: PlayersSectionProps) {
  return (
      <div className="flex border-2 border-solid border-[var(--second)] rounded-md">
        <div
          className="px-16 py-8"
          style={{
            backgroundImage: `linear-gradient(135deg, ${color1} 50%, ${color2} 50%)`,
          }}
        >
          <p
            className="px-1 rounded text-2xl font-bold flex items-center"
            style={{
              backgroundImage: `linear-gradient(135deg, ${shade(
                0.5,
                color1
              )} 50%, ${shade(0.5, color2)} 50%)`,
            }}
          >
            LAL
          </p>
        </div>
        <div className="px-6 py-4">
          <p className="text-lg mb-2">LeBron James</p>
          <span className="text-sm">Season: </span>
          <select name="select" className="text-[var(--bg)]">
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
      </div>
  );
}
