"use client";

import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";

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
};

type PlayerStats = {
  games_played: number;
  player_id: number;
  season: number;
  min: string;
  fgm: number;
  fga: number;
  fg3m: number;
  fg3a: number;
  ftm: number;
  fta: number;
  oreb: number;
  dreb: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  turnover: number;
  pf: number;
  pts: number;
  fg_pct: number;
  fg3_pct: number;
  ft_pct: number;
  firstName: string,
  lastName: string
};

type AppContextType = {
  fetchData: (search: string) => void;
  getAverages: (playerId: string, year: string, firstName: string, lastName: string) => void;
  playersData: Player[];
  search: string;
  setSearch: (search: string) => void;
  searched: boolean;
  setSearched: (searched: boolean) => void;
  playerSelect: (
    playerId: number,
    uuid: string,
    first_name: string,
    last_name: string,
    colors: string
  ) => void;
  selectedPlayers: SelectedPlayer[];
  removePlayer: (playerIdToRemove: string) => void;
  selectedPlayersData: PlayerStats[];
  season: string;
  setSeason: (season: string) => void;
};

export const AppContext = createContext<AppContextType>({
  fetchData: (search: string) => {},
  getAverages: (playerId: string, year: string, firstName: string, lastName: string) => {},
  playersData: [],
  search: "",
  setSearch: (search: string) => {},
  searched: false,
  setSearched: (searched: boolean) => {},
  playerSelect: (
    playerId: number,
    uuid: string,
    first_name: string,
    last_name: string,
    colors: string
  ) => {},
  selectedPlayers: [],
  removePlayer: (playerIdToRemove: string) => {},
  selectedPlayersData: [],
  season: "",
  setSeason: (season: string) => {},
});

export function AppcontextProvider({ children }: { children: ReactNode }) {
  //----------------players selection section----------------

  const [playersData, setPlayersData] = useState<Player[]>([]);
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState<SelectedPlayer[]>([]);

  const fetchData = async (search: string) => {
    setPlayersData([]);
    if (search.length > 0) {
      const res = await fetch(
        `https://www.balldontlie.io/api/v1/players?search=${search}`
      );
      const jsonData = await res.json();
      setPlayersData(jsonData.data);
      setSearched(true);
    }
  };

  const playerSelect = (
    playerId: number,
    uuid: string,
    first_name: string,
    last_name: string,
    colors: string
  ) => {
    setSelectedPlayers([
      ...selectedPlayers,
      {
        playerId: playerId,
        uuid: uuid,
        first_name: first_name,
        last_name: last_name,
        colors: colors,
      },
    ]);
    console.log(selectedPlayers);
  };

  //----------------selected players section----------------

  const removePlayer = (playerIdToRemove: string) => {
    const updatedSelectedPlayers = selectedPlayers.filter(
      (player) => player.uuid !== playerIdToRemove
    );
    setSelectedPlayers(updatedSelectedPlayers);
    console.log(selectedPlayers);
  };

  //----------------players stats section----------------

  const [selectedPlayersData, setSelectedPlayersData] = useState<PlayerStats[]>(
    []
  );
  const [season, setSeason] = useState("");

  const getAverages = async (playerId: string, season: string, firstName: string, lastName: string) => {
    const res = await fetch(
      `https://www.balldontlie.io/api/v1/season_averages?season=${season}&player_ids[]=${playerId}`
    );
    const jsonData = await res.json();

    const updatedData = { ...jsonData.data[0] };
    updatedData.firstName = firstName;
    updatedData.lastName = lastName;

    setSelectedPlayersData([...selectedPlayersData, updatedData]);
    console.log(selectedPlayersData)
  };

  return (
    <AppContext.Provider
      value={{
        fetchData,
        playersData,
        search,
        setSearch,
        searched,
        setSearched,
        playerSelect,
        selectedPlayers,
        removePlayer,
        getAverages,
        selectedPlayersData,
        season,
        setSeason,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
