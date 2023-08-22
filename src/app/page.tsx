'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlayerSelectionList from "@/components/PlayerSelectionList";
import PlayersStats from "@/components/PlayersStats";
import SelectedPlayersList from "@/components/SelectedPlayersList";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export default function Home() {
  const {searched, playersData, selectedPlayers} = useContext(AppContext)

  const hasData = searched && Array.isArray(playersData) && playersData.length > 0;

  return (
    <>
      <Header />
      <main>
        {hasData ? <PlayerSelectionList /> : null}
        
        {selectedPlayers.length > 0 ? <SelectedPlayersList /> : null}
        
        <PlayersStats />
      </main>
      <Footer />
    </>
    
  )
}
