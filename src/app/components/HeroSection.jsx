"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  // Random position animation for movement in all directions
  const randomPosition = {
    animate: {
      x: [
        Math.random() * -200, // Random negative x value
        Math.random() * 100,  // Random positive x value
      ],
      y: [
        Math.random() * -200, // Random negative y value
        Math.random() * 100,  // Random positive y value
      ],
    },
    transition: {
      duration: 5, // Duration for each cycle
      repeat: Infinity, // Infinite loop
      repeatType: "reverse", // Reverse back to the initial position
      ease: "easeInOut", // Smooth easing
    },
  };

  return (
    <section className="lg:py-16 relative overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-12 relative">
        {/* Randomly moving ellipse */}
        <motion.div
          className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-10 left-96"
          animate={randomPosition.animate}
          transition={randomPosition.transition}
        ></motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66347F] to-[#CDC1FF]">
              Hey, I&apos;m Asma{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Student",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ffffff] text-base sm:text-lg mb-6 lg:text-xl">
            Making website fire and cool at the same time
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-[#66347F] to-[#CDC1FF] hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full border-r-[#66347F]  border-r-4 border-l-4 border-l-[#CDC1FF] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
