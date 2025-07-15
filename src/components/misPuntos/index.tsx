"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function obtenerNivel(puntos: number) {
  if (puntos <= 100) return "Eco-Initiated";
  if (puntos <= 300) return "Green Collector";
  if (puntos <= 600) return "Environmental Ally";
  if (puntos <= 1000) return "Guardian of the Planet";
  return "Eco-Hero";
}

export default function MisPuntos() {
  const [puntos, setPuntos] = useState(0);
  const [mostrarRecompensas, setMostrarRecompensas] = useState(false);
  const [mostrarNiveles, setMostrarNiveles] = useState(false);

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
  ];

  return (
    <div className="relative max-w-md mx-auto p-6 mt-4 text-center mb-20">
      {/* Boton temporal solo para la demo, que permite recetear y volver a cero,
      lo correcto limita a 1 x dia */}
      <button
        onClick={() => {
          localStorage.removeItem("greenCoins");
          setPuntos(0);
          alert("🧹 Points reset. ¡Start from zero!");
        }}
        className="fixed top-30 right-4 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 text-sm z-50"
      >
        Reset points for demo
      </button>
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        💰 Your GreenCoins
      </h1>
      <p className="text-5xl font-bold text-green-600">{puntos}</p>
      <p className="mt-4 text-gray-600">
        ¡Keep helping the planet to earn more!
      </p>

      <p className="mt-2 text-sm text-gray-700">
        Your current level: <strong>{obtenerNivel(puntos)}</strong>
      </p>

      <button
        onClick={() => setMostrarNiveles(!mostrarNiveles)}
        className="mt-2 text-blue-600 underline text-sm"
      >
        {mostrarNiveles ? "Hide levels" : "View all levels"}
      </button>

      {mostrarNiveles && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-300 rounded overflow-hidden">
            <thead className="bg-green-100">
              <tr>
                <th className="p-2">Level</th>
                <th className="p-2">Name</th>
                <th className="p-2">Range</th>
                <th className="p-2">Description</th>
                <th className="p-2">Benefits</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="p-2">1️⃣</td>
                <td className="p-2">Eco-Initiated</td>
                <td className="p-2">0 – 100 pts</td>
                <td className="p-2">You started recycling, welcome! </td>
                <td className="p-2">Access to basic rewards</td>
              </tr>
              <tr>
                <td className="p-2">2️⃣</td>
                <td className="p-2">Green Collector</td>
                <td className="p-2">101 – 300 pts</td>
                <td className="p-2">You understand the value of recycling</td>
                <td className="p-2">Small coupons, badge</td>
              </tr>
              <tr>
                <td className="p-2">3️⃣</td>
                <td className="p-2">Environmental Ally</td>
                <td className="p-2">301 – 600 pts</td>
                <td className="p-2">You recycle constantly</td>
                <td className="p-2">More points for certain materials</td>
              </tr>
              <tr>
                <td className="p-2">4️⃣</td>
                <td className="p-2">Guardian of the Planet</td>
                <td className="p-2">601 – 1000 pts</td>
                <td className="p-2">You inspire others by your example</td>
                <td className="p-2">Premium rewards, sweepstakes</td>
              </tr>
              <tr>
                <td className="p-2">5️⃣</td>
                <td className="p-2">Eco-Hero</td>
                <td className="p-2">from 1000 pts to more</td>
                <td className="p-2">Recycling leader in your community</td>
                <td className="p-2">Outstanding profile, top awards</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

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
                  <span
                    className={`text-sm ${
                      puntos >= item.costo
                        ? "text-green-700 font-semibold"
                        : "text-gray-600"
                    }`}
                  >
                    {item.costo} GC
                  </span>
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
