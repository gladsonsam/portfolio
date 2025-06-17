import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiEnvelope,
} from "react-icons/hi2";

// nav data interface
interface NavLink {
  name: string;
  path: string;
  Icon: IconType;
}

// nav data
export const navData: NavLink[] = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "work", path: "/work", Icon: HiViewColumns },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-4 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-auto xl:bottom-auto xl:right-[2%] z-50 xl:top-0 w-[calc(100%-2rem)] max-w-sm sm:max-w-md xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-evenly xl:justify-center gap-x-1 gap-y-10 px-6 sm:px-8 xl:px-0 h-[60px] sm:h-[70px] xl:h-max py-4 sm:py-6 xl:py-8 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-full xl:rounded-full text-xl sm:text-2xl xl:text-xl shadow-lg relative overflow-hidden">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-50 rounded-full pointer-events-none" />
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === pathname && "text-accent bg-white/10"
            } relative flex items-center group hover:text-accent transition-all duration-300 p-2 sm:p-3 xl:p-2 rounded-full hover:bg-white/5`}
            href={link.path}
            key={i}
          >
            {/* tolltip */}
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                {/* triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div className="relative">
              <link.Icon aria-hidden />
              {/* Mobile active indicator */}
              {link.path === pathname && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full xl:hidden" />
              )}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;