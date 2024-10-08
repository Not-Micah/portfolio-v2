import { workProjects } from "../data";
import { FaExternalLinkAlt } from "react-icons/fa";
import Title from "./Title";

const Work = () => {
  return (
    <div 
    id="work"
    className="my-16 w-full flex flex-col justify-center items-center gap-y-8">
      <div className="w-full">
        <Title>
          My Work
        </Title>
        <p className="text-gray-500 font-nerd dynamic-label">Here&apos;s a showcase of a small selection of my work!</p>
      </div>

      <div className="flex flex-col gap-y-20 w-full max-[850px]:gap-y-14">
        {workProjects.map((project, index) => (
          <div 
          key={index}
          className="w-full h-[300px] max-xl:h-[250px] max-[850px]:h-[350px] relative rounded-lg
          max-[850px]:rounded-none max-[850px]:shadow-md">

            <img src={project.imgPath} alt="" className={`h-full object-cover rounded-lg shadow-lg
            absolute top-0 max-[850px]:rounded-none
            max-[850px]:top-1/2 max-[850px]:left-1/2 max-[850px]:transform max-[850px]:-translate-x-1/2 max-[850px]:-translate-y-1/2
            max-[850px]:brightness-[50%] max-[850px]:w-full max-[850px]:opacity-[30%]
            ${index % 2 === 0 ? "left-0" : "right-0"}`} />

            <div className="absolute top-0 h-full 
            bg-white w-full opacity-80
            hover:opacity-0 transition-all duration-300
            max-[850px]:opacity-0" />

            <div className={`absolute top-0 
            w-[50%] h-full flex flex-col justify-center
            max-[850px]:top-1/2 max-[850px]:left-1/2 max-[850px]:transform max-[850px]:-translate-x-1/2 max-[850px]:-translate-y-1/2
            max-[850px]:w-[70%]
            ${index % 2 === 0 ? "right-0 items-end" : "left-0 items-start"}
            max-[850px]:items-start`}>

              <p className="font-nerd text-primary
              max-[850px]:bg-primary max-[850px]:text-white/60 max-[850px]:px-2 max-[850px]:mb-2 max-[850px]:rounded-full 
              max-[850px]:-ml-2 max-[850px]:text-sm">Featured Projects</p>

              <div className="flex flex-row gap-x-2 items-center justify-center">
                <a className="text-2xl font-semibold mb-4
                  max-[850px]:text-gray-800"
                  href={project.link}>{project.label}</a>
                <FaExternalLinkAlt className="mb-[15px] ml-[5px]" size={14}/>
              </div>

              <div className="flex justify-end bg-gray-200 w-full 
              shadow-lg p-8 mb-4
              max-[850px]:bg-gray-200/0 max-[850px]:shadow-none max-[850px]:p-0">
                <p className={`text-gray-600 ${index % 2 === 0 ? "text-right" : "text-left"}
                max-[850px]:text-gray-700 max-[850px]:text-left`}>{project.description}</p>
              </div>

              <div className={`flex gap-x-4 w-full flex-wrap
              max-[850px]:gap-2
                ${index % 2 === 0 ? "justify-end" : "justify-start"}
                max-[850px]:justify-start`}>
                {project.techs.map((tech, index) => (
                  <p 
                  key={index}
                  className="font-nerd text-sm
                  max-[850px]:bg-gray-100 max-[850px]:px-2 max-[850px]:rounded-full
                  max-[850px]:text-black/40">
                    {tech}
                  </p>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Work;