"use client";

import { useState } from "react";
import { experiences } from "../data";

import Title from "./Title";

const Experiences = () => {
  const [activeState, setActiveState] = useState("game");
  const activeExperience = experiences.find(exp => exp.key === activeState);

  return (
    <div className='w-full my-40 min-h-[400px]
    flex flex-col justify-start items-start gap-y-6'>
      <Title>
        My Experience
      </Title>

      <div className="flex flex-row justiy-start items-start gap-x-12 w-full
      max-lg:flex-col">
        <div className="flex flex-col justify-start items-start
        max-lg:flex-row max-lg:gap-x-4 max-lg:max-w-[100%] max-lg:overflow-y-scroll max-lg:mb-12">
            {experiences.map((experience) => (
              <div
              onClick={() => setActiveState(experience.key)}
              className={`border-l-2 border-gray-300 cursor-pointer font-nerd
              transition-all duration-500 whitespace-nowrap
              ${experience.key === activeState ? "border-red-400 bg-red-300/20" : ""}
              py-2 pl-6 pr-4 w-full
              max-lg:border-l-0 max-lg:border-b-2`}>{experience.label}</div>
            ))} 
          </div>
          <div className="flex-col justify-start items-start gap-y-2 max-w-[60%] max-lg:max-w-[100%]">
            <h3 className="text-xl font-semibold text-red-300">{activeExperience?.label}</h3>
            <p className="text-sm text-gray-300">{activeExperience?.date}</p>
            <p className="w-full">{activeExperience?.display}</p>
          </div>
      </div>

    </div>
  )
}

export default Experiences