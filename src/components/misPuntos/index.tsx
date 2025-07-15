"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MisPuntos() {
  const [puntos, setPuntos] = useState(0);
  const [mostrarRecompensas, setMostrarRecompensas] = useState(false);

  useEffect(() => {
    const puntosGuardados = parseInt(
      localStorage.getItem("greenCoins") || "0",
      10
    );
    setPuntos(puntosGuardados);
  }, []);

  const recompensas = [
    {
      nombre: "🎟️ Coupon 10% discount on purchases",
      costo: 100,
    },
    // Recompensas educativas
    { nombre: "📘 Practical guide-take care of the planet", costo: 200 },
    { nombre: "🎓 Access to online ecological mini-course", costo: 300 },

    // Recompensas físicas simuladas
    { nombre: "♻️ Reusable eco-friendly bag", costo: 20 },
    { nombre: "🚰 Reusable bottle with eco design", costo: 25 },
    { nombre: "🌱 Seed kit for your home garden", costo: 20 },
    { nombre: "👕 Personalized polo shirt with eco message", costo: 100 },
    ,
  ];

  return (
    <div className="max-w-md mx-auto p-6 mt-4 text-center mb-20">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        💰 Your GreenCoins
      </h1>
      <p className="text-5xl font-bold text-green-600">{puntos}</p>
      <p className="mt-4 text-gray-600">
        ¡Keep helping the planet to earn more!
      </p>

      <div className="mt-6 space-y-4">
        <button
          onClick={() => setMostrarRecompensas(!mostrarRecompensas)}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          {mostrarRecompensas ? "Hide rewards" : "Redeem points"}
        </button>

        {mostrarRecompensas && (
          <div className="mt-4 text-left bg-gray-100 p-4 rounded shadow">
            <h3 className="text-green-700 font-bold mb-2">
              Rewards available:
            </h3>
            <ul className="space-y-2">
              {recompensas.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.nombre}</span>
                  <span className="text-sm text-gray-600">{item.costo} GC</span>
                </li>
              ))}
            </ul>
            <p className="text-sm mt-4 text-gray-500 italic">
              * This is only a simulation for educational purposes.
            </p>
          </div>
        )}

        <Link href="/">
          <button className="block w-full mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
}
