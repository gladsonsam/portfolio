import Link from "next/link";
import React from "react";
import Socials from "./Socials";

const Header: React.FC = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 sm:px-8 md:px-16 xl:px-0 h-auto">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 sm:gap-y-4 lg:gap-y-6 py-4 sm:py-6 lg:py-8">
          {/* logo/name */}
          <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider hover:text-accent transition-colors duration-300">
            Gladson Sam
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;