import React from "react";
import Navbar from "@/app/components/Navbar";

export default function EducationalInfo() {
    return (
        <div className="min-h-screen bg-[#e6f7ec] text-[#333]">
            <Navbar />

            <header className="bg-[#81c784] text-white text-center py-10 px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold">🌍 Ekologia i Energetyka</h1>
                <p className="mt-2 text-lg md:text-xl">Zrozum świat wokół nas – łatwo i ciekawie!</p>
            </header>

            <nav className="bg-[#c8e6c9] py-4 flex justify-center">
                <ul className="flex flex-wrap gap-6 text-[#2e7d32] font-bold text-lg">
                    <li><a href="#ekologia" className="hover:underline">Ekologia</a></li>
                    <li><a href="#energia" className="hover:underline">Energia</a></li>
                    <li><a href="#odnawialne" className="hover:underline">Zielona energia</a></li>
                    <li><a href="#quiz" className="hover:underline">Quiz</a></li>
                </ul>
            </nav>

            <main className="px-4 py-10 max-w-4xl mx-auto">
                <section id="ekologia" className="bg-white mb-10 p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl text-[#388e3c] font-bold mb-2">🦋 Co to jest ekologia?</h2>
                    <p>Ekologia to nauka o tym, jak żyją rośliny, zwierzęta i ludzie – i jak pomagamy naszej planecie!</p>
                    <img src="/ekologia.png" alt="Drzewo, zwierzęta i dzieci sadzące rośliny" className="mt-4 rounded-xl" />
                </section>

                <section id="energia" className="bg-white mb-10 p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl text-[#388e3c] font-bold mb-2">⚡ Skąd bierze się energia?</h2>
                    <p className="mb-3">Energia to coś, co napędza świat! Potrzebujemy jej do światła, ogrzewania i jazdy autem.</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Prąd z węgla (niezbyt ekologiczny)</li>
                        <li>Prąd ze słońca (super ekologiczny!)</li>
                        <li>Wiatraki i woda – też dają energię</li>
                    </ul>
                </section>

                <section id="odnawialne" className="bg-white mb-10 p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl text-[#388e3c] font-bold mb-2">🌞 Zielona energia</h2>
                    <p>To taka, która nie szkodzi Ziemi. Pochodzi ze słońca, wiatru i wody. Jest super dla środowiska!</p>
                    <img src="/zielona-energia.png" alt="Panele słoneczne, wiatraki, rzeka" className="mt-4 rounded-xl" />
                </section>

                <section id="quiz" className="bg-white p-6 rounded-2xl shadow-md text-center">
                    <h2 className="text-2xl text-[#388e3c] font-bold mb-2">🎉 Sprawdź się!</h2>
                    <p className="mb-4">Wiesz już trochę o ekologii? Rozwiąż krótki quiz!</p>
                    <button className="px-8 py-4 bg-[#4caf50] hover:bg-[#388e3c] text-white font-bold text-lg rounded-full shadow-lg transition duration-300">
                        Rozpocznij quiz
                    </button>
                </section>
            </main>

            <footer className="text-center bg-[#a5d6a7] py-4 text-[#2e7d32] font-bold">
                © 2025 Zielona Strona – Uczmy się razem!
            </footer>
        </div>
    );
}
