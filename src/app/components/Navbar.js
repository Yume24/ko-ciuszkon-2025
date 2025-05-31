import Link from "next/link"

export default function Navbar() {
    const navItems = ['Strona główna', 'Kalkulator', 'Informacje edukacyjne', 'Gra edukacyjna'];
    const routes = ['/', '/calculator', '/educational-info', '/game'];

    return (
        <nav className="bg-[var(--hunter-green)] px-6 py-4 flex items-center justify-between rounded-3xl mx-5 mt-5 shadow-lg">
            <ul className="flex space-x-6 font-bold text-white">
                {navItems.map((element, index) => (
                    <li key={index} className="relative group mx-10">
                        <Link href={routes[index]} className="transition-all duration-300 ease-in-out hover:text-green-300">
                            {element}
                        </Link>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-300 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                ))}
            </ul>
            <div className="text-3xl font-extrabold text-white hover:scale-105 transition-transform duration-300">
                Baamboozle
            </div>
        </nav>
    );
}
