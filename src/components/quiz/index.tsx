// "use client";

// import { useState } from "react";
// import { quizSets } from "@/data/quiz";
// import { sumarPuntos } from "@/utils/sumarPuntos";

// export default function Quiz() {
//   const [setActivo, setSetActivo] = useState<number | null>(null);
//   const [paso, setPaso] = useState(0);
//   const [puntos, setPuntos] = useState(0);
//   const [respondido, setRespondido] = useState(false);
//   const [seleccion, setSeleccion] = useState<string | null>(null);
//   const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

//   if (setActivo === null) {
//     return (
//       <div className="max-w-xl mx-auto p-6 text-center mt-10 mb-10">
//         <h1 className="text-2xl font-bold text-green-700 mb-4">
//           Pon a prueba tus conocimientos...
//         </h1>
//         <h2 className="text-2xl font-bold text-black mb-4">
//           Selecciona un set de preguntas
//         </h2>
//         <div className="grid gap-4">
//           {[1, 2, 3, 4].map((num) => (
//             <button
//               key={num}
//               onClick={() => setSetActivo(num - 1)}
//               className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
//             >
//               Set {num}
//             </button>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   const preguntasSet = quizSets[setActivo];
//   const preguntaActual = preguntasSet[paso];

//   const manejarRespuesta = (opcion: string) => {
//     if (respondido) return;

//     setSeleccion(opcion);
//     setRespondido(true);

//     if (opcion === preguntaActual.respuestaCorrecta) {
//       setPuntos((prev) => prev + 1);
//     }
//   };

//   const siguiente = () => {
//     setRespondido(false);
//     setSeleccion(null);
//     setPaso((prev) => prev + 1);
//   };

//   const volverASeleccion = () => {
//     setPaso(0);
//     setPuntos(0);
//     setSetActivo(null);
//     setSeleccion(null);
//     setRespondido(false);
//     setMostrarConfirmacion(false);
//   };

//   if (paso >= preguntasSet.length) {
//     return (
//       <div className="max-w-xl mx-auto p-6 text-center">
//         <h2 className="text-2xl font-bold text-green-700 mb-4">
//           ¡Quiz terminado!
//         </h2>
//         <p className="text-xl mb-2">
//           Obtuviste {puntos} de {preguntasSet.length} puntos 🎉
//         </p>
//         <button
//           onClick={() => setSetActivo(null)}
//           className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//         >
//           Jugar otro Quiz
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-xl mx-auto p-6">
//       <h2 className="text-xl font-bold text-green-700 mb-2">
//         Pregunta {paso + 1} de {preguntasSet.length}
//       </h2>
//       <p className="text-lg font-medium mb-4">{preguntaActual.pregunta}</p>

//       <div className="space-y-3">
//         {preguntaActual.opciones.map((opcion, i) => {
//           const correcta = opcion === preguntaActual.respuestaCorrecta;

//           return (
//             <button
//               key={i}
//               onClick={() => manejarRespuesta(opcion)}
//               className={`w-full text-left border p-3 rounded-lg transition
//                 ${
//                   respondido
//                     ? correcta
//                       ? "bg-green-200 border-green-500"
//                       : opcion === seleccion
//                       ? "bg-red-200 border-red-500"
//                       : "bg-gray-100"
//                     : "hover:bg-green-50"
//                 }`}
//               disabled={respondido}
//             >
//               {opcion}
//             </button>
//           );
//         })}
//       </div>

//       {respondido && (
//         <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400">
//           <p className="text-sm text-blue-800">
//             💡 {preguntaActual.explicacion}
//           </p>
//           <button
//             onClick={siguiente}
//             className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//           >
//             Siguiente
//           </button>
//         </div>
//       )}

//       <div className="mt-6">
//         {!mostrarConfirmacion ? (
//           <button
//             onClick={() => setMostrarConfirmacion(true)}
//             className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
//           >
//             Reiniciar juego
//           </button>
//         ) : (
//           <div className="mt-4 text-sm bg-red-50 p-3 rounded border border-red-200 text-red-800">
//             <p className="mb-2">¿Seguro que deseas reiniciar el quiz?</p>
//             <div className="flex gap-2 justify-center">
//               <button
//                 onClick={volverASeleccion}
//                 className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
//               >
//                 Sí, reiniciar
//               </button>
//               <button
//                 onClick={() => setMostrarConfirmacion(false)}
//                 className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-100"
//               >
//                 Cancelar
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { quizSets } from "@/data/quiz";
import { sumarPuntos } from "@/utils/sumarPuntos";

export default function Quiz() {
  const [setActivo, setSetActivo] = useState<number | null>(null);
  const [paso, setPaso] = useState(0);
  const [puntos, setPuntos] = useState(0);
  const [respondido, setRespondido] = useState(false);
  const [seleccion, setSeleccion] = useState<string | null>(null);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [puntosOtorgados, setPuntosOtorgados] = useState(false);
  const [quizCompletado, setQuizCompletado] = useState(false);

  // Otorga los puntos una sola vez al completar el quiz
  useEffect(() => {
    if (quizCompletado && !puntosOtorgados) {
      sumarPuntos(10);
      alert("🎉 ¡Completaste el quiz y ganaste 10 GreenCoins!");
      setPuntosOtorgados(true);
    }
  }, [quizCompletado, puntosOtorgados]);

  if (setActivo === null) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center mt-10 mb-10">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          Pon a prueba tus conocimientos...
        </h1>
        <h2 className="text-2xl font-bold text-black mb-4">
          Selecciona un set de preguntas
        </h2>
        <div className="grid gap-4">
          {quizSets.map((_, i) => (
            <button
              key={i}
              onClick={() => setSetActivo(i)}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Set {i + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const preguntasSet = quizSets[setActivo];
  const preguntaActual = preguntasSet[paso];

  const manejarRespuesta = (opcion: string) => {
    if (respondido) return;

    setSeleccion(opcion);
    setRespondido(true);

    if (opcion === preguntaActual.respuestaCorrecta) {
      setPuntos((prev) => prev + 1);
    }
  };

  const siguiente = () => {
    setRespondido(false);
    setSeleccion(null);
    if (paso + 1 < preguntasSet.length) {
      setPaso((prev) => prev + 1);
    } else {
      setQuizCompletado(true);
    }
  };

  const volverASeleccion = () => {
    setPaso(0);
    setPuntos(0);
    setSetActivo(null);
    setSeleccion(null);
    setRespondido(false);
    setMostrarConfirmacion(false);
    setQuizCompletado(false);
    setPuntosOtorgados(false);
  };

  if (quizCompletado) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          ¡Quiz terminado!
        </h2>
        <p className="text-xl mb-2">
          Obtuviste {puntos} de {preguntasSet.length} puntos 🎉
        </p>
        <p className="text-green-600 font-semibold mt-2">
          🎁 ¡Ganaste 10 GreenCoins!
        </p>
        <button
          onClick={volverASeleccion}
          className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Jugar otro Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-bold text-green-700 mb-2">
        Pregunta {paso + 1} de {preguntasSet.length}
      </h2>
      <p className="text-lg font-medium mb-4">{preguntaActual.pregunta}</p>

      <div className="space-y-3">
        {preguntaActual.opciones.map((opcion, i) => {
          const correcta = opcion === preguntaActual.respuestaCorrecta;

          return (
            <button
              key={i}
              onClick={() => manejarRespuesta(opcion)}
              className={`w-full text-left border p-3 rounded-lg transition 
                ${
                  respondido
                    ? correcta
                      ? "bg-green-200 border-green-500"
                      : opcion === seleccion
                      ? "bg-red-200 border-red-500"
                      : "bg-gray-100"
                    : "hover:bg-green-50"
                }`}
              disabled={respondido}
            >
              {opcion}
            </button>
          );
        })}
      </div>

      {respondido && (
        <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400">
          <p className="text-sm text-blue-800">
            💡 {preguntaActual.explicacion}
          </p>
          <button
            onClick={siguiente}
            className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Siguiente
          </button>
        </div>
      )}

      <div className="mt-6">
        {!mostrarConfirmacion ? (
          <button
            onClick={() => setMostrarConfirmacion(true)}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
          >
            Reiniciar juego
          </button>
        ) : (
          <div className="mt-4 text-sm bg-red-50 p-3 rounded border border-red-200 text-red-800">
            <p className="mb-2">¿Seguro que deseas reiniciar el quiz?</p>
            <div className="flex gap-2 justify-center">
              <button
                onClick={volverASeleccion}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Sí, reiniciar
              </button>
              <button
                onClick={() => setMostrarConfirmacion(false)}
                className="px-3 py-1 border border-gray-400 rounded hover:bg-gray-100"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
