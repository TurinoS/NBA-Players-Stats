'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlayerSelectorList from "@/components/PlayerSelectionList";
import PlayersStats from "@/components/PlayersStats";
import SelectedPlayersList from "@/components/SelectedPlayersList";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export default function Home() {
  const {searched, playersData} = useContext(AppContext)

  const hasData = searched && Array.isArray(playersData) && playersData.length > 0;

  return (
    <>
      <Header />
      <main>
        {hasData ? <PlayerSelectorList color1="#730080" color2="#ffb700" /> : null}
        
        <SelectedPlayersList color1="#730080" color2="#ffb700" />
        <PlayersStats />
      </main>
      <Footer />
    </>
    
  )
}
