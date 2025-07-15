import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="max-w-5xl mx-auto flex items-center justify-between h-full">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo4.png"
          alt="GreenCoins Logo"
          width={200}
          height={200}
          className="max-h-full object-contain"
        />
      </Link>
      <div className="flex flex-wrap gap-4 text-sm sm:text-base">
        <Link href="/">
          <div className="text-silk hover:border-b-2 hover:border-green-600 p-2">
            Home
          </div>
        </Link>
        <Link href="/guide">
          <div className="text-silk hover:border-b-2 hover:border-green-600 p-2">
            Guide
          </div>
        </Link>
        <Link href="/map">
          <div className="text-silk hover:border-b-2 hover:border-green-600 p-2">
            Map
          </div>
        </Link>
        <Link href="/quiz">
          <div className="text-silk hover:border-b-2 hover:border-green-600 p-2">
            Quiz
          </div>
        </Link>
        <Link href="/reporta">
          <div className="text-silk hover:border-b-2 hover:border-green-600 p-2">
            Reports a problem
          </div>
        </Link>
        <Link href="/total">
          <div className="text-silk hover:border-b-2 hover:border-green-600 p-2">
            Total points
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
