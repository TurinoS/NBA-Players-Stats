import Link from "next/link";

export default function Header() {
  return (
    <header className="px-12 py-6 flex justify-between items-center bg-[var(--first)]">
      <Link href="/" className="font-bold text-3xl">
        NBA Stats
      </Link>
      <div>
        <input
          className="px-8 py-4 rounded-tl-md rounded-bl-md"
          type="search"
          name="search"
          id="search"
          placeholder="Enter a player name"
        />
        <button className="px-6 py-4 bg-[var(--bg)] rounded-tr-md rounded-br-md transition duration-300 hover:text-[var(--first)] hover:brightness-125">Search</button>
      </div>
      <Link href="https://app.balldontlie.io/" className="underline">
        BallDontLie API
      </Link>
    </header>
  );
}
