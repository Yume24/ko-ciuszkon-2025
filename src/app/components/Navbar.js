import Link from "next/link"

export default function Navbar() {
    const navItems = ['Strona główna', 'Kalkulator',
        'Informacje edukacyjne', 'Gra edukacyjna'];
    const routes = ['/', '/calculator', '/educational-info', '/game'];

    return (
        <>
            <nav className="bg-[var(--hunter-green)] px-6 py-4 flex items-center justify-between h-15 rounded-3xl mx-5 my-5">
                <ul className="flex space-x-8 font-bold text-white">
                    {navItems.map((element, index) =>
                        (<li key={index} className="inline m-10"><Link href={routes[index]}>{element}</Link></li>))}
                </ul>
                <div className="inline text-3xl font-extrabold text-white">
                    Baamboozle
                </div>
            </nav>
        </>
    );
}