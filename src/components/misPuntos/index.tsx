// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// export default function MisPuntos() {
//   const [puntos, setPuntos] = useState(0);

//   useEffect(() => {
//     const puntosGuardados = parseInt(
//       localStorage.getItem("greenCoins") || "0",
//       10
//     );
//     setPuntos(puntosGuardados);
//   }, []);

//   return (
//     <div className="max-w-md mx-auto p-6 mt-20 text-center mb-20">
//       <h1 className="text-3xl font-bold text-green-700 mb-4">
//         💰 Tus GreenCoins
//       </h1>
//       <p className="text-5xl font-bold text-green-600">{puntos}</p>
//       <p className="mt-4 text-gray-600">
//         ¡Sigue ayudando al planeta para ganar más!
//       </p>

//       <Link href="/">
//         <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
//           Volver al inicio
//         </button>
//       </Link>
//     </div>
//   );
// }

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
      nombre: "🎟️ Cupón 10% descuento en compras",
      costo: 100,
    },
    // Recompensas educativas
    { nombre: "📘 Ebook: Guía práctica-cuida el planeta", costo: 200 },
    { nombre: "🎓 Acceso a mini curso ecológico online", costo: 300 },

    // Recompensas físicas simuladas
    { nombre: "♻️ Bolsa ecológica reutilizable", costo: 20 },
    { nombre: "🚰 Botella reutilizable con diseño eco", costo: 25 },
    { nombre: "🌱 Kit de semillas para tu huerto casero", costo: 20 },
    { nombre: "👕 Polo personalizado con mensaje eco", costo: 100 },
    ,
  ];

  return (
    <div className="max-w-md mx-auto p-6 mt-4 text-center mb-20">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        💰 Tus GreenCoins
      </h1>
      <p className="text-5xl font-bold text-green-600">{puntos}</p>
      <p className="mt-4 text-gray-600">
        ¡Sigue ayudando al planeta para ganar más!
      </p>

      <div className="mt-6 space-y-4">
        <button
          onClick={() => setMostrarRecompensas(!mostrarRecompensas)}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          {mostrarRecompensas ? "Ocultar recompensas" : "Canjear puntos"}
        </button>

        {mostrarRecompensas && (
          <div className="mt-4 text-left bg-gray-100 p-4 rounded shadow">
            <h3 className="text-green-700 font-bold mb-2">
              Recompensas disponibles:
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
              * Solo es una simulación para fines educativos.
            </p>
          </div>
        )}

        <Link href="/">
          <button className="block w-full mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Volver al inicio
          </button>
        </Link>
      </div>
    </div>
  );
}
