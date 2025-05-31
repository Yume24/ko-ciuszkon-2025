import React from "react";
import Navbar from "@/app/components/Navbar";

export default function EducationalInfo() {
    return (
        <>
            <style>{`
        body {
          font-family: 'Comic Sans MS', cursive, sans-serif;
          background-color: #e6f7ec;
          color: #333;
          margin: 0;
          padding: 0;
        }
        header {
          background-color: #81c784;
          color: white;
          text-align: center;
          padding: 2rem;
        }
        nav {
          background-color: #c8e6c9;
          display: flex;
          justify-content: center;
          padding: 1rem 0;
        }
        nav ul {
          list-style: none;
          display: flex;
          gap: 1.5rem;
          padding: 0;
          margin: 0;
        }
        nav a {
          text-decoration: none;
          color: #2e7d32;
          font-weight: bold;
          font-size: 1.1rem;
        }
        main {
          padding: 2rem;
        }
        section {
          background-color: white;
          margin-bottom: 2rem;
          padding: 1.5rem;
          border-radius: 15px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        section h2 {
          font-size: 1.6rem;
          color: #388e3c;
        }
        img {
          max-width: 100%;
          border-radius: 10px;
          margin-top: 1rem;
        }
        ul {
          padding-left: 1.5rem;
        }
        button {
          padding: 1rem 2rem;
          font-size: 1.2rem;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        button:hover {
          background-color: #388e3c;
        }
        footer {
          text-align: center;
          background-color: #a5d6a7;
          padding: 1rem;
          color: #2e7d32;
          font-weight: bold;
        }
        @media (max-width: 600px) {
          nav ul {
            flex-direction: column;
            align-items: center;
          }
          button {
            width: 100%;
          }
        }
      `}</style>
            <Navbar />
            <header>
                <h1>🌍 Ekologia i Energetyka</h1>
                <p>Zrozum świat wokół nas – łatwo i ciekawie!</p>
            </header>

            <nav>
                <ul>
                    <li><a href="#ekologia">Ekologia</a></li>
                    <li><a href="#energia">Energia</a></li>
                    <li><a href="#odnawialne">Zielona energia</a></li>
                    <li><a href="#quiz">Quiz</a></li>
                </ul>
            </nav>

            <main>
                <section id="ekologia">
                    <h2>🦋 Co to jest ekologia?</h2>
                    <p>Ekologia to nauka o tym, jak żyją rośliny, zwierzęta i ludzie – i jak pomagamy naszej planecie!</p>
                    <img src="ekologia.png" alt="Drzewo, zwierzęta i dzieci sadzące rośliny" />
                </section>

                <section id="energia">
                    <h2>⚡ Skąd bierze się energia?</h2>
                    <p>Energia to coś, co napędza świat! Potrzebujemy jej do światła, ogrzewania i jazdy autem.</p>
                    <ul>
                        <li>Prąd z węgla (niezbyt ekologiczny)</li>
                        <li>Prąd ze słońca (super ekologiczny!)</li>
                        <li>Wiatraki i woda – też dają energię</li>
                    </ul>
                </section>

                <section id="odnawialne">
                    <h2>🌞 Zielona energia</h2>
                    <p>To taka, która nie szkodzi Ziemi. Pochodzi ze słońca, wiatru i wody. Jest super dla środowiska!</p>
                    <img src="zielona-energia.png" alt="Panele słoneczne, wiatraki, rzeka" />
                </section>

                <section id="quiz">
                    <h2>🎉 Sprawdź się!</h2>
                    <p>Wiesz już trochę o ekologii? Rozwiąż krótki quiz!</p>
                    <button>Rozpocznij quiz</button>
                </section>
            </main>

            <footer>
                <p>© 2025 Zielona Strona – Uczmy się razem!</p>
            </footer>
        </>
    );
}