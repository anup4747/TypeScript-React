import * as React from "react";
// import { socialIcons } from "../Data/data";
import { iconProps } from "../Data/data";

export const SocialIcons: React.FC<iconProps> = ({ icons }) => {
  return (
    <div className="flex gap-5 justify-between">
      {icons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          alt={icon.alt}
          className="object-contain shrink-0 aspect-square fill-slate-800 w-[30px]"
        />
      ))}
    </div>
  );
};