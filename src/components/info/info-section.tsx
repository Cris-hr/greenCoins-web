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
            Why is it important to recycle?
          </h2>
          <p className="text-lg text-black">
            Recycling is one of the simplest and most effective ways to care for
            our planet. It helps reduce pollution, conserve natural resources
            like water, trees, and minerals, and minimizes the amount of waste
            sent to landfills and oceans. <br />
            <br />
            By recycling, we also reduce greenhouse gas emissions that
            contribute to climate change and protect wildlife habitats from the
            harmful effects of waste. <br />
            <br />
            With <strong>GreenCoins</strong>, you'll learn to recycle in a fun,
            interactive way — earning points, playing games, and taking real
            steps toward a cleaner, more sustainable future. Every small action
            adds up to big change!
          </p>
        </div>
      </div>
    </section>
  );
}
