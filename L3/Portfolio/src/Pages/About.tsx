import React from "react";
import { CertificateProps } from "../Data/data";

import CertificateGallery from "../Components/CertificateGallery";

export const About: React.FC<CertificateProps> = ({ certificates }) =>{
 
  return (
    <div className="flex flex-col self-center mt-40 w-full max-w-[855px] max-md:mt-24 max-md:pt-14 max-md:max-w-full px-4">
      <h1 className="text-3xl font-bold text-center">About Me</h1>
      <div className="about-page flex flex-col self-center">
        <p className="mt-14 max-w-3xl text-center sm:text-left">
          Hi👋!, My Name is <b>Anup</b>. I am particularly interested in roles
          within cutting-edge startups or established companies where I can
          leverage my expertise in both <b>front-end and back-end</b>{" "}
          technologies. Additionally, I am open to collaboration on{" "}
          <b>new ventures and entrepreneurial projects</b>
          that align with my passion for technology and process improvement.
        </p>
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1dw81pBfKg7NJP_ejzjDQfwvdTm07-Uc_/view?usp=drive_link",
              "_blank"
            )
          }
          className="mt-11 self-center flex items-center justify-center px-5 py-4 text-xl dark:text-black shadow-2xl dark:shadow-white  dark:bg-slate-200 dark:hover:bg-slate-300 font-medium text-white bg-red-400 rounded-lg max-md:px-4 max-md:py-3 max-md:text-lg hover:bg-red-500 transition duration-200"
        >
          Download Resume
        </button>

        {/* LeetCode and CodeChef Profiles */}
        <section className="profiles mt-8">
          <h2 className="text-2xl font-semibold text-center sm:text-left">
            Competitive Programming
          </h2>
          <ul className="mt-5 space-y-2 text-center sm:text-left">
            <li>
              <a
                href="https://leetcode.com/u/AnuP_477/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                https://leetcode.com/u/AnuP_477/
              </a>
            </li>
            <li>
              <a
                href="https://www.codechef.com/users/anup_39"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                https://www.codechef.com/users/anup_39
              </a>
            </li>
          </ul>
        </section>

        {/* Achievements Section */}
        <section className="achievements mt-8">
          <h2 className="text-2xl font-semibold text-center sm:text-left">
            Achievements and Certificates
          </h2>
          <ul className="mt-5 space-y-2 text-center sm:text-left">
            <li>Udemy: Web Development</li>
            <li>Udemy: UI/UX</li>
            <li>Udemy: Python Course</li>
          </ul>
        </section>

        {/* Certificate gallery */}

        <section className="certificate-gallery mt-8">
        <CertificateGallery certificates={certificates} />
        </section>
      </div>
    </div>
  );
};
