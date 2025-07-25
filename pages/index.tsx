import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gladson Sam | Full Stack Developer & Engineering Student Portfolio</title>
        <meta name="description" content="Welcome to Gladson Sam's portfolio. Aspiring full stack developer and Mechatronic Engineering Honours & Computer Science student passionate about robotics, automation, and modern web development." />
        <meta name="keywords" content="gladson sam, full stack developer, mechatronic engineering, computer science, portfolio, web developer, student, perth, react, nextjs, typescript, robotics" />
        <meta property="og:title" content="Gladson Sam | Full Stack Developer & Engineering Student" />
        <meta property="og:description" content="Aspiring full stack developer and engineering student passionate about robotics and modern web development." />
        <meta property="og:url" content="https://gladsonsam.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Gladson Sam | Full Stack Developer & Engineering Student" />
        <meta name="twitter:description" content="Aspiring full stack developer and engineering student passionate about robotics and modern web development." />
        <link rel="canonical" href="https://gladsonsam.com" />
      </Head>
      
      <div className="min-h-screen flex items-center relative z-10">
      {/* Mobile Layout */}
      <div className="lg:hidden w-full px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center min-h-screen py-24">
          {/* Mobile Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md mx-auto"
          >
            {/* Compact Avatar & Title Section */}
            <div className="relative mb-8">
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl blur-3xl" />
              
              {/* Content Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8">
                {/* Small Avatar */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="w-24 h-24 mx-auto mb-4 relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/60 rounded-full blur-md" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                    <Image
                      src="/profile.jpg"
                      alt="Gladson Sam"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </motion.div>
                
                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
                  Gladson Sam
                </h1>
                <p className="text-accent text-center text-sm sm:text-base">
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="text-center text-white/70 mb-8 px-4 text-sm sm:text-base leading-relaxed"
            >
              Welcome! I&apos;m an aspiring full stack developer and engineering student 
              with a passion for robotics and web development.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex justify-center mb-20"
            >
              <ProjectsBtn />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout (unchanged) */}
      <div className="hidden lg:block w-full px-8 xl:px-0">
        <div className="container mx-auto">
          <div className="flex flex-row items-center justify-between gap-12 min-h-screen">
            {/* text content */}
            <div className="flex-1 flex flex-col justify-center">
              {/* title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="h1 text-left text-4xl xl:text-5xl"
              >
                Welcome to my<span className="text-accent"> Portfolio</span>
              </motion.h1>

              {/* subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="max-w-lg xl:max-w-xl mb-8 xl:mb-10 text-left text-lg"
              >
                I am an aspiring full stack developer and engineering student who loves building things with code. Currently exploring web technologies and robotics.
              </motion.p>

              {/* btn */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex justify-start"
              >
                <ProjectsBtn />
              </motion.div>
            </div>
            
            {/* avatar container - desktop */}
            <div className="flex-1 flex justify-end relative">
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
    </>
  );
};

export default Home;