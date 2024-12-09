import * as React from "react";
import { PostCardProps } from "../Data/types";

export const PostCard: React.FC<PostCardProps> = ({
  title,
  date,
  categories,
  description,
}) => {
  return (
    <div>
      <div className="flex flex-col pt-6 pr-12 pb-9 pl-6 w-full bg-white rounded shadow-[0px_4px_10px_rgba(187,225,250,0.25)] max-md:px-5">
        <div className="text-2xl font-bold">{title}</div>
        <div className="flex gap-6 items-start self-start mt-11 text-lg max-md:mt-10">
          <div>{date}</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2979a9abbb17eda1a4072fb765a62d31de4869c0ba3ce99654c41fc3d0c1cc01?placeholderIfAbsent=true&apiKey=802d917660ae4455b4ba5187ede45b83"
            className="object-contain shrink-0 w-14px aspect-[0.05]"
            alt=""
          />
          <div className="self-stretch basis-auto">{categories}</div>
        </div>
        <div className="mt-5 text-base">{description}</div>
      </div>
    </div>
  );
};
