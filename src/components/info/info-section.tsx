import Image from "next/image";

export default function InfoSection() {
  return (
    <section className="w-full py-12 mt-12 mb-12 bg-gradient-to-r from-green-600">
      <div className="flex flex-col md:flex-row items-center gap-10 w-full">
        {/* Imagen a la izquierda */}
        <div className="w-full md:w-1/2">
          <Image
            src="/recicla.jpg"
            alt="Reciclaje"
            width={500}
            height={400}
            className="object-cover w-full h-auto rounded-r-full"
          />
        </div>

        {/* Texto a la derecha */}
        <div className="w-full md:w-1/2 text-center md:text-left px-6 md:px-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            ¿Por qué es importante reciclar?
          </h2>
          <p className="text-lg text-black">
            El reciclaje ayuda a reducir la contaminación, conserva recursos
            naturales y protege el medio ambiente. <br />
            Con GreenCoins, aprenderás a reciclar de forma divertida mientras
            contribuyes a un planeta más limpio.
          </p>
        </div>
      </div>
    </section>
  );
}
