import { PostCard } from "../Components/PostCard";
import WorkCardComponent from "../Components/WorkCard";
// import { SocialIcons } from "../Components/SocialIcons";
import { posts, works } from "../Data/data";
import React from "react";

export const Home: React.FC = () => {
  return (
    <main className="flex flex-col self-center mt-40 w-full max-w-[855px] max-md:mt-10 max-md:pt-14 max-md:max-w-full">
      <section className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:px-5">
          <div className="flex flex-col w-[66%] max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10">
              <h1 className=" text-5xl font-bold leading-[60px] max-md:text-3xl max-md:text-center">
                Hi, I am Anup
                <br />
                FullStack Developer
              </h1>
              <p className="mt-6 text-base max-md:mt-6 max-md:text-center">
                Hi👋!, I'm Anup, a Full Stack Developer with a passion for
                creating dynamic web applications. I excel at both front-end and
                back-end development, ensuring efficient and scalable solutions.
              </p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[34%] max-md:w-full max-md:ml-0">
            <div
              className="flex shrink-0 mx-auto h-64 rounded-full aspect-square bg-slate-100 w-[248px] max-md:w-48 max-md:h-48 max-md:mt-10 overflow-hidden"
              role="img"
              aria-label="Profile picture"
            >
              <img
                src="https://i.pinimg.com/736x/e5/19/45/e519453566d01b8cccbb772ef5b5e40b.jpg"
                alt="Profile"
                className="object-cover w-full h-full transform scale-110 shadow-2xl shadow-black dark:shadow-white"
              />
            </div>
          </div>
        </div>
      </section>
      <button
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1dw81pBfKg7NJP_ejzjDQfwvdTm07-Uc_/view?usp=drive_link",
            "_blank"
          )
        }
        className="mt-11 self-center flex items-center justify-center px-5 py-4 text-xl font-medium shadow-2xl dark:shadow-white  dark:bg-slate-200 dark:hover:bg-slate-300 dark:text-black text-white bg-red-400 rounded-lg max-md:px-4 max-md:py-3 max-md:text-lg hover:bg-red-500 transition duration-200"
      >
        Download Resume
      </button>

      <section className="flex flex-col items-center px-16 pt-8 pb-8 mt-16 w-full dark:bg-gray-700 dark:shadow-white bg-slate-200 rounded-3xl shadow-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="w-full max-w-[856px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {posts.map((post, index) => (
              <div
                key={index}
                className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
              >
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center self-center mt-4 w-full max-w-[858px] max-md:max-w-full">
        <h2 className="text-3xl font-bold leading-[120px] text-slate-800 dark:text-white mb-6 text-center">
          My Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
          {works.map((work, index) => (
            <React.Fragment key={index}>
              <WorkCardComponent work={work} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
};
