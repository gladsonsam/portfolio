import Image from "next/image";
import React from "react";

const Bulb: React.FC = () => {
  return (
    <div className="absolute -left-20 sm:-left-28 xl:-left-36 -bottom-8 sm:-bottom-10 xl:-bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[120px] sm:w-[160px] md:w-[200px] xl:w-[260px] select-none pointer-events-none opacity-50 sm:opacity-75 xl:opacity-100">
      <Image
        src="/bulb.png"
        alt="bulb"
        width={260}
        height={200}
        className="w-full h-auto"
      />
    </div>
  );
};

export default Bulb;