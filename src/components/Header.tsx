'use client'

import { AppContext } from "@/context/AppContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function Header() {
  const { fetchData, search, setSearch, searched, setSearched } = useContext(AppContext)

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData(search.toLowerCase());
  }

  useEffect(() => {
    if (searched && search === "") {
      setSearched(false);
    }
  }, [search, searched, setSearched]);

  return (
    <header className="px-12 py-6 flex justify-between items-center bg-[var(--first)]">
      <Link href="/" className="font-bold text-3xl">
        NBA Stats
      </Link>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input
          className="px-8 py-4 rounded-tl-md rounded-bl-md text-[var(--bg)]"
          type="search"
          name="search"
          id="search"
          placeholder="Enter a player name"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit" className="px-6 py-4 bg-[var(--bg)] rounded-tr-md rounded-br-md transition duration-300 hover:text-[var(--first)] hover:brightness-125">
          Search
        </button>
      </form>
      <Link href="https://app.balldontlie.io/" className="underline">
        BallDontLie API
      </Link>
    </header>
  );
}
