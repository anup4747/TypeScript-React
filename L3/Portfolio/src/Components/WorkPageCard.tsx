import React from "react";
import { WorkCardProps } from "../Data/types"; // Adjust the import path as necessary

interface WorkCardPropss {
  work: WorkCardProps;
}

const WorkCardComponent: React.FC<WorkCardPropss> = ({ work }) => {
  return (
    <div>
      <a href="/WorkDetails">
      <div className="flex flex-row w-full gap-5 mb-5">
        <img
          loading="lazy"
          src={work.image}
          alt={work.title}
          className="object-contain w-60 max-md:w-[150px] rounded-md aspect-[1.37] max-md:mt-5"
        />
        <div className="flex flex-col  w-full max-md:w-full">
          <div className="flex flex-col h-50 items-start text-slate-800 max-md:mt-5 max-md:max-w-full">
            <div className="text-2xl font-bold">{work.title}</div>
            <div className="flex gap-7 items-start mt-2.5 text-5xs whitespace-nowrap text-slate-400">
              <div className="flex items-center justify-center shrink-0 mt-1 rounded-2xl bg-blue-950 h-[25px] w-[62px]">
                {work.year}
              </div>
              <div
                className="basis-auto h-[25px] flex justify-center items-start text-center"
                style={{ marginTop: 3 }}
              >
                {work.category}
              </div>
            </div>
            <div className="self-stretch mt-5 text-base max-md:max-w-full">
              {work.description}
            </div>
          </div>
        </div>
      </div></a>
      <hr className="w-full border-t-2 border-gray-300 mb-10 mt-10" />
    </div>
  );
};

export default WorkCardComponent;
