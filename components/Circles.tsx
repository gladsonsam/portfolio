import Image from "next/image";
import React from "react";

const Circles: React.FC = () => {
  return (
    <div className="w-[120px] sm:w-[160px] md:w-[200px] xl:w-[300px] absolute -right-8 sm:-right-12 xl:-right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10 opacity-50 sm:opacity-75 xl:opacity-100">
      <Image
        src="/circles.png"
        alt="circles"
        width={260}
        height={200}
        className="w-full h-auto"
      />
    </div>
  );
};

export default Circles;