// utils/guideProgress.ts

const STORAGE_KEY = "guideVisited";
const COINS_KEY = "guideRewardGiven";

export function registrarVista(slug: string) {
  const vistas: string[] = JSON.parse(
    localStorage.getItem(STORAGE_KEY) || "[]"
  );
  if (!vistas.includes(slug)) {
    const nuevas = [...vistas, slug];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevas));
  }
}

export function obtenerVistas(): string[] {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export function marcarRecompensaOtorgada() {
  localStorage.setItem(COINS_KEY, "true");
}

export function recompensaYaOtorgada(): boolean {
  return localStorage.getItem(COINS_KEY) === "true";
}

export function resetearGuia() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(COINS_KEY);
}
