import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import type { NextPage } from "next";
import type { IconType } from "react-icons";
import {
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// Types
interface SkillInfo {
  title: string;
  icons: IconType[];
}

interface ProjectInfo {
  title: string;
  stage: string;
}

interface AboutDataItem {
  title: string;
  info: (SkillInfo | ProjectInfo)[];
}

//  data
export const aboutData: AboutDataItem[] = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaJs,
          SiTypescript,
          FaReact,
          SiNextdotjs,
          SiTailwindcss,
        ],
      } as SkillInfo,
      {
        title: "Programming & Tools",
        icons: [FaPython, FaGitAlt],
      } as SkillInfo,
    ],
  },
  {
    title: "interests",
    info: [
      {
        title: "Robotics & Automation",
        stage: "Mechatronic Engineering Focus",
      },
      {
        title: "Full Stack Development",
        stage: "Modern Web Technologies",
      },
      {
        title: "Homelab Experiments",
        stage: "Hardware & Software Integration",
      },
    ],
  },
  {
    title: "projects",
    info: [
      {
        title: "Song Building App",
        stage: "React-based Lyrical Presentation Tool",
      },
      {
        title: "Personal Portfolio",
        stage: "Modern Portfolio Website",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Mechatronic Engineering Honours",
        stage: "Current - Double Degree",
      },
      {
        title: "Computer Science",
        stage: "Current - Double Degree",
      },
      {
        title: "Harrisdale Senior High School",
        stage: "Graduated - ATAR 96.15",
      },
    ],
  },
];

const About: NextPage = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-primary/30 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 text-center xl:text-left overflow-y-auto">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px] z-10"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto min-h-screen flex flex-col items-center xl:flex-row gap-x-6 gap-y-8 px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center w-full xl:w-auto">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          >
            Building the <span className="text-accent">future</span> through
            engineering and code.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-sm sm:text-base"
          >
            I am a passionate student pursuing a double degree in Mechatronic Engineering Honours and Computer Science in Perth, Western Australia. My journey combines the precision of engineering with the creativity of software development, focusing on robotics, automation, and full-stack web development.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 gap-x-2 sm:gap-x-4"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {/* experience */}
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                  Active Projects
                </div>
              </div>

              {/* skills */}
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                  Core Skills
                </div>
              </div>

              {/* years */}
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                  Years Studying
                </div>
              </div>

              {/* degrees */}
              <div className="text-center md:text-left">
                <div className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4]">
                  Degrees Pursuing
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] min-h-[400px] max-h-[600px] xl:h-auto"
        >
          <div className="flex gap-x-2 sm:gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 flex-wrap justify-center xl:justify-start">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize text-sm sm:text-base xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 px-2 py-1`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-3 xl:gap-y-4 items-center xl:items-start overflow-y-auto max-h-[400px] xl:max-h-none px-2">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex flex-col sm:flex-row w-full max-w-full gap-x-2 gap-y-2 items-center sm:items-start text-center sm:text-left text-white/60"
              >
                {/* title */}
                <div className="font-light text-sm sm:text-base flex-shrink-0">{item.title}</div>
                <div className="hidden sm:flex">-</div>
                <div className="text-sm sm:text-base flex-grow">{'stage' in item && item.stage}</div>

                <div className="flex gap-x-2 sm:gap-x-4 justify-center sm:justify-start flex-shrink-0">
                  {/* icons */}
                  {'icons' in item && item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-xl sm:text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;