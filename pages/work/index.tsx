import { motion } from "framer-motion";
import type { NextPage } from "next";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work: NextPage = () => {
  return (
    <div className="min-h-screen bg-primary/30 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-y-auto">
      <Circles />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex flex-col xl:flex-row gap-x-8 gap-y-8 items-center xl:items-start min-h-[calc(100vh-12rem)]">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left w-full xl:w-auto">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-6 sm:mb-8 max-w-[400px] mx-auto lg:mx-0 text-sm sm:text-base px-2 lg:px-0"
            >
              Here are some of the projects I&apos;ve built using modern web technologies. Each project showcases different aspects of my development skills, from React applications to full-stack solutions.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] flex-1"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;