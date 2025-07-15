"use client";
import { useState } from "react";
//import { sumarPuntos } from "@/utils/sumarPuntos";

export default function ReportProblem() {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [imagen, setImagen] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  //const [puntosOtorgados, setPuntosOtorgados] = useState(false);

  const handleImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagen(null);
      setPreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!descripcion.trim()) return alert("Please write a description.");
    setEnviado(true);
    setNombre("");
    setTipo("");
    setDescripcion("");
  };

  // if (enviado && !puntosOtorgados) {
  //   // ✅ Sumar puntos una sola vez
  //   sumarPuntos(5);
  //   alert("🎉 ¡Thank you for your contribution! You have earned 5 GreenCoins.");
  //   setPuntosOtorgados(true);
  // }
  if (enviado) {
    return (
      <div className="max-w-md mx-auto p-6 text-center mt-20 mb-20">
        <h2 className="text-2xl font-bold text-green-700 mb-4">¡Thank you!</h2>
        <p className="text-lg">Your report was successfully sent ✅</p>
        {/* <p className="text-green-600 font-semibold mt-2">
          🎉 You have earned 5 GreenCoins.
        </p> */}
        <button
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
          onClick={() => {
            setEnviado(false);
            // setPuntosOtorgados(false);
          }}
        >
          Send another report
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 space-y-4 bg-white shadow rounded mt-20 mb-20"
    >
      <h2 className="text-2xl font-bold text-green-700">Report a problem</h2>
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
        placeholder="Your name (optional)"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="w-full border rounded p-2"
      />

      <textarea
        placeholder="Describe the problem..."
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        rows={4}
        className="w-full border rounded p-2"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Send report
      </button>
    </form>
  );
}
