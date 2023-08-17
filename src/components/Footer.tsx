import Link from "next/link";

export default function Footer() {
    return(
        <footer className="px-12 py-6 flex justify-center items-center bg-[var(--first)]">
            <p>Developed by <Link className="text-[var(--bg)] font-bold" href={"https://github.com/TurinoS"}>Paulo Turino</Link>.</p>
        </footer>
    )
}