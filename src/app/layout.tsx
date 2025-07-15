import Footer from "@/components/footer";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GreenCoins",
  description: "Aprende, juega y actúa por un mundo más limpio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`overflow-x-hidden flex flex-col min-h-screen ${inter.className}`}
      >
        <header className="bg-white text-black px-4 py-2 shadow-md h-20">
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
