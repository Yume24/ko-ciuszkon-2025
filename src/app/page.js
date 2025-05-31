import Navbar from "@/app/components/Navbar";
import Link from "next/link"

export default function Home() {
    return (
        <div className="h-screen bg-cover bg-center flex flex-col" style={{ backgroundImage: "url('/background.png')" }}>
            <header>
                <Navbar />
            </header>

            <main className="flex-1 flex flex-col items-center justify-center text-white px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold text-center" style={{textShadow: '2px 2px 2px black'}}>
                    Przyszłość Planety<br />jest w Twoich rękach
                </h1>
                <p className="my-6 text-xl md:text-2xl text-center max-w-2xl" style={{textShadow: '2px 2px 2px black'}}>
                    Dołącz do naszej misji ochrony środowiska poprzez edukację i działanie.
                </p>
                <Link href={'/calculator'} >
                    <button className="cursor-pointer px-8 py-4 bg-[var(--hunter-green)] hover:bg-[var(--asparagus)] text-white font-bold text-lg rounded-full shadow-lg transition-all duration-300">
                        Zacznij teraz
                    </button>
                </Link>

            </main>
        </div>
    );
}
