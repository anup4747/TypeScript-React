import React from "react";
import WorkPageCardComponent from "../Components/WorkPageCard";
import { works } from "../Data/data";
export const Work: React.FC = () => {
  return (
    <section className="flex flex-col justify-center self-center mt-24 w-full max-w-[858px] max-md:max-w-full">
      <h2 className="text-3xl ml-10 font-bold leading-[120px] text-slate-800 dark:text-white mb-6 max-md:text-center max-md:ml-0">
        My Work
      </h2>
      <div className="w-full px-4">
        {works.map((work, index) => (
          <React.Fragment key={index}>
            <WorkPageCardComponent work={work} />
          </React.Fragment>
        ))}
      </div>
     
    </section>
  );
};
