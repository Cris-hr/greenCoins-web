"use client";

import Image from "next/image";
import Link from "next/link";
import { manejoEspecial, reciclables } from "@/data/reciclables";

export default function GuidePage() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-700">
          Aprende a reciclar
        </h2>
        <p className="text-gray-600">
          Selecciona el residuo que quieres conocer
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {reciclables.map((item) => (
          <Link href={`/guide/${item.slug}`} key={item.name}>
            <div className="group w-full h-44 bg-white rounded-2xl shadow-md hover:bg-green-600 transition-colors flex flex-col items-center justify-center p-4 text-center cursor-pointer">
              <Image
                src={item.img}
                alt={item.name}
                width={80}
                height={80}
                className="mb-3 object-contain"
              />
              <p className="text-sm text-gray-800 group-hover:text-white font-medium">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mb-10 mt-10">
        <h2 className="text-3xl font-bold text-yellow-400">Manejo Especial</h2>
        <p className="text-gray-600">
          Residuos que requieren tratamiento especial
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {manejoEspecial.map((item) => (
          <Link href={`/guide/${item.slug}`} key={item.name}>
            <div className="group w-full h-44 bg-white rounded-2xl shadow-md hover:bg-yellow-400 transition-colors flex flex-col items-center justify-center p-4 text-center cursor-pointer">
              <Image
                src={item.img}
                alt={item.name}
                width={80}
                height={80}
                className="mb-3 object-contain"
              />
              <p className="text-sm text-gray-800 font-medium group-hover:text-white transition-colors">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
