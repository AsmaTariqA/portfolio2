"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";


const TAB_DATA = [
  {
    title: "Tools",
    id: "tools",
    content: (
      <ul className="grid grid-cols-2 gap-2 pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>Html</li>
        <li>Css</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next js</li>
        <li>Tailwind</li>
        <li>Github</li>
        <li>Vscode</li>
      </ul>
    ),
  },
  
  
];

const AboutSection = () => {
  const [tab, setTab] = useState("tools");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-4 mt-8 md:mt-24 lg:mt-24 bg-[#232330] rounded-lg md:rounded-full lg:rounded-full" id="about">
      <div className="md:grid md:grid-cols-2 gap-6 items-center py-5 px-3 xl:gap-16 sm:py-16 xl:px-10">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg p-6">
          I am Asma from Pakistan. I am a junior web developer and designer with a passion for creating modern, user-friendly websites. I specialize in frontend development using technologies like React and Tailwind CSS. My goal is to help businesses and individuals establish their online presence through responsive and visually appealing designs.
          </p>
          
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-white mb-4">Tools </h3>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
