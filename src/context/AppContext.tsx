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

type SelectedPlayer = {
  playerId: number;
  uuid: string;
  first_name: string;
  last_name: string;
  colors: string;
}

type PlayerStats = {

}

type AppContextType = {
  fetchData: (search: string) => void;
  getAverages: (playerId: string, year: string) => void;
  playersData: Player[];
  search: string;
  setSearch: (search: string) => void;
  searched: boolean;
  setSearched: (searched: boolean) => void;
  playerSelect: (playerId: number, uuid: string, first_name: string, last_name: string, colors: string) => void;
  selectedPlayers: SelectedPlayer[];
  removePlayer: (playerIdToRemove: string) => void;
};

export const AppContext = createContext<AppContextType>({
  fetchData: (search: string) => {},
  getAverages: (playerId: string, year: string) => {},
  playersData: [],
  search: '',
  setSearch: (search: string) => {},
  searched: false,
  setSearched: (searched: boolean) => {},
  playerSelect: (playerId: number, uuid: string, first_name: string, last_name: string, colors: string) => {},
  selectedPlayers: [],
  removePlayer: (playerIdToRemove: string) => {},
});

export function AppcontextProvider({ children }: { children: ReactNode }) {

  //--------------players selection section--------------

  const [playersData, setPlayersData] = useState<Player[]>([]);
  const [search, setSearch] = useState('');
  const [searched, setSearched] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState<SelectedPlayer[]>([]);
  const [selectedPlayersData, setSelectedPlayersData] = useState<SelectedPlayer[]>([]);

    const fetchData = async (search: string) => {
      setPlayersData([])
      if(search.length > 0) {
        const res = await fetch(`https://www.balldontlie.io/api/v1/players?search=${search}`);
        const jsonData = await res.json();
        setPlayersData(jsonData.data);
        setSearched(true)
      }
    };

    const playerSelect = ( playerId: number, uuid: string, first_name: string, last_name: string, colors: string) => {
      setSelectedPlayers([... selectedPlayers, 
        {
          playerId: playerId,
          uuid: uuid,
          first_name: first_name,
          last_name: last_name,
          colors: colors,
        },
      ]);
      console.log(selectedPlayers)
    };

    //--------------selected players section--------------

    const removePlayer = (playerIdToRemove: string) => {
      const updatedSelectedPlayers = selectedPlayers.filter(player => player.uuid !== playerIdToRemove);
      setSelectedPlayers(updatedSelectedPlayers);
      console.log(selectedPlayers)
    };

    const getAverages = async (playerId: string, year: string) => {
      const res = await fetch(`https://www.balldontlie.io/api/v1/season_averages?season=${year}&player_ids[]=${playerId}`);
      const jsonData = await res.json();
      setSelectedPlayers([...selectedPlayers, jsonData])
      console.log(selectedPlayers)
    }

  return (
    <AppContext.Provider value={{ fetchData, getAverages, playersData, search, setSearch, searched, setSearched, playerSelect, selectedPlayers, removePlayer }}>
      {children}
    </AppContext.Provider>
  );
}
