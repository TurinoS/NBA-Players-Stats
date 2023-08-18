export default function StatsTable() {
    return(
        <table className="border-collapse w-full table-fixed break-word">
            <thead>
                <tr className="bg-[var(--second)] text-[var(--bg)]">
                    <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-24 py-1 cursor-pointer">Name</th>
                    <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-14 py-1 cursor-pointer">Season</th>
                    <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-12 py-1 cursor-pointer">Min</th>
                    <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-10 py-1 cursor-pointer">GP</th>
                    <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-10 py-1 cursor-pointer">PTS</th>
                    <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-10 py-1 cursor-pointer">AST</th>
                    <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-10 py-1 cursor-pointer">3P%</th>
                    <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-10 py-1 cursor-pointer">FT%</th>
                    <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-10 py-1 cursor-pointer">FG%</th>
                    <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-10 py-1 cursor-pointer">BLK</th>
                    <th className="lg:table-cell border border-[var(--bg)] border-b-[var(--second)] lg:table-cell w-10 py-1 cursor-pointer">REB</th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr className="bg-[var(--bg)] even:bg-[var(--first)]">
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">LeBron James</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">2021</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">35:40</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">14.26</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">14.26</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">14.26</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">14.26</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">14.26</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">14.26</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">14.26</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">14.26</td>
                </tr>
                <tr className="bg-[var(--bg)] even:bg-[var(--first)]">
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">LeBron James</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">2021</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">35:40</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">14.26</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">14.26</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">14.26</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">14.26</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">14.26</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">14.26</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">14.26</td>
                    <td className="lg:table-cell border border-[var(--second)] lg:table-cell w-10 cursor-pointer">14.26</td>
                </tr>
            </tbody>
        </table>
    )
}