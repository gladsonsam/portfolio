import { Sora } from "next/font/google";
import Head from "next/head";
import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

import Header from "./Header";
import Nav from "./Nav";

// Dynamically import 3D background to avoid SSR issues
const Background3D = dynamic(() => import("./Background3D"), {
  ssr: false,
});

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative z-0`}
    >
      {/* metadata */}
      <Head>
        <title>Gladson Sam | Portfolio</title>
        <meta
          name="description"
          content="Gladson Sam - Aspiring Full Stack Developer and Mechatronic Engineering Honours & Computer Science student. Passionate about robotics, automation, and modern web development."
        />
        <meta
          name="keywords"
          content="gladson sam, full stack developer, mechatronic engineering, computer science, react, nextjs, typescript, nodejs, python, robotics, automation, portfolio, perth, western australia"
        />
        <meta name="author" content="Gladson Sam" />
        <meta name="theme-color" content="#3b82f6" />
        <meta property="og:title" content="Gladson Sam | Portfolio" />
        <meta property="og:description" content="Aspiring Full Stack Developer and Engineering student passionate about robotics and web development." />
        <meta property="og:url" content="https://gladsonsam.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gladson Sam | Portfolio" />
        <meta name="twitter:description" content="Aspiring Full Stack Developer and Engineering student passionate about robotics and web development." />
      </Head>

      {/* 3D Background */}
      <Background3D />

      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;