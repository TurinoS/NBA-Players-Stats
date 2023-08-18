import PlayerSelectorList from "@/components/PlayerSelectionList";
import PlayersStats from "@/components/PlayersStats";
import SelectedPlayersList from "@/components/SelectedPlayersList";

export default function Home() {
  return (
    <main>
      <PlayerSelectorList color1="#730080" color2="#ffb700" />
      <SelectedPlayersList color1="#730080" color2="#ffb700" />
      <PlayersStats />
    </main>
  )
}
