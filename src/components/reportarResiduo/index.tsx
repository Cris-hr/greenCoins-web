// "use client";

// import { useState } from "react";
// import { getPuntosPorResiduo } from "@/utils/valoresReciclaje";
// import Link from "next/link";

// export default function ReportarResiduo() {
//   const [items, setItems] = useState([{ tipo: "", cantidad: 1 }]);
//   const [mensaje, setMensaje] = useState("");

//   const tiposDeResiduo = [
//     "botella de plástico (pet)",
//     "papel",
//     "vidrio",
//     "lata",
//     "lata de aluminio",
//     "baterías",
//     "bolsa reutilizable",
//     "equipo electronico",
//     "bolsa de plastico",
//     "carton",
//     "madera",
//     "chatarra",
//     "cables",
//     "celular",
//     "llanta",
//   ];

//   const handleItemChange = (
//     index: number,
//     field: string,
//     value: string | number
//   ) => {
//     const nuevosItems = [...items];
//     nuevosItems[index] = {
//       ...nuevosItems[index],
//       [field]: field === "cantidad" ? Number(value) : value,
//     };
//     setItems(nuevosItems);
//   };

//   const agregarOtroItem = () => {
//     setItems([...items, { tipo: "", cantidad: 1 }]);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     let totalPuntos = 0;
//     const detalles: string[] = [];

//     items.forEach(({ tipo, cantidad }) => {
//       if (!tipo || cantidad <= 0) return;
//       const puntosPorUnidad = getPuntosPorResiduo(tipo);
//       totalPuntos += puntosPorUnidad * cantidad;
//       detalles.push(`${cantidad} x ${tipo}`);
//     });

//     if (totalPuntos === 0) {
//       alert("Por favor, completa al menos un tipo y cantidad válida.");
//       return;
//     }

//     // Actualizar localStorage
//     const puntosActuales = parseInt(
//       localStorage.getItem("greenCoins") || "0",
//       10
//     );
//     const nuevosPuntos = puntosActuales + totalPuntos;
//     localStorage.setItem("greenCoins", nuevosPuntos.toString());

//     setMensaje(
//       `✅ ¡Gracias! Has ganado ${totalPuntos} GreenCoins por reciclar: ${detalles.join(
//         ", "
//       )}.`
//     );
//     setItems([{ tipo: "", cantidad: 1 }]); // Reinicia el formulario
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 mt-6 text-center mb-20">
//       <h1 className="text-3xl font-bold text-green-700 mb-4">
//         ♻️ Reporta tus residuos
//       </h1>
//       <p className="text-gray-600 mb-6">
//         Registra los materiales reciclados y gana GreenCoins
//       </p>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {items.map((item, index) => (
//           <div key={index} className="flex gap-2 items-center">
//             <select
//               value={item.tipo}
//               onChange={(e) => handleItemChange(index, "tipo", e.target.value)}
//               className="w-2/3 p-2 border rounded"
//               required
//             >
//               <option value="">-- Tipo de residuo --</option>
//               {tiposDeResiduo.map((residuo) => (
//                 <option key={residuo} value={residuo}>
//                   {residuo}
//                 </option>
//               ))}
//             </select>

//             <input
//               type="number"
//               min={1}
//               value={item.cantidad}
//               onChange={(e) =>
//                 handleItemChange(index, "cantidad", e.target.value)
//               }
//               className="w-1/3 p-2 border rounded"
//               placeholder="Cantidad"
//               required
//             />
//           </div>
//         ))}

//         <button
//           type="button"
//           onClick={agregarOtroItem}
//           className="w-full bg-blue-200 text-blue-700 py-2 rounded hover:bg-blue-300"
//         >
//           + Agregar otro residuo
//         </button>

//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//         >
//           Reportar y ganar puntos
//         </button>
//       </form>

//       {mensaje && (
//         <p className="mt-4 text-green-700 font-semibold">{mensaje}</p>
//       )}

//       <Link href="/">
//         <button className="block w-full mt-6 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
//           Volver al inicio
//         </button>
//       </Link>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { residuos } from "@/utils/valoresReciclaje"; // nueva importación
import Link from "next/link";

export default function ReportarResiduo() {
  const [items, setItems] = useState([{ tipo: "", cantidad: 1 }]);
  const [mensaje, setMensaje] = useState("");

  const residuosPorKilo = ["papel", "chatarra", "carton", "cables"];

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

    let totalPuntos = 0;
    const detalles: string[] = [];

    items.forEach(({ tipo, cantidad }) => {
      if (!tipo || cantidad <= 0) return;
      const puntosPorUnidad = getPuntosPorResiduo(tipo);
      totalPuntos += puntosPorUnidad * cantidad;
      const esPorKilo = residuosPorKilo.includes(tipo.toLowerCase());
      const unidad = esPorKilo ? "k" : "";
      // Agrega "s" si la cantidad es mayor a 1 y el tipo no termina en "s" ya
      const tipoPlural =
        cantidad > 1 && !tipo.toLowerCase().endsWith("s") ? `${tipo}s` : tipo;

      detalles.push(`${cantidad} ${unidad} - ${tipoPlural}`);
    });

    if (totalPuntos === 0) {
      alert("Por favor, completa al menos un tipo y cantidad válida.");
      return;
    }

    // Actualizar localStorage
    const puntosActuales = parseInt(
      localStorage.getItem("greenCoins") || "0",
      10
    );
    const nuevosPuntos = puntosActuales + totalPuntos;
    localStorage.setItem("greenCoins", nuevosPuntos.toString());

    setMensaje(
      `✅ ¡Gracias! Has ganado ${totalPuntos} GreenCoins por reciclar: ${detalles.join(
        ", "
      )}.`
    );
    setItems([{ tipo: "", cantidad: 1 }]); // Reinicia el formulario
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-6 text-center mb-20">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        ♻️ Reporta tus residuos
      </h1>
      <p className="text-gray-600 mb-6">
        Registra los materiales reciclados y gana GreenCoins
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <select
              value={item.tipo}
              onChange={(e) => handleItemChange(index, "tipo", e.target.value)}
              className="w-2/3 p-2 border rounded"
              required
            >
              <option value="">-- Tipo de residuo --</option>
              {residuos.map((residuo) => {
                const unidad = residuosPorKilo.includes(
                  residuo.nombre.toLowerCase()
                )
                  ? "Kilo"
                  : "Und.";
                return (
                  <option key={residuo.nombre} value={residuo.nombre}>
                    {residuo.nombre} - {residuo.puntos} Coins x {unidad}
                  </option>
                );
              })}
              {/* {residuos.map((residuo) => (
                <option key={residuo.nombre} value={residuo.nombre}>
                  {residuo.nombre} - {residuo.puntos} Coins x und.
                </option>
              ))} */}
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
          + Agregar otro residuo
        </button>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Reportar y ganar puntos
        </button>
      </form>

      {mensaje && (
        <p className="mt-4 text-green-700 font-semibold">{mensaje}</p>
      )}

      <Link href="/">
        <button className="block w-full mt-6 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}
