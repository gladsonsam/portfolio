import Link from "next/link";
import React from "react";
import Socials from "./Socials";

const Header: React.FC = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 sm:px-6 lg:px-8 xl:px-0 h-auto top-0">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center gap-y-2 sm:gap-y-0 py-3 sm:py-4 lg:py-6">
          {/* logo/name */}
          <Link href="/" className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wider hover:text-accent transition-colors duration-300 text-center sm:text-left">
            Gladson Sam
          </Link>

          {/* socials */}
          <div className="scale-75 sm:scale-90 lg:scale-100">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;