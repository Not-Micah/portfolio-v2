"use client";

import React from 'react';
import Marquee from 'react-fast-marquee';

import { IoGameController, IoLogoGooglePlaystore, IoLogoFirebase } from "react-icons/io5";
import { FaPython, FaReact, FaJava, FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { SiTypescript, SiJavascript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  const items = [
    {icon: <FaPython />, text: "Python"},
    {icon: <IoLogoGooglePlaystore />, text: "Kivy"},
    {icon: <IoGameController     />, text: "Pygame"},
    {icon: <FaHtml5 />, text: "HTML"},
    {icon: <FaCss3Alt />, text: "CSS"},
    {icon: <SiJavascript />, text: "JavaScript"},
    {icon: <SiTypescript />, text: "TypeScript"},
    {icon: <FaReact />, text: "React"},
    {icon: <RiNextjsFill />, text: "NextJS"},
    {icon: <RiTailwindCssFill />, text: "Tailwind CSS"},
    {icon: <DiMongodb />, text: "Mongo"},
    {icon: <IoLogoFirebase />, text: "Firebase"},
    {icon: <FaJava />, text: "Java"},
  ];

  return (
    <div className='relative overflow-hidden my-8
    flex flex-col justify-center items-center gap-y-8
    max-lg:mx-6'>
      <p className='font-nerd dynamic-label'>Some of my skills.</p>
      <Marquee speed={50} gradient={false}>
        {items.map((item, index) => (
          <div key={index} className='flex flex-row justify-center items-center gap-x-4 mx-8'>
            <span className='text-4xl text-gray-300'>{item.icon}</span>
            <span className='text-lg text-gray-300 italic'>{item.text}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
