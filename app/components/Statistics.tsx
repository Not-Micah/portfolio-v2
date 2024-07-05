import Title from "./Title";
import { statistics } from "../data";

const Statistics = () => {
  return (
    <div 
    id="impact"
    className="mb-12 mt-64
    bg-red-300/20 w-[100vw] clipped-div">
      <div className="auto-margins
      flex flex-col gap-y-4 py-28">
        <Title>
          My Impact
        </Title>
        <p className="font-nerd">Here are some statistics gathered across my websites.</p>
        <div className="grid grid-cols-2 gap-x-4 mt-4
        max-lg:flex max-lg:flex-col max-lg:gap-y-2">
          {statistics.map((statistic, index) => (
            <div 
            key={index}
            className="p-8 bg-white shadow-md
            hover:scale-[101%] hover:shadow-lg transtiion-all duration-150">
              {statistic.display}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
