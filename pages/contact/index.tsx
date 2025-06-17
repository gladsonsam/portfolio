import { motion } from "framer-motion";
import { BsArrowRight, BsDownload } from "react-icons/bs";
import type { NextPage } from "next";

import { fadeIn } from "../../variants";
import Socials from "../../components/Socials";

const Contact: NextPage = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center flex items-center justify-center h-full px-4 sm:px-0">
        {/* content */}
        <div className="flex flex-col w-full max-w-[600px]">
          {/* title */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-8"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* contact options */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
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
              className="relative inline-flex items-center gap-3 px-6 py-3 bg-accent/10 border border-accent/20 rounded-full group hover:bg-accent/20 transition-all duration-300"
            >
              <BsDownload className="text-lg group-hover:scale-110 transition-transform duration-300" />
              <span className="text-base font-medium">Request Resume</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;