"use client";

import { useState } from "react";
import { residuos } from "@/utils/valoresReciclaje"; // nueva importación
import Link from "next/link";

export default function ReportarResiduo() {
  const [items, setItems] = useState([{ tipo: "", cantidad: 1 }]);
  const [mensaje, setMensaje] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  const residuosPorKilo = ["paper", "scrap", "cardboard", "wire", "wood"];

  const handleItemChange = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const nuevosItems = [...items];
    nuevosItems[index] = {
      ...nuevosItems[index],
      [field]: field === "cantidad" ? Number(value) : value,
    };
    setItems(nuevosItems);
  };

  const agregarOtroItem = () => {
    setItems([...items, { tipo: "", cantidad: 1 }]);
  };

  const getPuntosPorResiduo = (tipo: string): number => {
    const encontrado = residuos.find(
      (residuo) => residuo.nombre.toLowerCase() === tipo.toLowerCase()
    );
    return encontrado?.puntos || 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🚫 Verificar si ya registró hoy
    const ultimaFecha = localStorage.getItem("ultimaFechaRegistro");
    const hoy = new Date().toDateString();

    if (ultimaFecha === hoy) {
      setMostrarModal(true);

      return;
    }

    // ✅ Continuar con el cálculo de puntos
    let totalPuntos = 0;
    const detalles: string[] = [];

    items.forEach(({ tipo, cantidad }) => {
      if (!tipo || cantidad <= 0) return;
      const puntosPorUnidad = getPuntosPorResiduo(tipo);
      totalPuntos += puntosPorUnidad * cantidad;
      const esPorKilo = residuosPorKilo.includes(tipo.toLowerCase());
      const unidad = esPorKilo ? "k" : "";

      // Agrega "s" si la cantidad es mayor a 1 y el tipo no termina en "s"
      const tipoPlural =
        cantidad > 1 && !tipo.toLowerCase().endsWith("s") ? `${tipo}s` : tipo;

      detalles.push(`${cantidad} ${unidad} - ${tipoPlural}`);
    });

    if (totalPuntos === 0) {
      alert("Please complete at least one valid type and quantity.");
      return;
    }

    // ✅ Actualizar puntos y guardar fecha
    const puntosActuales = parseInt(
      localStorage.getItem("greenCoins") || "0",
      10
    );
    const nuevosPuntos = puntosActuales + totalPuntos;

    localStorage.setItem("greenCoins", nuevosPuntos.toString());
    localStorage.setItem("ultimaFechaRegistro", hoy); // 🗓️ Guardar fecha del registro

    // ✅ Mostrar mensaje
    setMensaje(
      `✅ ¡Thank you! You have earned ${totalPuntos} GreenCoins for recycling: ${detalles.join(
        ", "
      )}.`
    );

    setItems([{ tipo: "", cantidad: 1 }]); // Reinicia el formulario
  };

  return (
    <div className="relative max-w-md mx-auto p-6 mt-6 text-center mb-20">
      {/* Boton temporal solo para la demo, que permite varios registros al dia,
      lo correcto limita a 1 x dia */}
      <button
        onClick={() => {
          localStorage.removeItem("ultimaFechaRegistro");
          alert("🔁 Register released. ¡You can report waste again today!");
        }}
        className="fixed top-30 right-4 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 text-sm z-50"
      >
        Reset demo registration
      </button>
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        ♻️ Report your accumulated waste
      </h1>
      <p className="text-gray-600 mb-6">
        Register recycled materials and earn GreenCoins
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mostrarModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
              <h2 className="text-xl font-semibold text-red-600 mb-4">
                ⛔ Your registration has been sent
              </h2>
              <p className="text-gray-700 mb-4">
                You have already registered your waste today. Please come back
                tomorrow.
              </p>
              <button
                onClick={() => setMostrarModal(false)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Ok
              </button>
            </div>
          </div>
        )}

        {items.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <select
              value={item.tipo}
              onChange={(e) => handleItemChange(index, "tipo", e.target.value)}
              className="w-2/3 p-2 border rounded"
              required
            >
              <option value="">-- Type of waste --</option>
              {residuos.map((residuo) => {
                const unidad = residuosPorKilo.includes(
                  residuo.nombre.toLowerCase()
                )
                  ? "Kg"
                  : "Und.";
                return (
                  <option key={residuo.nombre} value={residuo.nombre}>
                    {residuo.nombre} - {residuo.puntos} Coins x {unidad}
                  </option>
                );
              })}
            </select>

            <input
              type="number"
              min={1}
              value={item.cantidad}
              onChange={(e) =>
                handleItemChange(index, "cantidad", e.target.value)
              }
              className="w-1/3 p-2 border rounded"
              placeholder="Cantidad"
              required
            />
          </div>
        ))}

        <button
          type="button"
          onClick={agregarOtroItem}
          className="w-full bg-blue-200 text-blue-700 py-2 rounded hover:bg-blue-300"
        >
          + Add another residue
        </button>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Report and gain points
        </button>
      </form>
      {mensaje && (
        <p className="mt-4 text-green-700 font-semibold">{mensaje}</p>
      )}
      <Link href="/total">
        <button className="block w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-gray-700 px-4 py-2 rounded">
          See total points
        </button>
      </Link>
      <Link href="/">
        <button className="block w-full mt-6 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
          Back to home
        </button>
      </Link>
    </div>
  );
}
