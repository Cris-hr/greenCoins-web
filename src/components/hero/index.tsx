import Image from "next/image";
import React from "react";
export default function HeroOwner() {
  return (
    <section className="relative overflow-hidden mt-10">
      <div className="absolute inset-0 z-0">
        <div className="relative h-[700px] w-full">
          <Image
            src="/hero22.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="container relative mx-auto px-4 pb-24 pt-10">
        <p className="text-3xl font-medium text-white mb-8 text-center">
          Welcome to GeenCoins...
        </p>
        <h2 className="text-4xl text-white font-bold mb-4 text-center mt-20">
          We care for the environment
        </h2>
        <h1 className="text-4xl text-white font-bold mb-8 text-center">
          Explore, learn and contribute to a greener future with our interactive
          tools designed to promote environmental awareness.
        </h1>
      </div>
    </section>
  );
}
