"use client";

import { ReactNode, createContext, useState, useEffect, useContext } from "react";

type Player = {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  height_feet: number;
  height_inches: number;
  weight_pounds: number;
  team: {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
  };
};

type AppContextType = {
  fetchData: (search: string) => void;
  playersData: Player[];
  search: string;
  setSearch: (search: string) => void;
  searched: boolean;
  setSearched: (searched: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
  fetchData: (search: string) => {},
  playersData: [],
  search: '',
  setSearch: (search: string) => {},
  searched: false,
  setSearched: (searched: boolean) => {},
});

export function AppcontextProvider({ children }: { children: ReactNode }) {
  const [playersData, setPlayersData] = useState<Player[]>([]);
  const [search, setSearch] = useState('')
  const [searched, setSearched] = useState(false)

    const fetchData = async (search: string) => {
      setPlayersData([])
      if(search.length > 0) {
        const res = await fetch(`https://www.balldontlie.io/api/v1/players?search=${search}`);
        const jsonData = await res.json();
        setPlayersData(jsonData.data);
        setSearched(true)
      }
      console.log(playersData);
      console.log(searched);
    };

  return (
    <AppContext.Provider value={{ fetchData, playersData, search, setSearch, searched, setSearched }}>
      {children}
    </AppContext.Provider>
  );
}
