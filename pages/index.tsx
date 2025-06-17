import { motion } from "framer-motion";
import type { NextPage } from "next";

import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home: NextPage = () => {
  return (
    <div className="h-full flex items-center relative z-10 pb-24 sm:pb-28 lg:pb-0">
      {/* text */}
      <div className="w-full h-full flex items-center px-4 sm:px-0 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-0">
        <div className="text-center flex flex-col justify-center lg:text-left h-full container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 sm:gap-6 lg:gap-8 h-full py-4 sm:py-8 lg:py-12 xl:py-0">
            {/* text content */}
            <div className="flex-1 flex flex-col justify-center">
              {/* title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="h1 text-center lg:text-left"
              >
                Aspiring <span className="text-accent">Full Stack Developer</span> <br />
                & Engineering Student
              </motion.h1>

              {/* subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="max-w-sm lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 lg:mb-10 xl:mb-12 text-center lg:text-left text-sm sm:text-base"
              >
                Crafting innovative solutions through code and engineering. Currently building the future with modern web technologies and robotics.
              </motion.p>

              {/* btn */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex justify-center lg:justify-start"
              >
                <ProjectsBtn />
              </motion.div>
            </div>
            {/* avatar container */}
            <div className="flex items-center justify-center lg:flex-1 lg:justify-end relative mt-4 sm:mt-6 lg:mt-0 w-full lg:w-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="relative flex justify-center"
              >
                <Avatar />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;