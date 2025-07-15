import { notFound } from "next/navigation";
import Image from "next/image";
import { reciclables, manejoEspecial } from "@/data/reciclables";

type Props = {
  params: { slug: string };
};

export default function ResiduoPage({ params }: Props) {
  const residuo = [...reciclables, ...manejoEspecial].find(
    (item) => item.slug === params.slug
  );

  if (!residuo) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-700">
        {residuo.name}
      </h1>

      {/* Sección principal: Imagen + Descripción */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative w-full h-48 md:h-72 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={residuo.img}
            alt={residuo.name}
            fill
            className="object-contain p-4"
          />
        </div>
        <p className="text-lg leading-relaxed text-gray-800">
          {residuo.description}
        </p>
      </section>

      {/* Sección de reutilización */}
      {residuo.reutilizacion && (
        <section className="grid md:grid-cols-2 gap-8 items-start">
          {/* Descripción de reutilización */}
          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              What can you do with this waste?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {residuo.reutilizacion.descripcion}
            </p>
          </div>

          {/* Imágenes de reutilización */}
          <div className="grid grid-cols-2 gap-4">
            {residuo.reutilizacion.images.map((img: string, i: number) => (
              <div
                key={i}
                className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={img}
                  alt={`Reutilización ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
