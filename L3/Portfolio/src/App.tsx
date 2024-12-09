import React from "react";
// import './App.css';
import { PostCard } from "./Components/PostCard";
import WorkCardComponent from "./Components/WorkCard";
import WorkPageCardComponent from "./Components/WorkPageCard";
import { SocialIcons } from "./Components/SocialIcons";
import { posts, works, socialIcons } from "./Data/data";
import Navbar from "./Components/Navbar";

export const App: React.FC = () => {
  return (
    <div className="App">
      <div className="flex overflow-hidden flex-col bg-white">
        <Navbar/>

        <main className="flex flex-col self-center mt-40 w-full max-w-[855px] max-md:mt-10 max-md:pt-14 max-md:max-w-full">
          <section className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:px-5">
              <div className="flex flex-col w-[66%] max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-slate-800 max-md:mt-10">
                  <h1 className=" text-5xl font-bold leading-[60px] max-md:text-3xl max-md:text-center">
                    Hi, I am Anup,
                    <br />
                    FullStack Developer
                  </h1>
                  <p className="mt-11 text-base max-md:mt-6 max-md:text-center">
                    Hi, I'm Anup, a Full Stack Developer with a passion for
                    creating dynamic web applications. I excel at both front-end
                    and back-end development, ensuring efficient and scalable
                    solutions.
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
                    alt="Profile picture"
                    className="object-cover w-full h-full transform scale-110"
                  />
                </div>
              </div>
            </div>
          </section>
          <button className="mt-11 self-center flex items-center justify-center px-5 py-4 text-xl font-medium text-white bg-red-400 rounded-lg shadow-lg max-md:px-4 max-md:py-3 max-md:text-lg">
            Download Resume
          </button>

          <section className="flex flex-col items-center px-16 pt-2 pb-8 mt-16 w-full bg-slate-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
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
            <h2 className="text-3xl font-bold leading-[120px] text-slate-800 mb-6 text-center">
              Featured Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
              {works.map((work, index) => (
                <React.Fragment key={index}>
                  <WorkCardComponent work={work} />
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

          <section className="flex flex-col justify-center self-center mt-4 w-full max-w-[858px] max-md:max-w-full">
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
        </main>

        <footer className="flex flex-col justify-center items-center px-20 py-14 mt-20 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[232px]">
            <SocialIcons icons={socialIcons} />
            <div className="mt-7 text-sm text-center text-slate-800 max-md:mr-1.5">
              Copyright ©2020 All rights reserved
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
