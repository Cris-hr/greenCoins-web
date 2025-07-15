import { niveles } from "@/data/levels";

export function obtenerNivel(puntos: number) {
  return niveles.find(
    (nivel) => puntos >= nivel.rango[0] && puntos <= nivel.rango[1]
  );
}
