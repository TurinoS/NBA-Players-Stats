"use client";

import { ReactNode, createContext, useState, useEffect } from "react";

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
  playersData: Player[];
};

export const AppContext = createContext<AppContextType>({
  playersData: [],
});

export function AppcontextProvider({ children }: { children: ReactNode }) {
  const [playersData, setPlayersData] = useState<Player[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://www.balldontlie.io/api/v1/players?search=davis");
      const jsonData = await res.json();
      setPlayersData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ playersData }}>
      {children}
    </AppContext.Provider>
  );
}
