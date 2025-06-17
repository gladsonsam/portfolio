import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn: React.FC = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-accent/10 border border-accent/20 rounded-full group hover:bg-accent/20 transition-all duration-300"
      >
        <span className="text-base sm:text-lg font-medium">View Projects</span>
        <HiArrowRight
          className="text-xl group-hover:translate-x-1 transition-all duration-300"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;