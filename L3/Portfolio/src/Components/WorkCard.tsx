import React from "react";
import { WorkCardProps } from "../Data/types"; // Adjust the import path as necessary
import { Link } from "react-router-dom";

interface WorkCardPropss {
  work: WorkCardProps;
}

const WorkCardComponent: React.FC<WorkCardPropss> = ({ work }) => {
  return (
    <div>
      <Link to="/work">
        <div className="flex shadow-xl dark:shadow-white rounded-lg flex-col p-3 max-md:flex-row w-full max-md:w-full gap-5 mb-0 ">
          <img
            loading="lazy"
            src={work.image}
            alt={work.title}
            className="object-contain w-full max-md:w-[150px] rounded-md aspect-[1.37] max-md:mt-5"
          />
          <div className="flex flex-col w-full max-md:w-full">
            <div className="flex flex-col items-start text-slate-800 dark:text-white max-md:mt-5 max-md:max-w-full">
              <div className="text-2xl font-bold">{work.title}</div>
              <div className="flex gap-7 items-start mt-2.5 text-5xs whitespace-nowrap text-slate-400">
                <div className="flex items-center justify-center shrink-0 mt-1 rounded-2xl bg-blue-95 dark:bg-gray-200 h-[25px] w-[62px]">
                  {work.year}
                </div>
                <div
                  className="basis-auto h-[25px] flex justify-center items-start text-center"
                  style={{ marginTop: 3 }}
                >
                  {work.category}
                </div>
              </div>
              <div className="self-stretch mt-4 text-base max-md:max-w-full">
                {work.description}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkCardComponent;
