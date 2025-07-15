"use client";

import { useEffect, useState } from "react";
import { obtenerNivel } from "@/utils/getNivel";

export default function GreenCoinsPage() {
  const [puntos, setPuntos] = useState(0);

  useEffect(() => {
    const puntosGuardados = localStorage.getItem("greenCoins");
    setPuntos(puntosGuardados ? parseInt(puntosGuardados) : 0);
  }, []);

  const nivel = obtenerNivel(puntos);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        🌱 Mis GreenCoins
      </h1>
      <p className="text-lg">
        Tienes <strong>{puntos}</strong> puntos.
      </p>

      {nivel && (
        <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 rounded">
          <h2 className="text-xl font-semibold text-green-800 mb-1">
            {nivel.nombre}
          </h2>
          <p className="text-sm mb-1">{nivel.descripcion}</p>
          <p className="text-sm italic text-green-700">🎁 {nivel.beneficios}</p>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">¿Cómo ganar puntos?</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>✅ Completar un quiz: +10 puntos</li>
          <li>📍 Ver el mapa de reciclaje: +2 puntos</li>
          <li>📚 Leer la guía completa: +3 puntos</li>
          <li>📝 Reportar un problema: +5 puntos</li>
        </ul>
      </div>
    </div>
  );
}
