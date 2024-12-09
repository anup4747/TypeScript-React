import { SocialIcons } from "./SocialIcons";
import { socialIcons } from "../Data/data";

export const Footer: React.FC = () => {
  return (
    <div className="App">
      <footer className="flex flex-col justify-center items-center px-20 py-14 mt-20 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[232px]">
          <SocialIcons icons={socialIcons} />
          <div className="mt-7 text-sm text-center text-slate-800 max-md:mr-1.5">
            Copyright ©2020 All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};
