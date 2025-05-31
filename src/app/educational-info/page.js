import React from "react";
import Navbar from "@/app/components/Navbar";

export default function EducationalInfo() {
    return (
        <div className="min-h-screen bg-fixed bg-center bg-cover flex flex-col" style={{ backgroundImage: "url('/background.png')" }}>
            <Navbar />

            <header className="text-white text-center py-10 px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold" style={{textShadow: '2px 2px 2px black'}}>Ekologia i Energetyka</h1>
                <p className="mt-2 text-lg md:text-xl" style={{textShadow: '2px 2px 2px black'}}>Zrozum świat wokół nas – łatwo i ciekawie!</p>
            </header>

            <main className="px-4 mb-10 max-w-4xl mx-auto">
                <section id="ekologia" className="bg-white mb-10 p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl text-[#388e3c] font-bold mb-2">Co to jest ekologia?</h2>
                    <p>Ekologia to nauka o tym, jak żyją rośliny, zwierzęta i ludzie – i jak pomagamy naszej planecie!</p>
                </section>

                <section id="energia" className="bg-white mb-10 p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl text-[#388e3c] font-bold mb-2">Skąd bierze się energia?</h2>
                    <p className="mb-3">Energia to coś, co napędza świat! Potrzebujemy jej do światła, ogrzewania i jazdy autem.</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Prąd z węgla (niezbyt ekologiczny)</li>
                        <li>Prąd ze słońca (super ekologiczny!)</li>
                        <li>Wiatraki i woda – też dają energię</li>
                    </ul>
                </section>

                <section id="odnawialne" className="bg-white mb-10 p-6 rounded-2xl shadow-md">
                    <h2 className="text-2xl text-[#388e3c] font-bold mb-2">Zielona energia</h2>
                    <p>To taka, która nie szkodzi Ziemi. Pochodzi ze słońca, wiatru i wody. Jest super dla środowiska!</p>
                </section>

                <section id="quiz" className="bg-white p-6 rounded-2xl shadow-md text-center">
                    <h2 className="text-2xl text-[#388e3c] font-bold mb-2">Sprawdź się!</h2>
                    <p className="mb-4">Wiesz już trochę o ekologii? Rozwiąż krótki quiz!</p>
                    <button className="px-8 py-4 bg-[#4caf50] hover:bg-[#388e3c] text-white font-bold text-lg rounded-full shadow-lg transition duration-300">
                        Rozpocznij quiz
                    </button>
                </section>
            </main>
        </div>
    );
}
