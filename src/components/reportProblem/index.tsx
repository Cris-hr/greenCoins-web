"use client";
import { useState } from "react";
import { sumarPuntos } from "@/utils/sumarPuntos";

export default function ReportProblem() {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [imagen, setImagen] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [puntosOtorgados, setPuntosOtorgados] = useState(false);

  const handleImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagen(null);
      setPreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!descripcion.trim()) return alert("Por favor escribe una descripción.");
    setEnviado(true);
    setNombre("");
    setTipo("");
    setDescripcion("");
  };

  if (enviado && !puntosOtorgados) {
    // ✅ Sumar puntos una sola vez
    sumarPuntos(5);
    alert("🎉 ¡Gracias por tu contribución! Has ganado 5 GreenCoins.");
    setPuntosOtorgados(true);
  }
  if (enviado) {
    return (
      <div className="max-w-md mx-auto p-6 text-center mt-20 mb-20">
        <h2 className="text-2xl font-bold text-green-700 mb-4">¡Gracias!</h2>
        <p className="text-lg">Tu reporte fue enviado con éxito ✅</p>
        <p className="text-green-600 font-semibold mt-2">
          🎉 Has ganado 5 GreenCoins.
        </p>
        <button
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => {
            setEnviado(false);
            setPuntosOtorgados(false);
          }}
        >
          Enviar otro reporte
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 space-y-4 bg-white shadow rounded mt-20 mb-20"
    >
      <h2 className="text-2xl font-bold text-green-700">
        Reportar un problema
      </h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImagen}
        className="w-full"
      />

      {preview && (
        <img
          src={preview}
          alt="Vista previa"
          className="w-40 h-40 object-cover rounded mt-2"
        />
      )}

      <input
        type="text"
        placeholder="Tu nombre (opcional)"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="w-full border rounded p-2"
      />

      <textarea
        placeholder="Describe el problema..."
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        rows={4}
        className="w-full border rounded p-2"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Enviar reporte
      </button>
    </form>
  );
}
