"use client";

import dynamic from "next/dynamic";

// Importación dinámica de MapPoints sin SSR
const MapPoints = dynamic(() => import("@/views/mapPuntos"), {
  ssr: false,
});

export default function MapPage() {
  return (
    <div>
      <MapPoints />
    </div>
  );
}
