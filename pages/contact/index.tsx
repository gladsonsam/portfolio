import { motion } from "framer-motion";
import { BsArrowRight, BsDownload } from "react-icons/bs";
import type { NextPage } from "next";
import Head from "next/head";

import { fadeIn } from "../../variants";
import Socials from "../../components/Socials";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact - Gladson Sam | Get In Touch</title>
        <meta name="description" content="Get in touch with Gladson Sam for collaboration opportunities, project inquiries, or professional networking. Connect via email or social media." />
        <meta name="keywords" content="gladson sam, contact, get in touch, collaboration, hire, freelance, engineering student, web developer, perth" />
        <meta property="og:title" content="Contact - Gladson Sam | Get In Touch" />
        <meta property="og:description" content="Get in touch with Gladson Sam for collaboration opportunities, project inquiries, or professional networking." />
        <meta property="og:url" content="https://gladsonsam.com/contact" />
        <meta name="twitter:title" content="Contact - Gladson Sam | Get In Touch" />
        <meta name="twitter:description" content="Get in touch with Gladson Sam for collaboration opportunities, project inquiries, or professional networking." />
      </Head>
      
      <div className="min-h-screen bg-primary/30 overflow-y-auto">
      <div className="container mx-auto pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 text-center flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 xl:px-0">
        {/* content */}
        <div className="flex flex-col w-full max-w-[600px]">
          {/* title */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* contact options */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12"
          >
            {/* social links */}
            <div className="flex items-center">
              <Socials />
            </div>

            {/* divider */}
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>

            {/* resume button */}
            <a
              href="mailto:gladson2007@outlook.com?subject=Resume Request&body=Hi Gladson,%0D%0A%0D%0AI would like to request your resume.%0D%0A%0D%0AThank you!"
              className="relative inline-flex items-center gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-accent/10 border border-accent/20 rounded-full group hover:bg-accent/20 transition-all duration-300 text-sm sm:text-base"
            >
              <BsDownload className="text-base sm:text-lg group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Request Resume</span>
            </a>
          </motion.div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;