import HeroHome from "@/components/hero";
import InfoSection from "@/components/info/info-section";

export default function Home() {
  return (
    <>
      {/* Hero ocupa todo el ancho */}
      <HeroHome />
      <InfoSection />
    </>
  );
}
