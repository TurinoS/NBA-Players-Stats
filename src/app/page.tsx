'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PlayerSelectionList from "@/components/PlayerSelectionList";
import PlayersStats from "@/components/PlayersStats";
import SelectedPlayersList from "@/components/SelectedPlayersList";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { BiUpArrowAlt } from 'react-icons/bi';

export default function Home() {
  const {searched, playersData, selectedPlayers, selectedPlayersData} = useContext(AppContext)

  const hasData = searched && Array.isArray(playersData) && playersData.length > 0;

  return (
    <>
      <Header />
      <main>
        {!hasData && selectedPlayers.length === 0 && selectedPlayersData.length === 0 ? 
          <section className="flex flex-col items-center p-6 text-4xl text-center">
            <BiUpArrowAlt/>
            <h1>Search a NBA player name up here</h1>
          </section> 
          : null
        }

        {hasData ? <PlayerSelectionList /> : null}
        
        {selectedPlayers.length > 0 ? <SelectedPlayersList /> : null}
        
        {selectedPlayersData.length > 0 ? <PlayersStats /> : null}
      </main>
      <Footer />
    </>
    
  )
}
