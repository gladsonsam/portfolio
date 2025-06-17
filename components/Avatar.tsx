import Image from "next/image";
import React from "react";

const Avatar: React.FC = () => {
  return (
    <div className="flex justify-center items-center max-w-none pointer-events-none select-none">
      <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] xl:w-[400px] xl:h-[400px]">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/20 rounded-full blur-2xl" />
        
        {/* Profile image container */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-xl">
          <Image
            src="/profile.jpg"
            alt="Gladson Sam"
            width={400}
            height={400}
            className="object-cover w-full h-full scale-100"
            priority
          />
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        </div>
      </div>
    </div>
  );
};

export default Avatar;