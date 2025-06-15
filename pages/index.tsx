import { motion } from "framer-motion";
import type { NextPage } from "next";

import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home: NextPage = () => {
  return (
    <div className="h-full flex items-center relative z-10">
      {/* text */}
      <div className="w-full h-full flex items-center">
        <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-between gap-8 h-full py-16 xl:py-0">
            {/* text content */}
            <div className="flex-1 flex flex-col justify-center">
              {/* title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="h1 text-center xl:text-left"
              >
                Aspiring <span className="text-accent">Full Stack Developer</span> <br />
                & Engineering Student
              </motion.h1>

              {/* subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-12 text-center xl:text-left"
              >
                I am a student pursuing a double degree in Mechatronic Engineering Honours and Computer Science. My passion lies in robotics, automation, and full-stack development.
              </motion.p>

              {/* btn */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex justify-center xl:justify-start"
              >
                <ProjectsBtn />
              </motion.div>
            </div>
            {/* avatar container */}
            <div className="flex items-center justify-center xl:flex-1 xl:justify-end relative mt-8 xl:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="relative"
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