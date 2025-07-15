export function sumarPuntos(nuevosPuntos: number) {
  const actuales = parseInt(localStorage.getItem("greenCoins") || "0");
  const nuevos = actuales + nuevosPuntos;
  localStorage.setItem("greenCoins", nuevos.toString());
}
