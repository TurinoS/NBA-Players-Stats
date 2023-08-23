import StatsTable from "./StatsTable";

export default function PlayersStats() {
    return(
        <section className="flex flex-col items-center gap-6 p-8 pb-4 text-center">
            <h2 className="px-8 text-2xl font-bold pb-3 border-b-2 border-[var(--second)]"> Players stats</h2>
            <StatsTable />
        </section>
    )
} 