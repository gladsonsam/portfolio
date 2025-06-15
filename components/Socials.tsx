import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

import {
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

interface SocialData {
  name: string;
  link: string;
  Icon: IconType;
}

export const socialData: SocialData[] = [
  {
    name: "Github",
    link: "https://github.com/gladsonsam",
    Icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gladson-sam-648b20205/",
    Icon: RiLinkedinLine,
  },
];

const Socials: React.FC = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;