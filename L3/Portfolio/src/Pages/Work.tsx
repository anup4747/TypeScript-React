import React from "react";
import WorkPageCardComponent from "../Components/WorkPageCard";
import { works } from "../Data/data";
export const Work: React.FC = () => {
  return (
    <section className="flex flex-col justify-center self-center mt-24 w-full max-w-[858px] max-md:max-w-full">
      <h2 className="text-3xl font-bold leading-[120px] text-slate-800 mb-6">
        My Work
      </h2>
      <div className="w-full px-4">
        {works.map((work, index) => (
          <React.Fragment key={index}>
            <WorkPageCardComponent work={work} />
          </React.Fragment>
        ))}
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0820f99421e22aa3917c11f20d1b35fbe1fa97cbfd06acb68dc7a83c06481c41?placeholderIfAbsent=true&apiKey=802d917660ae4455b4ba5187ede45b83"
        alt="Featured"
        className="object-contain self-stretch mt-8 w-full aspect-[1000] stroke-[1px] stroke-neutral-200 max-md:max-w-full"
      />
    </section>
  );
};
