"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import { puntosReciclaje } from "@/data/puntosReciclaje";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

//const center: LatLngTuple = [-12.1, -77.03];

// Fix para íconos de Leaflet que no se muestran por defecto
delete (L.Icon.Default as any).prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

// Componente para establecer el centro del mapa
function SetMapCenter() {
  const map = useMap();
  useEffect(() => {
    map.setView([-12.0651, -75.2049], 13);
  }, [map]);
  return null;
}

export default function RecicleMap() {
  useEffect(() => {
    // Esto asegura que Leaflet cargue bien en render del cliente
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6 text-green-700">
        Puntos de Reciclaje
      </h1>

      <MapContainer className="h-[500px] w-full rounded-xl shadow-lg">
        <SetMapCenter />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {puntosReciclaje.map((punto, index) => (
          <Marker key={index} position={[punto.lat, punto.lng]}>
            <Popup>
              <strong>{punto.name}</strong>
              <br />
              {punto.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </main>
  );
}
