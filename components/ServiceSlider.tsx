import React from "react";
import { IconType } from "react-icons";
import {
  RxCode,
  RxDesktop,
  RxGear,
  RxLayers,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

interface ServiceData {
  Icon: IconType;
  title: string;
  description: string;
}

const serviceData: ServiceData[] = [
  {
    Icon: RxDesktop,
    title: "Full Stack Development",
    description: "Building modern web applications with React, Next.js, and Node.js.",
  },
  {
    Icon: RxGear,
    title: "Robotics & Automation",
    description: "Designing and programming robotic systems and automation solutions.",
  },
  {
    Icon: RxCode,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces with modern frameworks.",
  },
  {
    Icon: RxLayers,
    title: "Backend Development",
    description: "Developing robust server-side applications and RESTful APIs.",
  },
  {
    Icon: RxRocket,
    title: "System Integration",
    description: "Integrating hardware and software solutions for complex systems.",
  },
];

const ServiceSlider: React.FC = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;