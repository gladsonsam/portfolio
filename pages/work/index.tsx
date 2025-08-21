import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects & Work - Gladson Sam | Portfolio</title>
        <meta name="description" content="Explore Gladson Sam's portfolio of projects including web development, robotics, and engineering solutions. View his work in React, Next.js, TypeScript, and more." />
        <meta name="keywords" content="gladson sam, projects, portfolio, web development, react, nextjs, typescript, robotics, engineering, church website, freeshow remote" />
        <meta property="og:title" content="Projects & Work - Gladson Sam | Portfolio" />
        <meta property="og:description" content="Explore my portfolio of projects including web development, robotics, and engineering solutions." />
        <meta property="og:url" content="https://gladsonsam.com/work" />
        <meta name="twitter:title" content="Projects & Work - Gladson Sam | Portfolio" />
        <meta name="twitter:description" content="Explore my portfolio of projects including web development, robotics, and engineering solutions." />
      </Head>
      
      <div className="min-h-screen bg-primary/30 relative">
      <Circles />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 min-h-screen xl:h-screen xl:flex xl:items-center">
        <div className="flex flex-col xl:flex-row gap-x-8 gap-y-12 xl:gap-y-8 items-center xl:items-center justify-center w-full py-20 sm:py-24 lg:py-28 xl:py-0">
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
              className="mb-8 sm:mb-6 xl:mb-8 max-w-[400px] mx-auto lg:mx-0 text-sm sm:text-base px-2 lg:px-0"
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
    </>
  );
};

export default Work;