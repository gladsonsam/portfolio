import Image from "next/image";
import React, { useState } from "react";
import { BsArrowRight, BsGithub, BsGlobe, BsX, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

interface Project {
  id: number;
  title: string;
  mainImage: string;
  images: string[];
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SongBuilder",
    mainImage: "/work/songbuilder/main.jpg",
    images: [
      "/work/songbuilder/main.jpg",
      "/work/songbuilder/screenshot1.jpg",
      "/work/songbuilder/screenshot2.jpg",
    ],
    description: "A modern React application designed to help create lyrical presentations for songs. Features real-time editing, multiple themes, and export capabilities for church services and presentations.",
    techStack: ["React", "JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/gladsonsam/SongBuilder",
    liveUrl: "https://songbuilder.gladsonsam.com",
  },
  {
    id: 2,
    title: "Church Website",
    mainImage: "/work/church-website/main.jpg",
    images: [
      "/work/church-website/main.jpg",
      "/work/church-website/screenshot1.jpg",
      "/work/church-website/screenshot2.jpg",
    ],
    description: "A comprehensive church website featuring service information, events calendar, online giving, and community features. Built with modern web technologies to serve the congregation effectively.",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    mainImage: "/work/portfolio/main.jpg",
    images: [
      "/work/portfolio/main.jpg",
      "/work/portfolio/screenshot1.jpg",
      "/work/portfolio/screenshot2.jpg",
    ],
    description: "A modern, responsive portfolio website showcasing my projects, skills, and experience. Features 3D animations, smooth transitions, and a clean, professional design.",
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "React Three Fiber"],
    githubUrl: "https://github.com/gladsonsam/portfolio",
    liveUrl: "https://gladsonsam.com",
  },
];

// Animation variants
const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const WorkSlider: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            className="relative rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer"
            key={project.id}
            onClick={() => openModal(project)}
          >
            <div className="flex items-center justify-center relative overflow-hidden group">
              {/* image */}
              <Image
                src={project.mainImage}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg w-full h-[200px] object-cover"
              />

              {/* overlay gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                aria-hidden
              />

              {/* title */}
              <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-6 transition-all duration-300">
                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-white">
                  {/* title part 1 */}
                  <div className="delay-100">VIEW</div>
                  {/* title part 2 */}
                  <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                    PROJECT
                  </div>
                  {/* icon */}
                  <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                    <BsArrowRight aria-hidden />
                  </div>
                </div>
              </div>

              {/* Project title overlay */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg">
                <h3 className="text-white font-medium text-sm">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <motion.div
              className="bg-secondary border border-white/10 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-white/60 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                >
                  <BsX size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Project Gallery */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {/* Main Image */}
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <div className="relative h-[250px]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ x: 300, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -300, opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={selectedProject.images[currentImageIndex]}
                            alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                            width={600}
                            height={300}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    
                    {/* Navigation arrows */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <motion.button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <BsChevronLeft size={20} />
                        </motion.button>
                        <motion.button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <BsChevronRight size={20} />
                        </motion.button>
                        
                        {/* Image counter */}
                        <motion.div
                          className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm z-10"
                          key={`counter-${currentImageIndex}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {currentImageIndex + 1} / {selectedProject.images.length}
                        </motion.div>
                      </>
                    )}
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  {selectedProject.images.length > 1 && (
                    <motion.div
                      className="flex gap-2 overflow-x-auto scrollbar-hide"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      {selectedProject.images.map((image, index) => (
                        <motion.button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            index === currentImageIndex
                              ? "border-accent scale-105"
                              : "border-white/20 hover:border-white/40"
                          }`}
                          whileHover={{ scale: index === currentImageIndex ? 1.05 : 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: 1, 
                            scale: index === currentImageIndex ? 1.05 : 1,
                          }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.2 }}
                        >
                          <Image
                            src={image}
                            alt={`${selectedProject.title} thumbnail ${index + 1}`}
                            width={80}
                            height={60}
                            className="w-20 h-15 object-cover"
                          />
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </motion.div>

                {/* Description */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                  <p className="text-white/70 leading-relaxed">{selectedProject.description}</p>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.05, duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Links */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white hover:scale-105 transform duration-200"
                    >
                      <BsGithub />
                      <span>GitHub</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-accent/20 hover:bg-accent/30 text-accent rounded-lg transition-colors hover:scale-105 transform duration-200"
                    >
                      <BsGlobe />
                      <span>Live Demo</span>
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WorkSlider;