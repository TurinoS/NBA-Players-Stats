import PlayerSelectorList from "@/components/PlayerSelectionList";
import SelectedPlayersList from "@/components/SelectedPlayersList";

export default function Home() {
  return (
    <main>
      <PlayerSelectorList color1="#730080" color2="#ffb700" />
      <SelectedPlayersList color1="#730080" color2="#ffb700" />
    </main>
  )
}
